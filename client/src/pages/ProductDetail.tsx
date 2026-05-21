import { useState } from "react";
import { Link, useParams } from "wouter";
import { ShieldCheck, Award, Package, ArrowLeft } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { findProduct, categoryConfigs, getProductsByCategory } from "@/data/products";
import { FadeIn } from "@/components/ui/fade-in";

export default function ProductDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? "";
  const product = findProduct(slug);
  const [ficheOpen, setFicheOpen] = useState(false);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-6xl font-serif font-bold text-slate-100 mb-4">404</p>
          <h1 className="text-2xl font-serif font-bold text-foreground mb-4">Produit introuvable</h1>
          <Link href="/nos-produits" className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
            <ArrowLeft size={16} />
            Retour aux produits
          </Link>
        </div>
      </main>
    );
  }

  const config = categoryConfigs.find(c => c.key === product.category)!;
  const related = getProductsByCategory(product.category).filter(p => p.id !== product.id);

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero split layout */}
      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* Left: gradient panel with product image */}
        <div
          className={cn(
            "relative lg:w-[45%] min-h-[55vw] lg:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br",
            config.gradient
          )}
        >
          {/* Faint blurred background */}
          <img
            src={product.image}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-contain opacity-[0.08] scale-150 blur-md pointer-events-none select-none"
          />
          {/* Main product image */}
          <FadeIn direction="up">
            <div className="relative z-10 p-4 md:p-8 lg:p-16 flex items-center justify-center mt-16 lg:mt-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-52 md:w-72 lg:w-[22rem] h-auto object-contain drop-shadow-2xl"
                data-testid="product-detail-image"
              />
            </div>
          </FadeIn>
        </div>

        {/* Right: product info */}
        <div className="lg:w-[55%] flex flex-col justify-center px-5 md:px-12 lg:px-16 py-8 lg:pt-36 lg:pb-16 bg-background">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8 flex-wrap" aria-label="Fil d'ariane" data-testid="breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/nos-produits" className="hover:text-foreground transition-colors">Nos Produits</Link>
            <span>/</span>
            <Link href={`/nos-produits#cat-${product.category}`} className="hover:text-foreground transition-colors">{config.label}</Link>
            <span>/</span>
            <span className="text-slate-600 truncate max-w-[200px] md:max-w-none">{product.name}</span>
          </nav>

          <FadeIn direction="up">
            {/* Category label */}
            <p className="text-[11px] font-display font-semibold tracking-[0.2em] text-primary/50 uppercase mb-3">
              {config.label} — SICAM Tunisie
            </p>

            {/* Product name */}
            <h1
              className="text-3xl md:text-4xl xl:text-5xl font-serif font-bold text-foreground mb-5 leading-tight"
              data-testid="detail-title"
            >
              {product.name}
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {product.zrp && (
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-bold"
                  data-testid="badge-zrp-detail"
                >
                  <ShieldCheck size={13} />
                  Certifié Zéro Résidu de Pesticides — ZRP
                </span>
              )}
              {product.badges?.map((b, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs font-bold"
                  data-testid={`badge-award-detail-${i}`}
                >
                  <Award size={13} />
                  {b}
                </span>
              ))}
            </div>

            {/* Description */}
            <p
              className="text-slate-600 leading-relaxed mb-6 max-w-xl"
              data-testid="product-description"
            >
              {product.description}
            </p>

            {/* Formats */}
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl mb-6 border border-slate-100">
              <Package size={17} className="text-slate-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Format disponible</p>
                <p className="text-sm text-slate-700 font-semibold">{product.formats}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {product.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              {product.ficheImage && (
                <button
                  onClick={() => setFicheOpen(true)}
                  className="flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors text-sm"
                  data-testid="btn-fiche"
                >
                  Voir la fiche technique
                </button>
              )}
              <Link
                href="/nos-produits"
                className="flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-100 text-slate-700 rounded-full font-semibold hover:bg-slate-200 transition-colors text-sm"
                data-testid="btn-back"
              >
                <ArrowLeft size={15} />
                Retour aux produits
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 md:px-8">
            <FadeIn>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8" data-testid="related-heading">
                Autres {config.label}
              </h2>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {related.slice(0, 4).map((p, i) => (
                <FadeIn key={p.id} delay={i * 0.08} direction="up">
                  <Link
                    href={`/nos-produits/${p.id}`}
                    className="group block text-center p-5 md:p-6 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all"
                    data-testid={`related-${p.id}`}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-24 md:h-28 w-auto object-contain mx-auto group-hover:scale-105 transition-transform duration-300 mb-3 drop-shadow-sm"
                    />
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {p.name}
                    </p>
                    {p.zrp && (
                      <span className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full">
                        <ShieldCheck size={9} />
                        ZRP
                      </span>
                    )}
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Fiche technique dialog */}
      {product.ficheImage && (
        <Dialog open={ficheOpen} onOpenChange={setFicheOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
            <DialogTitle>Fiche technique — {product.name}</DialogTitle>
            <img
              src={product.ficheImage}
              alt={`Fiche technique ${product.name}`}
              className="w-full h-auto mt-4 rounded-lg"
              data-testid="fiche-image"
            />
          </DialogContent>
        </Dialog>
      )}
    </main>
  );
}
