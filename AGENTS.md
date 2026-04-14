# AGENTS.md

## Project Overview

Personal static site built with Zola (Hugo-like SSG). Uses the [Serene theme](https://github.com/isunjn/serene) as a git submodule.

## Build Commands

```bash
git submodule --init    # pull in the theme dependency
zola build              # Build site to public/
zola serve              # Local dev server with live reload
```

## Content Structure

- `content/posts/` - Blog posts
- `content/about/` - About page
- `content/movies/` - Movie notes
- `content/books/` - Book notes
- `themes/serene/` - Submodule, check `themes/serene/USAGE.md` for theme docs

## Deployment

- **CI/CD**: GitHub Actions on push to `main` branch → GitHub Pages (see `.github/workflows/deploy.yml`)
- **Local deploy**: `./deploy.sh` runs `zola build` then rsyncs `public/` to server

## CI Details

- Uses Zola v0.22.1
- Submodules are checked out automatically (`submodules: true`)
- Output artifact: `./public`
