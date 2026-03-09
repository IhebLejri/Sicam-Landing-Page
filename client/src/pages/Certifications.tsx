import { useState } from "react";
import { Link } from "wouter";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { ShieldCheck, Calendar, Download, ChevronDown, ChevronUp, Users, ArrowRight, FlaskConical, BadgeCheck, Globe2 } from "lucide-react";

import certQSE from "@assets/Certifcat_QSE_1773061885565.pdf";
import certIFS from "@assets/Certificat_IFS_Food_V8_SICAM_SA_2025_1773061885566.pdf";
import certFDA from "@assets/Certificate_of_Facility_Registration_-_SOCIETE_INDUSTRIELLE_DE_1773061885566.pdf";
import certBRCGS from "@assets/SICAM_BRCGS_Certificate_2025_1773061885567.pdf";
import certVLabelFR from "@assets/V_LABEL_FR_1773061885568.pdf";

interface Certification {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  markets: string;
  history: string;
  color: string;
  icon: string;
  pdf?: string;
  pdfLabel?: string;
}

const certifications: Certification[] = [
  {
    id: "ifs",
    name: "IFS Food V8",
    subtitle: "International Featured Standards",
    description: "Le standard IFS Food évalue la sécurité et la qualité des produits alimentaires selon des critères reconnus par les principaux distributeurs d'Europe continentale — France, Allemagne, Italie, Autriche, Espagne. Il couvre l'ensemble du processus de production, de la réception des matières premières jusqu'au produit fini.",
    markets: "Europe continentale — condition de référencement chez de nombreuses enseignes françaises et allemandes.",
    history: "Certification IFS continue depuis 2003. IFS V6.1 → V7 → V8 (2025). Note obtenue : 97,22%.",
    color: "bg-blue-600",
    icon: "IFS",
    pdf: certIFS,
    pdfLabel: "Certificat IFS Food V8",
  },
  {
    id: "brcgs",
    name: "BRCGS Food Safety V9",
    subtitle: "British Retail Consortium",
    description: "Le BRCGS Food Safety est le standard de référence pour les marchés britannique et nord-européen. Il évalue la sécurité alimentaire, l'authenticité des produits, la légalité et la qualité opérationnelle selon des critères exigés par les grandes enseignes de distribution (Tesco, Sainsbury's, Marks & Spencer, etc.).",
    markets: "Royaume-Uni, Irlande, Scandinavie, marchés influencés par les standards anglosaxons.",
    history: "BRC V8 depuis 2017, passage à BRC V9 en 2022. Grade A obtenu en 2025.",
    color: "bg-blue-800",
    icon: "BRC",
    pdf: certBRCGS,
    pdfLabel: "Certificat BRCGS 2025",
  },
  {
    id: "fda",
    name: "FDA",
    subtitle: "Food and Drug Administration (États-Unis)",
    description: "Conformité aux réglementations de sécurité alimentaire américaines, notamment le Food Safety Modernization Act (FSMA). La déclaration et la conformité FDA sont obligatoires pour tout exportateur accédant au marché américain ou à des marchés exigeant l'équivalence avec les standards US.",
    markets: "États-Unis, Canada, marchés appliquant des référentiels FDA.",
    history: "FDA depuis 2014.",
    color: "bg-blue-900",
    icon: "FDA",
    pdf: certFDA,
    pdfLabel: "Certificat FDA",
  },
  {
    id: "halal",
    name: "Certification HALAL",
    subtitle: "Conformité alimentaire halal",
    description: "Conformité de nos produits aux exigences alimentaires halal — procédés de fabrication, ingrédients et additifs utilisés, absence de contamination croisée avec des substances non conformes.",
    markets: "Tunisie (marché domestique), Afrique du Nord, Moyen-Orient, communautés musulmanes en Europe et en Amérique du Nord.",
    history: "L'une des plus anciennes certifications du portefeuille — continue depuis 2003.",
    color: "bg-emerald-700",
    icon: "HAL",
  },
  {
    id: "nt",
    name: "NT — Norme Tunisienne",
    subtitle: "Institut National de la Normalisation (INNORPI)",
    description: "Conformité aux normes tunisiennes en vigueur pour les conserves alimentaires. La certification NT est le socle réglementaire national — elle atteste que nos produits respectent les standards de qualité et de sécurité définis par l'État tunisien.",
    markets: "Marché tunisien — obligatoire pour la distribution locale.",
    history: "NT depuis 2003.",
    color: "bg-red-700",
    icon: "NT",
  },
  {
    id: "ics",
    name: "ICS",
    subtitle: "Initiative pour le Commerce Durable",
    description: "L'ICS est un programme de référencement fournisseurs partagé par les grands distributeurs européens (Carrefour, Auchan, Casino, Intermarché, Système U). Il évalue les pratiques sociales et environnementales de nos sites de production selon un référentiel commun.",
    markets: "Grandes enseignes de distribution françaises et européennes — l'ICS est souvent une condition de référencement.",
    history: "ICS depuis 2017.",
    color: "bg-teal-700",
    icon: "ICS",
  },
  {
    id: "smeta",
    name: "SMETA",
    subtitle: "Sedex Members Ethical Trade Audit",
    description: "SMETA est l'audit éthique du commerce le plus utilisé au monde dans les chaînes d'approvisionnement. Il évalue nos pratiques selon 4 piliers : travail et droits des travailleurs, santé et sécurité, environnement, éthique des affaires.",
    markets: "Clients et partenaires avec des engagements RSE stricts — notamment en Europe du Nord, au Royaume-Uni, en Amérique du Nord.",
    history: "SMETA depuis 2024.",
    color: "bg-purple-700",
    icon: "SME",
  },
  {
    id: "bsci",
    name: "Amfori BSCI",
    subtitle: "Business Social Compliance Initiative",
    description: "L'Amfori BSCI est un programme de conformité sociale basé sur les conventions de l'OIT et les droits humains fondamentaux. Il audite les conditions de travail, la liberté d'association, la non-discrimination, la protection des travailleurs vulnérables et les pratiques éthiques. En 2025, SICAM a réalisé un audit complet avec des résultats jugés excellents.",
    markets: "Reconnaissance internationale des pratiques sociales — exigé par de nombreuses enseignes d'Europe du Nord et partenaires engagés RSE.",
    history: "Amfori BSCI depuis 2021 ; nouvel audit réalisé en 2025.",
    color: "bg-orange-700",
    icon: "BSC",
  },
  {
    id: "vlabel",
    name: "V-Label",
    subtitle: "Certification Végane — Union Végane Européenne",
    description: "Le V-Label est le label végane et végétarien de référence en Europe. Il certifie qu'un produit ne contient ni ingrédient d'origine animale, selon des critères vérifiés par audit. Pour nos produits à base de tomate, cette certification ouvre des opportunités de référencement supplémentaires.",
    markets: "Europe occidentale, Amérique du Nord, consommateurs véganes et flexitariens.",
    history: "V-Label obtenu en 2025 — nouvelle certification.",
    color: "bg-green-700",
    icon: "V",
    pdf: certVLabelFR,
    pdfLabel: "Certificat V-Label (FR)",
  },
  {
    id: "qse",
    name: "QSE",
    subtitle: "Management Qualité, Sécurité, Environnement",
    description: "Le système de management QSE intègre trois dimensions complémentaires : la qualité (normes de gestion et de production), la sécurité des personnes (conditions de travail, prévention des risques), et l'environnement (empreinte écologique, gestion des ressources). Il couvre l'ensemble des activités SICAM.",
    markets: "Applicable à tous les marchés — cette certification démontre une maturité organisationnelle globale.",
    history: "QSE obtenu en 2025 — nouvelle certification.",
    color: "bg-slate-700",
    icon: "QSE",
    pdf: certQSE,
    pdfLabel: "Certificat QSE",
  },
];

