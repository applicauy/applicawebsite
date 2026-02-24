# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (localhost:3000)
npm run build     # Production build (standalone output)
npm run start     # Start production server
npm run lint      # ESLint via next lint
npm run upload    # Upload posts to Algolia (node src/scripts/uploadPosts.js)
```

There are no tests in this project.

## Architecture

This is the **Applica Corp** marketing website — a Next.js 14 (App Router) project using TypeScript, Tailwind CSS, and SCSS.

### Mobile vs Desktop rendering

The app uses a **dual-rendering pattern** for mobile/desktop. Detection happens in two places:

1. **Middleware** (`src/middleware.ts`): sets an `isMobile` cookie from the User-Agent on every request.
2. **Client wrappers**: `layout-client-wrapper.tsx` and `page-client-wrapper.tsx` detect `window.innerWidth < 800` on the client and conditionally render mobile or desktop components via `next/dynamic`.

The breakpoint for mobile layout switching is **800px** (`mdplus` in Tailwind config).

### Route structure

- `/` — Main marketing homepage (`src/app/page.tsx` → `page-client-wrapper.tsx`)
- `/healthcare`, `/finance`, `/technology`, `/education` — Industry-specific landing pages with their own client wrappers (`*-page-client-wrapper.tsx`). These routes use a **different navbar and footer** (landings variants). Detection in `layout-client-wrapper.tsx` via `pathname.startsWith(...)`.
- `/news` — Blog/news listing with Algolia search integration
- `/news/[id]` — Individual post pages
- `/news/category/[url]` — Category filtered news
- `/contact` — Contact form page (uses Nodemailer via server action)
- `/landing-staff-augmentation` — Redirects to `/` via middleware

### Component organization

```
src/
├── app/
│   ├── _components/        # Shared desktop components (navbar, footer, cards, etc.)
│   │   └── landings/       # Landing-specific components (different navbar/footer style)
│   ├── _sections/          # Desktop page sections for the homepage
│   │   └── landings/       # Industry landing page sections (healthcare/, finance/, etc.)
│   ├── (mobile)/
│   │   ├── _components/    # Mobile-specific components
│   │   │   └── landings/   # Mobile landing-specific components
│   │   └── _sections/      # Mobile page sections
│   │       └── landings/   # Mobile industry landing sections
│   ├── healthcare/         # Route + client wrapper
│   ├── finance/            # Route + client wrapper
│   ├── technology/         # Route + client wrapper
│   ├── education/          # Route + client wrapper
│   ├── news/               # Blog route
│   └── contact/            # Contact route
├── components/             # Generic UI primitives (Button, H1-H5, Input, etc.)
├── lib/
│   ├── email.tsx           # Server action for sending email via Nodemailer
│   └── helpers.ts          # `useNavigationHandlers` hook for client-side navigation
├── utils/
│   ├── config/             # Algolia client config + industry-specific data configs
│   ├── data/               # Static data per industry (healthcare/, finance/, etc.)
│   ├── menu/               # Menu item definitions
│   └── models/             # TypeScript interfaces (Post, Category, MenuItem, etc.)
└── assets/                 # Images, fonts, icons, SVGs
```

### Path aliases (tsconfig)

- `@/*` → `src/*`
- `@/app/*` → `src/app/*`
- `@/(mobile)/*` → `src/app/(mobile)/*`
- `@/sections/*` → `src/app/_sections/*`

### Key dependencies

- **Algolia** (`algoliasearch`, `react-instantsearch-hooks-web`): powers blog search and filtering. Config in `src/utils/config/algolia-config.ts`.
- **Strapi** (external CMS): posts are served from `fantastic-paradise-ff2101feee.media.strapiapp.com`. The `upload` script syncs Strapi data to Algolia.
- **Nodemailer**: contact form email delivery, configured via env vars (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM_EMAIL`, `SMTP_TO_EMAIL`).
- **Framer Motion**: animations throughout the site.
- **next-themes**: dark/light theme support.

### Tailwind custom tokens

Custom colors: `primary-bg` (#1b1b1b), `secondary-bg` (#262626), `highlight` (#e5a818), `landing-indigo` (#4533A4), `landing-violet` (#B95EE8), `landing-blue` (#0069E0).

Custom breakpoint: `mdplus` at 800px (the mobile/desktop split threshold).

### Build output

`next.config.mjs` sets `output: "standalone"` for Node.js deployment (Azure-compatible). Images are allowed from `localhost` and the Strapi cloud media domain.
