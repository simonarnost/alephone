# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hugo static site (personal portfolio) for Simon Arnost using the **PaperMod** theme — a fast, clean, responsive Hugo theme with dark/light mode support.

**Requires:** Hugo Extended (minimum v0.146.0)

## Commands

```bash
hugo server -D          # Dev server with drafts enabled (http://localhost:1313)
hugo server             # Dev server without drafts
hugo --minify           # Production build (output in public/)
hugo new content/<path> # Create new content with front matter from archetypes/
```

No npm/build scripts — Hugo CLI is the only build tool needed.

## Architecture

### Theme Setup

PaperMod is installed as a git submodule at `themes/papermod/`. Other themes (`themes/noir/`, `themes/ink/`) may exist but are unused.

`hugo.toml` sets `theme = 'papermod'`.

### Site Structure

- **Homepage:** Profile mode (centered title, subtitle, buttons, social icons)
- **CV page:** Custom layout at `layouts/cv/single.html` with right-aligned dates (inspired by thesquareplanet.com)
- **Contact page:** Simple content page
- **Footer:** Overridden at `layouts/partials/footer.html` (shows year only)

### Content Pages

- `content/cv.md` — CV (uses `type: cv` for custom layout)
- `content/contact.md` — Contact info
- `content/about.md` — About page
- `content/posts/` — Blog posts

### Theme Customization

Do **not** edit files in `themes/papermod/` directly. Instead:
- **Layout overrides:** place files in `layouts/` with same path as theme
- **Custom CSS:** add files to `assets/css/extended/` (auto-bundled)
- **Custom head/footer HTML:** create `layouts/partials/extend_head.html` or `extend_footer.html`
- **Custom page types:** set `type` in front matter, create `layouts/<type>/single.html`

### PaperMod CSS Variables

Use these in custom layouts to stay consistent with the theme:
`--primary`, `--secondary`, `--tertiary`, `--content`, `--theme`, `--entry`, `--code-bg`, `--border`, `--gap`

### Front Matter Format

```yaml
---
title: "Post Title"
date: 2026-01-15
draft: true
tags: ["tag1"]
hidemeta: true
---
```

### Hugo TOML Notes

- `paginate` is deprecated since Hugo v0.128.0 — use `[pagination] pagerSize = 10`
