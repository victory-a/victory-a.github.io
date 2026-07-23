export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillsContent = {
  pretitle: 'Skills',
  intro: 'Frontend-first toolkit. Comfortable across the stack when the work calls for it.',
  groups: [
    {
      title: 'Languages',
      items: ['JavaScript (ES6+)', 'TypeScript'],
    },
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'React-Native', 'HTML', 'CSS', 'Tailwind', 'SCSS'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express.js', 'Prisma', 'MongoDB', 'PostgreSQL', 'GCP'],
    },
    {
      title: 'Testing',
      items: ['Jest', 'React Testing Library', 'Cypress', 'Vitest'],
    },
    {
      title: 'APIs & Data',
      items: ['GraphQL', 'REST APIs'],
    },
    {
      title: 'Cloud & Tools',
      items: ['AWS', 'Git'],
    },
  ] as SkillGroup[],
};
