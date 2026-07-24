export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillsContent = {
  pretitle: 'Skills',
  intro: 'Frontend engineer, comfortable working across the stack',
  groups: [
    {
      title: 'Languages',
      items: ['JavaScript', 'TypeScript'],
    },
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'React Native', 'HTML', 'CSS', 'Tailwind CSS', 'SCSS'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express.js', 'Prisma', 'MongoDB', 'PostgreSQL'],
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
      items: ['AWS', 'Docker'],
    },
  ] as SkillGroup[],
};
