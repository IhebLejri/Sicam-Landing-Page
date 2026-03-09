# SICAM Landing Page

## Overview
Corporate landing page for SICAM, a Tunisian tomato products company established in 1969. Built with React/TypeScript/Vite, deployable as a static site on OVH hosting via GitHub Actions CI/CD.

## Architecture
- **Frontend**: React + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Routing**: wouter (client-side)
- **Animations**: framer-motion (FadeIn component)
- **Backend**: Express (dev server only, static build for production)
- **Build output**: `dist/public/` (configured in vite.config.ts)

## Brand Colors
- Primary Red: `#E30613`
- Secondary Green: `#009640`
- Accent Yellow: `#FFD100`

## Pages
| Route | File | Description |
|-------|------|-------------|
| `/` | `client/src/pages/Home.tsx` | Hero carousel, stats, histoire, ZRP promo |
| `/notre-histoire` | `client/src/pages/NotreHistoire.tsx` | Heritage: 5 blocs + chronological timeline |
| `/nos-produits` | `client/src/pages/NosProduits.tsx` | Full product catalog with category filters |
| `/certifications` | `client/src/pages/Certifications.tsx` | 10 certifications, social audits, 20-year timeline |
| `/zrp` | `client/src/pages/ZRP.tsx` | Zero Residue Pesticides program |

## Key Components
- `client/src/components/layout/Navbar.tsx` - Fixed navbar, white bg, mobile drawer
- `client/src/components/layout/Footer.tsx` - Social links (Facebook, Instagram, LinkedIn)
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
