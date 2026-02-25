import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Leaf, ShieldCheck, Globe2, Award, TestTube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

// Assets
import heroBanner from '@assets/zrp_aff-01_1772017659058.png';
import logoZrp from '@assets/Asset_3@2x_1772017659058.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Section 1: Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBanner} 
            alt="Champs de tomates SICAM" 
            className="w-full h-full object-cover object-center"
          />
          {/* Deep gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <FadeIn delay={0.1}>
              <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-white backdrop-blur-md border border-white/10 text-sm font-semibold tracking-wider mb-6 uppercase">
                Depuis 1969, l'excellence tunisienne à votre table
              </span>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[1.1] mb-6 text-balance">
                La tomate tunisienne, cultivée <span className="text-secondary">proprement.</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-xl md:text-2xl text-white/90 mb-2 font-medium">
                Nous avons fait le choix de la transparence.
              </p>
              <p className="text-xl text-white/80 mb-10">
                Notre priorité. Votre santé.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4">
              <Link href="/zrp">
                <Button size="lg" className="w-full sm:w-auto text-lg gap-2">
                  Découvrir notre engagement ZRP
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Button size="lg" variant="white" className="w-full sm:w-auto text-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border-white/20 border">
                En savoir plus sur SICAM
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 2: Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {[
              { value: "1969", label: "Fondation", sub: "+55 ans d'expertise", icon: Award },
              { value: "+60%", label: "Part de marché", sub: "Leader en Tunisie", icon: Globe2 },
              { value: "1ère", label: "Entreprise", sub: "Certifiée ZRP", icon: ShieldCheck },
              { value: "+30", label: "Pays", sub: "D'exportation", icon: Globe2 },
              { value: "100%", label: "Origine", sub: "Tomates fraîches", icon: Leaf },
              { value: "615", label: "Molécules", sub: "Analysées", icon: TestTube },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up" className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center text-primary mb-4 shadow-sm">
                  <stat.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-4xl font-display font-black text-foreground mb-1">{stat.value}</h3>
                <p className="text-sm font-bold text-slate-800">{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: About */}
      <section id="histoire" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              {/* Using a structural abstract layout since no specific about image was provided, but making it look beautiful */}
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
                {/* Floating badge */}
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl max-w-xs hidden md:block">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <CheckCircle2 size={24} />
                    </div>
                    <span className="font-display font-bold text-lg">Qualité Garantie</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Une sélection rigoureuse des meilleures graines pour une saveur authentique.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="space-y-6">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Notre Histoire</h2>
              <h3 className="text-4xl md:text-5xl font-display font-black text-foreground leading-tight">
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

      {/* Section 4: ZRP Focus */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="bg-secondary rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-secondary/20">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-8 space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                    <ShieldCheck size={18} />
                    Innovation 2024
                  </div>
                  <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                    Zéro Résidu de Pesticides <span className="text-accent">— ZRP</span>
                  </h2>
                  <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                    SICAM est fière d'être la première entreprise de conserve en Tunisie à proposer une gamme de produits certifiés "Zéro Résidu de Pesticides". Une garantie absolue pour votre santé.
                  </p>
                  <div className="pt-4">
                    <Link href="/zrp">
                      <Button variant="white" size="lg" className="text-secondary hover:bg-accent hover:text-secondary-foreground text-lg h-14 px-8">
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
