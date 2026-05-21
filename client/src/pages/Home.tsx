import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, CheckCircle2, Leaf, ShieldCheck, Globe2, Award, TestTube, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

import posterAll from '@assets/sicam_poster-04_1772459805485.png';
import logoZrp from '@assets/Asset_3@2x_1772017659058.png';
import posterConcassees from '@assets/sicam_poster-03_1772455941845.png';
import posterCubes from '@assets/sicam_poster-02_1772455941844.png';
import posterEntieres from '@assets/sicam_poster-01_1772455933609.png';

const slides = [
  {
    id: 0,
    tab: "ZERO RÉSIDUS",
    title: "Des produits garantis Zéro Résidu de Pesticides — ZRP",
    subtitle: "Notre priorité. Votre santé.",
    cta: { label: "Découvrir le programme ZRP", href: "/zrp" },
    bg: posterAll,
    bgColor: "bg-[#8B1A2B]",
  },
  {
    id: 1,
    tab: "CONCASSÉES",
    title: "Tomates Pelées Concassées",
    subtitle: "Certifiées Zéro Résidu de Pesticides — ZRP. 100 % tomates tunisiennes.",
    cta: { label: "Voir nos produits", href: "/nos-produits" },
    bg: posterConcassees,
    bgColor: "bg-[#6B1528]",
  },
  {
    id: 2,
    tab: "EN CUBES",
    title: "Tomates Pelées en Cubes",
    subtitle: "Au jus naturel. Certifiées Zéro Résidu de Pesticides — ZRP. Idéales pour vos sauces.",
    cta: { label: "Voir nos produits", href: "/nos-produits" },
    bg: posterCubes,
    bgColor: "bg-[#6B1528]",
  },
  {
    id: 3,
    tab: "ENTIÈRES",
    title: "Tomates Entières Pelées",
    subtitle: "Au jus naturel. Certifiées Zéro Résidu de Pesticides — ZRP. La qualité SICAM depuis 1969.",
    cta: { label: "Voir nos produits", href: "/nos-produits" },
    bg: posterEntieres,
    bgColor: "bg-[#6B1528]",
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
    <section className="relative h-[500px] flex flex-col overflow-hidden pt-20" data-testid="hero-carousel">
      <div className="h-full flex flex-col lg:flex-row">
        <div className={cn("lg:w-[45%] flex flex-col justify-center px-6 md:px-16 lg:px-20 py-8 lg:py-0 transition-colors duration-700", slide.bgColor)}>
          <div key={`title-${current}`} className="animate-fade-in-up max-w-xl">
            <p className="text-[11px] font-display font-semibold uppercase tracking-[0.2em] text-white/40 mb-4 md:mb-6">SICAM — Depuis 1969</p>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[3.5rem] font-serif font-bold leading-[1.15] mb-4 md:mb-6 text-white" data-testid="hero-title">
              {slide.title}
            </h1>
            <p className="text-base md:text-xl mb-8 md:mb-10 text-white/80 font-light leading-relaxed">
              {slide.subtitle}
            </p>
          </div>
          <Link href={slide.cta.href}>
            <Button
              size="lg"
              className="text-xs md:text-sm gap-2.5 h-10 md:h-12 px-6 md:px-8 bg-white text-primary hover:bg-white/90 font-display font-semibold uppercase tracking-wider rounded-full w-fit"
              data-testid="hero-cta"
            >
              {slide.cta.label}
              <ArrowRight size={14} />
            </Button>
          </Link>
        </div>

        <div className="lg:w-[55%] relative bg-[#5a1020] flex items-center justify-center overflow-hidden">
          <img
            key={`img-${current}`}
            src={slide.bg}
            alt={slide.title}
            className="max-w-full max-h-full object-contain animate-fade-in-up p-4"
          />
          <button
            onClick={prev}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
            data-testid="carousel-prev"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
            data-testid="carousel-next"
          >
            <ArrowRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="flex justify-center">
          <div className="flex bg-[#1a1714]/90 backdrop-blur-md overflow-x-auto w-full lg:w-auto">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className={cn(
                  "flex-1 lg:flex-none px-4 md:px-8 py-3 md:py-4 text-[10px] md:text-xs font-display font-semibold uppercase tracking-[0.12em] transition-all whitespace-nowrap",
                  current === i
                    ? "bg-primary text-white"
                    : "text-white/40 hover:text-white/70 hover:bg-white/5"
                )}
                data-testid={`carousel-tab-${i}`}
              >
                {s.tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoPlayer() {
  return (
    <section className="pt-10 pb-4 bg-white">
      <div className="container mx-auto px-4 md:px-16 lg:px-24">
        <FadeIn direction="up">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-black aspect-video" data-testid="hero-video">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full block object-contain"
            >
              <source src="/modifie.mp4" type="video/mp4" />
            </video>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroCarousel />

      <VideoPlayer />

      <section className="section-padding bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-10 md:gap-8 text-center">
            {[
              { value: "+55 ans", label: "D'expertise", sub: "Depuis 1969", icon: Award },
              { value: "N°1", label: "Du marché", sub: "Leader en Tunisie", icon: Globe2 },
              { value: "1ère", label: "Entreprise", sub: "Certifiée ZRP dans le secteur de transformation de la tomate en Tunisie, en Afrique et dans le Monde Arabe", icon: ShieldCheck },
              { value: "+30", label: "Pays", sub: "D'exportation", icon: Globe2 },
              { value: "100%", label: "Origine", sub: "Tomates tunisiennes", icon: Leaf },
              { value: "600", label: "Molécules", sub: "Analysées", icon: TestTube },
              { value: "1000", label: "Tests qualité", sub: "Dans nos laboratoires par jour", icon: Microscope },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.08} direction="up" className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-primary/70 mb-4">
                  <stat.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-1">{stat.value}</h3>
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
                  Aujourd'hui, nous allons plus loin dans notre engagement pour votre santé et celle de l'environnement avec une démarche révolutionnaire dans l'industrie agroalimentaire tunisienne.
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
