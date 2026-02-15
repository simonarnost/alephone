# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hugo static site (personal portfolio/blog) using the **Hugo Noir** theme — a minimalist, dark-mode-first portfolio theme built with Tailwind CSS.

**Requires:** Hugo Extended (minimum v0.92.0)

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

The active theme is `themes/noir/` (a local copy, **not** a git submodule). The git submodules (`themes/hugo-noir`, `themes/papermod`) are registered but `hugo-noir` is not checked out and `papermod` is an alternative theme not in use.

`hugo.toml` sets `theme = 'noir'`.

### Content Model (Data-Driven)

The Hugo Noir theme is primarily **data-driven** rather than content-driven. Homepage sections (author info, tech stack carousel, experience timeline, projects, honors, certifications) pull from **TOML data files**, not markdown content.

Expected data structure:
- `data/<lang>/author.toml` — name, location, bio, social links
- `data/<lang>/tech.toml` — tech stack with Devicon icon classes (row1/row2 arrays for carousel)
- `data/<lang>/experience.toml` — professional experience entries

Content pages go in `content/<lang>/` (e.g., `content/en/`, `content/es/`). Blog posts go in `content/<lang>/blogs/`.

The full reference configuration with all available params is at `themes/noir/exampleSite/hugo.toml`.

### Theme Customization

Do **not** edit files in `themes/noir/` directly. Instead, override by placing files at the same relative path in the site root:
- Layout overrides: `layouts/` (mirrors `themes/noir/layouts/`)
- CSS overrides: `assets/css/custom.css`
- Static assets: `static/`

### Key Theme Internals

- **Tailwind CSS** via CDN (class-based dark mode with `localStorage` persistence)
- **Space Grotesk** font (Google Fonts)
- **Devicons** via CDN for tech stack icons
- **Multilingual support:** en, es, fr, zh-tw (translation strings in `themes/noir/i18n/`)
- Homepage (`themes/noir/layouts/index.html`) is a large single-file template (~1300 lines) containing hero, tech carousel, experience, projects, blog highlights, honors, certifications, and voluntary work sections

### Front Matter Format

```toml
+++
date = '2025-01-15T10:00:00+00:00'
draft = true
title = 'Post Title'
+++
```
