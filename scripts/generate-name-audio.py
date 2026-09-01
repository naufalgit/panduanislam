"""
Generate Malay neural TTS for each baby name (Microsoft Edge TTS / Yasmin).

Usage:
  py scripts/generate-name-audio.py
  py scripts/generate-name-audio.py --limit 5
  py scripts/generate-name-audio.py --force

Output: public/audio/nama/{slug}.mp3
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
OUT_DIR = ROOT / "public" / "audio" / "nama"
VOICE = "ms-MY-YasminNeural"
CONCURRENCY = 4


def slugify(name: str) -> str:
    import unicodedata

    s = unicodedata.normalize("NFD", name.lower())
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s


def load_names() -> list[tuple[str, str]]:
    text = NAMES_TS.read_text(encoding="utf-8")
    # Match RAW rows: ['Name', 'gender', ...
    rows = re.findall(r"\['([^']+)',\s*'(?:lelaki|perempuan|unisex)'", text)
    seen: set[str] = set()
    out: list[tuple[str, str]] = []
    for name in rows:
        key = name.lower()
        if key in seen:
            continue
        seen.add(key)
        out.append((name, slugify(name)))
    return out


def speak_text(name: str) -> str:
    return f"Assalamualaikum, nama saya {name}."


async def synthesize_one(
    name: str,
    slug: str,
    force: bool,
    sem: asyncio.Semaphore,
) -> str:
    path = OUT_DIR / f"{slug}.mp3"
    if path.exists() and path.stat().st_size > 500 and not force:
        return f"skip {slug}"

    async with sem:
        communicate = edge_tts.Communicate(speak_text(name), VOICE)
        await communicate.save(str(path))
        return f"ok   {slug}"


async def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, default=0)
    parser.add_argument("--force", action="store_true")
    args = parser.parse_args()

    names = load_names()
    if args.limit:
        names = names[: args.limit]

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Generating {len(names)} clips with {VOICE} -> {OUT_DIR}")

    sem = asyncio.Semaphore(CONCURRENCY)
    results = await asyncio.gather(
        *[synthesize_one(n, s, args.force, sem) for n, s in names]
    )
    ok = sum(1 for r in results if r.startswith("ok"))
    skip = sum(1 for r in results if r.startswith("skip"))
    print(f"Done. generated={ok} skipped={skip}")
    # Write manifest for sanity checks
    manifest = [{"name": n, "slug": s, "file": f"/audio/nama/{s}.mp3"} for n, s in names]
    (OUT_DIR / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8"
    )


if __name__ == "__main__":
    asyncio.run(main())
