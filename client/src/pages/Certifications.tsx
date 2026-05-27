import { Link } from "wouter";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { ArrowRight, Users, Calendar, Globe2 } from "lucide-react";

import certQSE from "@assets/Certifcat_QSE_1773061885565.pdf";
import certIFS from "@assets/Certificat_IFS_Food_V8_SICAM_SA_2025_1773061885566.pdf";
import certFDA from "@assets/Certificate_of_Facility_Registration_-_SOCIETE_INDUSTRIELLE_DE_1773061885566.pdf";
import certBRCGS from "@assets/SICAM_BRCGS_Certificate_2025_1773061885567.pdf";
import certVLabelFR from "@assets/V_LABEL_FR_1773061885568.pdf";

interface Certification {
  id: string;
  name: string;
  history: string;
  markets: string;
  pdf?: string;
}

const certifications: Certification[] = [
  {
    id: "ifs",
    name: "IFS FOOD V8",
    history: "Depuis 2019 — Note 97,22%",
    markets: "Europe continentale",
    pdf: certIFS,
  },
  {
    id: "brcgs",
    name: "BRCGS FOOD SAFETY V9",
    history: "V8 depuis 2021 · V9 en 2023 · Grade A 2025",
    markets: "Royaume-Uni & marchés anglosaxons",
    pdf: certBRCGS,
  },
  {
    id: "fda",
    name: "FDA",
    history: "Depuis 2014",
    markets: "États-Unis & Canada",
    pdf: certFDA,
  },
  {
    id: "halal",
    name: "CERTIFICATION HALAL",
    history: "Depuis 2015",
    markets: "Afrique du Nord · Moyen-Orient · Europe",
  },
  {
    id: "ics",
    name: "ICS",
    history: "Depuis 2021",
    markets: "Grandes enseignes européennes",
  },
  {
    id: "smeta",
    name: "SMETA",
    history: "Depuis 2024",
    markets: "Europe du Nord · Royaume-Uni · Amérique du Nord",
  },
  {
    id: "bsci",
    name: "AMFORI BSCI",
    history: "Depuis 2021 · Audit 2025",
    markets: "Enseignes RSE Europe du Nord",
  },
  {
    id: "vlabel",
    name: "V-LABEL VÉGANE",
    history: "Obtenu en 2025",
    markets: "Europe occidentale · Amérique du Nord",
    pdf: certVLabelFR,
  },
  {
    id: "qse",
    name: "QSE",
    history: "Obtenu en 2025",
    markets: "Tous marchés",
    pdf: certQSE,
  },
];

