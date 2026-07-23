export interface SocialLink {
  label: string
  href: string
}

export const contactContent = {
  pretitle: 'Get in touch',
  lead: "Let's build something.",
  email: 'victoryasokomeh@gmail.com',
  social: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/victoryasokomeh',
    },
    { label: 'GitHub', href: 'https://github.com/victory-a' },
    { label: 'Blog', href: 'https://soks.hashnode.dev/' },
    {
      label: 'Resume',
      href: 'https://drive.google.com/file/d/1vPfNElo7M-mewZJ7V9o43kLcdCsrWGrr/view',
    },
  ] as SocialLink[],
}
