import { ArrowRight, Droplets, Leaf, Sprout, ShieldCheck, Microscope, Search, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

import heroBanner from '@assets/zrp_aff-01_1772017659058.png';
import logoZrp from '@assets/Asset_3@2x_1772017659058.png';
import logoZrpAlt from '@assets/zrp_1772017659059.png';
import imgTC from '@assets/ZRP_TC_1772025754847.png';
import imgTPC from '@assets/TPC_ZRP_1772025754847.png';
import imgTPE from '@assets/TPE_ZRP_1772025754847.png';

export default function ZRP() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Section 1: Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBanner} 
            alt="Champs de tomates SICAM ZRP" 
            className="w-full h-full object-cover object-center"
          />
          {/* Green-tinted dark overlay for ZRP theme */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/70 to-background"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center mt-10">
          <FadeIn>
            <img src={logoZrpAlt} alt="ZRP Logo" className="h-32 md:h-48 mx-auto mb-8 drop-shadow-2xl" />
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight mb-6">
              Zéro Résidu de Pesticides
              <span className="block text-accent mt-2 text-3xl md:text-5xl">Du champ à votre assiette</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: What is ZRP */}
      <section className="py-20 relative z-20 -mt-10">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl border border-slate-100 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                Que signifie "Zéro Résidu de Pesticides" ?
              </h2>
              <div className="text-lg md:text-xl text-slate-600 leading-relaxed space-y-6">
                <p>
                  Le label ZRP garantit que nos tomates contiennent moins de <strong className="text-secondary">0.01 mg/kg</strong> de résidus de pesticides quantifiables. 
                </p>
                <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20 my-8">
                  <Droplets className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <p className="font-medium text-slate-800">
                    Pour vous donner une idée, 0.01 mg/kg équivaut à retrouver <strong className="text-primary">l'équivalent d'un morceau de sucre dissous dans une piscine olympique</strong> !
                  </p>
                </div>
                <p>
                  C'est la limite de quantification la plus basse que les laboratoires accrédités peuvent détecter aujourd'hui. C'est notre engagement absolu pour la pureté de nos produits.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 3: Products */}
      <section id="produits" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">Notre Gamme</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-foreground">
              Les produits certifiés ZRP
            </h3>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre sélection de produits bénéficiant du label Zéro Résidu de Pesticides.
              <br/><span className="text-xs italic">(Note: L'Harissa et la Confiture ne sont pas encore concernées par cette certification)</span>
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Tomates Pelées Concassées", img: imgTC },
              { name: "Tomates Pelées en Cubes", img: imgTPC },
              { name: "Tomates Entières Pelées", img: imgTPE },
            ].map((product, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                  <div className="w-full aspect-square rounded-2xl bg-slate-50 mb-6 flex items-center justify-center p-4 overflow-hidden">
                    <img src={product.img} alt={product.name} className="max-w-full max-h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 text-center">{product.name}</h4>
                  <div className="mt-4 flex justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
                      <CheckCircle2 size={14} /> Certifié ZRP
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Agronomic principles */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-foreground text-center">
              Nos principes agronomiques
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Rotation des cultures", icon: Droplets, desc: "Alternance stratégique pour préserver la richesse des sols et rompre le cycle des ravageurs naturally." },
              { title: "Variétés résistantes", icon: Leaf, desc: "Sélection de plants naturellement robustes, nécessitant moins d'interventions." },
              { title: "Profil écotoxicologique", icon: Sprout, desc: "Utilisation exclusive de produits de biocontrôle à faible impact environnemental." },
              { title: "Désherbage mécanique", icon: Search, desc: "Privilégier les méthodes mécaniques aux solutions chimiques pour le contrôle des mauvaises herbes." },
              { title: "Semences certifiées", icon: ShieldCheck, desc: "Origine contrôlée et tracée de chaque graine plantée dans nos champs." },
              { title: "Analyses de sols", icon: Microscope, desc: "Contrôle régulier de la qualité et de la pureté des terres agricoles." },
            ].map((principle, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="h-full bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-shadow hover:border-secondary/30 group">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                    <principle.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{principle.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{principle.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Commitments */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Nos 6 Engagements
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Une démarche encadrée et certifiée à chaque étape.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "1", title: "Sélection rigoureuse", text: "Des agriculteurs partenaires engagés dans la démarche." },
              { n: "2", title: "Accompagnement", text: "Un suivi technique par nos ingénieurs agronomes au quotidien." },
              { n: "3", title: "Transparence CCPB", text: "Certification par un organisme indépendant et reconnu internationalement." },
              { n: "4", title: "Traçabilité totale", text: "Du numéro de lot jusqu'à la parcelle exacte de culture." },
              { n: "5", title: "Analyses systématiques", text: "Sur 615 molécules avant l'acceptation de la récolte." },
              { n: "6", title: "Zéro résidu", text: "La garantie d'un produit sain, avec < 0.01 mg/kg de pesticides." },
            ].map((commit, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-full flex gap-4">
                  <div className="text-4xl font-display font-black text-accent opacity-50">{commit.n}</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{commit.title}</h4>
                    <p className="text-white/80 text-sm leading-relaxed">{commit.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-black text-foreground">
              De la graine à l'assiette
            </h2>
          </FadeIn>

          <div className="relative border-l-4 border-slate-100 ml-4 md:ml-12 space-y-12 pb-8">
            {[
              { step: "1", title: "Choix des parcelles", desc: "Sélection des terres vierges de tout traitement rémanent." },
              { step: "2", title: "Plantation contrôlée", desc: "Utilisation exclusive de semences approuvées par notre cahier des charges." },
              { step: "3", title: "Suivi cultural", desc: "Interventions mécaniques et produits de biocontrôle uniquement." },
              { step: "4", title: "Analyses pré-récolte", desc: "Prélèvements sur champs et analyses en laboratoire indépendant." },
              { step: "5", title: "Transformation isolée", desc: "Lignes de production dédiées pour éviter toute contamination croisée." },
              { step: "6", title: "Produit fini certifié", desc: "Dernier contrôle et apposition du macaron ZRP sur nos boîtes." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="left">
                <div className="relative pl-8 md:pl-16">
                  {/* Node */}
                  <div className="absolute -left-[22px] top-1 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold shadow-lg ring-4 ring-white">
                    {item.step}
                  </div>
                  {/* Content */}
                  <div className="bg-slate-50 rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
