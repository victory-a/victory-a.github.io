const CLOUD_NAME = 'digb7qq2m';
const CLOUDINARY_UPLOAD = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

const HERO_WEBP_ID = 'v1784823325/victory-website/hero.png';
const HERO_FALLBACK_ID = 'v1784823385/victory-website/hero-1.png';

/** Display widths matching hero CSS (max ~440px, up to 2x). */
const HERO_WIDTHS = [360, 440, 660, 880] as const;

function cloudinaryUrl(publicId: string, transforms: string[]): string {
  return `${CLOUDINARY_UPLOAD}/${transforms.join(',')}/${publicId}`;
}

function buildSrcSet(publicId: string, format: 'webp' | 'png'): string {
  return HERO_WIDTHS.map((width) => {
    const url = cloudinaryUrl(publicId, [`f_${format}`, 'q_auto', 'c_fill', 'g_auto', `w_${width}`]);
    return `${url} ${width}w`;
  }).join(', ');
}

export const heroContent = {
  title: 'Victory Asokomeh',
  role: 'Frontend engineer',
  summary:
    "Hi, I'm Victory. I'm the kind of engineer who notices both the loading time and the misaligned button. I enjoy combining engineering with a keen eye for design to build products that are intuitive, beautifully crafted, and built to perform at scale.",
  ctaLabel: 'Get in touch',
  ctaHref: '#contact',
  image: {
    alt: 'Portrait of Victory Asokomeh',
    width: 440,
    height: 495,
    sizes: '(max-width: 900px) min(70vw, 36rem), min(44rem, 40vw)',
    webpSrcset: buildSrcSet(HERO_WEBP_ID, 'webp'),
    fallbackSrcset: buildSrcSet(HERO_FALLBACK_ID, 'png'),
    fallbackSrc: cloudinaryUrl(HERO_FALLBACK_ID, ['f_png', 'q_auto', 'c_fill', 'g_auto', 'w_440']),
  },
};
