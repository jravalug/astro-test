# Astro Project Improvement Plan

## Phase 1: SEO (First Priority)

1. Install `@astrojs/sitemap` integration
2. Add sitemap to `astro.config.mjs`
3. Add Open Graph + Twitter meta tags to `src/layouts/BaseLayout.astro`
4. (Optional) Create reusable SEO component

## Phase 2: Code Quality (Second Priority)

1. Enable `strict` mode in `tsconfig.json`
2. Install/configure ESLint (`eslint`, `astro-eslint-parser`)
3. Install/configure Prettier (`prettier`, `prettier-plugin-astro`)
4. Add `lint`/`format` scripts to `package.json`

## Phase 3: Performance (Third Priority)

1. Replace static `<img>` tags with Astro `<Image>` component
2. Audit `src/styles/global.css` to remove unused rules
3. Enable CSS optimization in `astro.config.mjs` if needed

## Phase 4: Accessibility (Fourth Priority)

1. Add `aria-label` to interactive elements (Hamburger, ThemeIcon, Social)
2. Fix heading hierarchy (single `<h1>` per page)
3. Verify color contrast for dark/light themes
4. Enforce `alt` text validation for post images

## Verification

Run `pnpm build` + `pnpm preview` after each phase to confirm no regressions.
