# CLAUDE.md

Personal site of Simon Arnost. **Astro 7** static site, deployed to GitHub Pages at `https://simonarnost.github.io/alephone/` via `withastro/action` (`.github/workflows/deploy.yml`).

## Commands

```bash
npm run dev      # http://localhost:4321/alephone/ (drafts visible)
npm run build    # astro check + build → dist/
npm run preview  # serve dist/
```

## Structure

- `src/site.ts` — site metadata, socials, `url()` helper. **Always build internal links with `url()`** (site lives under `base: '/alephone'`).
- `src/data/cv.ts` — CV entries (typed). Rendered by `src/pages/cv.astro`.
- `src/content/posts/*.md` — blog posts; schema in `src/content.config.ts` (`title`, `date`, `description?`, `tags`, `draft`). Drafts excluded from prod builds; "Writing" nav link appears only when published posts exist.
- `src/layouts/Base.astro` — HTML shell, SEO meta, pre-paint theme script.
- `src/components/` — Header, Footer (Prague clock), ThemeToggle, PostList.
- `src/styles/global.css` — design tokens, base, prose, print styles.

## Design system

- Fonts (self-hosted via `@fontsource-variable`): Fraunces (headings, `--serif`), Inter (body, `--sans`), JetBrains Mono (meta/dates, `--mono`).
- Color tokens (OKLCH) on `:root` / `:root[data-theme='dark']`: `--bg`, `--surface`, `--ink`, `--muted`, `--faint`, `--line`, `--accent`.
- Theme: `data-theme` on `<html>`, stored in `localStorage.theme`, falls back to system preference.
- Utilities: `.wrap` (centered column), `.kicker` (mono label), `.page-title` (serif display, `<em>` = accent italic), `.rise` (staggered entrance on children), `.prose` (post body).
- Page transitions: CSS cross-document `@view-transition` (no JS router).
- Component styles are scoped `<style>` blocks inside `.astro` files.
