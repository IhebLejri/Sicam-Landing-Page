import { Link } from "wouter";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { FileCheck, ExternalLink, ShieldCheck, Globe2, Calendar, ArrowRight, Users, Search } from "lucide-react";

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
  pdf?: string;
  pdfLabel?: string;
}

const certifications: Certification[] = [
  {
    id: "ifs",
    name: "IFS Food V8",
    subtitle: "International Featured Standards",
    description: "Le standard IFS Food évalue la sécurité et la qualité des produits alimentaires selon des critères reconnus par les principaux distributeurs d'Europe continentale — France, Allemagne, Italie, Autriche, Espagne.",
    markets: "Europe continentale — condition de référencement chez de nombreuses enseignes françaises et allemandes.",
    history: "Certification IFS depuis 2019. IFS V7 → V8 (2025). Note obtenue : 97,22%.",
    color: "bg-blue-600",
    pdf: certIFS,
    pdfLabel: "Certificat IFS Food V8",
  },
  {
    id: "brcgs",
    name: "BRCGS Food Safety V9",
    subtitle: "British Retail Consortium",
    description: "Le BRCGS Food Safety est le standard de référence pour les marchés britannique et nord-européen. Il évalue la sécurité alimentaire, l'authenticité des produits et la qualité opérationnelle.",
    markets: "Royaume-Uni, Irlande, Scandinavie, marchés anglosaxons.",
    history: "BRC V8 depuis 2021, BRC V9 en 2023. Grade A obtenu en 2025.",
    color: "bg-blue-800",
    pdf: certBRCGS,
    pdfLabel: "Certificat BRCGS 2025",
  },
  {
    id: "fda",
    name: "FDA",
    subtitle: "Food and Drug Administration (États-Unis)",
    description: "Conformité aux réglementations de sécurité alimentaire américaines, notamment le Food Safety Modernization Act (FSMA). Obligatoire pour tout exportateur accédant au marché américain.",
    markets: "États-Unis, Canada, marchés appliquant des référentiels FDA.",
    history: "FDA depuis 2014.",
    color: "bg-blue-900",
    pdf: certFDA,
    pdfLabel: "Certificat FDA",
  },
  {
    id: "halal",
    name: "Certification HALAL",
    subtitle: "Conformité alimentaire halal",
    description: "Conformité de nos produits aux exigences alimentaires halal — procédés de fabrication, ingrédients et additifs utilisés, absence de contamination croisée.",
    markets: "Tunisie, Afrique du Nord, Moyen-Orient, communautés musulmanes en Europe et en Amérique du Nord.",
    history: "Certification HALAL depuis 2015.",
    color: "bg-emerald-700",
  },
  {
    id: "ics",
    name: "ICS",
    subtitle: "Initiative pour le Commerce Durable",
    description: "Programme de référencement fournisseurs partagé par les grands distributeurs européens (Carrefour, Auchan, Casino, Intermarché, Système U). Évalue les pratiques sociales et environnementales.",
    markets: "Grandes enseignes de distribution françaises et européennes — l'ICS est souvent une condition de référencement.",
    history: "ICS depuis 2021.",
    color: "bg-teal-700",
  },
  {
    id: "smeta",
    name: "SMETA",
    subtitle: "Sedex Members Ethical Trade Audit",
    description: "L'audit éthique du commerce le plus utilisé au monde. Évalue nos pratiques selon 4 piliers : travail et droits des travailleurs, santé et sécurité, environnement, éthique des affaires.",
    markets: "Clients et partenaires avec des engagements RSE stricts — notamment en Europe du Nord, au Royaume-Uni, en Amérique du Nord.",
    history: "SMETA depuis 2024.",
    color: "bg-purple-700",
  },
  {
    id: "bsci",
    name: "Amfori BSCI",
    subtitle: "Business Social Compliance Initiative",
    description: "Programme de conformité sociale basé sur les conventions de l'OIT et les droits humains fondamentaux. Audite les conditions de travail, la liberté d'association et les pratiques éthiques.",
    markets: "Reconnaissance internationale des pratiques sociales — exigé par de nombreuses enseignes d'Europe du Nord.",
    history: "Amfori BSCI depuis 2021 ; nouvel audit réalisé en 2025.",
    color: "bg-orange-700",
  },
  {
    id: "vlabel",
    name: "V-Label",
    subtitle: "Certification Végane — Union Végane Européenne",
    description: "Le V-Label est le label végane et végétarien de référence en Europe. Certifie qu'un produit ne contient ni ingrédient d'origine animale, selon des critères vérifiés par audit.",
    markets: "Europe occidentale, Amérique du Nord, consommateurs véganes et flexitariens.",
    history: "V-Label obtenu en 2025 — nouvelle certification.",
    color: "bg-green-700",
    pdf: certVLabelFR,
    pdfLabel: "Certificat V-Label (FR)",
  },
  {
    id: "qse",
    name: "QSE",
    subtitle: "Management Qualité, Sécurité, Environnement",
    description: "Le système de management QSE intègre trois dimensions : la qualité, la sécurité des personnes et l'environnement. Il couvre l'ensemble des activités SICAM.",
    markets: "Applicable à tous les marchés — démontre une maturité organisationnelle globale.",
    history: "QSE obtenu en 2025 — nouvelle certification.",
    color: "bg-slate-700",
    pdf: certQSE,
    pdfLabel: "Certificat QSE",
  },
];

