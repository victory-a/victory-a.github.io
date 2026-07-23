export interface TimelineItem {
  title: string;
  meta: string;
  timeframe: string;
  /** Optional company website — enables link + arrow on the title */
  url?: string;
  /** Optional 1–2 lines about what the company does */
  companyAbout?: string;
  /** Role achievements — shown as bullet points when present */
  achievements?: string[];
  /** Single-paragraph description (e.g. education) */
  description?: string;
}

export const expertiseContent = {
  experienceTitle: 'Experience',
  experience: [
    {
      title: 'FairMoney',
      meta: 'Software Engineer · Remote (Global)',
      timeframe: 'August 2023 — Present',
      url: 'https://fairmoney.io/',
      companyAbout: "FairMoney is a leading digital bank operating across Africa and India, providing loans, payments, and banking services to millions of customers.",
      achievements: [
        'Built and scaled a payments platform serving 500+ merchants while reducing request handling time by more than 40% through a new CRM.',
        "Integrated an AI-powered fraud detection system to improve the platform's security and reduce fraud.",
        "Mentored engineers junior engineers, helping improve the team's efficiency and productivity.",
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
        'Improved the performance of a legacy enterprise application by up to 50%.',
        "Collaborated closely with the team to deliver new features, and strengthened the platform's reliability and security before launch.",
      ],
    },
    {
      title: 'Telnyx',
      meta: 'Software Engineer · Remote (Global)',
      timeframe: 'January 2022 — July 2022',
      url: 'https://telnyx.com/',
      companyAbout: 'Telnyx is a global cloud communications platform serving thousands of businesses across 140+ countries.',
      achievements: [
        'Reduced the time taken to onboard new customers by 50% by streamlining the onboarding process.',
        'Mentored junior engineers and improved the speed of key customer workflows.',
        'Strengthened the security of customer accounts and provisioning systems.',
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
        "Led and mentored a team of frontend engineers in building Squad's payment gateway and its first merchant storefront, which processed over ₦1 million in its first month.",
        "Squad has since grown into HabariPay's developer platform, processing over ₦80.9 trillion in transactions in 2025.",
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
