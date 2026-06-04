import { Link } from "wouter";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { ArrowRight, Users, Calendar, ShieldCheck, Leaf, Droplets, Sprout, Globe2 } from "lucide-react";

import certQSE from "@assets/Certifcat_QSE_1773061885565.pdf";
import certIFS from "@assets/Certificat_IFS_Food_V8_SICAM_SA_2025_1773061885566.pdf";
import certFDA from "@assets/Certificate_of_Facility_Registration_-_SOCIETE_INDUSTRIELLE_DE_1773061885566.pdf";
import certBRCGS from "@assets/SICAM_BRCGS_Certificate_2025_1773061885567.pdf";
import certVLabelFR from "@assets/V_LABEL_FR_1773061885568.pdf";
import certZRP from "@assets/Certification_ZRP_1780068144758.pdf";

interface Certification {
  id: string;
  name: string;
  history: string;
  markets: string;
  pdf?: string;
}

const certifications: Certification[] = [
  {
    id: "qse",
    name: "QSE (ISO 9001/ISO 45001 et ISO 14001)",
    history: "Obtenu en 2025",
    markets: "Tous marchés",
    pdf: certQSE,
  },
  {
    id: "ifs",
    name: "IFS FOOD V8",
    history: "Depuis 2019 — Note 97,22%",
    markets: "Europe continentale",
    pdf: certIFS,
  },
  {
    id: "zrp",
    name: "ZRP",
    history: "Certification CCPB N° 02/2025/10",
    markets: "Tous marchés",
    pdf: certZRP,
  },
  {
    id: "brcgs",
    name: "BRC FOOD SAFETY V9",
    history: "V8 depuis 2021 · V9 en 2023 · Grade A 2025",
    markets: "Royaume-Uni & marchés anglosaxons",
    pdf: certBRCGS,
  },
  {
    id: "vlabel",
    name: "V-LABEL VÉGANE",
    history: "Obtenu en 2025",
    markets: "Europe occidentale · Amérique du Nord",
    pdf: certVLabelFR,
  },
  {
    id: "fda",
    name: "FDA",
    history: "Depuis 2014",
    markets: "États-Unis & Canada",
    pdf: certFDA,
  },
];

const engagements = [
  {
    id: "qualite",
    icon: ShieldCheck,
    color: "bg-primary",
    colorText: "text-primary",
    colorLight: "bg-primary/8",
    borderColor: "border-primary/20",
    title: "Garantir la qualité et la sécurité alimentaire",
    intro: "La confiance se construit par la rigueur.",
    body: "Chaque étape de notre chaîne de production est encadrée par des procédures de contrôle, de traçabilité et de vérification conformes aux standards internationaux les plus exigeants. Notre objectif est constant : garantir des produits sûrs, fiables et conformes aux attentes des consommateurs sur l'ensemble de nos marchés.",
  },
  {
    id: "environnement",
    icon: Leaf,
    color: "bg-secondary",
    colorText: "text-secondary",
    colorLight: "bg-secondary/8",
    borderColor: "border-secondary/20",
    title: "Réduire notre empreinte environnementale",
    intro: "La transition environnementale est intégrée à notre stratégie industrielle.",
    body: "Au cours des dernières années, SICAM a engagé un programme d'investissements majeur visant à réduire l'impact environnemental de ses activités, notamment à travers l'amélioration de l'efficacité énergétique de ses sites de production, la réduction des émissions atmosphériques et le développement de solutions plus respectueuses des ressources naturelles.",
    body2: [
      { text: "Dans ce cadre, SICAM a investi " },
      { text: "4,15 millions de dinars tunisiens", bold: true },
      { text: " dans un projet de conversion énergétique permettant d'abandonner progressivement l'utilisation du fuel lourd au profit du gaz naturel. Cette initiative contribue à la réduction de l'empreinte carbone de l'entreprise et participe à une économie estimée à " },
      { text: "40 % de la consommation de fuel lourd du secteur", bold: true },
      { text: "." },
    ],
    bodyAfter: "Le raccordement de nos unités de production au réseau de gaz naturel constitue ainsi une étape majeure de cette transformation, avec une réduction significative des émissions de gaz à effet de serre liées à nos opérations industrielles.",
  },
  {
    id: "eau",
    icon: Droplets,
    color: "bg-blue-700",
    colorText: "text-blue-700",
    colorLight: "bg-blue-700/8",
    borderColor: "border-blue-700/20",
    title: "Préserver les ressources en eau",
    intro: "L'eau est une ressource essentielle pour l'agriculture comme pour l'industrie agroalimentaire.",
    body: "Consciente de cette responsabilité, SICAM a investi dans des infrastructures de traitement et de gestion des eaux permettant de réduire l'impact de ses activités sur les écosystèmes locaux.",
    body2: [
      { text: "Dans le cadre de sa démarche environnementale, SICAM a consacré " },
      { text: "16 millions de dinars tunisiens", bold: true },
      { text: " à la mise en place d'infrastructures dédiées à la gestion durable des ressources hydriques, comprenant :" },
    ],
    bullets: [
      "Une station de dessablage grossier ;",
      "Une station de traitement des eaux de déchargement ;",
      "Une station de traitement des effluents avant leur rejet vers l'Oued Medjerda.",
    ],
    bodyAfter: "Ces installations permettent d'assurer un traitement efficace des eaux industrielles et participent activement à la préservation durable des ressources hydriques ainsi qu'à la protection de l'environnement qui nous entoure.",
  },
  {
    id: "agriculture",
    icon: Sprout,
    color: "bg-[#5a7a2a]",
    colorText: "text-[#5a7a2a]",
    colorLight: "bg-[#5a7a2a]/8",
    borderColor: "border-[#5a7a2a]/20",
    title: "Accompagner une agriculture responsable",
    intro: "La qualité de nos produits commence dans les champs.",
    body: "Aux côtés de nos producteurs partenaires, nous encourageons des pratiques agricoles plus responsables, fondées sur l'accompagnement technique, la transmission des bonnes pratiques et l'amélioration continue des méthodes de production. Cette démarche contribue à renforcer la durabilité de la filière tout en préservant la compétitivité et la résilience des exploitations agricoles.",
  },
  {
    id: "certif",
    icon: Globe2,
    color: "bg-[#7A1A17]",
    colorText: "text-[#7A1A17]",
    colorLight: "bg-[#7A1A17]/8",
    borderColor: "border-[#7A1A17]/20",
    title: "Des certifications reconnues à l'échelle internationale",
    intro: "Les certifications constituent une reconnaissance indépendante de nos engagements et de nos pratiques.",
    body: "Elles attestent de la conformité de nos systèmes de management, de nos processus de production et de nos exigences en matière de qualité, de sécurité alimentaire et de traçabilité.",
  },
];

