import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, CheckCircle2, Leaf, ShieldCheck, Globe2, Award, TestTube, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

import logoZrp from '@assets/Asset_3@2x_1779867553760.png';
import imgTPC from '@assets/TPC-FR_1773059756213.png';
import imgTPE from '@assets/TPE_1773059756214.png';
import imgTC from '@assets/TC_1773059756212.png';
import imgDCTDramatic from '@assets/WhatsApp_Image_2026-05-25_at_15.42.36_1779867553758.jpeg';
import imgZRP4 from '@assets/WhatsApp_Image_2026-05-25_at_15.42.37_1779867553759.jpeg';

const slides = [
  {
    id: 0,
    tab: "TOMATES EN CUBES",
    title: "Tomates Pelées en Cubes",
    subtitle: "SICAM est la première entreprise au monde à certifier ZRP ce format.",
    cta: { label: "Voir nos produits", href: "/nos-produits" },
    bg: imgTPC,
    bgColor: "#6B1240",
    objectFit: "contain" as const,
  },
  {
    id: 1,
    tab: "DOUBLE CONCENTRÉ",
    title: "Double Concentré de Tomates",
    subtitle: "Notre produit signature. Idéal pour les petits foyers ou les recettes à portions individuelles.",
    cta: { label: "Voir le produit", href: "/nos-produits" },
    bg: imgDCTDramatic,
    bgColor: "#0d0600",
    objectFit: "cover" as const,
  },
  {
    id: 2,
    tab: "TOMATES ENTIÈRES",
    title: "Tomates Entières Pelées",
    subtitle: "Au jus naturel. Certifiées Zéro Résidu de Pesticides — ZRP. La qualité SICAM depuis 1969.",
    cta: { label: "Voir nos produits", href: "/nos-produits" },
    bg: imgTPE,
    bgColor: "#6B1240",
    objectFit: "contain" as const,
  },
  {
    id: 3,
    tab: "CONCASSÉES",
    title: "Tomates Pelées Concassées",
    subtitle: "Certifiées Zéro Résidu de Pesticides — ZRP. 100 % tomates tunisiennes.",
    cta: { label: "Voir nos produits", href: "/nos-produits" },
    bg: imgTC,
    bgColor: "#6B1240",
    objectFit: "contain" as const,
  },
  {
    id: 4,
    tab: "ZÉRO RÉSIDU",
    title: "Des produits garantis Zéro Résidu de Pesticides — ZRP",
    subtitle: "Notre priorité. Votre santé.",
    cta: { label: "Découvrir le programme ZRP", href: "/zrp" },
    bg: imgZRP4,
    bgColor: "#0c2d18",
    objectFit: "cover" as const,
  },
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const prev = useCallback(() => {
    goTo(current === 0 ? slides.length - 1 : current - 1);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo(current === slides.length - 1 ? 0 : current + 1);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(() => { next(); }, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative flex flex-col overflow-hidden pt-20" style={{ height: "100svh", minHeight: 560 }} data-testid="hero-carousel">
      <div className="flex flex-1 overflow-hidden">
        {/* Left: fixed video panel (desktop only) */}
        <div className="hidden lg:block lg:w-1/2 relative bg-black overflow-hidden flex-shrink-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            aria-hidden="true"
          >
            <source src="/modifie.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>

        {/* Right: product carousel */}
        <div
          className="w-full lg:w-1/2 relative flex items-center justify-center overflow-hidden transition-colors duration-700"
          style={{ backgroundColor: slide.bgColor }}
        >
          {/* Product image */}
          <img
            key={`img-${current}`}
            src={slide.bg}
            alt={slide.title}
            className={cn(
              "animate-fade-in-up transition-all duration-500",
              slide.objectFit === "cover"
                ? "absolute inset-0 w-full h-full object-cover"
                : "max-w-full max-h-[65%] w-auto object-contain drop-shadow-2xl px-8"
            )}
          />

          {/* Dark gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

          {/* Text + CTA overlay */}
          <div key={`text-${current}`} className="absolute bottom-16 left-0 right-0 px-6 md:px-10 animate-fade-in-up z-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white leading-snug mb-3" data-testid="hero-title">
              {slide.title}
            </h1>
            <p className="text-sm md:text-base text-white/85 mb-5 leading-relaxed max-w-lg font-light">
              {slide.subtitle}
            </p>
            <Link href={slide.cta.href}>
              <Button
                size="lg"
                className="text-xs md:text-sm gap-2.5 h-10 md:h-11 px-6 bg-white text-primary hover:bg-white/90 font-display font-semibold uppercase tracking-wider rounded-full w-fit"
                data-testid="hero-cta"
              >
                {slide.cta.label}
                <ArrowRight size={14} />
              </Button>
            </Link>
          </div>

          {/* Carousel arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all bg-white/15 backdrop-blur-sm text-white border border-white/20 hover:bg-white/30"
            data-testid="carousel-prev"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all bg-white/15 backdrop-blur-sm text-white border border-white/20 hover:bg-white/30"
            data-testid="carousel-next"
          >
            <ArrowRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>

    </section>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroCarousel />

      <section className="section-padding bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-10 md:gap-8 text-center">
            {[
              { value: "+55 ans", label: "D'expertise", sub: "Depuis 1969", icon: Award },
              { value: "Leader", label: "Du marché", sub: "En Tunisie", icon: Globe2 },
              { value: "1ère", label: "Entreprise", sub: "Certifiée ZRP dans le secteur de transformation de la tomate en Tunisie, en Afrique et dans le Monde Arabe", icon: ShieldCheck },
              { value: "+30", label: "Pays", sub: "D'exportation", icon: Globe2 },
              { value: "100%", label: "Origine", sub: "Tomates tunisiennes", icon: Leaf },
              { value: "600", label: "Molécules", sub: "Analysées", icon: TestTube },
              { value: "1 000", label: "Tests qualité", sub: "Dans nos laboratoires par jour durant la campagne", icon: Microscope },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.08} direction="up" className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-primary/70 mb-4">
                  <stat.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-1 whitespace-nowrap">{stat.value}</h3>
                <p className="text-xs font-display font-semibold uppercase tracking-wider text-foreground/60">{stat.label}</p>
                <p className="text-[11px] text-muted-foreground mt-1 leading-snug">{stat.sub}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="histoire" className="section-padding bg-background overflow-hidden">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="up">
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=2070&auto=format&fit=crop"
                    alt="Tomates fraîches"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg max-w-[240px] hidden md:block">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <CheckCircle2 size={20} strokeWidth={1.5} />
                    </div>
                    <span className="font-serif font-bold text-base">Qualité Garantie</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">Une sélection rigoureuse des meilleures graines pour une saveur authentique.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" className="space-y-8">
              <p className="text-xs font-display font-semibold uppercase tracking-[0.2em] text-primary/60">Notre Histoire</p>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-bold text-foreground leading-[1.15]">
                Préserver la terre, innover pour la santé.{" "}
                <span className="text-primary italic">Le goût authentique, l'exigence en plus.</span>
              </h2>
              <div className="space-y-5 text-base text-foreground/60 leading-[1.8]">
                <p>
                  Depuis 1969, SICAM s'engage à offrir le meilleur de la nature tunisienne. Notre histoire est celle d'une passion pour la terre et d'un savoir-faire transmis de génération en génération.
                </p>
                <p>
                  Chaque jour, nous allons plus loin dans notre engagement pour votre santé et celle de l'environnement avec une démarche responsable pour l'industrie agroalimentaire tunisienne.
                </p>
              </div>
              <ul className="space-y-4 pt-2">
                {["Agriculture durable et responsable", "Soutien aux agriculteurs locaux", "Innovation continue dans nos procédés"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/70 text-[15px]">
                    <CheckCircle2 className="text-secondary" size={18} strokeWidth={1.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/notre-histoire" className="inline-flex items-center gap-2 text-sm font-display font-semibold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider pt-2" data-testid="link-histoire">
                Découvrir notre histoire
                <ArrowRight size={16} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-12 pb-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="bg-secondary rounded-3xl p-6 md:p-12 lg:p-20 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-8 space-y-8 min-w-0">
                  <p className="text-xs font-display font-semibold uppercase tracking-[0.2em] text-white/40">Notre programme phare</p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                    Zéro Résidu de Pesticides{" "}
                    <span className="text-accent italic">— ZRP</span>
                  </h2>
                  <p className="text-xl font-serif italic text-accent/90">
                    « Notre priorité. Votre santé. »
                  </p>
                  <div className="space-y-5 text-base text-white/70 max-w-2xl leading-[1.8] break-words">
                    <p>
                      96 % des Tunisiens s'inquiètent de la présence de pesticides dans leur alimentation. Chez SICAM, nous ne répondons pas à cette inquiétude avec des promesses — nous y répondons avec des certifications.
                    </p>
                    <p>
                      Notre programme ZRP garantit que chacun de nos produits certifiés est analysé sur plus de 600 molécules de pesticides avant d'arriver sur votre table. Aucun résidu détectable. Une traçabilité totale.
                    </p>
                    <p className="text-white/90 font-medium">
                      SICAM est la première entreprise arabe et africaine, et la première au monde pour le double concentré de tomates, à avoir obtenu cette certification.
                    </p>
                  </div>
                  <div className="pt-2">
                    <Link href="/zrp" className="block sm:inline-block">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-secondary border-white text-sm h-12 px-8 font-display font-semibold uppercase tracking-wider rounded-full">
                        Tout savoir sur le programme ZRP
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <div className="bg-white/10 backdrop-blur-sm p-10 rounded-full animate-float">
                    <img src={logoZrp} alt="Logo ZRP" className="w-40 h-40 md:w-48 md:h-48 object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