/* SVG certificate icon — style Mutti (document + sceau avec checkmark) */
function CertIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Document body */}
      <rect x="6" y="4" width="58" height="74" rx="4" stroke="white" strokeWidth="3.5" />
      {/* Folded corner */}
      <path d="M48 4 L64 20" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M48 4 L48 20 L64 20" stroke="white" strokeWidth="3.5" strokeLinejoin="round" fill="none" />
      {/* Lines */}
      <line x1="18" y1="34" x2="52" y2="34" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="18" y1="44" x2="52" y2="44" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="18" y1="54" x2="40" y2="54" stroke="white" strokeWidth="3" strokeLinecap="round" />
      {/* Seal circle */}
      <circle cx="58" cy="82" r="16" fill="#C61653" stroke="white" strokeWidth="2.5" />
      {/* Checkmark inside seal */}
      <polyline points="50,82 56,88 66,74" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function CertItem({ cert, index }: { cert: Certification; index: number }) {
  const content = (
    <div
      className={cn(
        "group flex flex-col items-center text-center cursor-pointer",
        cert.pdf && "hover:opacity-100 opacity-85 transition-opacity"
      )}
      data-testid={`cert-card-${cert.id}`}
    >
      <CertIcon className="w-16 h-20 md:w-18 md:h-24 mb-4 drop-shadow-lg group-hover:scale-105 transition-transform duration-200" />
      <p className="text-white font-bold text-[11px] md:text-[12px] uppercase tracking-[0.12em] leading-snug max-w-[120px]">
        {cert.name}
      </p>
      {cert.pdf && (
        <span className="mt-2 text-white/40 text-[9px] uppercase tracking-widest font-semibold">
          PDF ↗
        </span>
      )}
    </div>
  );

  return (
    <FadeIn delay={Math.min(index * 0.05, 0.4)} direction="up">
      {cert.pdf ? (
        <a href={cert.pdf} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </FadeIn>
  );
}

export default function Certifications() {
  return (
    <main className="flex min-h-screen flex-col">

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden" style={{ minHeight: 440 }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=2070&auto=format&fit=crop"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1714]/80 via-[#1a1714]/60 to-[#1a1714]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-8 max-w-4xl text-center">
          <FadeIn>
            <p className="text-[11px] font-display font-semibold tracking-[0.2em] text-white/30 uppercase mb-6">
              Transparence & Exigence
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight" data-testid="rse-title">
              Nos Engagements RSE
            </h1>
            <p className="text-base text-white/50 max-w-3xl mx-auto leading-relaxed font-light">
              Chaque certification est une promesse vérifiée par un organisme indépendant. Qualité, sécurité alimentaire, éthique sociale, conformité environnementale — nos engagements couvrent l'ensemble de notre chaîne de valeur.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Certifications — style Mutti ── */}
      <section
        className="relative py-24 overflow-hidden"
        data-testid="certs-section"
        style={{ minHeight: 500 }}
      >
        {/* Tomato field background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=2070&auto=format&fit=crop"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
          />
          {/* Dark overlay like Mutti */}
          <div className="absolute inset-0 bg-[#1a1714]/72" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-8">
          <FadeIn>
            <h2 className="text-center text-[11px] font-display font-bold tracking-[0.2em] text-white/40 uppercase mb-16" data-testid="certs-grid-title">
              9 certifications internationales actives — 2025
            </h2>
          </FadeIn>

          {/* Grid of certificate icons — 3 cols mobile, 5 cols tablet, all in a row desktop */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-x-6 gap-y-14 max-w-5xl mx-auto justify-items-center">
            {certifications.map((cert, i) => (
              <CertItem key={cert.id} cert={cert} index={i} />
            ))}
          </div>

          <FadeIn delay={0.5}>
            <p className="text-center text-white/25 text-[11px] mt-16 font-medium">
              Cliquez sur une certification pour télécharger le document PDF
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Audits Sociaux ── */}
      <section className="py-20 bg-[#141110]" data-testid="social-audits-section">
        <div className="container mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-0.5 bg-secondary" />
              <p className="text-[10px] font-display font-semibold tracking-[0.2em] text-white/30 uppercase">Responsabilité sociale</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4" data-testid="social-title">
              Audits sociaux
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-12 max-w-2xl">
              Nos pratiques sociales sont auditées de façon indépendante pour garantir des conditions de travail dignes et conformes aux standards internationaux.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
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
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 h-full" data-testid={`audit-card-${audit.id}`}>
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0", audit.color)}>
                    <Users size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white mb-1">{audit.name}</h3>
                    <p className="text-white/50 text-xs mb-3">{audit.subtitle}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{audit.text}</p>
                  </div>
                  <div className="border-t border-white/10 pt-3">
                    <div className="flex items-center gap-2 text-white/40">
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
      <section className="py-20 bg-[#1a1714] border-t border-white/5">
        <div className="container mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="max-w-4xl mx-auto bg-secondary/10 border border-secondary/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <p className="text-[10px] font-display font-semibold tracking-[0.2em] text-secondary/70 uppercase mb-3">Notre engagement le plus ambitieux</p>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                  Programme Zéro Résidu de Pesticides — ZRP
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  Au-delà des certifications standards, SICAM a développé le programme ZRP — certifié par l'organisme indépendant CCPB — garantissant zéro résidu détectable de pesticides dans ses tomates.
                </p>
              </div>
              <Link href="/zrp" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-white font-semibold hover:bg-secondary/90 transition-colors text-sm" data-testid="link-zrp">
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
