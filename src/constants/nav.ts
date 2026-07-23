export interface NavLink {
  label: string
  href: string
}

export const navContent = {
  brand: 'VA',
  links: [
    { label: 'About', href: '#intro' },
    { label: 'Experience', href: '#expertise' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ] as NavLink[],
}

export const sectionIds = navContent.links.map((link) => link.href.slice(1))
