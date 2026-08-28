export const SITE_TITLE = 'Panduan Islam';
export const SITE_DESCRIPTION =
  'Panduan Islam untuk Muslim Malaysia — mula dengan nama bayi Islam, maksud, dan tip memilih nama. Panduan lain akan ditambah dari semasa ke semasa.';
/** Production domain */
export const SITE_URL = (import.meta.env.SITE || 'https://panduanislam.my').replace(/\/$/, '');
export const SITE_LANG = 'ms';

/** First content pillar */
export const NAMA_BAYI_BASE = '/nama-bayi';
export const NAMA_BAYI_TITLE = 'Nama Bayi Islam';
export const NAMA_BAYI_DESCRIPTION =
  'Senarai nama bayi Islam lelaki dan perempuan beserta maksud, asal usul dan tema. Panduan memilih nama Islam yang indah untuk bayi anda.';

/** English section */
export const EN_BASE = '/en';

/** Set your AdSense publisher ID after approval, e.g. ca-pub-xxxxxxxx */
export const ADSENSE_CLIENT = '';

/** Name categories — short MECE labels (no repeated “Nama Bayi Islam Bermaksud …”) */
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
    description: 'Nama bayi Islam berkaitan rezeki, kelimpahan dan kemakmuran.',
    descriptionEn: 'Islamic baby names related to provision, abundance, and prosperity.',
  },
  rahmat: {
    label: 'Rahmat',
    labelEn: 'Mercy',
    blurb: 'Kasih sayang dan kelembutan',
    blurbEn: 'Compassion and gentleness',
    description: 'Nama bayi Islam berkaitan rahmat, kasih sayang dan kelembutan.',
    descriptionEn: 'Islamic baby names related to mercy, compassion, and gentleness.',
  },
  soleh: {
    label: 'Soleh',
    labelEn: 'Righteous',
    blurb: 'Kesolehan dan kebaikan',
    blurbEn: 'Piety and goodness',
    description: 'Nama bayi Islam berkaitan kesolehan, kebaikan dan ketakwaan.',
    descriptionEn: 'Islamic baby names related to righteousness, goodness, and piety.',
  },
  bijak: {
    label: 'Bijak',
    labelEn: 'Wisdom',
    blurb: 'Bijaksana dan berilmu',
    blurbEn: 'Wise and knowledgeable',
    description: 'Nama bayi Islam berkaitan kebijaksanaan, kepintaran dan ilmu.',
    descriptionEn: 'Islamic baby names related to wisdom, intelligence, and knowledge.',
  },
  cantik: {
    label: 'Cantik',
    labelEn: 'Beauty',
    blurb: 'Indah dan elok',
    blurbEn: 'Beauty and grace',
    description: 'Nama bayi Islam berkaitan kecantikan, keindahan dan keelokan.',
    descriptionEn: 'Islamic baby names related to beauty, grace, and elegance.',
  },
  kuat: {
    label: 'Kuat',
    labelEn: 'Strength',
    blurb: 'Gagah dan berani',
    blurbEn: 'Strength and courage',
    description: 'Nama bayi Islam berkaitan kekuatan, kegagahan dan keberanian.',
    descriptionEn: 'Islamic baby names related to strength, courage, and bravery.',
  },
  tenang: {
    label: 'Tenang',
    labelEn: 'Calm',
    blurb: 'Damai dan lembut',
    blurbEn: 'Peace and gentleness',
    description: 'Nama bayi Islam berkaitan ketenangan, kedamaian dan kelembutan.',
    descriptionEn: 'Islamic baby names related to calm, peace, and gentleness.',
  },
  cahaya: {
    label: 'Cahaya',
    labelEn: 'Light',
    blurb: 'Sinar dan penerang',
    blurbEn: 'Light and radiance',
    description: 'Nama bayi Islam berkaitan cahaya, sinar dan penerangan.',
    descriptionEn: 'Islamic baby names related to light, radiance, and illumination.',
  },
  mulia: {
    label: 'Mulia',
    labelEn: 'Nobility',
    blurb: 'Kehormatan dan martabat',
    blurbEn: 'Honour and dignity',
    description: 'Nama bayi Islam berkaitan kemuliaan, kehormatan dan martabat.',
    descriptionEn: 'Islamic baby names related to nobility, honour, and dignity.',
  },
  kasih: {
    label: 'Kasih',
    labelEn: 'Love',
    blurb: 'Cinta dan belas kasihan',
    blurbEn: 'Love and compassion',
    description: 'Nama bayi Islam berkaitan kasih sayang, cinta dan belas kasihan.',
    descriptionEn: 'Islamic baby names related to love, affection, and compassion.',
  },
};
