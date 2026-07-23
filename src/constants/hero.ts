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
    "Hi, I'm Victory, a software engineer based in Nigeria, building products for users around the world. I enjoy creating digital experiences that solve real problems and deliver measurable value. With over 6 years of experience across fintech, telecom, and consulting, I thrive at the intersection of product, design, and engineering, turning complex ideas into simple, scalable solutions.",
  cvLabel: 'Resume',
  cvHref: 'https://drive.google.com/file/d/1vPfNElo7M-mewZJ7V9o43kLcdCsrWGrr/view',
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
