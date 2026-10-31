export const SITE = {
  title: 'Šimon Arnošt',
  description: 'Software engineer in Prague. Backend services, databases, and lately Rust and storage engines.',
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