const timeline = [
  { period: "2003 — 2006", title: "Les premières certifications", items: ["NT (Norme Tunisienne)", "HALAL", "Label qualité local"] },
  { period: "2010 — 2013", title: "Ouverture internationale", items: ["IFS V7", "BRC V8", "HALAL, NT (renouvelés)", "FDA (première obtention)"] },
  { period: "2014 — 2016", title: "Consolidation export", items: ["IFS V6.1", "FDA, HALAL, NT (renouvelés)"] },
  { period: "2017 — 2018", title: "Engagement social et qualité intégrée", items: ["ICS (première obtention)", "Amfori BSCI (première obtention)", "ISO 22000 V2005", "IFS V6.1, HALAL, NT (renouvelés)"] },
  { period: "2019 — 2020", title: "Passage aux versions supérieures", items: ["IFS V7 (montée de version)", "FDA, HALAL, NT (renouvelés)"] },
  { period: "2021 — 2022", title: "Exigence croissante", items: ["IFS V7, BRC V8 → BRC V9 (montée de version)", "FDA, HALAL, NT, ICS (renouvelés)"] },
  { period: "2023 — 2024", title: "Excellence opérationnelle", items: ["IFS V7, BRC V9, FDA, HALAL, NT, ICS (renouvelés)", "SMETA (première obtention)", "Certification ZRP — CCPB (première obtention)"] },
  { period: "2025", title: "Le portefeuille le plus complet", items: ["IFS V8 (note : 97,22%)", "BRCGS V9 (Grade A)", "QSE (première obtention)", "V-Label (première obtention)", "10 certifications actives simultanément"] },
];