const chiffres = [
  { value: "+55 ans", label: "d'expertise industrielle" },
  { value: "2 100", label: "agriculteurs partenaires" },
  { value: "+17 M DT", label: "investis dans les infrastructures environnementales" },
  { value: "500 m³/h", label: "d'eau traités sur le site de Medjez El Bab" },
  { value: "−30 %", label: "d'émissions de CO₂ grâce à la transition gaz naturel" },
  { value: "6", label: "certifications internationales maintenues et renouvelées en continu" },
];

/* SVG certificate icon */
function CertIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="10" y="4" width="68" height="84" rx="12" stroke="white" strokeWidth="3.5" />
      <path d="M60 4 L78 22" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M60 4 L60 22 L78 22" stroke="white" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(255,255,255,0.05)" />
      <line x1="22" y1="36" x2="62" y2="36" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="22" y1="48" x2="62" y2="48" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="22" y1="60" x2="62" y2="60" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="22" y1="72" x2="46" y2="72" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <g transform="translate(28, 101)">
        <circle cx="0" cy="0" r="18" fill="#9B1239" />
        {[0,45,90,135,180,225,270,315].map((angle, i) => (
          <line
            key={i}
            x1="0" y1="0"
            x2={Math.cos((angle * Math.PI) / 180) * 18}
            y2={Math.sin((angle * Math.PI) / 180) * 18}
            stroke="#C61653"
            strokeWidth="9"
            strokeLinecap="square"
          />
        ))}
        <circle cx="0" cy="0" r="13" fill="#C61653" />
        <circle cx="0" cy="0" r="13" stroke="white" strokeWidth="2" />
        <polyline points="-6,1 -1,6.5 8,-5" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  );
}

