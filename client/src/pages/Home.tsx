import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, CheckCircle2, Leaf, ShieldCheck, Globe2, Award, TestTube, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

import heroBanner from '@assets/zrp_aff-01_1772017659058.png';
import logoZrp from '@assets/Asset_3@2x_1772017659058.png';
import imgTC from '@assets/ZRP_TC_1772025754847.png';
import imgTPC from '@assets/TPC_ZRP_1772025754847.png';
import imgTPE from '@assets/TPE_ZRP_1772025754847.png';
import posterConcassees from '@assets/sicam_poster-03_1772455941845.png';
import posterCubes from '@assets/sicam_poster-02_1772455941844.png';
import posterEntieres from '@assets/sicam_poster-01_1772455933609.png';
const slides = [
  {
    id: 0,
    tab: "ZERO RESIDUS DE PESTICIDES",
    title: "Des produits garantis zéro* résidu de pesticides",
    subtitle: "Notre priorité. Votre santé.",
    cta: { label: "Découvrir le programme ZRP", href: "/zrp" },
    bg: heroBanner,
    overlay: "from-[#8B1A2B]/90 via-[#8B1A2B]/60 to-transparent",
    product: null,
  },
  {
    id: 1,
    tab: "TOMATES PELEES CONCASSEES",
    title: "Tomates Pelées Concassées",
    subtitle: "Certifiées Zéro Résidu de Pesticides. 100% tomates tunisiennes.",
    cta: { label: "En savoir plus", href: "/zrp" },
    bg: posterConcassees,
    overlay: null,
    product: null,
  },
  {
    id: 2,
    tab: "TOMATES EN CUBES",
    title: "Tomates Pelées en Cubes",
    subtitle: "Au jus naturel. Certifiées ZRP. Idéales pour vos sauces et mijotés.",
    cta: { label: "En savoir plus", href: "/zrp" },
    bg: posterCubes,
    overlay: null,
    product: null,
  },
  {
    id: 3,
    tab: "TOMATES ENTIERES PELEES",
    title: "Tomates Entières Pelées",
    subtitle: "Au jus naturel. Certifiées ZRP. La qualité SICAM depuis 1969.",
    cta: { label: "En savoir plus", href: "/zrp" },
    bg: posterEntieres,
    overlay: null,
    product: null,
  },
];