function CertCard({ cert, index }: { cert: Certification; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <FadeIn delay={Math.min(index * 0.08, 0.5)} direction="up">
      <div
        className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col"
        data-testid={`cert-card-${cert.id}`}
      >
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-start gap-4 mb-4">
            <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center text-white font-black text-xs flex-shrink-0", cert.color)}>
              {cert.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg text-foreground leading-snug" data-testid={`cert-name-${cert.id}`}>
                {cert.name}
              </h3>
              <p className="text-sm text-slate-500 mt-0.5">{cert.subtitle}</p>
            </div>
          </div>

          <p className={cn("text-sm text-slate-600 leading-relaxed mb-3", !expanded && "line-clamp-3")}>
            {cert.description}
          </p>

          {expanded && (
            <div id={`cert-details-${cert.id}`} className="space-y-3 mb-3 animate-fade-in-up">
              <div className="flex items-start gap-2">
                <Globe2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wide">Marchés concernés</p>
                  <p className="text-sm text-slate-600">{cert.markets}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Calendar size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wide">Historique SICAM</p>
                  <p className="text-sm text-slate-600">{cert.history}</p>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-primary text-sm font-semibold hover:underline mt-auto"
            data-testid={`cert-toggle-${cert.id}`}
            aria-expanded={expanded}
            aria-controls={`cert-details-${cert.id}`}
          >
            {expanded ? "Voir moins" : "En savoir plus"}
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {cert.pdf && (
          <div className="border-t border-slate-100 px-6 py-3">
            <a
              href={cert.pdf}
              download
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
              data-testid={`cert-download-${cert.id}`}
            >
              <Download size={16} />
              {cert.pdfLabel || "Télécharger le certificat"}
            </a>
          </div>
        )}
      </div>
    </FadeIn>
  );
}

export default function Certifications() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-primary/95 to-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeIn>
            <p className="text-sm md:text-base font-bold tracking-widest text-white/50 uppercase mb-4">
              Plus de 20 ans d'exigence. Sans interruption.
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight" data-testid="certifications-title">
              Certifications & Labels — Chaque logo est un engagement tenu
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              Une certification, ça se mérite chaque année. Un auditeur indépendant vient vérifier que ce que nous promettons correspond à ce que nous faisons — sans indulgence, sans faveur. Depuis 2003, notre portefeuille de certifications n'a cessé de s'élargir. En 2025, SICAM détient simultanément les certifications les plus exigeantes du secteur agroalimentaire international.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "+20 ans", label: "De certifications internationales", sub: "Maintenues sans interruption depuis 2003", icon: Calendar },
              { value: "10", label: "Certifications et labels actifs", sub: "Simultanément en 2025 (hors ZRP)", icon: BadgeCheck },
              { value: "~1 000", label: "Analyses qualité / jour", sub: "Dans notre laboratoire interne", icon: FlaskConical },
              { value: "3", label: "Audits sociaux majeurs", sub: "Réalisés en 2025, résultats excellents", icon: Users },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up" className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
                  <stat.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-foreground mb-1" data-testid={`stat-value-${i}`}>{stat.value}</h3>
                <p className="text-sm font-bold text-slate-800">{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" data-testid="certifications-grid">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">
              Nos certifications actives en 2025
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-4" />
            <p className="text-slate-600 max-w-3xl mb-10">
              10 certifications et labels actifs simultanément — en matière de sécurité alimentaire, de qualité, de responsabilité sociale et d'impact environnemental.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} index={i} />
            ))}
          </div>

          <FadeIn>
            <div className="mt-12 p-6 rounded-2xl bg-secondary/5 border border-secondary/10 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={28} className="text-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-secondary">Certification ZRP — Zéro Résidu de Pesticides</h3>
                <p className="text-sm text-slate-600">La certification ZRP dispose de sa propre page dédiée avec tous les détails du programme.</p>
              </div>
              <Link href="/zrp" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-white text-sm font-semibold hover:bg-secondary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50" data-testid="link-zrp-page">
                Découvrir le ZRP
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white" data-testid="social-audits-section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="right">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">
                Audits sociaux 2025 : l'humain au cœur de nos priorités
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full mb-6" />
              <h3 className="text-xl font-bold text-primary mb-4">
                En 2025, trois audits sociaux majeurs. Des résultats excellents.
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  En 2025, à la demande de nos clients partenaires, SICAM a soumis ses pratiques sociales à trois audits indépendants. Ces audits visaient à évaluer notre conformité aux normes internationales en matière de droits humains, conditions de travail, santé et sécurité, respect de l'environnement et éthique professionnelle.
                </p>
                <p>
                  Les résultats ont été jugés excellents par les équipes d'auditeurs. Ces évaluations externes confirment ce que nous plaçons au cœur de notre fonctionnement quotidien : nos collaborateurs — 2 800 permanents et saisonniers — méritent un environnement de travail sûr, équitable et respectueux.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="space-y-4">
                <h4 className="text-sm font-bold tracking-widest text-slate-500 uppercase">Les quatre axes évalués</h4>
                {[
                  "Le respect strict de la législation sociale et du droit du travail tunisien et international",
                  "L'engagement de l'entreprise pour des conditions de travail sûres, équitables et inclusives",
                  "La mise en place de pratiques éthiques et responsables dans toute la chaîne de valeur",
                  "Une communication transparente et des relations de confiance avec l'ensemble des parties prenantes",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-background">
                    <BadgeCheck size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-slate-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <h4 className="text-sm font-bold tracking-widest text-slate-500 uppercase">Les trois programmes d'audit</h4>
                {[
                  { name: "Amfori BSCI", desc: "Conformité sociale basée sur les conventions de l'OIT et les droits humains fondamentaux." },
                  { name: "SMETA", desc: "Audit éthique selon les 4 piliers : travail, santé & sécurité, environnement, éthique des affaires." },
                  { name: "ICS", desc: "Audit RSE partagé par les grands distributeurs européens." },
                ].map((audit, i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-100 bg-white">
                    <p className="font-bold text-foreground text-sm">{audit.name}</p>
                    <p className="text-xs text-slate-500 mt-1">{audit.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" data-testid="timeline-section">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">
              L'exigence ne date pas d'hier.
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-4" />
            <p className="text-slate-600 max-w-3xl mb-12">
              Ce que vous voyez sur nos produits aujourd'hui est le résultat d'un processus continu engagé depuis plus de vingt ans. Chaque certification obtenue est une étape supplémentaire vers notre objectif : être le partenaire agroalimentaire le plus fiable et le plus transparent du marché.
            </p>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-translate-x-px" />

            {timeline.map((entry, i) => (
              <FadeIn key={i} delay={Math.min(i * 0.1, 0.6)} direction={i % 2 === 0 ? "right" : "left"}>
                <div className={cn(
                  "relative flex items-start mb-8 last:mb-0",
                  "md:justify-start",
                  i % 2 !== 0 && "md:flex-row-reverse"
                )}>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm -translate-x-1/2 mt-1 z-10" />

                  <div className={cn(
                    "ml-12 md:ml-0 md:w-[45%]",
                    i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  )}>
                    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm" data-testid={`timeline-${i}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">{entry.period}</span>
                      </div>
                      <h4 className="font-bold text-foreground mb-2">{entry.title}</h4>
                      <ul className="space-y-1">
                        {entry.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
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