function CertItem({ cert, index }: { cert: Certification; index: number }) {
  return (
    <FadeIn delay={Math.min(index * 0.05, 0.4)} direction="up">
      <div
        className="group flex flex-col items-center text-center"
        data-testid={`cert-card-${cert.id}`}
      >
        {cert.pdf ? (
          <a href={cert.pdf} target="_blank" rel="noopener noreferrer" className="block">
            <CertIcon className="w-28 h-36 md:w-32 md:h-40 mb-5 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 opacity-90 group-hover:opacity-100" />
          </a>
        ) : (
          <CertIcon className="w-28 h-36 md:w-32 md:h-40 mb-5 drop-shadow-xl opacity-80" />
        )}
        {cert.pdf ? (
          <a
            href={cert.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold text-[13px] md:text-[14px] uppercase tracking-[0.12em] leading-snug max-w-[160px] underline underline-offset-2 decoration-white/40 hover:text-white/70 transition-colors"
            data-testid={`cert-pdf-link-${cert.id}`}
          >
            {cert.name}
          </a>
        ) : (
          <p className="text-white font-bold text-[13px] md:text-[14px] uppercase tracking-[0.12em] leading-snug max-w-[160px]">
            {cert.name}
          </p>
        )}
      </div>
    </FadeIn>
  );
}

export default function Certifications() {
  return (
    <main className="flex min-h-screen flex-col">

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-b from-primary/95 to-primary overflow-hidden pt-36 pb-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-8 max-w-6xl text-center w-full">
          <FadeIn>
            <p className="text-[11px] font-display font-semibold tracking-[0.2em] text-white/40 uppercase mb-6">
              ENGAGEMENTS & CERTIFICATIONS
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight" data-testid="rse-title">
              Des engagements mesurables.<br />Des standards reconnus.
            </h1>
            <p className="text-base text-white/60 leading-relaxed font-light mb-3">
              Depuis plus de cinquante ans, SICAM construit son développement autour d'une conviction simple : la performance durable repose sur la responsabilité.
            </p>
            <p className="text-base text-white/60 leading-relaxed font-light">
              Responsabilité envers les consommateurs, envers les agriculteurs partenaires, envers les collaborateurs et envers l'environnement qui rend notre activité possible. Cette exigence se traduit par des investissements continus, des processus rigoureux et des certifications internationales reconnues qui attestent de notre engagement au quotidien.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 1 — Nos engagements ── */}
      <section className="py-24 bg-white" data-testid="engagements-section">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <p className="text-[10px] font-display font-semibold tracking-[0.2em] text-foreground/40 uppercase">Notre démarche RSE</p>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-14">
              Nos engagements
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto text-left">
            {engagements.map((eng, i) => (
              <FadeIn key={eng.id} delay={i * 0.08} direction="up">
                <div
                  className={cn("rounded-2xl p-7 border h-full flex flex-col gap-4", eng.colorLight, eng.borderColor)}
                  data-testid={`engagement-${eng.id}`}
                >
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0", eng.color)}>
                    <eng.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className={cn("text-base font-bold mb-2 leading-snug", eng.colorText)}>
                      {eng.title}
                    </h3>
                    <p className="text-sm font-semibold text-foreground/70 mb-3 italic">{eng.intro}</p>
                    <p className="text-sm text-foreground/60 leading-relaxed">{eng.body}</p>
                    {eng.body2 && (
                      <p className="text-sm text-foreground/60 leading-relaxed mt-2">
                        {Array.isArray(eng.body2)
                          ? eng.body2.map((seg: {text: string; bold?: boolean}, i: number) =>
                              seg.bold ? <strong key={i} className="font-semibold text-foreground/80">{seg.text}</strong> : seg.text
                            )
                          : eng.body2}
                      </p>
                    )}
                    {eng.bullets && (
                      <ul className="mt-2 space-y-1 pl-4 list-disc text-sm text-foreground/60">
                        {eng.bullets.map((b: string, idx: number) => (
                          <li key={idx} className="leading-relaxed">{b}</li>
                        ))}
                      </ul>
                    )}
                    {eng.bodyAfter && <p className="text-sm text-foreground/60 leading-relaxed mt-2">{eng.bodyAfter}</p>}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* ── Encart RSE ── */}
          <FadeIn delay={0.3} direction="up">
            <div className="max-w-7xl mx-auto mt-10 rounded-2xl border border-secondary/25 bg-secondary/6 p-8 md:p-10">
              <h3 className="text-base font-bold text-secondary mb-3">Un engagement environnemental durable</h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-3 italic">
                La protection de l'environnement est au cœur de la stratégie de développement durable de SICAM.
              </p>
              <p className="text-sm text-foreground/60 leading-relaxed">
                À travers ses investissements dans la transition énergétique et la gestion responsable des ressources en eau, l'entreprise a consacré{" "}
                <strong className="font-semibold text-foreground/80">plus de 20 millions de dinars tunisiens</strong>{" "}
                à son programme environnemental. Ces investissements témoignent de l'engagement de SICAM en faveur du développement durable, de la réduction de son empreinte environnementale et de la préservation des ressources naturelles pour les générations futures.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 2 — Certifications (style Mutti) ── */}
      <section
        className="relative py-24 overflow-hidden"
        data-testid="certs-section"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=2070&auto=format&fit=crop"
            alt=""
            aria-hidden
            className="w-full h-full object-cover scale-110"
            style={{ filter: "blur(6px)" }}
          />
          <div className="absolute inset-0 bg-[#1a1714]/75" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-8">
          <FadeIn>
            <h2 className="text-center text-2xl md:text-3xl font-serif font-bold text-white mb-14" data-testid="certs-grid-title">
              Nos certifications actives en 2025
            </h2>
          </FadeIn>

          <div className="grid grid-cols-3 gap-x-10 gap-y-16 max-w-3xl mx-auto justify-items-center">
            {certifications.map((cert, i) => (
              <CertItem key={cert.id} cert={cert} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3 — Chiffres clés ── */}
      <section className="py-24 bg-gradient-to-b from-primary/95 to-primary" data-testid="chiffres-section">
        <div className="container mx-auto px-6 md:px-8">
          <FadeIn>
            <p className="text-[10px] font-display font-semibold tracking-[0.2em] text-white/30 uppercase mb-4 text-center">Notre impact en chiffres</p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-14 text-center">
              Des résultats concrets
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto" style={{ gridAutoRows: "1fr" }}>
            {chiffres.map((c, i) => (
              <FadeIn key={i} delay={i * 0.07} direction="up" className="h-full">
                <div
                  className="rounded-2xl border border-white/10 bg-white/5 p-7 flex flex-col items-center justify-center text-center gap-3 h-full"
                  data-testid={`chiffre-${i}`}
                >
                  <span className="text-3xl md:text-4xl font-serif font-bold text-accent leading-none">
                    {c.value}
                  </span>
                  <span className="text-sm text-white/60 leading-snug">{c.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4 — Audits Sociaux ── */}
      <section className="py-20 bg-white border-t border-border/40" data-testid="social-audits-section">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="w-8 h-0.5 bg-secondary" />
              <p className="text-[10px] font-display font-semibold tracking-[0.2em] text-foreground/40 uppercase">Responsabilité sociale</p>
              <div className="w-8 h-0.5 bg-secondary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4" data-testid="social-title">
              Audits sociaux 2025
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-12 max-w-2xl mx-auto">
              Nos pratiques sociales sont auditées de façon indépendante pour garantir des conditions de travail dignes et conformes aux standards internationaux.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {[
              {
                id: "smeta-s",
                name: "SMETA",
                subtitle: "Sedex Members Ethical Trade Audit",
                text: "L'audit social le plus exigé au monde. 4 piliers : travail, santé & sécurité, environnement, éthique des affaires.",
                history: "SMETA depuis 2024.",
                color: "bg-purple-700",
              },
              {
                id: "bsci-s",
                name: "Amfori BSCI",
                subtitle: "Business Social Compliance Initiative",
                text: "Conformité sociale basée sur les conventions de l'OIT. Résultats excellents lors de l'audit 2025.",
                history: "Amfori BSCI depuis 2021.",
                color: "bg-orange-700",
              },
            ].map((audit, i) => (
              <FadeIn key={audit.id} delay={i * 0.1} direction="up">
                <div className="bg-white border border-border rounded-2xl p-6 flex flex-col gap-4 h-full shadow-sm text-left" data-testid={`audit-card-${audit.id}`}>
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0", audit.color)}>
                    <Users size={22} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base text-foreground mb-1">{audit.name}</h3>
                    <p className="text-muted-foreground text-xs mb-3">{audit.subtitle}</p>
                    <p className="text-foreground/70 text-base leading-relaxed">{audit.text}</p>
                  </div>
                  <div className="border-t border-border pt-3 mt-auto">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={12} />
                      <span className="text-[11px]">{audit.history}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZRP Link ── */}
      <section className="py-20 bg-secondary/5 border-t border-secondary/15">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <div className="max-w-4xl mx-auto bg-secondary/10 border border-secondary/20 rounded-3xl p-8 md:p-12 flex flex-col items-center gap-8">
              <div className="text-center">
                <p className="text-[10px] font-display font-semibold tracking-[0.2em] text-secondary/70 uppercase mb-3">Notre engagement le plus ambitieux</p>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                  Programme Zéro Résidu de Pesticides — ZRP
                </h2>
                <p className="text-foreground/60 text-base leading-relaxed max-w-2xl mx-auto">
                  Au-delà des certifications standards, SICAM a développé le programme ZRP — certifié par l'organisme indépendant CCPB — garantissant zéro résidu détectable de pesticides dans ses tomates.
                </p>
              </div>
              <Link href="/zrp" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-white font-semibold hover:bg-secondary/90 transition-colors text-sm" data-testid="link-zrp">
                Découvrir le programme ZRP
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
