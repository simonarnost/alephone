// Source of truth: website-context.md (local only). Follow its writing rules.

export type Role = { title: string; dates: string; summary?: string };
export type Entry = { org: string; tagline?: string; url?: string; dates?: string; roles: Role[] };
export type Work = { title: string; context: string; text: string; tags: string[] };
export type Project = { name: string; lang: string; blurb: string; url?: string; status?: string };

export const experience: Entry[] = [
  {
    org: 'Make',
    url: 'https://www.make.com',
    dates: 'May 2021 – May 2026',
    roles: [
      {
        title: 'Software Engineer',
        dates: 'Sep 2024 – May 2026',
        summary:
          "Responsible for backend services from the first design doc to running them in production. Cared most about shipping often without breaking things and about being able to see what a system is doing. That pulled me into release engineering, observability and architecture work across teams.",
      },
      {
        title: 'Junior Software Engineer',
        dates: 'Feb 2022 – Sep 2024',
        summary:
          "From testing the platform to building it. Shipped Node.js and TypeScript services on the core platform team, including the package sync service that later became my thesis.",
      },
      {
        title: 'QA Engineer',
        dates: 'May 2021 – Feb 2022',
        summary:
          "Back when Make was still Integromat, I joined the Runway team to look after the app landing pages. There were no end-to-end tests yet, so the Cypress suite started from an empty repo.",
      },
    ],
  },
  {
    org: 'Greyson',
    roles: [
      {
        title: 'Junior Web Developer',
        dates: 'Sep 2019 – Aug 2020',
        summary:
          "First job in software, next to university. Internal Angular and Spring tools for enterprise clients, Česká spořitelna among them.",
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
          "A thesis that shipped. *Package management and synchronization service for Make* keeps 21,000+ component versions in sync between Amazon EFS and EBS and repairs broken copies on its own. It runs in Make's production at a 99.8% success rate.",
      },
    ],
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
