export const SITE = {
  title: 'Simon Arnost',
  description: 'Software engineer in Prague. Personal site and writing.',
  role: 'Software Engineer',
  company: { name: 'Make', url: 'https://www.make.com' },
  location: 'Prague, Czech Republic',
  email: 'arnost.simon@gmail.com',
};

export const SOCIALS = [
  { name: 'GitHub', handle: 'simonarnost', url: 'https://github.com/simonarnost' },
  { name: 'LinkedIn', handle: 'in/simonarnost', url: 'https://www.linkedin.com/in/simonarnost' },
  { name: 'Email', handle: SITE.email, url: `mailto:${SITE.email}` },
] as const;

/** Prefix an internal path with the configured base. */
export const url = (path = '') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
