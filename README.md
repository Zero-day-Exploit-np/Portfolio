# Bikram Das — Software Engineer Portfolio

A premium, dark-themed developer portfolio built with **Astro + TypeScript**.
Focused on systems programming, Linux, and backend engineering. Deployed as a
fully static site to GitHub Pages — no backend, no database, no server runtime.

## Tech stack

- **Astro 5** — static site generator, zero JS by default
- **TypeScript** — all editable content lives in typed files under `src/content/`
- **Vanilla CSS** — custom design system (no UI framework), emerald accent on deep black
- Self-hosted fonts (Inter + JetBrains Mono) via `@fontsource`
- `@astrojs/sitemap` for automatic sitemap generation

## Project structure

```
Portfolio/
├── .github/workflows/deploy.yml   # GitHub Actions → GitHub Pages
├── public/                         # Static assets copied as-is
│   ├── CNAME                       # Custom domain: bikramkumardas.com.np
│   ├── robots.txt
│   ├── manifest.webmanifest
│   └── assets/                     # resume.pdf, og.png, icons, project images
├── src/
│   ├── content/                    # ← EDIT YOUR CONTENT HERE
│   │   ├── profile.ts              # name, bio, contact, links
│   │   ├── skills.ts               # skill categories
│   │   ├── projects.ts             # project showcase
│   │   ├── experience.ts           # work history
│   │   ├── education.ts            # education
│   │   ├── certifications.ts       # achievements & courses
│   │   ├── articles.ts             # blog posts (static, manual)
│   │   └── site.ts                 # site meta + navigation barrel
│   ├── components/                 # Nav, Footer, Hero, cards, sections…
│   ├── layouts/BaseLayout.astro   # <html> shell, SEO/OG meta, fonts
│   ├── pages/                      # file-based routing
│   │   ├── index.astro             # Home
│   │   ├── about.astro
│   │   ├── projects/{index,[slug]}.astro
│   │   ├── experience.astro
│   │   ├── blog/{index,[slug]}.astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   └── styles/global.css           # design tokens + base styles
└── astro.config.mjs
```

## Editing content

Everything you'll want to update is in `src/content/`. Each file is plain
TypeScript with typed exports — edit the values and rebuild.

- **Profile & links** → `src/content/profile.ts`
- **Skills** → `src/content/skills.ts`
- **Projects** → `src/content/projects.ts` (set `featured: true` to show on the
  homepage; every project gets a detail page at `/projects/<slug>`)
- **Experience** → `src/content/experience.ts`
- **Education** → `src/content/education.ts`
- **Certifications / achievements** → `src/content/certifications.ts`
- **Blog** → `src/content/articles.ts` (the `body` field is HTML, rendered as-is)

### To-dos marked in the code

- `src/content/profile.ts` — set a real `linkedin` URL (currently `null`, so the
  link is hidden) and update `email` if needed.
- `src/content/experience.ts` — confirm the internship `period` dates.
- `src/content/projects.ts` — the `MiniOS` and `Environment Sensor Rover`
  GitHub URLs currently point to the profile root. Replace them with the exact
  repo URLs.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # runs astro check (type-check) then astro build → dist/
npm run preview  # preview the production build locally
```

## Deployment (GitHub Pages)

This repo deploys automatically via **GitHub Actions** (`.github/workflows/deploy.yml`)
on every push to `main`. The workflow installs deps, type-checks, builds, and
publishes `dist/` to GitHub Pages.

### One-time setup

1. Push the code to the `main` branch.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. The custom domain `bikramkumardas.com.np` is configured via `public/CNAME`
   (kept in the build output automatically).

> The build uses `base: "/"` (correct for a custom domain via CNAME). If you
> ever deploy as a project page **without** a custom domain, change `base` in
> `astro.config.mjs` to `"/Portfolio"`.

### Contact form

The contact form uses [FormSubmit.co](https://formsubmit.co), a static-friendly
backend. The first submission triggers a one-time confirmation email to the
address in `src/content/profile.ts` — click the link in that email to activate
delivery. After that, messages arrive in your inbox. No account is required.

## License

Personal portfolio. Code is provided for reference.
