// Source of truth: website-context.md (local only). Follow its writing rules.

export type Role = { title: string; dates: string; points?: string[] };
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
        points: [
          "Owned the OAuth2 connections service for all supported third-party apps in Make's catalog: authorization flows, token lifecycle management.",
          'Designed PostgreSQL schemas and migrations that set new database standards for the engineering department. Replaced legacy solutions with PostgreSQL extensions such as pg_cron.',
          'Built PostgreSQL monitoring used by all engineering teams (Datadog agent Postgres integration, custom queries, dashboards, monitors).',
          'Extended the event-driven streaming service showing users all manually triggered scenario runs in real time (Socket.IO / WebSockets).',
          'Used Redis for distributed rate limiting and optimized Elasticsearch indices for better performance.',
          'Part of a small team moving the platform from biweekly batch releases to on-demand deployments (Kubernetes, ArgoCD, CircleCI). Migrated all 5 services owned by my team.',
          'Wrote design docs evaluating options and trade-offs. Took part in architecture decisions beyond my team.',
          'One of a few engineers implementing the UI of the AI Agents module, a new component type on the Make platform at the time.',
          'Handled data exchange between the Make MCP server and the Make API, making Scenarios as Tools more efficient for AI assistants.',
          'Early adopter of Claude Code at Make. Used it for prototyping, code generation, tests. Mentored other engineers on it.',
          'Reviewed code, raised team coding standards, mentored junior engineers.',
          'Member of incident-response SWAT teams, partnering with the Infrastructure team.',
          'Worked with designers and product managers on features. Occasional Angular frontend work.',
        ],
      },
      {
        title: 'Junior Software Engineer',
        dates: 'Feb 2022 – Sep 2024',
        points: [
          'Moved from QA into backend engineering, owning Node.js/TypeScript services and PostgreSQL changes on the core platform team.',
          'Built usage-based ranking for app search, helping users find the right integrations.',
        ],
      },
      {
        title: 'QA Engineer',
        dates: 'May 2021 – Feb 2022',
        points: ['Defined the end-to-end testing strategy and built the automated test suite in Cypress from scratch.'],
      },
    ],
  },
  {
    org: 'Greyson',
    dates: 'Sep 2019 – Aug 2020',
    roles: [
      {
        title: 'Junior Web Developer',
        dates: 'Sep 2019 – Aug 2020',
        points: ['Built internal Angular and Java (Spring) tools for enterprise clients, including Česká spořitelna.'],
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
        points: [
          "Thesis: *Package management and synchronization service for Make*. Production Node.js service syncing 21,000+ component versions from Amazon EFS to EBS, with validation and automatic repair reaching a 99.8% success rate. Deployed in Make's production infrastructure.",
        ],
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

export const skills: Record<string, string[]> = {
  Languages: ['TypeScript', 'JavaScript', 'SQL', 'Java', 'Go', 'Rust (learning)', 'Python'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'Microservices', 'Event-driven systems', 'OAuth2', 'WebSockets', 'gRPC/Protobuf'],
  Data: ['PostgreSQL', 'Redis', 'Elasticsearch', 'RabbitMQ'],
  'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'ArgoCD', 'CircleCI', 'Datadog'],
  Frontend: ['Angular'],
  Testing: ['Cypress', 'Vitest', 'Jest'],
  'AI tooling': ['Claude Code', 'MCP'],
};

export const languages = ['Czech (native)', 'English'];


/** Escape HTML, then render *text* as <em>. Only for trusted local strings. */
export const inline = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
