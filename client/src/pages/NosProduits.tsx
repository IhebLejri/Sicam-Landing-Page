import heroBg from "@assets/image_1780056568437.png";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, ShieldCheck, Award, Clock } from "lucide-react";
import {
  categoryConfigs,
  getProductsByCategory,
  getZRPProducts,
  logoZrp,
  type CategoryConfig,
  type Product,
} from "@/data/products";

const subNavItems = [
  { label: "Double Concentré", anchor: "cat-dct" },
  { label: "Tomates Pelées", anchor: "cat-tomate-pelee" },
  { label: "Pulpe", anchor: "cat-pulpe" },
  { label: "Sauce Pizza", anchor: "cat-sauce-pizza" },
  { label: "Harissa", anchor: "cat-harissa" },
  { label: "Confitures", anchor: "cat-confitures" },
  { label: "Légumineuses", anchor: "cat-legumineuses" },
  { label: "Zéro Résidu de Pesticides — ZRP", anchor: "cat-zrp" },
  { label: "Packs", anchor: "cat-packs" },
  { label: "Aseptiques", anchor: "cat-aseptiques" },
];

function scrollToSection(anchor: string) {
  const el = document.getElementById(anchor);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ProductCarousel({
  products,
  accentColor = "primary",
  portraitCrop = false,
}: {
  products: Product[];
  accentColor?: "primary" | "secondary";
  portraitCrop?: boolean;
}) {
  const [idx, setIdx] = useState(0);
  const product = products[idx];

  const prev = () => setIdx(i => (i - 1 + products.length) % products.length);
  const next = () => setIdx(i => (i + 1) % products.length);

  const accent = accentColor === "secondary" ? "text-secondary border-secondary hover:border-secondary hover:text-secondary" : "text-primary border-primary hover:border-primary hover:text-primary";
  const dotActive = accentColor === "secondary" ? "bg-secondary" : "bg-primary";

  return (
    <div className={cn("flex-1 flex flex-col items-center justify-center py-6 relative select-none", portraitCrop ? "px-14 md:px-16 lg:px-20" : "px-5 md:px-10")}>
      {products.length > 1 && (
        <button
          onClick={prev}
          className={cn("absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm hover:shadow-md transition-all z-10", accent)}
          aria-label="Produit précédent"
          data-testid={`carousel-prev-${products[0]?.category ?? "zrp"}`}
        >
          <ChevronLeft size={17} />
        </button>
      )}

      {products.length > 1 && (
        <button
          onClick={next}
          className={cn("absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm hover:shadow-md transition-all z-10", accent)}
          aria-label="Produit suivant"
          data-testid={`carousel-next-${products[0]?.category ?? "zrp"}`}
        >
          <ChevronRight size={17} />
        </button>
      )}

      <Link
        href={`/nos-produits/${product.id}`}
        className="group block mb-5"
        data-testid={`img-link-${product.id}`}
      >
        <div className="relative flex justify-center">
          {portraitCrop ? (
            <img
              key={product.id}
              src={product.image}
              alt={product.name}
              className="w-auto h-auto max-h-48 md:max-h-56 lg:max-h-64 max-w-[260px] md:max-w-[300px] lg:max-w-[340px] object-contain group-hover:scale-[1.06] transition-transform duration-300 cursor-pointer"
            />
          ) : (
            <img
              key={product.id}
              src={product.image}
              alt={product.name}
              className="h-48 md:h-56 lg:h-64 w-auto object-contain group-hover:scale-[1.06] transition-transform duration-300 cursor-pointer drop-shadow-lg"
            />
          )}
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

      <Link
        href={`/nos-produits/${product.id}`}
        className="group text-center block px-4"
        data-testid={`name-link-${product.id}`}
      >
        <p className={cn("text-sm font-bold leading-snug transition-colors max-w-[180px] mx-auto", accentColor === "secondary" ? "text-foreground group-hover:text-secondary" : "text-foreground group-hover:text-primary")}>
          {product.name}
        </p>
      </Link>

      {products.length > 1 && (
        <>
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
          <p className="mt-2 text-[11px] text-slate-400 font-medium tracking-wide">
            {idx + 1} / {products.length}
          </p>
        </>
      )}
    </div>
  );
}

function CategorySection({ config }: { config: CategoryConfig }) {
  const products = getProductsByCategory(config.key);
  const firstProduct = products[0];

  return (
    <section
      id={`cat-${config.key}`}
      className="flex flex-col lg:flex-row min-h-[480px] lg:min-h-[520px] border-b border-slate-100 scroll-mt-16"
      data-testid={`section-${config.key}`}
    >
      <div
        className={cn(
          "hidden lg:flex relative w-[34%] bg-gradient-to-br overflow-hidden flex-col justify-between",
          config.gradient
        )}
      >
        {/* Voile pour adoucir le gradient */}
        <div className="absolute inset-0 bg-white/20 z-0" />
        {/* Image produit nette, centrée */}
        <div className="flex-1 flex items-center justify-center p-8 relative z-10">
          <img
            src={config.bgImage}
            alt={config.label}
            className="w-full max-w-[260px] object-contain drop-shadow-2xl"
          />
        </div>
        <div className="relative z-10 px-10 pb-8">
          <div className="w-8 h-0.5 bg-white/20 mb-3" />
          <p className="text-white/50 text-sm font-medium tracking-wide">{config.subtitle}</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row bg-background">
        <div className="md:w-[45%] p-5 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center md:border-r border-slate-100 bg-background/70">
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

          <p className="text-base text-slate-600 leading-relaxed mb-6">
            {config.description}
          </p>

          <div className="mt-auto pt-5 border-t border-slate-100">
            {firstProduct && (
              <>
                <Link
                  href={`/nos-produits/${firstProduct.id}`}
                  className="group"
                  data-testid={`cat-link-first-${config.key}`}
                >
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-base leading-snug mb-1.5">
                    {firstProduct.name}
                  </h3>
                </Link>
                <p className="text-xs text-slate-400 font-medium mb-2.5">{firstProduct.formats}</p>
                <div className="flex flex-wrap gap-1.5">
                  {firstProduct.zrp && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full">
                      <ShieldCheck size={10} />
                      Zéro Résidu de Pesticides — ZRP
                    </span>
                  )}
                  {firstProduct.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex-1 bg-[hsl(36,25%,97%)] flex items-center justify-center">
          <ProductCarousel products={products} accentColor="primary" portraitCrop={config.portraitCrop} />
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
      <div className="hidden lg:flex relative w-[34%] bg-gradient-to-br from-[#0c4a20] via-[#186030] to-[#1e7a38] overflow-hidden flex-col justify-between">
        {/* Voile pour adoucir le gradient */}
        <div className="absolute inset-0 bg-white/20 z-0" />
        {/* Image du premier produit ZRP, nette et centrée */}
        <div className="flex-1 flex items-center justify-center p-8 relative z-10">
          {products[0] && (
            <img
              src={products[0].image}
              alt={products[0].name}
              className="w-full max-w-[220px] object-contain drop-shadow-2xl"
            />
          )}
        </div>
        <div className="relative z-10 px-10 pb-8">
          <div className="w-8 h-0.5 bg-white/20 mb-3" />
          <p className="text-white/50 text-sm font-medium tracking-wide">Certifié CCPB — Première mondiale</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row bg-background">
        <div className="md:w-[45%] p-5 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center md:border-r border-slate-100 bg-background/70">
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

          <p className="text-base text-slate-600 leading-relaxed mb-6">
            SICAM est la <strong className="text-foreground">première entreprise au monde</strong> à certifier ses tomates Zéro Résidu de Pesticides. 1 000 analyses quotidiennes, traçabilité totale du champ à la boîte sur 600 molécules de pesticides.
          </p>

          <div className="mt-auto pt-5 border-t border-slate-100">
            <p className="text-xs text-slate-400 font-medium mb-3">
              {products.length} références certifiées — Saisons 2024 & 2025
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

        <div className="flex-1 bg-[hsl(150,20%,97%)] flex items-center justify-center">
          <ProductCarousel products={products} accentColor="secondary" portraitCrop />
        </div>
      </div>
    </section>
  );
}

function ComingSoonSection({ id, title, subtitle }: { id: string; title: string; subtitle: string }) {
  return (
    <section
      id={id}
      className="flex flex-col lg:flex-row min-h-[220px] border-b border-slate-100 scroll-mt-16 bg-slate-50/60"
      data-testid={`section-${id}`}
    >
      <div className="flex-1 flex flex-col items-center justify-center py-16 px-8 text-center">
        <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mb-4">
          <Clock size={20} className="text-slate-400" />
        </div>
        <h2 className="text-xl font-serif font-bold text-foreground mb-2">{title}</h2>
        <p className="text-sm text-slate-400 max-w-xs">{subtitle}</p>
        <span className="mt-4 px-4 py-1.5 rounded-full bg-slate-200 text-slate-500 text-xs font-semibold uppercase tracking-wider">
          Bientôt disponible
        </span>
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

      {/* Hero — split texte gauche / image droite */}
      <section className="relative flex overflow-hidden pt-20">
        <div className="flex flex-col lg:flex-row w-full">

          {/* Panneau gauche — texte sur fond sombre */}
          <div className="w-full lg:w-1/2 bg-[#1a0a0e] flex flex-col justify-center px-6 md:px-16 lg:px-20 pt-20 pb-20 min-w-0">
            <FadeIn>
              <p className="text-[11px] font-display font-semibold tracking-[0.2em] text-white/30 uppercase mb-6">
                100 % tunisien · Du champ à votre table
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-6"
                data-testid="products-title"
              >
                La générosité tunisienne, mise en boîte depuis 1969
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base text-white/60 leading-relaxed mb-8">
                Tomates, harissa, confitures — chaque produit SICAM est cultivé sous le soleil de Medjez El Bab et transformé dans le respect de la qualité et de la traçabilité.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-2">
                {subNavItems.map(item => (
                  <button
                    key={item.anchor}
                    onClick={() => scrollToSection(item.anchor)}
                    className="px-4 py-2 rounded-full border border-white/20 text-white/60 text-xs font-display font-semibold uppercase tracking-[0.1em] hover:bg-white/10 hover:text-white transition-all"
                    data-testid={`hero-nav-${item.anchor}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Panneau droit — image, masqué sur mobile */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <img
              src={heroBg}
              alt="Gamme SICAM"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>

        </div>
      </section>


      {/* Category sections */}
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

        {/* Aseptiques */}
        <div className="mx-4 md:mx-8 lg:mx-12 rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-100">
          <ComingSoonSection
            id="cat-aseptiques"
            title="Aseptiques"
            subtitle="Notre gamme aseptique professionnelle sera disponible prochainement."
          />
        </div>
      </div>

      {/* MDD banner */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-5xl mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="bg-gradient-to-r from-secondary to-emerald-700 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl" />
              </div>
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
