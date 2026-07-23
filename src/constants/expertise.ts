export interface TimelineItem {
  title: string;
  meta: string;
  timeframe: string;
  description: string;
}

export const expertiseContent = {
  experienceTitle: 'Experience',
  experience: [
    {
      title: 'FairMoney',
      meta: 'Software Engineer · Remote',
      timeframe: 'August 2023 — Present',
      description: `Built and scaled a payments platform serving 500+ merchants while reducing request handling time by more than 40% through a new CRM. Mentored engineers through code reviews, pair programming, and technical guidance, helping the team deliver features more effectively. I also improved the platform's performance, reliability, and security as AI-powered fraud detection was introduced.`,
    },
    {
      title: 'Prodevs',
      meta: 'Frontend Engineer · Remote',
      timeframe: 'January 2023 — August 2023',
      description: `Built an automated printing platform that reduced manual work and helped teams work more efficiently. Improved the performance of a legacy enterprise application by up to 50%, collaborated closely with the team to deliver new features, and strengthened the platform's reliability and security before launch.`,
    },
    {
      title: 'Telnyx',
      meta: 'Software Engineer · Remote (USA)',
      timeframe: 'January 2022 — July 2022',
      description:
        'Automated the provisioning of over 40,000 phone numbers and improved onboarding for more than 125,000 customers, helping protect approximately $1.2 million in annual revenue. Mentored junior engineers, improved the speed of key customer workflows, and strengthened the security of customer accounts and provisioning systems.',
    },
    {
      title: 'Squad by Guaranty Trust Bank',
      meta: 'Frontend Developer · Lagos',
      timeframe: 'March 2021 — January 2022',
      description:
        "Led and mentored a team of five frontend engineers in building Squad's payment gateway and its first merchant storefront, which processed over ₦1 million in its first month. Improved the speed and reliability of the payment experience while helping establish secure development practices. Squad has since grown into HabariPay's developer platform, processing over ₦80.9 trillion in transactions in 2025.",
    },
    {
      title: 'Josla Electric',
      meta: 'Software Engineer · Lagos',
      timeframe: 'March 2020 — November 2020',
      description:
        "Delivered the first release of the company's in-house products and client websites. Improved the speed and reliability of key customer experiences, and ensured every project was secure and production-ready before launch.",
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
