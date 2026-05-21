import { useState, useEffect } from "react";
import { Link } from "wouter";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, ShieldCheck, Award } from "lucide-react";
import {
  allProducts,
  categoryConfigs,
  getProductsByCategory,
  getZRPProducts,
  logoZrp,
  type CategoryConfig,
  type Product,
} from "@/data/products";

const subNavItems = [
  { label: "Tomates", anchor: "cat-tomates" },
  { label: "Harissa", anchor: "cat-harissa" },
  { label: "Confitures", anchor: "cat-confitures" },
  { label: "Certifié ZRP", anchor: "cat-zrp" },
];

function scrollToSection(anchor: string) {
  const el = document.getElementById(anchor);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ProductCarousel({
  products,
  accentColor = "primary",
}: {
  products: Product[];
  accentColor?: "primary" | "secondary";
}) {
  const [idx, setIdx] = useState(0);
  const product = products[idx];

  const prev = () => setIdx(i => (i - 1 + products.length) % products.length);
  const next = () => setIdx(i => (i + 1) % products.length);

  const accent = accentColor === "secondary" ? "text-secondary border-secondary hover:border-secondary hover:text-secondary" : "text-primary border-primary hover:border-primary hover:text-primary";
  const dotActive = accentColor === "secondary" ? "bg-secondary" : "bg-primary";

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-10 px-8 md:px-10 relative select-none">
      {/* Prev arrow */}
      <button
        onClick={prev}
        className={cn("absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm hover:shadow-md transition-all z-10", accent)}
        aria-label="Produit précédent"
        data-testid={`carousel-prev-${products[0]?.category ?? "zrp"}`}
      >
        <ChevronLeft size={17} />
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        className={cn("absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm hover:shadow-md transition-all z-10", accent)}
        aria-label="Produit suivant"
        data-testid={`carousel-next-${products[0]?.category ?? "zrp"}`}
      >
        <ChevronRight size={17} />
      </button>

      {/* Product image (clickable) */}
      <Link
        href={`/nos-produits/${product.id}`}
        className="group block mb-5"
        data-testid={`img-link-${product.id}`}
      >
        <div className="relative">
          <img
            key={product.id}
            src={product.image}
            alt={product.name}
            className="h-48 md:h-56 lg:h-64 w-auto object-contain group-hover:scale-[1.06] transition-transform duration-300 cursor-pointer drop-shadow-lg"
          />
          {product.zrp && (
            <div className="absolute -top-2 -right-2 w-7 h-7 bg-secondary rounded-full flex items-center justify-center shadow-md">
              <ShieldCheck size={13} className="text-white" />
            </div>
          )}
          {product.badges && product.badges.length > 0 && !product.zrp && (
            <div className="absolute -top-2 -right-2 w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center shadow-md">
              <Award size={13} className="text-white" />
            </div>
          )}
        </div>
      </Link>

      {/* Product name link */}
      <Link
        href={`/nos-produits/${product.id}`}
        className="group text-center block px-4"
        data-testid={`name-link-${product.id}`}
      >
        <p className={cn("text-sm font-bold leading-snug transition-colors max-w-[180px] mx-auto", accentColor === "secondary" ? "text-foreground group-hover:text-secondary" : "text-foreground group-hover:text-primary")}>
          {product.name}
        </p>
        <p className="text-[11px] text-slate-400 mt-1">{product.shortDesc}</p>
      </Link>

      {/* Dot indicators */}
      <div className="flex gap-1.5 mt-5" role="tablist">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            role="tab"
            aria-selected={i === idx}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === idx ? `w-6 ${dotActive}` : "w-1.5 bg-slate-300 hover:bg-slate-400"
            )}
            aria-label={`Produit ${i + 1}`}
            data-testid={`dot-${i}`}
          />
        ))}
      </div>

      {/* Counter */}
      <p className="mt-2 text-[11px] text-slate-400 font-medium tracking-wide">
        {idx + 1} / {products.length}
      </p>
    </div>
  );
}

