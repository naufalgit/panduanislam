"""
Generate name pronunciation audio (Microsoft Edge TTS).

- Boys (lelaki): male voice
- Girls (perempuan) + unisex: female voice
- Malay (ms): "Assalamualaikum, nama saya {Name}."
- English (en): "Assalamualaikum, my name is {Name}."

Usage:
  py scripts/generate-name-audio.py
  py scripts/generate-name-audio.py --limit 5
  py scripts/generate-name-audio.py --force
  py scripts/generate-name-audio.py --lang en

Output: public/audio/nama/{ms|en}/{slug}.mp3
"""

from __future__ import annotations

import argparse
import asyncio
import json
import re
import sys
from pathlib import Path

try:
    import edge_tts
except ImportError:
    print("Install edge-tts first: py -m pip install edge-tts", file=sys.stderr)
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[1]
NAMES_TS = ROOT / "src" / "data" / "names.ts"
OUT_ROOT = ROOT / "public" / "audio" / "nama"
CONCURRENCY = 4

VOICES = {
    ("ms", "male"): "ms-MY-OsmanNeural",
    ("ms", "female"): "ms-MY-YasminNeural",
    ("en", "male"): "en-US-GuyNeural",
    ("en", "female"): "en-US-JennyNeural",
}


def slugify(name: str) -> str:
    import unicodedata

    s = unicodedata.normalize("NFD", name.lower())
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s


def voice_gender(gender: str) -> str:
    return "male" if gender == "lelaki" else "female"


def speak_text(name: str, lang: str) -> str:
    if lang == "en":
        return f"Assalamualaikum, my name is {name}."
    return f"Assalamualaikum, nama saya {name}."


def load_names() -> list[tuple[str, str, str]]:
    """Return list of (name, slug, gender)."""
    text = NAMES_TS.read_text(encoding="utf-8")
    rows = re.findall(
        r"\['([^']+)',\s*'(lelaki|perempuan|unisex)'",
        text,
    )
    seen: set[str] = set()
    out: list[tuple[str, str, str]] = []
    for name, gender in rows:
        key = name.lower()
        if key in seen:
            continue
        seen.add(key)
        out.append((name, slugify(name), gender))
    return out


async def synthesize_one(
    name: str,
    slug: str,
    gender: str,
    lang: str,
    force: bool,
    sem: asyncio.Semaphore,
) -> str:
    out_dir = OUT_ROOT / lang
    path = out_dir / f"{slug}.mp3"
    if path.exists() and path.stat().st_size > 500 and not force:
        return f"skip {lang}/{slug}"

    vg = voice_gender(gender)
    voice = VOICES[(lang, vg)]
    text = speak_text(name, lang)

    async with sem:
        out_dir.mkdir(parents=True, exist_ok=True)
        communicate = edge_tts.Communicate(text, voice)
        await communicate.save(str(path))
        return f"ok   {lang}/{slug} ({voice})"


async def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, default=0)
    parser.add_argument("--force", action="store_true")
    parser.add_argument(
        "--lang",
        choices=("ms", "en", "all"),
        default="all",
        help="Which language clips to generate",
    )
    args = parser.parse_args()

    names = load_names()
    if args.limit:
        names = names[: args.limit]

    langs = ["ms", "en"] if args.lang == "all" else [args.lang]
    jobs: list[tuple[str, str, str, str]] = []
    for name, slug, gender in names:
        for lang in langs:
            jobs.append((name, slug, gender, lang))

    print(f"Generating {len(jobs)} clips -> {OUT_ROOT}")
    sem = asyncio.Semaphore(CONCURRENCY)
    results = await asyncio.gather(
        *[synthesize_one(n, s, g, lang, args.force, sem) for n, s, g, lang in jobs]
    )
    ok = sum(1 for r in results if r.startswith("ok"))
    skip = sum(1 for r in results if r.startswith("skip"))
    print(f"Done. generated={ok} skipped={skip}")

    # Remove legacy flat mp3s (old single-voice layout)
    for old in OUT_ROOT.glob("*.mp3"):
        old.unlink()
        print(f"removed legacy {old.name}")
    legacy_manifest = OUT_ROOT / "manifest.json"
    if legacy_manifest.exists():
        legacy_manifest.unlink()

    manifest = [
        {
            "name": n,
            "slug": s,
            "gender": g,
            "ms": f"/audio/nama/ms/{s}.mp3",
            "en": f"/audio/nama/en/{s}.mp3",
            "voiceMs": VOICES[("ms", voice_gender(g))],
            "voiceEn": VOICES[("en", voice_gender(g))],
        }
        for n, s, g in names
    ]
    OUT_ROOT.mkdir(parents=True, exist_ok=True)
    (OUT_ROOT / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8"
    )


if __name__ == "__main__":
    asyncio.run(main())
