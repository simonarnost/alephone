// Source of truth: website-context.md (local only). Follow its writing rules.

export type Role = { title: string; dates: string; summary?: string };
export type Entry = { org: string; tagline?: string; url?: string; dates?: string; roles: Role[] };
export type Work = { title: string; context: string; text: string; tags: string[] };
export type Project = { name: string; lang: string; blurb: string; url?: string; status?: string };

export const experience: Entry[] = [
  {
    org: 'Make',
    tagline: 'Workflow automation platform',
    url: 'https://www.make.com',
    dates: 'May 2021 – May 2026',
    roles: [
      {
        title: 'Software Engineer',
        dates: 'Sep 2024 – May 2026',
        summary:
          'Owned the OAuth2 connections service. Set new PostgreSQL standards and built Postgres monitoring used by all engineering teams. Part of a small team moving the platform to on-demand deployments.',
      },
      {
        title: 'Junior Software Engineer',
        dates: 'Feb 2022 – Sep 2024',
        summary:
          'Moved from QA into backend engineering. Owned Node.js/TypeScript services and PostgreSQL changes on the core platform team.',
      },
      {
        title: 'QA Engineer',
        dates: 'May 2021 – Feb 2022',
        summary: 'Defined the end-to-end testing strategy and built the automated test suite in Cypress from scratch.',
      },
    ],
  },
  {
    org: 'Greyson',
    roles: [
      {
        title: 'Junior Web Developer',
        dates: 'Sep 2019 – Aug 2020',
        summary: 'Built internal Angular and Java (Spring) tools for enterprise clients, including Česká spořitelna.',
      },
    ],
  },
];

export const education: Entry[] = [
  {
    org: 'Czech Technical University in Prague',
    tagline: 'Faculty of Information Technology (FIT)',
    url: 'https://fit.cvut.cz',
    roles: [
      {
        title: 'BSc, Software Engineering',
        dates: '2025',
        summary:
          "Thesis: *Package management and synchronization service for Make*. Deployed in Make's production infrastructure.",
      },
    ],
  },
  {
    org: 'Gymnázium Třeboň',
    roles: [{ title: 'High school', dates: '2014 – 2018' }],
  },
];

export const projects: Project[] = [
  {
    name: 'mini-lsm',
    lang: 'Rust',
    blurb: 'LSM-tree storage engine. Learning project, following the mini-lsm course.',
    status: 'in progress',
  },
  {
    name: 'Logpulse',
    lang: 'Go',
    blurb: 'Log aggregator where agents stream log entries to a central collector over gRPC.',
    url: 'https://github.com/simonarnost/logpulse',
  },
  {
    name: 'Dead-link Checker',
    lang: 'TypeScript',
    blurb: 'CLI that checks websites and local Markdown files for broken links using concurrent HEAD/GET requests.',
    url: 'https://github.com/simonarnost/dead-link-checker',
  },
];

// Home "Selected work". Text stays close to CV bullets. Tags only name tech stated in the text.
export const selectedWork: Work[] = [
  {
    title: 'OAuth2 connections service',
    context: 'Make · 2024–2026',
    text: "Owned the OAuth2 connections service for all supported third-party apps in Make's catalog. Authorization flows and token lifecycle management.",
    tags: ['OAuth2'],
  },
  {
    title: 'PostgreSQL standards and monitoring',
    context: 'Make · 2024–2026',
    text: 'Designed schemas and migrations that set new database standards for the engineering department. Built Postgres monitoring used by all engineering teams.',
    tags: ['PostgreSQL', 'pg_cron', 'Datadog'],
  },
  {
    title: 'Real-time scenario runs',
    context: 'Make · 2024–2026',
    text: 'Extended the event-driven streaming service that shows users all manually triggered scenario runs in real time.',
    tags: ['Socket.IO', 'WebSockets'],
  },
  {
    title: 'On-demand deployments',
    context: 'Make · 2024–2026',
    text: 'Part of a small team moving the platform from biweekly batch releases to on-demand deployments. Migrated all 5 services owned by my team.',
    tags: ['Kubernetes', 'ArgoCD', 'CircleCI'],
  },
  {
    title: 'Package sync service',
    context: 'BSc thesis · deployed at Make',
    text: 'Production Node.js service syncing 21,000+ component versions from Amazon EFS to EBS. Validation and automatic repair reach a 99.8% success rate.',
    tags: ['Node.js', 'Amazon EFS', 'EBS'],
  },
];

/** Escape HTML, then render *text* as <em>. Only for trusted local strings. */
export const inline = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
