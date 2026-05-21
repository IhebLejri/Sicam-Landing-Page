import { Link } from "wouter";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { Heart, Lightbulb, Anchor, Users, Sun, ShieldCheck, Leaf, Handshake, MessageCircle, ArrowRight, Megaphone, Eye, BookOpen } from "lucide-react";

import logoZrp from "@assets/Asset_3@2x_1772017659058.png";

const valeurs = [
  {
    id: "sante",
    title: "Santé & Qualité",
    icon: Heart,
    color: "bg-[#2D5016]",
    borderColor: "border-[#2D5016]",
    colorText: "text-[#2D5016]",
    intro: "Tout ce que nous faisons part d'une conviction : vous méritez le meilleur. Pas ce qui passe les normes de justesse — le meilleur.",
    body: "Cette exigence se traduit dans notre programme ZRP, où nous analysons 600 molécules de pesticides avant chaque mise sur le marché. Elle se traduit dans plus de 1000 analyses qualitatives par jour dans notre laboratoire interne. Elle se traduit dans nos certifications IFS V8, BRC V9 et ISO 22000 — des standards que nous maintenons en continu depuis plus de vingt ans, pas parce qu'ils sont obligatoires, mais parce qu'ils correspondent à ce que nous voulons être.",
    closing: "La santé et la qualité ne sont pas des arguments de vente chez SICAM. Ce sont des contraintes que nous nous imposons librement — parce que la qualité de ce que vous mangez a un impact réel sur votre vie.",
    promise: "Garantir des produits sains et de haute qualité pour préserver l'environnement et la santé de tous.",
  },
  {
    id: "innovation",
    title: "Innovation",
    icon: Lightbulb,
    color: "bg-[#7A1A17]",
    borderColor: "border-[#7A1A17]",
    colorText: "text-[#7A1A17]",
    intro: "Être la première entreprise au monde à certifier ZRP un double concentré de tomates — ce n'est pas un coup de chance. C'est l'aboutissement d'années de recherche agronomique, de partenariats de terrain avec nos agriculteurs, et d'une culture d'entreprise qui valorise l'audace de faire différemment.",
    body: "Chez SICAM, innover ne signifie pas seulement produire plus efficacement. Cela signifie produire différemment — en anticipant les attentes de demain, en testant des méthodes que personne n'avait essayées avant nous dans notre secteur. Notre capacité de transformation a été multipliée par plus de trois en dix ans. Notre gamme s'est élargie bien au-delà du double concentré. Nos équipements ultra-modernes sur deux sites nous placent parmi les acteurs industriels les plus avancés du secteur.",
    closing: "L'innovation, chez nous, a toujours un sens concret : améliorer ce que vous mangez, ou améliorer la façon dont nous le cultivons et le transformons.",
    promise: "Développer des solutions écoresponsables adaptées aux évolutions du marché et aux attentes de demain.",
  },
  {
    id: "engagement",
    title: "Engagement",
    icon: Anchor,
    color: "bg-[#C9A84C]",
    borderColor: "border-[#C9A84C]",
    colorText: "text-amber-800",
    intro: "L'engagement, chez SICAM, n'est pas un mot de présentation. C'est un état permanent — envers nos agriculteurs, envers nos consommateurs, envers nos marchés.",
    body: "Envers nos 1 800 agriculteurs partenaires, que nous finançons, formons et accompagnons techniquement tout au long de chaque saison. Envers vous, à qui nous promettons un produit sans résidu détectable — et que nous vérifions par des analyses indépendantes, lot par lot. Envers nos marchés export, avec des certifications maintenues sans interruption depuis plus de vingt ans.",
    closing: "Notre objectif de 100 % d'approvisionnement certifié ZRP d'ici 2030 est le symbole de cet engagement dans le temps : un cap précis, avec des étapes jalonnées et des résultats mesurables chaque saison.",
    promise: "Assurer une croissance durable et un modèle respectueux de toutes les parties prenantes — agriculteurs, consommateurs, collaborateurs.",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    icon: Users,
    color: "bg-secondary",
    borderColor: "border-secondary",
    colorText: "text-secondary",
    intro: "SICAM ne produit pas seul. Et nous ne prétendons pas le faire.",
    body: "Notre force, c'est un écosystème : plus de 1 800 agriculteurs partenaires, une filiale de production de boîtes métalliques (PROCAN — 198 millions de canettes par an), une entité commerciale en France (PLANT SAS), un réseau de distribution locale (SOINDI), et des équipes agronomes qui font le lien entre tous ces acteurs sur le terrain. Sans oublier les organismes de certification indépendants à qui nous soumettons nos résultats, et les clients distributeurs avec qui nous construisons des relations durables.",
    closing: "La collaboration n'est pas un idéal abstrait chez nous. C'est notre mode de fonctionnement au quotidien — et la raison pour laquelle une tomate cultivée à Sbikha peut respecter les exigences d'un distributeur en Allemagne ou au Royaume-Uni.",
    promise: "Travailler main dans la main avec les agriculteurs, les distributeurs et les partenaires pour une production responsable et une chaîne de valeur qui profite à tous.",
  },
  {
    id: "bienetre",
    title: "Bien-être",
    icon: Sun,
    color: "bg-amber-700",
    borderColor: "border-amber-700",
    colorText: "text-amber-700",
    intro: "Notre ambition dépasse la boîte de conserve.",
    body: "Nous croyons qu'une alimentation saine et accessible est un droit. Que bien manger, c'est mieux vivre — et que SICAM a un rôle à jouer dans la qualité de vie des familles tunisiennes et de tous ceux qui consomment nos produits à travers le monde. Cette conviction se traduit dans notre gamme accessible à tous les foyers, dans notre programme ZRP qui ne se réserve pas à l'export premium mais s'adresse d'abord aux consommateurs tunisiens, dans notre politique sociale pour nos 2 800 collaborateurs permanents et saisonniers, et dans nos actions auprès des communautés locales.",
    closing: "Le bien-être que nous cherchons à créer est à la fois individuel — la santé de chaque consommateur — et collectif : le tissu économique et humain que nous contribuons à tisser autour de nos sites de production, en Tunisie et au-delà.",
    promise: "Offrir des produits de qualité accessibles au plus grand nombre, en accompagnant les familles tunisiennes au quotidien et en agissant concrètement pour le bien-être collectif.",
  },
];