const socialAudits = [
  {
    id: "smeta-s",
    name: "SMETA",
    subtitle: "Sedex Members Ethical Trade Audit",
    description: "L'audit social le plus exigé au monde. 4 piliers : travail, santé & sécurité, environnement, éthique des affaires.",
    history: "SMETA depuis 2024.",
    color: "bg-purple-700",
  },
  {
    id: "bsci-s",
    name: "Amfori BSCI",
    subtitle: "Business Social Compliance Initiative",
    description: "Conformité sociale basée sur les conventions de l'OIT. Résultats excellents lors de l'audit 2025.",
    history: "Amfori BSCI depuis 2021.",
    color: "bg-orange-700",
  },
];

function CertDocumentCard({ cert, index }: { cert: Certification; index: number }) {
  return (
    <FadeIn delay={Math.min(index * 0.06, 0.48)} direction="up">
      <div
        className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full cursor-default"
        data-testid={`cert-card-${cert.id}`}
      >
        {/* Icon */}
        <div className="flex items-start justify-between gap-3">
          <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0", cert.color)}>
            <FileCheck size={22} className="text-white" />
          </div>
          {cert.pdf && (
            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] font-bold text-white/50 hover:text-white transition-colors uppercase tracking-wider"
              data-testid={`cert-pdf-${cert.id}`}
            >
              <ExternalLink size={12} />
              PDF
            </a>
          )}
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-base text-white leading-snug mb-1" data-testid={`cert-name-${cert.id}`}>
            {cert.name}
          </h3>
          <p className="text-white/50 text-xs mb-3">{cert.subtitle}</p>
          <p className="text-white/70 text-sm leading-relaxed">{cert.description}</p>
        </div>

        {/* Footer info */}
        <div className="border-t border-white/10 pt-4 space-y-2">
          <div className="flex items-center gap-2 text-white/40">
            <Calendar size={12} className="flex-shrink-0" />
            <span className="text-[11px]">{cert.history}</span>
          </div>
          <div className="flex items-start gap-2 text-white/40">
            <Globe2 size={12} className="flex-shrink-0 mt-0.5" />
            <span className="text-[11px] leading-relaxed">{cert.markets}</span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Certifications() {
  return (
    <main className="flex min-h-screen flex-col bg-[#1a1714]">

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden" style={{ minHeight: 480 }}>
        {/* Background field image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=2070&auto=format&fit=crop"
            alt=""
            aria-hidden
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1714]/70 via-[#1a1714]/50 to-[#1a1714]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-8 max-w-4xl text-center">
          <FadeIn>
            <p className="text-[11px] font-display font-semibold tracking-[0.2em] text-white/30 uppercase mb-6">
              Transparence & Exigence
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight" data-testid="rse-title">
              Nos Engagements RSE — 10 certifications internationales actives
            </h1>
            <p className="text-base text-white/50 max-w-3xl mx-auto leading-relaxed font-light">
              Chaque certification est une promesse vérifiée par un organisme indépendant. Qualité, sécurité alimentaire, éthique sociale, conformité environnementale — nos engagements RSE couvrent l'ensemble de notre chaîne de valeur.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {[
                { label: "10 certifications actives", icon: ShieldCheck },
                { label: "+30 pays couverts", icon: Globe2 },
                { label: "Audits indépendants", icon: Search },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/60 text-sm">
                  <item.icon size={14} />
                  {item.label}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Certifications Grid ── */}
      <section className="py-20 bg-[#1a1714]" data-testid="certs-section">
        <div className="container mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-0.5 bg-primary" />
              <p className="text-[10px] font-display font-semibold tracking-[0.2em] text-white/30 uppercase">Certifications qualité & sécurité alimentaire</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-12" data-testid="certs-grid-title">
              Nos certifications
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <CertDocumentCard key={cert.id} cert={cert} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Audits Sociaux ── */}
      <section className="py-20 bg-[#141110] border-t border-white/5" data-testid="social-audits-section">
        <div className="container mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-0.5 bg-secondary" />
              <p className="text-[10px] font-display font-semibold tracking-[0.2em] text-white/30 uppercase">Responsabilité sociale</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4" data-testid="social-title">
              Audits sociaux
            </h2>
            <p className="text-white/50 text-base mb-12 max-w-2xl">
              Notre responsabilité s'étend au-delà de l'assiette. Nos pratiques sociales sont auditées de façon indépendante pour garantir des conditions de travail dignes et conformes aux standards internationaux.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
            {socialAudits.map((audit, i) => (
              <FadeIn key={audit.id} delay={i * 0.1} direction="up">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 h-full" data-testid={`audit-card-${audit.id}`}>
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0", audit.color)}>
                    <Users size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white mb-1">{audit.name}</h3>
                    <p className="text-white/50 text-xs mb-3">{audit.subtitle}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{audit.description}</p>
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