function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="py-12 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl group">
          <video
            ref={videoRef}
            src="/sicam-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto"
            data-testid="video-sicam"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 hover:bg-black/70 transition-all"
              data-testid="video-play-pause"
            >
              {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
            </button>
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={toggleMute}
              className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 hover:bg-black/70 transition-all"
              data-testid="video-mute"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    const timer = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[90vh] flex flex-col overflow-hidden pt-20" data-testid="hero-carousel">
      <div className="absolute inset-0 z-0 bg-[#5a1020]">
        {slide.bg && (
          <img
            src={slide.bg}
            alt=""
            className={cn(
              "h-full transition-opacity duration-700",
              slide.overlay
                ? "w-full object-cover object-center"
                : "mx-auto object-contain"
            )}
          />
        )}
        {slide.overlay && (
          <div className={cn("absolute inset-0 bg-gradient-to-r", slide.overlay)}></div>
        )}
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex-1 flex items-center">
        {slide.overlay ? (
          <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
            <div className="space-y-6">
              <div
                key={`title-${current}`}
                className="animate-fade-in-up"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-4 text-white">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  {slide.subtitle}
                </p>
              </div>
              <Link href={slide.cta.href}>
                <Button
                  size="lg"
                  className="text-lg gap-2 h-14 px-8"
                  data-testid="hero-cta"
                >
                  {slide.cta.label}
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-end items-end pb-8">
            <Link href={slide.cta.href}>
              <Button
                size="lg"
                className="text-lg gap-2 h-14 px-8 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                data-testid="hero-cta"
              >
                {slide.cta.label}
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        )}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
        data-testid="carousel-prev"
      >
        <ArrowLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
        data-testid="carousel-next"
      >
        <ArrowRight size={20} />
      </button>

      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center">
            <div className="flex bg-black/30 backdrop-blur-md rounded-t-xl overflow-hidden">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  className={cn(
                    "px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap",
                    current === i
                      ? "bg-primary text-white"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  )}
                  data-testid={`carousel-tab-${i}`}
                >
                  {s.tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroCarousel />

      <VideoSection />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {[
              { value: "1969", label: "Fondation", sub: "+55 ans d'expertise", icon: Award },
              { value: "+60%", label: "Part de marché", sub: "Leader en Tunisie", icon: Globe2 },
              { value: "1ère", label: "Entreprise", sub: "Certifiée ZRP", icon: ShieldCheck },
              { value: "+30", label: "Pays", sub: "D'exportation", icon: Globe2 },
              { value: "100%", label: "Origine", sub: "Tomates tunisiennes", icon: Leaf },
              { value: "615", label: "Molécules", sub: "Analysées", icon: TestTube },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up" className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center text-primary mb-4 shadow-sm">
                  <stat.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-4xl font-black text-foreground mb-1">{stat.value}</h3>
                <p className="text-sm font-bold text-slate-800">{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="histoire" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[3rem] blur-2xl opacity-50"></div>
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=2070&auto=format&fit=crop"
                    alt="Tomates fraîches"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 border-4 border-white/20 rounded-[2rem]"></div>
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl max-w-xs hidden md:block">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <CheckCircle2 size={24} />
                    </div>
                    <span className="font-bold text-lg">Qualité Garantie</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Une sélection rigoureuse des meilleures graines pour une saveur authentique.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="space-y-6">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Notre Histoire</h2>
              <h3 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                SICAM, nés de la terre pour <span className="text-primary">nourrir le monde</span>
              </h3>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Depuis 1969, SICAM s'engage à offrir le meilleur de la nature tunisienne. Notre histoire est celle d'une passion pour la terre et d'un savoir-faire transmis de génération en génération.
                </p>
                <p>
                  Aujourd'hui, nous allons plus loin dans notre engagement pour votre santé et celle de l'environnement avec une démarche révolutionnaire dans l'industrie agroalimentaire tunisienne.
                </p>
              </div>
              <ul className="space-y-3 pt-4">
                {["Agriculture durable et responsable", "Soutien aux agriculteurs locaux", "Innovation continue dans nos procédés"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-secondary" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="bg-secondary rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-secondary/20">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>

              <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-8 space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                    <ShieldCheck size={18} />
                    Notre programme phare
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                    Zéro Résidu de Pesticides <span className="text-accent">— ZRP</span>
                  </h2>
                  <p className="text-2xl font-bold text-accent italic">
                    « Notre priorité. Votre santé. »
                  </p>
                  <div className="space-y-4 text-lg text-white/90 max-w-2xl leading-relaxed">
                    <p>
                      96 % des Tunisiens s'inquiètent de la présence de pesticides dans leur alimentation. Chez SICAM, nous ne répondons pas à cette inquiétude avec des promesses — nous y répondons avec des certifications.
                    </p>
                    <p>
                      Notre programme ZRP garantit que chacun de nos produits certifiés est analysé sur plus de 615 molécules de pesticides avant d'arriver sur votre table. Aucun résidu détectable. Une traçabilité totale. Une certification internationale indépendante délivrée par le CCPB (Italie).
                    </p>
                    <p className="font-semibold text-white">
                      SICAM est la première entreprise arabe et africaine, et la première au monde pour le double concentré de tomates, à avoir obtenu cette certification.
                    </p>
                  </div>
                  <div className="pt-4">
                    <Link href="/zrp">
                      <Button variant="outline" size="lg" className="bg-white text-secondary border-white text-lg h-14 px-8">
                        Tout savoir sur le programme ZRP
                        <ArrowRight className="ml-2" size={20} />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <div className="bg-white p-8 rounded-full shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img src={logoZrp} alt="Logo ZRP" className="w-48 h-48 object-contain" />
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
