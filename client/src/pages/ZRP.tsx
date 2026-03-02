import { Link } from "wouter";
import { ArrowRight, Droplets, Leaf, Sprout, ShieldCheck, Microscope, Search, CheckCircle2, Award, Users, FlaskConical, ScanSearch, FileCheck, Globe2, Download, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

import heroBanner from '@assets/zrp_aff-01_1772017659058.png';
import logoZrp from '@assets/Asset_3@2x_1772017659058.png';
import logoZrpAlt from '@assets/zrp_1772017659059.png';
import imgTC from '@assets/ZRP_TC_1772025754847.png';
import imgTPC from '@assets/TPC_ZRP_1772025754847.png';
import imgTPE from '@assets/TPE_ZRP_1772025754847.png';

export default function ZRP() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Section 1 — Hero */}
      <section className="relative min-h-[90vh] flex overflow-hidden pt-20">
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Left panel — text on solid green */}
          <div className="lg:w-[50%] bg-secondary flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12 lg:py-0">
            <FadeIn>
              <img src={logoZrpAlt} alt="ZRP Logo" className="h-20 md:h-28 mb-6 drop-shadow-2xl" data-testid="zrp-logo" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white leading-tight mb-6" data-testid="hero-title">
                Un modèle résilient, respectueux des sols, et intransigeant sur la pureté du produit final.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Depuis 1969, SICAM cultive l'excellence à la tunisienne. Aujourd'hui, nous franchissons une nouvelle étape : la certification ZRP — Zéro Résidu de Pesticides — pour vous offrir des tomates aussi saines que savoureuses, à chaque boîte.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white text-sm font-medium mb-6" data-testid="badge-ccpb">
                <Award size={16} className="text-accent" />
                Certifié ZRP par CCPB · Reconnu dans 45 pays
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-3 mb-8">
                <a href="#demarche">
                  <Button size="lg" className="gap-2 h-12 px-6 bg-white text-secondary hover:bg-white/90" data-testid="cta-demarche">
                    Découvrir notre démarche
                    <ArrowRight size={18} />
                  </Button>
                </a>
                <a href="#certificat">
                  <Button size="lg" variant="outline" className="gap-2 h-12 px-6 text-white border-white/30 hover:bg-white/10" data-testid="cta-certificat">
                    Voir le certificat
                  </Button>
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="border-l-4 border-accent pl-4">
                <p className="text-sm text-white/80 leading-relaxed italic">
                  S'engager dans la troisième voie de l'agriculture, c'est repenser notre métier à la racine. Le Zéro Résidu de Pesticides exige une agronomie de précision, de la prévention et du biocontrôle. C'est l'union parfaite entre la santé, la terre et l'innovation agricole.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right panel — image */}
          <div className="lg:w-[50%] relative bg-[#5a1020]">
            <img
              src={heroBanner}
              alt="Champs de tomates SICAM ZRP"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Section 2 — Notre histoire : pourquoi le ZRP est né */}
      <section id="demarche" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Notre Histoire</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-foreground" data-testid="section-histoire-title">
              Pourquoi le ZRP est né
            </h3>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Tout commence par une question simple, posée par nos équipes il y a plusieurs années : <strong className="text-foreground">comment faire mieux pour la santé des consommateurs ?</strong>
                </p>
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 mb-6">
                  <p className="text-3xl md:text-4xl font-black text-primary text-center mb-2">96 %</p>
                  <p className="text-center text-slate-600">des Tunisiens déclarent s'inquiéter de l'impact des pesticides sur leur alimentation.</p>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Ce chiffre n'est pas une statistique abstraite pour nous. Ce sont nos voisins, nos familles, nos clients. Et cette inquiétude méritait une réponse concrète — une action réelle, mesurable, certifiée.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-secondary/5 rounded-3xl p-8 md:p-10 border border-secondary/10">
                <h4 className="text-xl font-bold text-foreground mb-4">Le tournant</h4>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Après des années de recherche, d'innovation agronomique et de travail main dans la main avec nos agriculteurs partenaires, SICAM a développé le programme ZRP : une démarche complète, de la graine au produit fini, visant à garantir zéro résidu détectable de pesticides dans l'ensemble de sa gamme de tomates.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-accent/5 rounded-3xl p-8 md:p-10 border border-accent/20">
                <h4 className="text-xl font-bold text-foreground mb-4">Une position historique</h4>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  SICAM est aujourd'hui <strong className="text-foreground">la première entreprise tunisienne du secteur de la tomate</strong> à avoir initié cette transformation agricole. Une première à l'échelle arabe et africaine. Et une pionnière à l'échelle mondiale.
                </p>
                <blockquote className="border-l-4 border-accent pl-6 text-lg font-medium text-foreground italic">
                  Le Zéro Résidu de Pesticides n'est pas un argument marketing, c'est notre boussole. Parce qu'on ne fait aucun compromis avec la pureté de ce que l'on vous sert.
                  <br /><br />
                  Exiger le Zéro Résidu de Pesticides, c'est faire le choix de l'agriculture de demain dès aujourd'hui. C'est un engagement profond envers nos terres, nos agriculteurs partenaires, et la santé de nos consommateurs à travers le monde.
                </blockquote>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 3 — Qu'est-ce que le ZRP ? */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Définition</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-foreground" data-testid="section-definition-title">
              Qu'est-ce que le ZRP ?
            </h3>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 text-center mb-8">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                Le ZRP — Zéro Résidu de Pesticides — est une certification qui garantit que les produits alimentaires ne contiennent aucun résidu détectable de pesticides au-delà d'un seuil extrêmement bas : <strong className="text-secondary text-2xl">0,01 mg/kg</strong>.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Cela ne signifie pas nécessairement qu'aucun pesticide n'a été utilisé au cours de la culture. Cela signifie que si aucune molécule n'est détectée au-delà de ce seuil, le produit est déclaré conforme ZRP.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-secondary/10 rounded-3xl p-8 md:p-10 border border-secondary/20 text-center mb-8">
              <Droplets className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-3">Pour mieux comprendre : l'analogie de la piscine</h4>
              <p className="text-lg text-slate-700 leading-relaxed">
                0,01 mg/kg, c'est l'équivalent de 10 microgrammes par litre — soit <strong className="text-primary">5 petites cuillères de sucre dissoutes dans une piscine olympique entière</strong> (2 500 000 litres). C'est dire à quel point ce seuil est rigoureux.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "0,01", unit: "mg/kg", label: "Seuil de détection" },
                { value: "5", unit: "cuillères", label: "Dans une piscine olympique" },
                { value: "615+", unit: "", label: "Molécules testées" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-slate-100">
                  <p className="text-2xl md:text-3xl font-black text-secondary">{stat.value}<span className="text-sm font-medium text-slate-500 ml-1">{stat.unit}</span></p>
                  <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 4 — Notre processus ZRP en 5 étapes */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <FadeIn className="text-center mb-6">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Notre Processus</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-foreground" data-testid="section-processus-title">
              Le parcours ZRP en 5 étapes
            </h3>
          </FadeIn>
          <FadeIn delay={0.1} className="text-center mb-16">
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              La certification ZRP n'est pas le résultat d'un contrôle ponctuel. C'est le fruit d'un processus rigoureux qui commence bien avant la récolte et se termine seulement lorsque le produit est prêt à vous rejoindre.
            </p>
          </FadeIn>

          <div className="relative border-l-4 border-secondary/20 ml-4 md:ml-12 space-y-10 pb-4">
            {[
              {
                step: "01",
                icon: Sprout,
                title: "Sélection des semences et des champs",
                desc: "Tout commence par le choix des semences et des parcelles agricoles. SICAM sélectionne rigoureusement les variétés de tomates et les zones de culture pour garantir dès le départ une production respectueuse de l'environnement et propice à la réduction des intrants chimiques.",
              },
              {
                step: "02",
                icon: Users,
                title: "Accompagnement des agriculteurs partenaires",
                desc: "Nos agriculteurs ne sont pas de simples fournisseurs. Ce sont des partenaires. SICAM les accompagne et les forme pour adopter une utilisation raisonnée et contrôlée des pesticides : appliquer uniquement ce qui est nécessaire, au bon moment, dans les bonnes proportions.",
              },
              {
                step: "03",
                icon: FlaskConical,
                title: "Analyses sur plus de 615 molécules",
                desc: "Avant toute mise sur le marché, chaque lot de tomates est soumis à des analyses laboratoire approfondies. Plus de 615 molécules de pesticides différentes sont recherchées. Le seuil de tolérance est fixé à 0,01 mg/kg. Si une molécule dépasse ce seuil — même infime — le lot ne peut pas être commercialisé sous la certification ZRP.",
              },
              {
                step: "04",
                icon: ScanSearch,
                title: "Traçabilité complète, du champ à la boîte",
                desc: "Chaque étape de la chaîne de production est documentée et traçable : la parcelle d'origine, les traitements appliqués, les dates de récolte, les résultats d'analyse, les conditions de transformation. Cette traçabilité totale vous garantit que la tomate que vous achetez a un parcours connu et maîtrisé.",
              },
              {
                step: "05",
                icon: FileCheck,
                title: "Certification par un organisme indépendant",
                desc: "La conformité ZRP n'est pas auto-déclarée. Elle est validée et certifiée par CCPB (Italie), organisme de certification internationale totalement indépendant de SICAM. Une garantie objective, délivrée par un tiers reconnu dans 45 pays.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="left">
                <div className="relative pl-8 md:pl-16">
                  <div className="absolute -left-[22px] top-1 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white text-sm font-bold shadow-lg ring-4 ring-white">
                    {item.step}
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="text-secondary" size={22} />
                      <h4 className="text-xl font-bold text-slate-800">{item.title}</h4>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Les 6 engagements ZRP */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4" data-testid="section-engagements-title">
              Nos 6 Engagements
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="text-center mb-16">
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Le programme ZRP repose sur six engagements concrets que SICAM a choisi d'inscrire dans son modèle industriel et agricole. Pas des intentions — des pratiques quotidiennes, vérifiables, certifiées.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "01", title: "Sélection rigoureuse des semences et des champs", text: "Chaque parcelle et chaque variété de semence est sélectionnée selon des critères précis de compatibilité avec la démarche ZRP, pour une culture respectueuse de l'environnement dès la source." },
              { n: "02", title: "Accompagnement de nos agriculteurs partenaires", text: "SICAM s'engage à former, guider et soutenir ses agriculteurs dans une utilisation raisonnée, encadrée et contrôlée des pesticides. L'objectif : réduire les intrants au strict minimum nécessaire." },
              { n: "03", title: "Transparence totale", text: "La certification ZRP est délivrée par un organisme indépendant — CCPB — qui audite nos pratiques et valide nos résultats. Aucune complaisance, aucun conflit d'intérêt." },
              { n: "04", title: "Traçabilité complète", text: "De la graine à la boîte, chaque maillon de notre chaîne est documenté, traçable et contrôlable. Vous pouvez avoir confiance dans l'origine et la qualité de ce que vous consommez." },
              { n: "05", title: "Analyses systématiques sur plus de 615 molécules", text: "Avant toute mise sur le marché, nos produits sont systématiquement analysés sur un panel de plus de 615 molécules de pesticides. C'est l'une des veilles analytiques les plus exigeantes du secteur." },
              { n: "06", title: "Zéro résidu détectable", text: "L'objectif final est clair : aucun résidu de pesticides détectable dans nos tomates ni dans nos produits finis, au-delà du seuil de 0,01 mg/kg." },
            ].map((commit, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-full">
                  <div className="text-4xl font-display font-black text-accent/50 mb-3">{commit.n}</div>
                  <h4 className="text-lg font-bold mb-3">{commit.title}</h4>
                  <p className="text-white/80 text-sm leading-relaxed">{commit.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — ZRP en chiffres */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">En Chiffres</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-foreground" data-testid="section-chiffres-title">
              ZRP en chiffres
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "615+", label: "molécules de pesticides", sub: "analysées à chaque lot", color: "text-secondary" },
              { value: "0,01", label: "mg/kg", sub: "seuil de détection — l'un des plus bas au monde", color: "text-primary" },
              { value: "74 %", label: "des agriculteurs partenaires", sub: "engagés dans la démarche ZRP en 2025", color: "text-secondary" },
              { value: "100 %", label: "l'objectif", sub: "d'approvisionnement ZRP fixé à l'horizon 2030", color: "text-primary" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                  <p className={cn("text-5xl md:text-6xl font-black mb-2", stat.color)}>{stat.value}</p>
                  <p className="text-lg font-bold text-slate-800">{stat.label}</p>
                  <p className="text-sm text-slate-500 mt-1">{stat.sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — La certification CCPB */}
      <section id="certificat" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">La Certification</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-foreground" data-testid="section-certification-title">
              Qui garantit nos tomates ?
            </h3>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  La certification ZRP de SICAM est délivrée par <strong className="text-foreground">CCPB — Controllo e Certificazione Prodotti Biologici</strong> — un organisme italien d'inspection et de certification fondé en 1988, reconnu à l'échelle internationale comme référence en matière de certification agroalimentaire et biologique.
                </p>

                <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
                  <h4 className="text-lg font-bold text-foreground">Qui est CCPB ?</h4>
                  <ul className="space-y-3">
                    {[
                      "Fondé en 1988/1989 en Italie, dans le secteur biologique et éco-responsable",
                      "Autorisé par le MIPAAF — Ministère italien de l'Agriculture",
                      "Reconnu dans 45 pays (États-Unis, Japon, Canada, Allemagne, France, Brésil, Corée…)",
                      "Certifications : BRCGS, IFS, FSSC 22000",
                      "Présent en Tunisie via un réseau de filiales méditerranéennes",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="text-secondary mt-0.5 flex-shrink-0" size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 border border-slate-200">
                  <h4 className="text-lg font-bold text-foreground mb-4">Notre certificat</h4>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Le certificat CCPB n° 02/2025/10, émis le 21 août 2025, couvre l'ensemble des produits phares de la gamme SICAM :
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Tomates pelées cubées",
                      "Double concentré de tomate",
                      "Tomates pelées entières",
                      "Pulpe de tomate",
                    ].map((product, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                        <ShieldCheck className="text-secondary" size={16} />
                        {product}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    Tous conformes à la norme DTP 10 rev. 05 — « Produits agricoles et agroalimentaires végétaux avec réduction de 100 % des Limites Maximales des Résidus des produits phytosanitaires » — pour les activités de Production, Transformation et Commercialisation.
                  </p>
                  <Button className="w-full gap-2" size="lg" data-testid="btn-download-certificat">
                    <Download size={18} />
                    Télécharger le certificat CCPB (PDF)
                  </Button>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-200 flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <img src={logoZrp} alt="Logo ZRP" className="w-14 h-14 object-contain" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Certification indépendante</p>
                    <p className="text-sm text-slate-500">Validée par CCPB, organisme reconnu dans 45 pays, totalement indépendant de SICAM.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 8 — Call to action final */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-4xl text-center">
          <FadeIn>
            <img src={logoZrp} alt="Logo ZRP" className="w-24 h-24 mx-auto mb-8 drop-shadow-xl" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-display font-black leading-tight mb-6" data-testid="cta-final-title">
              Notre démarche Zéro Résidu de Pesticides est née d'une double évidence : protéger la richesse de la terre et garantir l'authenticité absolue du goût.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-white/90 mb-4 leading-relaxed">
              SICAM est fière d'être pionnière de cette démarche en Tunisie et en Afrique. Mais notre ambition est de faire de ce standard une norme accessible à tous et d'atteindre <strong className="text-accent">100 % d'approvisionnement ZRP d'ici 2030</strong>.
            </p>
            <p className="text-2xl font-bold text-accent italic mb-10">
              Rejoignez SICAM pour un avenir sans résidus.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-bold mb-4 text-accent">Consommateurs</h4>
                <div className="flex flex-col gap-3">
                  <Button size="lg" className="bg-white text-secondary hover:bg-white/90 w-full gap-2" data-testid="cta-produits">
                    <MapPin size={18} />
                    Trouver nos produits ZRP
                  </Button>
                  <a href="#demarche">
                    <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full gap-2" data-testid="cta-en-savoir-plus">
                      En savoir plus sur notre démarche
                    </Button>
                  </a>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-bold mb-4 text-accent">Importateurs / B2B</h4>
                <div className="flex flex-col gap-3">
                  <Button size="lg" className="bg-white text-secondary hover:bg-white/90 w-full gap-2" data-testid="cta-download">
                    <Download size={18} />
                    Télécharger notre certificat CCPB
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full gap-2" data-testid="cta-contact">
                    <Mail size={18} />
                    Contacter notre équipe export
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
