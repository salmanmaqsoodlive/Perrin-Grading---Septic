# Perrin's Grading & Septic LLC — Website

A modern, premium construction company website for **Perrin's Grading & Septic LLC**.
_“Great People, Great Company.”_

Built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, **Framer Motion**,
and shadcn-style UI components.

## Features

- **Cinematic hero** with parallax background + staggered headline reveals
- **Sticky animated navbar** with animated mobile menu + active-route pill
- **Scroll progress indicator** and **floating call-to-action** button
- **Animated stats counters**, fade-up section reveals, hover-lift cards
- **Interactive Before/After** drag slider on the homepage
- **Full project gallery** — masonry layout, category filtering, lightbox viewer
  with keyboard navigation, lazy loading, and hover zoom (auto-loads **all 54
  project images** from `public/gallery`)
- **Animated contact form** with floating labels and success state
- SEO metadata, Open Graph, JSON-LD `GeneralContractor` schema, sitemap & robots
- Accessible, mobile-first, `prefers-reduced-motion` aware

## Pages

| Route        | Description                                            |
| ------------ | ------------------------------------------------------ |
| `/`          | Home — hero, services, why-us, before/after, stats, testimonials, CTA |
| `/about`     | Story, slogan highlight, values, animated timeline      |
| `/services`  | Land grading, septic install/repair, excavation, clearing, hauling |
| `/gallery`   | Filterable masonry gallery + lightbox of all project photos |
| `/contact`   | Animated form, contact cards, map placeholder, service area |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Project structure

```
app/                 # App Router pages, layout, metadata, sitemap/robots
components/
  sections/          # Homepage sections (hero, stats, testimonials, ...)
  ui/                # Reusable primitives (button, reveal, counter, headings)
  gallery/           # Gallery grid + lightbox
  contact/           # Contact form
data/
  site.ts            # Company info, services, stats, testimonials, timeline
  gallery.ts         # Auto-generated manifest of all gallery images
public/
  gallery/           # All project photos (work-01 … work-54)
  logo.jpg           # Company logo
```

## Customizing

- **Company details / phone / email:** edit `data/site.ts`.
- **Gallery images:** drop files into `public/gallery/` and add entries to
  `data/gallery.ts` (or re-run the manifest generator).
- **Colors / fonts:** see `tailwind.config.ts` and `app/layout.tsx`.
- **Contact form:** `components/contact/contact-form.tsx` currently simulates
  submission — wire `handleSubmit` to your email service or API route.
# Perrin-Grading---Septic
