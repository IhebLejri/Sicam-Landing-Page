# SICAM Landing Page

## Overview
Corporate landing page for SICAM, a Tunisian tomato products company established in 1969. Built with React/TypeScript/Vite, deployable as a static site on OVH hosting via GitHub Actions CI/CD.

## Architecture
- **Frontend**: React + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Routing**: wouter (client-side)
- **Animations**: framer-motion (FadeIn component)
- **Backend**: Express (dev server only, static build for production)
- **Build output**: `dist/public/` (configured in vite.config.ts)

## Design System (Premium)
- **Typography**: Headings use `Playfair Display` serif, body uses `Inter`, display labels use `Montserrat`
- **Font classes**: `font-serif` (Playfair Display), `font-display` (Montserrat), `font-sans` (Inter)
- **Brand Colors**: Primary Red `#E30613`, Secondary Green `#009640`, Accent Yellow `#FFD100`
- **Background**: Warm off-white `hsl(36, 30%, 97%)`
- **Spacing**: `section-padding` (py-24 md:py-32), `section-padding-sm` (py-16 md:py-24)
- **Hero pattern**: All pages use `pt-36 pb-24`, small label with `font-display font-semibold tracking-[0.2em] text-white/40`, serif heading, light body text
- **Navbar**: Thin, elegant, `font-display` links with active underline indicator
- **Footer**: Dark `#1a1714` background, editorial layout

## Pages
| Route | File | Description |
|-------|------|-------------|
| `/` | `client/src/pages/Home.tsx` | Hero carousel, stats, histoire, ZRP promo |
| `/notre-histoire` | `client/src/pages/NotreHistoire.tsx` | Heritage: 5 blocs + chronological timeline |
| `/nos-valeurs` | `client/src/pages/NosValeurs.tsx` | 5 core values, ZRP founding values, communication intentions |
| `/nos-produits` | `client/src/pages/NosProduits.tsx` | Full product catalog with category filters |
| `/certifications` | `client/src/pages/Certifications.tsx` | 10 certifications, social audits, 20-year timeline |
| `/zrp` | `client/src/pages/ZRP.tsx` | Zero Residue Pesticides program |

## Key Components
- `client/src/components/layout/Navbar.tsx` - Fixed navbar, white bg, mobile drawer
- `client/src/components/layout/Footer.tsx` - Red contact section with Google Maps embed + dark footer with social links
- `client/src/components/CookieConsent.tsx` - Cookie consent banner (localStorage key: `sicam_cookie_consent`), 3 options: tout autoriser, personnaliser, refuser
- `client/src/components/ui/fade-in.tsx` - Scroll-triggered animation wrapper

## Product Categories (Nos Produits) — 18 references, 3 categories
- **Tomates** (10): DCT 800g, DCT 400g, TPE, TPC, Pulpe (all 5 ZRP-certified), TC, TCA, TCP 4%, TCP 15%, Sauce Pizza
- **Harissa** (4 formats): 760g, 380g, 135g, Tube 70g — all with "Produit de l'Année 7 fois" badge
- **Confitures** (4 saveurs): Abricot, Coing, Figue, Fraise
- **Certifié ZRP filter**: Cross-category filter showing only ZRP-certified products
- Each product has rich description, tags, format info, and fiche technique modal (12 fiche images)
- MDD (private label) shown as bottom CTA banner, not as product cards

## Deployment
- Static build via `npm run build` → `dist/public/`
- GitHub Actions workflow at `.github/workflows/deploy.yml`
- SPA routing handled by `client/public/.htaccess`

## Social Links
- Facebook: https://www.facebook.com/SICAMTunisia
- Instagram: https://www.instagram.com/sicam_tunisia_officiel
- LinkedIn: https://www.linkedin.com/company/sicam_tunisia/
