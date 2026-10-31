export type Role = { title: string; dates: string; current?: boolean };
export type Entry = { org: string; url?: string; roles: Role[]; summary?: string };

export const experience: Entry[] = [
  {
    org: 'Make',
    url: 'https://www.make.com',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    roles: [
      { title: 'Software Engineer', dates: '2024 – now', current: true },
      { title: 'Junior Software Engineer', dates: '2022 – 2024' },
      { title: 'QA Engineer', dates: '2021 – 2022' },
    ],
  },
  {
    org: 'Greyson',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    roles: [{ title: 'Junior Web Developer', dates: '2019 – 2020' }],
  },
];

export const education: Entry[] = [
  {
    org: 'Faculty of Information Technology, Czech Technical University in Prague',
    url: 'https://fit.cvut.cz',
    roles: [{ title: "Bachelor's degree (Bc.), Computer Software Engineering", dates: '2025' }],
  },
  {
    org: 'Gymnázium Třeboň',
    roles: [{ title: 'High school', dates: '2014 – 2018' }],
  },
];
