# Nisar Ahmad — Portfolio

Personal portfolio for **Nisar Ahmad**, Data Analyst & BI Developer (Power BI, Python, SQL, AI-augmented analytics). Built with Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion and Recharts.

**Live site**: [portfolio-tan-rho-39.vercel.app](https://portfolio-tan-rho-39.vercel.app)

---

## What is on the site

| Section | Description |
| --- | --- |
| **Hero** | Headline, availability badge, short bio, CTAs and a live-snapshot KPI card |
| **Marquee** | Auto-scrolling tool strip (Power BI, DAX, Python, SQL, BigQuery, Claude/MCP, …) |
| **Stats** | Scroll-triggered impact counters — 50+ dashboards, $500K+ savings, 200K records/week, 8% MAPE |
| **Live preview** | Interactive dashboard replica — Executive / Operations / Forecast tabs with 3M / 6M / YTD ranges |
| **Case studies** | Six real builds with problem, build, outcome, metrics and stack in an accessible modal |
| **AI workflow** | How the analytics work is done today: Claude + MCP + PBIP/TMDL in VS Code, human-verified output |
| **Experience** | Timeline from AKRSP (M&E) through Calibreon, BCG, PGT, Excelerate and Accelerate Prosperity |
| **Skills** | Six capability groups, domains of practice and languages |
| **Education** | KIU and NUST degrees plus applied certifications |
| **Contact** | Copy-email, CV download, phone, LinkedIn and GitHub |

The CV served from the site lives at `public/nisar-ahmad-cv.pdf`.

---

## Tech stack

| Category | Technology |
| --- | --- |
| Framework | Next.js 14 (App Router, static prerender) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 with custom tokens (`ink`, `paper`, `accent`, `muted`) |
| Motion | Framer Motion 11 |
| Charts | Recharts 2 |
| Icons | Lucide React |
| Fonts | Fraunces (display), Geist (sans), JetBrains Mono (code) |
| Deployment | Vercel |

SEO: metadata API with Open Graph (`/og.png`, 1200×630), Twitter card, `app/sitemap.ts`, `app/robots.ts`, `public/icon.svg` and Person JSON-LD.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Requires Node 18+.

---

## Project structure

```
portfolio/
├── app/
│   ├── page.tsx          # Section composition
│   ├── layout.tsx        # Fonts, metadata, JSON-LD
│   ├── globals.css       # Tokens, grid backgrounds, marquee, reduced motion
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── nav.tsx           # Scroll progress, active section, mobile menu
│   ├── hero.tsx
│   ├── stats.tsx         # Marquee + impact counters
│   ├── dashboard.tsx     # Interactive Recharts dashboard replica
│   ├── work.tsx          # Case study cards + accessible modal
│   ├── workflow.tsx      # AI-augmented analytics process
│   ├── experience.tsx
│   ├── skills.tsx
│   ├── education.tsx
│   ├── contact.tsx
│   ├── footer.tsx
│   └── ui.tsx            # Reveal, Counter, SectionLabel, ArrowIcon, Sparkline
├── lib/
│   └── data.ts           # Single source of truth for all site content
├── public/               # CV PDF, icon, OG image
└── vercel.json
```

---

## Editing content

All copy, metrics, roles, case studies and links live in **`lib/data.ts`**:

- `PROFILE` — name, role, email, phone, LinkedIn, GitHub, resume path
- `STATS`, `MARQUEE_TOOLS`, `HERO_SNAPSHOT`
- `CASE_STUDIES` — problem / build / outcome / metrics / stack / accent
- `WORKFLOW` — the four-step AI-assisted delivery process
- `EXPERIENCE`, `SKILL_GROUPS`, `DOMAINS`, `EDUCATION`, `CERTIFICATIONS`, `LANGUAGES`

Design tokens are in `tailwind.config.js` and `app/globals.css`.

| Token | Value | Usage |
| --- | --- | --- |
| `ink` | `#0a0a0a` | Dark text and section backgrounds |
| `paper` | `#fafaf7` | Light backgrounds and text |
| `accent` | `#ff5722` | Highlights, CTAs, chart strokes |
| `muted` | `#6b6b6b` | Secondary text |

---

## Deployment

The repo is connected to Vercel, so pushing to `main` redeploys the site:

```bash
git push origin main
```

Manual deploy:

```bash
npm i -g vercel
vercel --prod
```

---

## Author

**Nisar Ahmad** — Data Analyst & BI Developer

- Gilgit-Baltistan, Pakistan (remote, open to relocation)
- Email: nisarahmad.py@gmail.com
- Phone: +92 344 4601408
- LinkedIn: [linkedin.com/in/nisarahmadpy5](https://linkedin.com/in/nisarahmadpy5)
- GitHub: [github.com/iamnisarahmad1408-pixel](https://github.com/iamnisarahmad1408-pixel)
