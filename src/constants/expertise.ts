export type AchievementLink = {
  text: string;
  href: string;
};

/** Plain string, or mixed text + link segments */
export type Achievement = string | Array<string | AchievementLink>;

export interface TimelineItem {
  title: string;
  meta: string;
  timeframe: string;
  /** Optional company website — enables link on the title */
  url?: string;
  /** Optional 1–2 lines about what the company does */
  companyAbout?: string;
  /** Role achievements — shown as bullet points when present */
  achievements?: Achievement[];
  /** Single-paragraph description (e.g. education) */
  description?: string;
}

export function isAchievementLink(
  segment: string | AchievementLink,
): segment is AchievementLink {
  return typeof segment === 'object' && 'href' in segment;
}

export const expertiseContent = {
  experienceTitle: 'Experience',
  experience: [
    {
      title: 'FairMoney',
      meta: 'Software Engineer · Remote (Global)',
      timeframe: 'August 2023 — Present',
      url: 'https://fairmoney.io/',
      companyAbout:
        'FairMoney is a leading digital bank operating across Africa and India, providing loans, payments, and banking services to millions of customers.',
      achievements: [
        'Built and scaled a payments platform serving 500+ merchants while reducing request handling time by more than 40% through a new CRM.',
        'Delivered an AI-powered fraud detection system, that improved payment security and helped safeguard merchants and customers from fraud.',
        'Supported the growth of junior engineers through mentoring, code reviews, and day-to-day collaboration.',
      ],
    },
    {
      title: 'Prodevs',
      meta: 'Frontend Engineer · Remote, Nigeria',
      timeframe: 'January 2023 — August 2023',
      url: 'https://www.prodevs.io/',
      companyAbout: 'A software development company that specializes in staff augmentation and custom software development.',
      achievements: [
        'Built an enterprise printing platform that reduced manual work and helped teams work more efficiently.',
        "Collaborated with cross-functional teams to deliver new features while improving the platform's reliability, security, and production readiness.",
        'Improved the performance of a legacy enterprise application by up to 50%, enabling users to complete key tasks significantly faster.',
      ],
    },
    {
      title: 'Telnyx',
      meta: 'Software Engineer · Remote (Global)',
      timeframe: 'January 2022 — July 2022',
      url: 'https://telnyx.com/',
      companyAbout: 'Telnyx is a global cloud communications platform serving thousands of businesses across 140+ countries.',
      achievements: [
        'Reduced the time taken to onboard new customers by 35% by streamlining the onboarding process.',
        'Automated the processs of generating price quotes for new customers, thereby saving the pricing team several hours weekly.',
        'Mentored junior engineers and improved the speed of key customer workflows.',
      ],
    },
    {
      title: 'Squad by Guaranty Trust Bank',
      meta: 'Frontend Engineer · Lagos, Nigeria',
      timeframe: 'March 2021 — January 2022',
      url: 'https://squadco.com/',
      companyAbout:
        'Squad is a fintech subsidiary of Guaranty Trust Bank (GTBank), a leading African financial institution, powering digital payments for businesses.',
      achievements: [
        "Led and mentored a team of frontend engineers in building Squad's payment gateway and its first merchant storefront, which processed a significant volume of transactions in its first month.",
        "Defined the frontend team's engineering standards, creating a consistent and maintainable foundation for future development.",
        [
          'Squad has since grown significantly, processing over ',
          {
            text: '$5.8 billion',
            href: 'https://squadco.com/impact-report/',
          },
          ' in transactions in 2025.',
        ],
      ],
    },
    {
      title: 'Josla Electric',
      meta: 'Software Engineer · Lagos, Nigeria',
      timeframe: 'March 2020 — November 2020',
      companyAbout: 'A software development company that specializes in building custom solutions in the energy sector.',
      achievements: [
        "Delivered the first release of the company's in-house products and client websites.",
        'Improved the speed and reliability of key customer experiences.',
        'Ensured every project was secure and production-ready before launch.',
      ],
    },
  ] as TimelineItem[],
  educationTitle: 'Education',
  education: [
    {
      title: 'Covenant University',
      meta: 'BEng, Information and Communications Engineering',
      timeframe: 'Bachelor’s Degree',
      description: 'Coursework in Computer Programming, Networks & Communications, IoT, and Digital Signal Processing',
    },
  ] as TimelineItem[],
};