function CategorySection({ config }: { config: CategoryConfig }) {
  const products = getProductsByCategory(config.key);
  const currentProducts = products;
  const firstProduct = currentProducts[0];

  return (
    <section
      id={`cat-${config.key}`}
      className="flex flex-col lg:flex-row min-h-[480px] lg:min-h-[520px] border-b border-slate-100 scroll-mt-16"
      data-testid={`section-${config.key}`}
    >
      {/* Left: decorative gradient panel (desktop) */}
      <div
        className={cn(
          "hidden lg:flex relative w-[34%] bg-gradient-to-br overflow-hidden flex-col justify-end",
          config.gradient
        )}
      >
        <img
          src={config.bgImage}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-contain object-center opacity-[0.22] pointer-events-none select-none"
        />
        <div className="relative z-10 p-10 pb-12">
          <p className="text-[72px] leading-none font-serif font-bold text-white/10 uppercase select-none pointer-events-none">
            {config.label}
          </p>
          <div className="w-8 h-0.5 bg-white/20 mb-3 mt-2" />
          <p className="text-white/40 text-sm font-medium tracking-wide">{config.subtitle}</p>
        </div>
      </div>

      {/* Right: category info + product carousel */}
      <div className="flex-1 flex flex-col md:flex-row bg-background">
        {/* Description column */}
        <div className="md:w-[45%] p-8 lg:p-10 xl:p-12 flex flex-col justify-center md:border-r border-slate-100">
          {/* Mobile: category tag */}
          <p className="text-[10px] font-display font-bold tracking-[0.2em] text-primary/40 uppercase mb-3">
            {config.subtitle}
          </p>

          <h2
            className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-3"
            data-testid={`cat-heading-${config.key}`}
          >
            {config.label}
          </h2>

          <div className="w-8 h-0.5 bg-primary mb-5" />

          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            {config.description}
          </p>

          {/* Divider + current product info */}
          <div className="mt-auto pt-5 border-t border-slate-100">
            <Link
              href={`/nos-produits/${firstProduct?.id}`}
              className="group"
              data-testid={`cat-link-first-${config.key}`}
            >
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-base leading-snug mb-1.5">
                {firstProduct?.name}
              </h3>
            </Link>
            <p className="text-xs text-slate-400 font-medium mb-2.5">{firstProduct?.formats}</p>
            <div className="flex flex-wrap gap-1.5">
              {firstProduct?.zrp && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full">
                  <ShieldCheck size={10} />
                  Zéro Résidu de Pesticides — ZRP
                </span>
              )}
              {firstProduct?.tags.slice(0, 2).map(tag => (
                <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Product carousel */}
        <div className="flex-1 bg-[hsl(36,25%,97%)]">
          <ProductCarousel products={currentProducts} accentColor="primary" />
        </div>
      </div>
    </section>
  );
}

function ZRPSection() {
  const products = getZRPProducts();

  return (
    <section
      id="cat-zrp"
      className="flex flex-col lg:flex-row min-h-[480px] lg:min-h-[520px] border-b border-slate-100 scroll-mt-16"
      data-testid="section-zrp"
    >
      {/* Left: green gradient panel (desktop) */}
      <div className="hidden lg:flex relative w-[34%] bg-gradient-to-br from-[#0c4a20] via-[#186030] to-[#1e7a38] overflow-hidden flex-col justify-end">
        <img
          src={logoZrp}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-contain opacity-[0.08] scale-125 pointer-events-none select-none"
        />
        <div className="relative z-10 p-10 pb-12">
          <p className="text-[52px] leading-tight font-serif font-bold text-white/10 uppercase select-none pointer-events-none">
            Zéro Résidu
          </p>
          <div className="w-8 h-0.5 bg-white/20 mb-3 mt-2" />
          <p className="text-white/40 text-sm font-medium tracking-wide">Certifié CCPB — Première mondiale</p>
        </div>
      </div>

      {/* Right */}
      <div className="flex-1 flex flex-col md:flex-row bg-background">
        {/* Description */}
        <div className="md:w-[45%] p-8 lg:p-10 xl:p-12 flex flex-col justify-center md:border-r border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <img src={logoZrp} alt="ZRP" className="w-10 h-10 object-contain" />
          </div>
          <p className="text-[10px] font-display font-bold tracking-[0.2em] text-secondary/50 uppercase mb-3">
            Certifié CCPB N° 02/2025/10
          </p>

          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-3" data-testid="cat-heading-zrp">
            Zéro Résidu de Pesticides — ZRP
          </h2>

          <div className="w-8 h-0.5 bg-secondary mb-5" />

          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            SICAM est la <strong className="text-foreground">première entreprise au monde</strong> à certifier ses tomates Zéro Résidu de Pesticides. 1 000 analyses quotidiennes, traçabilité totale du champ à la boîte sur 600 molécules de pesticides.
          </p>

          <div className="mt-auto pt-5 border-t border-slate-100">
            <p className="text-xs text-slate-400 font-medium mb-3">
              5 références certifiées — Saisons 2024 & 2025
            </p>
            <Link
              href="/zrp"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs font-bold hover:bg-secondary/20 transition-colors"
              data-testid="link-zrp-detail"
            >
              <ShieldCheck size={13} />
              En savoir plus sur le programme ZRP
            </Link>
          </div>
        </div>

        {/* ZRP Carousel */}
        <div className="flex-1 bg-[hsl(150,20%,97%)]">
          <ProductCarousel products={products} accentColor="secondary" />
        </div>
      </div>
    </section>
  );
}

export default function NosProduits() {
  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col">

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-primary to-[#9a0f18] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />
        </div>
        <div className="container mx-auto px-6 md:px-8 relative z-10 text-center max-w-4xl">
          <FadeIn>
            <p className="text-[11px] font-display font-semibold tracking-[0.2em] text-white/40 uppercase mb-6">
              100 % tunisien. Du champ à votre table.
            </p>
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight"
              data-testid="products-title"
            >
              Nos produits — La générosité tunisienne, mise en boîte depuis 1969
            </h1>
            <p className="text-base text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
              Chaque produit SICAM est le résultat d'un choix : celui de la qualité sur le compromis, de la traçabilité sur l'opacité, du goût authentique sur le standardisé. Des tomates cultivées sous le soleil de Medjez El Bab aux confitures de fruits tunisiens, en passant par notre harissa de caractère — voici notre gamme complète.
            </p>
          </FadeIn>

          {/* Quick-links in hero */}
          <FadeIn delay={0.15}>
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {subNavItems.map(item => (
                <button
                  key={item.anchor}
                  onClick={() => scrollToSection(item.anchor)}
                  className="px-5 py-2 rounded-full border border-white/20 text-white/70 text-xs font-display font-semibold uppercase tracking-[0.1em] hover:bg-white/10 hover:text-white transition-all"
                  data-testid={`hero-nav-${item.anchor}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sticky sub-navigation */}
      <nav
        className="sticky top-[52px] md:top-[60px] z-30 bg-white border-b border-slate-100 shadow-sm"
        aria-label="Catégories de produits"
      >
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex overflow-x-auto scrollbar-hide" data-testid="cat-nav">
            {subNavItems.map(item => (
              <button
                key={item.anchor}
                onClick={() => scrollToSection(item.anchor)}
                className="flex-shrink-0 px-5 md:px-7 py-4 text-[11px] md:text-[12px] font-display font-bold uppercase tracking-[0.12em] text-slate-400 hover:text-primary border-b-2 border-transparent hover:border-primary transition-all whitespace-nowrap"
                data-testid={`subnav-${item.anchor}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Category sections — spaced like Mutti */}
      <div className="flex flex-col gap-6 bg-background py-6">
        {categoryConfigs.map(config => (
          <div key={config.key} className="mx-4 md:mx-8 lg:mx-12 rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-100">
            <CategorySection config={config} />
          </div>
        ))}

        {/* ZRP section */}
        <div className="mx-4 md:mx-8 lg:mx-12 rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-100">
          <ZRPSection />
        </div>
      </div>

      {/* MDD banner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="bg-gradient-to-r from-secondary to-emerald-700 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
                  Service Marques Distributeurs (MDD)
                </h3>
                <p className="text-white/90 text-lg max-w-2xl mx-auto">
                  SICAM propose un service complet de fabrication sous marques distributeurs. Nous accompagnons nos partenaires internationaux avec des produits sur mesure, conformes aux standards les plus exigeants.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
