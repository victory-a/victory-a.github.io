export interface SocialLink {
  label: string
  href: string
}

export const contactContent = {
  pretitle: 'Contact',
  lead: 'Get in touch.',
  email: 'victoryasokomeh@gmail.com',
  cvLabel: 'Download CV',
  cvHref: '/Victory-Asokomeh-CV.pdf',
  social: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/victoryasokomeh',
    },
    { label: 'GitHub', href: 'https://github.com/victory-a' },
    { label: 'Blog', href: 'https://soks.hashnode.dev/' },
  ] as SocialLink[],
}
