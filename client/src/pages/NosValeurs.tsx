import { Link } from "wouter";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { Award, Heart, Lightbulb, Anchor, Users, Sun, ArrowRight } from "lucide-react";

import logoZrp from "@assets/Asset_3@2x_1779867553760.png";

const valeurs = [
  {
    id: "qualite",
    title: "Qualité",
    icon: Award,
    color: "bg-primary",
    borderColor: "border-primary",
    colorText: "text-primary",
    intro: "La qualité est au cœur de notre démarche depuis 1969.",
    body: "Elle guide chacune de nos décisions, de la sélection des matières premières aux processus de transformation, jusqu'au produit final. Cette exigence permanente nous permet de répondre aux standards les plus élevés et de bâtir des relations de confiance durables avec nos partenaires et nos consommateurs.",
    closing: "",
    promise: "Viser l'excellence à chaque étape de notre chaîne de valeur.",
  },
  {
    id: "sante",
    title: "Santé",
    icon: Heart,
    color: "bg-secondary",
    borderColor: "border-secondary",
    colorText: "text-secondary",
    intro: "Nous croyons qu'une alimentation de qualité contribue au bien-être de tous.",
    body: "C'est pourquoi nous plaçons la sécurité alimentaire et la confiance des consommateurs au centre de nos priorités. Notre responsabilité est de proposer des produits qui répondent aux attentes d'aujourd'hui tout en contribuant à une alimentation plus sereine pour les générations futures.",
    closing: "",
    promise: "Agir chaque jour pour préserver la santé et le bien-être des consommateurs.",
  },
  {
    id: "innovation",
    title: "Innovation",
    icon: Lightbulb,
    color: "bg-[#7A1A17]",
    borderColor: "border-[#7A1A17]",
    colorText: "text-[#7A1A17]",
    intro: "L'innovation est le moteur de notre développement.",
    body: "Nous investissons continuellement dans les technologies, les procédés et les savoir-faire qui nous permettent d'améliorer nos performances et d'anticiper les évolutions du marché. Innover, pour SICAM, c'est préparer l'avenir avec pragmatisme et ambition.",
    closing: "",
    promise: "Imaginer aujourd'hui les solutions de demain.",
  },
  {
    id: "engagement",
    title: "Engagement",
    icon: Anchor,
    color: "bg-[#C9A84C]",
    borderColor: "border-[#C9A84C]",
    colorText: "text-amber-800",
    intro: "Nos engagements se mesurent dans la durée.",
    body: "Nous avançons avec une vision de long terme fondée sur la responsabilité, la constance et le respect de nos engagements envers l'ensemble de nos parties prenantes. Chaque action s'inscrit dans une volonté de créer une valeur durable pour notre écosystème.",
    closing: "",
    promise: "Transformer nos ambitions en actions concrètes et durables.",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    icon: Users,
    color: "bg-blue-700",
    borderColor: "border-blue-700",
    colorText: "text-blue-700",
    intro: "Notre réussite est le fruit d'un travail collectif.",
    body: "Agriculteurs, collaborateurs, partenaires techniques, distributeurs et clients contribuent chaque jour à la force de notre modèle. Nous croyons que les meilleures performances naissent de la coopération, de l'écoute et du partage des expertises.",
    closing: "",
    promise: "Construire ensemble une chaîne de valeur plus forte et plus durable.",
  },
  {
    id: "bienetre",
    title: "Bien-être",
    icon: Sun,
    color: "bg-amber-700",
    borderColor: "border-amber-700",
    colorText: "text-amber-700",
    intro: "Au-delà de nos produits, nous contribuons à un écosystème humain.",
    body: "Nous accordons une attention particulière au développement de nos collaborateurs, au dynamisme des territoires où nous opérons et à l'amélioration continue de la qualité de vie des communautés qui nous entourent.",
    closing: "",
    promise: "Créer de la valeur qui bénéficie aux personnes autant qu'à l'entreprise.",
  },
];

export default function NosValeurs() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative pt-36 pb-24 bg-gradient-to-b from-primary/95 to-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />
        </div>
        <div className="container mx-auto px-6 md:px-8 relative z-10 text-center max-w-4xl">
          <FadeIn>
            <p className="text-xs font-display font-semibold tracking-[0.2em] text-white/40 uppercase mb-6" data-testid="hero-surtitre">
              Ce qui nous anime depuis 1969
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight" data-testid="valeurs-title">
              Nos valeurs — La boussole de chaque décision que nous prenons
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
              Derrière chaque boîte SICAM, derrière chaque partenariat avec nos agriculteurs, derrière chaque choix de certification — il y a six valeurs. Pas inscrites sur un mur. Visibles dans ce que nous faisons.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white" data-testid="valeurs-section">
        <div className="container mx-auto px-6 md:px-8">
          <div className="space-y-20">
            {valeurs.map((v, i) => (
              <FadeIn key={v.id} delay={0.1} direction={i % 2 === 0 ? "right" : "left"}>
                <div
                  className={cn(
                    "grid lg:grid-cols-[auto_1fr] gap-8 items-start max-w-4xl",
                    i % 2 !== 0 && "lg:ml-auto"
                  )}
                  data-testid={`valeur-${v.id}`}
                >
                  <div className="flex lg:flex-col items-center gap-4 lg:gap-3">
                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white flex-shrink-0", v.color)}>
                      <v.icon size={30} strokeWidth={1.5} />
                    </div>
                    <span className={cn("text-xs font-serif font-bold tracking-[0.15em] uppercase hidden lg:block", v.colorText)}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4" data-testid={`valeur-title-${v.id}`}>
                      {v.title}
                    </h2>
                    <p className="text-lg font-semibold text-foreground/80 mb-4 leading-relaxed">
                      {v.intro}
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {v.body}
                    </p>
                    <div className={cn("p-4 rounded-xl border-l-4", v.borderColor)}>
                      <p className={cn("text-sm font-semibold italic", v.colorText)}>
                        {v.promise}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" data-testid="zrp-valeurs-section">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 text-center sm:text-left">
                <img src={logoZrp} alt="Logo ZRP" className="w-16 h-16 object-contain flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Des valeurs qui se voient. Dans nos champs. Dans nos boîtes.
                </h2>
              </div>
              <div className="w-16 h-1 bg-secondary rounded-full mb-6 sm:ml-20" />
              <p className="text-slate-600 sm:ml-20">
                Le programme ZRP — Zéro Résidu de Pesticides — est l'expression concrète de nos valeurs au quotidien : qualité sans compromis, santé des consommateurs, innovation responsable, engagement dans la durée, collaboration avec nos agriculteurs et bien-être collectif.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-primary/95 to-primary" data-testid="cta-section">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8">
              Des valeurs qui se vérifient. Des engagements qui se voient.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/zrp" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-white font-semibold hover:bg-secondary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50" data-testid="cta-zrp">
                Découvrir le programme ZRP
                <ArrowRight size={16} />
              </Link>
              <Link href="/nos-engagements-rse" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50" data-testid="cta-certifications">
                Voir nos engagements RSE
                <ArrowRight size={16} />
              </Link>
              <Link href="/notre-histoire" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50" data-testid="cta-histoire">
                Notre histoire
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
