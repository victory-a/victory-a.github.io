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
  pretitle: "Hello, I'm Victory",
  title: 'Software engineer.',
  summary:
    'I build digital products that solve real business problems and create intuitive experiences people enjoy using. With 6+ years of experience across fintech, telecom, and e-commerce, I help turn ideas into reliable, scalable products that deliver measurable business value.',
  cvLabel: 'Download CV',
  cvHref: '/Victory-Asokomeh-CV.pdf',
  image: {
    alt: 'Portrait of Victory Asokomeh',
    width: 440,
    height: 550,
    sizes: '(max-width: 900px) min(70vw, 36rem), min(44rem, 40vw)',
    webpSrcset: buildSrcSet(HERO_WEBP_ID, 'webp'),
    fallbackSrcset: buildSrcSet(HERO_FALLBACK_ID, 'png'),
    fallbackSrc: cloudinaryUrl(HERO_FALLBACK_ID, ['f_png', 'q_auto', 'c_fill', 'g_auto', 'w_440']),
  },
};
