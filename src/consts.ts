export const SITE_TITLE = 'Nama Bayi Islam';
export const SITE_DESCRIPTION =
  'Senarai nama bayi Islam lelaki dan perempuan beserta maksud, asal usul dan tema. Panduan memilih nama Islam yang indah untuk bayi anda.';
/** Production domain; override via SITE_URL at build time for GitHub Pages previews. */
export const SITE_URL = (import.meta.env.SITE || 'https://namabayiislam.com').replace(/\/$/, '');
export const SITE_LANG = 'ms';

/** Set your AdSense publisher ID after approval, e.g. ca-pub-xxxxxxxx */
export const ADSENSE_CLIENT = '';

export const THEMES: Record<
  string,
  { title: string; description: string; keyword: string }
> = {
  rezeki: {
    title: 'Nama Bayi Islam Bermaksud Rezeki',
    description:
      'Koleksi nama bayi Islam yang membawa maksud rezeki, kelimpahan dan kemakmuran.',
    keyword: 'nama bayi islam bermaksud rezeki',
  },
  rahmat: {
    title: 'Nama Bayi Islam Bermaksud Rahmat',
    description:
      'Senarai nama bayi Islam yang bermaksud rahmat, kasih sayang dan kelembutan.',
    keyword: 'nama bayi islam bermaksud rahmat',
  },
  soleh: {
    title: 'Nama Bayi Islam Bermaksud Soleh',
    description:
      'Nama-nama Islam yang dikaitkan dengan kesolehan, kebaikan dan ketakwaan.',
    keyword: 'nama bayi islam bermaksud soleh',
  },
  bijak: {
    title: 'Nama Bayi Islam Bermaksud Bijak',
    description:
      'Nama bayi Islam yang membawa maksud bijaksana, pintar dan berilmu.',
    keyword: 'nama bayi islam bermaksud bijak',
  },
  cantik: {
    title: 'Nama Bayi Islam Bermaksud Cantik',
    description:
      'Nama bayi Islam perempuan dan unisex yang bermaksud cantik, indah dan elok.',
    keyword: 'nama bayi islam bermaksud cantik',
  },
  kuat: {
    title: 'Nama Bayi Islam Bermaksud Kuat',
    description:
      'Nama bayi Islam yang bermaksud kuat, gagah dan berani.',
    keyword: 'nama bayi islam bermaksud kuat',
  },
  tenang: {
    title: 'Nama Bayi Islam Bermaksud Tenang',
    description:
      'Nama bayi Islam yang membawa maksud ketenangan, damai dan lembut.',
    keyword: 'nama bayi islam bermaksud tenang',
  },
  cahaya: {
    title: 'Nama Bayi Islam Bermaksud Cahaya',
    description:
      'Nama bayi Islam yang bermaksud cahaya, sinar dan penerang.',
    keyword: 'nama bayi islam bermaksud cahaya',
  },
  mulia: {
    title: 'Nama Bayi Islam Bermaksud Mulia',
    description:
      'Nama bayi Islam yang dikaitkan dengan kemuliaan, kehormatan dan martabat.',
    keyword: 'nama bayi islam bermaksud mulia',
  },
  kasih: {
    title: 'Nama Bayi Islam Bermaksud Kasih',
    description:
      'Nama bayi Islam yang bermaksud kasih sayang, cinta dan belas kasihan.',
    keyword: 'nama bayi islam bermaksud kasih',
  },
};
