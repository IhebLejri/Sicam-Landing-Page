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
| `/nos-produits` | `client/src/pages/NosProduits.tsx` | Full product catalog with category filters |
| `/zrp` | `client/src/pages/ZRP.tsx` | Zero Residue Pesticides program |

## Key Components
- `client/src/components/layout/Navbar.tsx` - Fixed navbar, white bg, mobile drawer
- `client/src/components/layout/Footer.tsx` - Social links (Facebook, Instagram, LinkedIn)
- `client/src/components/ui/fade-in.tsx` - Scroll-triggered animation wrapper

## Product Categories (Nos Produits)
- **Tomates SICAM** (400g): DCT, Pulpe, Sauce Pizza, TC, TCA, TCP 4%, TCP 15%, TPC, TPE
- **Tomates 3 KG**: Same varieties in 3kg format
- **Confitures**: Abricot, Coing, Figue, Fraise
- **Harissa**: 70g, 135g, 140g, 380g, 760g
- **Marques Distributeurs (MDD)**: 30+ private label brands

## Deployment
- Static build via `npm run build` → `dist/public/`
- GitHub Actions workflow at `.github/workflows/deploy.yml`
- SPA routing handled by `client/public/.htaccess`

## Social Links
- Facebook: https://www.facebook.com/SICAMTunisia
- Instagram: https://www.instagram.com/sicam_tunisia_officiel
- LinkedIn: https://www.linkedin.com/company/sicam_tunisia/
