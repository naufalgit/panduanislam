export const SITE_TITLE = 'Panduan Islam';
export const SITE_DESCRIPTION =
  'Panduan Islam untuk Muslim Malaysia — mula dengan nama Islam untuk bayi dan anak, maksud, dan tip memilih nama. Panduan lain akan ditambah dari semasa ke semasa.';
/** Production domain */
export const SITE_URL = (import.meta.env.SITE || 'https://panduanislam.my').replace(/\/$/, '');
export const SITE_LANG = 'ms';

/** Islamic names pillar (bayi & anak) */
export const NAMA_ISLAM_BASE = '/nama-islam';
/** @deprecated Use NAMA_ISLAM_BASE */
export const NAMA_BAYI_BASE = NAMA_ISLAM_BASE;
export const NAMA_ISLAM_TITLE = 'Nama Islam';
export const NAMA_ISLAM_DESCRIPTION =
  'Senarai nama Islam untuk bayi dan anak — lelaki dan perempuan — beserta maksud, asal usul dan kategori. Sesuai untuk ibu bapa di Malaysia.';
/** @deprecated Use NAMA_ISLAM_TITLE */
export const NAMA_BAYI_TITLE = NAMA_ISLAM_TITLE;
/** @deprecated Use NAMA_ISLAM_DESCRIPTION */
export const NAMA_BAYI_DESCRIPTION = NAMA_ISLAM_DESCRIPTION;

/** English section */
export const EN_BASE = '/en';
export const EN_NAMES_BASE = '/en/islamic-names';

/** Set your AdSense publisher ID after approval, e.g. ca-pub-xxxxxxxx */
export const ADSENSE_CLIENT = '';

/** Name categories — short MECE labels */
export const THEMES: Record<
  string,
  {
    label: string;
    labelEn: string;
    blurb: string;
    blurbEn: string;
    description: string;
    descriptionEn: string;
  }
> = {
  rezeki: {
    label: 'Rezeki',
    labelEn: 'Provision',
    blurb: 'Kelimpahan dan kemakmuran',
    blurbEn: 'Abundance and prosperity',
    description: 'Nama Islam berkaitan rezeki, kelimpahan dan kemakmuran.',
    descriptionEn: 'Islamic names related to provision, abundance, and prosperity.',
  },
  rahmat: {
    label: 'Rahmat',
    labelEn: 'Mercy',
    blurb: 'Kasih sayang dan kelembutan',
    blurbEn: 'Compassion and gentleness',
    description: 'Nama Islam berkaitan rahmat, kasih sayang dan kelembutan.',
    descriptionEn: 'Islamic names related to mercy, compassion, and gentleness.',
  },
  soleh: {
    label: 'Soleh',
    labelEn: 'Righteous',
    blurb: 'Kesolehan dan kebaikan',
    blurbEn: 'Piety and goodness',
    description: 'Nama Islam berkaitan kesolehan, kebaikan dan ketakwaan.',
    descriptionEn: 'Islamic names related to righteousness, goodness, and piety.',
  },
  bijak: {
    label: 'Bijak',
    labelEn: 'Wisdom',
    blurb: 'Bijaksana dan berilmu',
    blurbEn: 'Wise and knowledgeable',
    description: 'Nama Islam berkaitan kebijaksanaan, kepintaran dan ilmu.',
    descriptionEn: 'Islamic names related to wisdom, intelligence, and knowledge.',
  },
  cantik: {
    label: 'Cantik',
    labelEn: 'Beauty',
    blurb: 'Indah dan elok',
    blurbEn: 'Beauty and grace',
    description: 'Nama Islam berkaitan kecantikan, keindahan dan keelokan.',
    descriptionEn: 'Islamic names related to beauty, grace, and elegance.',
  },
  kuat: {
    label: 'Kuat',
    labelEn: 'Strength',
    blurb: 'Gagah dan berani',
    blurbEn: 'Strength and courage',
    description: 'Nama Islam berkaitan kekuatan, kegagahan dan keberanian.',
    descriptionEn: 'Islamic names related to strength, courage, and bravery.',
  },
  tenang: {
    label: 'Tenang',
    labelEn: 'Calm',
    blurb: 'Damai dan lembut',
    blurbEn: 'Peace and gentleness',
    description: 'Nama Islam berkaitan ketenangan, kedamaian dan kelembutan.',
    descriptionEn: 'Islamic names related to calm, peace, and gentleness.',
  },
  cahaya: {
    label: 'Cahaya',
    labelEn: 'Light',
    blurb: 'Sinar dan penerang',
    blurbEn: 'Light and radiance',
    description: 'Nama Islam berkaitan cahaya, sinar dan penerangan.',
    descriptionEn: 'Islamic names related to light, radiance, and illumination.',
  },
  mulia: {
    label: 'Mulia',
    labelEn: 'Nobility',
    blurb: 'Kehormatan dan martabat',
    blurbEn: 'Honour and dignity',
    description: 'Nama Islam berkaitan kemuliaan, kehormatan dan martabat.',
    descriptionEn: 'Islamic names related to nobility, honour, and dignity.',
  },
  kasih: {
    label: 'Kasih',
    labelEn: 'Love',
    blurb: 'Cinta dan belas kasihan',
    blurbEn: 'Love and compassion',
    description: 'Nama Islam berkaitan kasih sayang, cinta dan belas kasihan.',
    descriptionEn: 'Islamic names related to love, affection, and compassion.',
  },
};