const zrpValeurs = [
  {
    icon: ShieldCheck,
    title: "Protéger la santé des consommateurs",
    text: "En leur donnant une garantie réelle, pas une promesse. Une certification délivrée par un organisme indépendant, des analyses sur 600 molécules, des résultats vérifiables.",
  },
  {
    icon: Leaf,
    title: "Agir en entreprise responsable",
    text: "En assumant les conséquences de nos méthodes de production sur l'environnement et sur les personnes. Pas seulement quand c'est rentable.",
  },
  {
    icon: Handshake,
    title: "Encourager une agriculture durable",
    text: "En accompagnant nos agriculteurs vers des pratiques qui préservent les sols, réduisent les intrants chimiques et construisent une filière pérenne.",
  },
  {
    icon: MessageCircle,
    title: "Renforcer la confiance",
    text: "En répondant aux inquiétudes des familles tunisiennes non pas avec des slogans, mais avec des certifications que vous pouvez vérifier sur www.ccpb.it.",
  },
];

const intentions = [
  {
    icon: Megaphone,
    title: "Engagée",
    text: "Nous affirmons notre ambition sans détour. Nous ne disons pas « nous essayons d'améliorer la qualité » — nous disons « nos produits certifiés ZRP ne contiennent aucun résidu détectable, et voici les analyses qui le prouvent. » Être engagé, c'est ne pas se réfugier derrière le conditionnel.",
  },
  {
    icon: Eye,
    title: "Transparente",
    text: "Nous montrons les actions concrètes plutôt que d'annoncer des intentions. Nous communiquons les résultats de nos certifications, les noms des organismes qui nous contrôlent, les références de nos certificats. La transparence renforce la confiance.",
  },
  {
    icon: BookOpen,
    title: "Pédagogique",
    text: "Nous expliquons ce que nous faisons et pourquoi — parce que des consommateurs informés sont des consommateurs qui font des choix éclairés. Le ZRP, c'est quoi exactement ? Pourquoi 600 molécules et pas 100 ? Nous répondons à ces questions avant même qu'on nous les pose.",
  },
];

export default function NosValeurs() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative pt-36 pb-24 bg-gradient-to-b from-primary/95 to-primary overflow-hidden">
        <div className="absolute inset-0">
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
              Derrière chaque boîte SICAM, derrière chaque partenariat avec nos agriculteurs, derrière chaque choix de certification — il y a cinq valeurs. Pas inscrites sur un mur. Visibles dans ce que nous faisons.
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
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {v.body}
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {v.closing}
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
              <div className="w-16 h-1 bg-secondary rounded-full mb-4 sm:ml-20" />
              <p className="text-slate-600 mb-10 sm:ml-20">
                Le programme ZRP n'est pas né d'une obligation réglementaire. Il est né de quatre convictions que nous portons depuis le premier jour :
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-6">
              {zrpValeurs.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="up">
                  <div className="bg-white rounded-2xl border border-secondary/10 p-6 h-full" data-testid={`zrp-valeur-${i}`}>
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                      <item.icon size={24} className="text-secondary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" data-testid="intentions-section">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                La façon dont nous vous parlons est aussi un engagement.
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full mb-4" />
              <p className="text-slate-600 mb-10">
                La transparence n'est pas seulement une valeur que nous affichons — c'est une façon d'écrire, de communiquer, de nous adresser à vous. Voici les trois intentions qui guident toutes nos prises de parole.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {intentions.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="up">
                  <div className="bg-background rounded-2xl border border-slate-100 p-6 h-full" data-testid={`intention-${i}`}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
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
              <Link href="/certifications" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50" data-testid="cta-certifications">
                Voir nos certifications
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
