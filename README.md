# Nisar Ahmad — Data Scientist & Power BI Developer Portfolio

A modern, minimal, and interactive portfolio website showcasing 4+ years of experience in data science, business intelligence, and analytics. Built with Next.js 14, Tailwind CSS, Framer Motion, and Recharts.

**Live Site**: [nisarahmad.vercel.app](https://nisarahmad.vercel.app) *(update after deployment)*

---

## Features

- **Next.js 14 App Router** — Server-side rendering with React 18 and TypeScript
- **Modern Minimal Design** — Clean typography with Fraunces (display) and Geist (body) fonts
- **Smooth Animations** — Scroll-triggered transitions, parallax effects, and stagger animations via Framer Motion
- **Interactive Live Dashboard** — Revenue vs Forecast area charts and Customer Segmentation bar charts powered by Recharts
- **Animated Stats Counters** — Scroll-triggered counters showing key impact metrics ($500K+ cost savings, 15+ dashboards, etc.)
- **Responsive Design** — Mobile-first layout with fluid typography using CSS `clamp()`
- **Vercel-Ready** — Pre-configured for one-click deployment

---

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Tagline, availability badge, contact info, and CTAs |
| **Marquee** | Auto-scrolling horizontal list of 16+ tools and technologies |
| **Stats** | 4 animated impact metrics with scroll-triggered counters |
| **Live Dashboard** | Interactive Recharts visualizations — Revenue vs Forecast, Customer Segments, KPI cards |
| **Featured Work** | 4 project cards with tech stacks and measurable impact |
| **Experience** | Timeline of 5 professional roles at Calibreon, BCG, PGT, Excelerate, and AKDN |
| **Skills** | 6 categorized skill groups — BI & Visualization, Power BI, Data & SQL, Programming, ML & AI, Analytics |
| **Education** | Degrees from KIU and NUST, plus 5 certifications (IBM, Google, Coursera) |
| **Contact** | Email CTA with LinkedIn and GitHub social links |

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS with custom CSS variables |
| **Animation** | Framer Motion v11 |
| **Charts** | Recharts v2 |
| **Icons** | Lucide React |
| **Fonts** | Fraunces (display), Geist (body), JetBrains Mono (code) |
| **Deployment** | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/nisarahmaddata/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

---

## Project Structure

```
portfolio/
├── app/
│   ├── page.tsx          # Main page — all sections and components
│   ├── layout.tsx        # Root layout with metadata and font imports
│   └── globals.css       # Global styles, CSS variables, and animations
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration with custom colors
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── vercel.json           # Vercel deployment settings
└── package.json          # Dependencies and scripts
```

---

## Customization

- **Content**: Edit `app/page.tsx` — all data is in constants at the top (`STATS`, `EXPERIENCE`, `PROJECTS`, `SKILLS`, `REVENUE_DATA`, `CHURN_DATA`)
- **Colors**: Modify CSS variables in `app/globals.css` (ink, paper, accent, muted) or `tailwind.config.js`
- **Fonts**: Google Fonts loaded in `app/layout.tsx` — currently Fraunces, Geist, and JetBrains Mono

---

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Or connect this GitHub repo at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Next.js and deploys in ~60 seconds.

---

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `ink` | `#0a0a0a` | Dark text and backgrounds |
| `paper` | `#fafaf7` | Light backgrounds and text |
| `accent` | `#ff5722` | Highlights, CTAs, chart colors |
| `muted` | `#6b6b6b` | Secondary text |

---

## Author

**Nisar Ahmad** — Data Scientist & Power BI Developer

- Location: Gilgit, Pakistan
- Email: nisarahmaddata@gmail.com
- LinkedIn: [linkedin.com/in/nisarahmaddata](https://linkedin.com/in/nisarahmaddata)
- GitHub: [github.com/nisarahmaddata](https://github.com/nisarahmaddata)

---

## License

This project is open source and available under the [MIT License](LICENSE).
