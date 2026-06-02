import { Link } from "wouter";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar, Building2, Tractor, Factory, Globe2 } from "lucide-react";

import logoZrp from "@assets/Asset_3@2x_1779867553760.png";

const BASE = "";

function SectionVideo({ src, label }: { src: string; label: string }) {
  return (
    <FadeIn delay={0.1}>
      <div className="my-8 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-label={label}
          className="w-full block bg-black"
          style={{ aspectRatio: "16/9" }}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </FadeIn>
  );
}

const filiales = [
  {
    id: "agri",
    icon: Tractor,
    color: "bg-secondary",
    colorText: "text-secondary",
    borderColor: "border-secondary",
    name: "SICAM AGRI / PLUS",
    role: "Conseil agricole & Approvisionnement",
    description: "Approvisionnement de l'entreprise en produits agricoles (tomates, poivrons, fruits). Accompagnement technique des agriculteurs partenaires, sélection des semences et gestion rigoureuse des pratiques culturales pour garantir la qualité dès la source.",
  },
  {
    id: "procan",
    icon: Factory,
    color: "bg-primary",
    colorText: "text-primary",
    borderColor: "border-primary",
    name: "PROCAN",
    role: "Unité de fabrication de boîtes de conserve",
    description: "Capacité de production de 200 millions de boîtes de conserve par an. Maîtrise totale de l'emballage métallique, de la qualité et des délais — un avantage stratégique unique qui garantit l'autonomie et la réactivité de SICAM sur ses marchés.",
  },
  {
    id: "sicam",
    icon: Building2,
    color: "bg-[#C9A84C]",
    colorText: "text-[#C9A84C]",
    borderColor: "border-[#C9A84C]",
    name: "SICAM",
    role: "Transformation industrielle · jusqu'à 12 000 t/j",
    description: "Capacité de transformation quotidienne atteignant jusqu'à 12 000 tonnes de produits agricoles. Deux sites ultra-modernes, des équipements à la pointe de la technologie, et un savoir-faire bâti sur plus de 55 ans d'excellence opérationnelle.",
  },
  {
    id: "plant",
    icon: Globe2,
    color: "bg-blue-700",
    colorText: "text-blue-700",
    borderColor: "border-blue-700",
    name: "SICAM PLANT",
    role: "Filiale commerciale — Paris",
    description: "Filiale commerciale basée à Paris pour renforcer la présence sur le marché européen. Un ancrage stratégique au cœur de l'Europe qui facilite les partenariats avec les grands distributeurs français et européens.",
  },
];

const timelineEvents = [
  { year: "2025", text: "Révolution Zéro Résidu de Pesticides — ZRP (Certification)." },
  { year: "2024", text: "Transition au gaz naturel et activation de la station de traitement des eaux STEP." },
  { year: "2023", text: "Lancement de la nouvelle ligne de production GTP." },
  { year: "2022", text: "Atteinte de la capacité quotidienne de 10 000 tonnes." },
  { year: "2021", text: "Acquisition de la filiale PLANT en France." },
  { year: "2020", text: "Entrée du fonds d'investissement ADP III comme partenaire financier et stratégique." },
  { year: "2019", text: "Exploitation de l'usine El Baraka pour renforcer la capacité de production." },
  { year: "2018", text: "Augmentation de la capacité à 5 000 tonnes/jour." },
  { year: "2017", text: "Création de SICAM Agri pour renforcer le partenariat avec les agriculteurs." },
  { year: "2016", text: "Augmentation de la capacité de transformation à 3 500 tonnes/jour." },
  { year: "2015", text: "Inauguration Easy Open." },
  { year: "2012", text: "Création de la société PROCAN (fabrication de boîtes métalliques)." },
  { year: "2007", text: "Lancement du produit tomate concentrée." },
  { year: "1969", text: "Création de la société." },
];

export default function NotreHistoire() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* ── Hero ── */}
      <section className="relative flex items-center justify-center bg-gradient-to-b from-primary/95 to-primary overflow-hidden" style={{ minHeight: 560, paddingTop: 80, paddingBottom: 0 }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl" />
        </div>
        <div className="container mx-auto px-6 md:px-8 relative z-10 text-center max-w-4xl w-full">
          <FadeIn>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight" data-testid="histoire-title">
              L'Héritage SICAM :<br />Une passion tunisienne, une excellence mondiale.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ── La Racine — 4 filiales ── */}
      <section className="py-20 bg-white" data-testid="bloc-filiales">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <p className="text-[10px] font-display font-bold tracking-[0.2em] text-primary/40 uppercase mb-3">La Racine de SICAM</p>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Un groupe intégré, de la graine à l'étagère
              </h2>
              <div className="w-10 h-0.5 bg-primary mb-8" />
            </FadeIn>

            <SectionVideo src={`${BASE}/sec1.mp4`} label="Vidéo — Le Groupe SICAM" />

            <FadeIn>
              <div className="space-y-5 text-slate-600 leading-relaxed text-base mt-10 mb-10">
                <p>L'histoire de SICAM est avant tout une histoire de transmission, de savoir-faire et d'engagement envers la terre tunisienne. C'est en 1969, au cœur des terres fertiles de Medjez El Bab, qu'est née une ambition simple mais forte : valoriser la richesse agricole de la Tunisie et accompagner le travail des agriculteurs en transformant les récoltes locales en produits de qualité accessibles aux familles tunisiennes tout au long de l'année.</p>
                <p>Depuis plus d'un demi-siècle, cette vision continue de guider SICAM. Fidèle à ses racines et profondément attachée à son territoire, l'entreprise a grandi aux côtés des producteurs, des partenaires et des générations de consommateurs qui lui font confiance.</p>
                <p>Aujourd'hui encore, SICAM cultive les mêmes valeurs : proximité, qualité, respect du travail agricole et transmission d'un savoir-faire qui relie le champ à la table, avec la volonté constante de construire l'avenir tout en restant fidèle à son héritage.</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {filiales.map((f, i) => (
                <FadeIn key={f.id} delay={i * 0.1} direction="up">
                  <div className={cn("bg-white rounded-2xl border-l-4 p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col", f.borderColor)} data-testid={`filiale-${f.id}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0", f.color)}>
                        <f.icon size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className={cn("font-bold text-lg", f.colorText)}>{f.name}</h3>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{f.role}</p>
                      </div>
                    </div>
                    <p className="text-base text-slate-600 leading-relaxed">{f.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bloc 2 : Excellence industrielle ── */}
      <section className="py-20 bg-background" data-testid="bloc-excellence">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <p className="text-[10px] font-display font-bold tracking-[0.2em] text-primary/40 uppercase mb-3">L'Excellence Industrielle</p>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="bloc-excellence-title">
                Du cœur de la Medjerda au Top 20 Mondial
              </h2>
              <div className="w-10 h-0.5 bg-primary mb-6" />
            </FadeIn>

            <SectionVideo src={`${BASE}/sec2.mp4`} label="Vidéo — L'Excellence Industrielle SICAM" />

            <FadeIn delay={0.1}>
              <p className="text-slate-600 mb-8">
                Ce qui a commencé comme une aventure locale est devenu une référence internationale. SICAM est aujourd'hui le <strong className="text-foreground">1er transformateur de tomates en Tunisie</strong> et se hisse fièrement dans le <strong className="text-foreground">Top 20 mondial</strong> des industriels de la tomate.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Capacité record", text: "Nos installations transforment jusqu'à 12 000 tonnes de tomates fraîches par jour en pleine saison.", stat: "12 000 t/j" },
                { title: "Rapidité", text: "Grâce à notre implantation stratégique, la tomate passe du champ à la boîte en environ 3h seulement.", stat: "Environ 3h" },
                { title: "Présence globale", text: "De l'Afrique à l'Europe, en passant par l'Amérique, nos produits sont les ambassadeurs du savoir-faire tunisien.", stat: "30+ pays" },
              ].map((item, i) => (
                <FadeIn key={i} delay={0.1 * (i + 1)} direction="up">
                  <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm h-full flex flex-col" data-testid={`excellence-card-${i}`}>
                    <span className="text-2xl font-serif font-bold text-primary mb-2">{item.stat}</span>
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-base text-slate-600 leading-relaxed flex-1">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bloc 3 : Partenariat Agricole ── */}
      <section className="py-20 bg-white" data-testid="bloc-agri">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <p className="text-[10px] font-display font-bold tracking-[0.2em] text-secondary/50 uppercase mb-3">Le Partenariat Agricole</p>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="bloc-agri-title">
                SICAM Agri : La main dans la main avec la terre
              </h2>
              <div className="w-10 h-0.5 bg-secondary mb-6" />
            </FadeIn>

            <SectionVideo src={`${BASE}/sec3.mp4`} label="Vidéo — Le Partenariat Agricole SICAM" />

            <FadeIn delay={0.1}>
              <p className="text-slate-600 mb-4">
                Chez SICAM, nous sommes d'abord des agriculteurs. Nous avons structuré notre engagement en créant <strong className="text-foreground">SICAM Agri</strong>.
              </p>
              <p className="text-slate-600 mb-8">
                Nous ne nous contentons pas d'acheter des récoltes ; nous construisons l'avenir avec nos <strong className="text-foreground">2 100 agriculteurs partenaires</strong>.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { stat: "30", unit: "ingénieurs agronomes", text: "Accompagnement technique sur le terrain au quotidien." },
                { stat: "12", unit: "récolteuses mécaniques", text: "Gestion intelligente de l'eau (goutte-à-goutte), soutien financier et mécanisation." },
                { stat: "6 000+", unit: "hectares", text: "De tomates cultivés avec passion et respect des normes éthiques les plus strictes (SMETA, BSCI)." },
              ].map((item, i) => (
                <FadeIn key={i} delay={0.1 * (i + 1)} direction="up">
                  <div className="bg-secondary/5 rounded-2xl border border-secondary/10 p-6 h-full" data-testid={`agri-card-${i}`}>
                    <div className="mb-3">
                      <span className="text-3xl font-serif font-bold text-secondary">{item.stat}</span>
                      <span className="text-sm font-semibold text-secondary/70 ml-1.5">{item.unit}</span>
                    </div>
                    <p className="text-base text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bloc 4 : Innovation & ZRP ── */}
      <section className="py-20 bg-background" data-testid="bloc-zrp">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <p className="text-[10px] font-display font-bold tracking-[0.2em] text-secondary/50 uppercase mb-3">L'Innovation et le Futur</p>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="bloc-zrp-title">
                Pionniers par nature : L'Engagement Zéro Résidu de Pesticides — ZRP
              </h2>
              <div className="w-10 h-0.5 bg-secondary mb-6" />
            </FadeIn>

            <SectionVideo src={`${BASE}/sec4.mp4`} label="Vidéo — L'Innovation et le Futur SICAM" />

            <FadeIn delay={0.1}>
              <div className="space-y-5 text-slate-600">
                <p>
                  L'héritage ne nous empêche pas d'innover, au contraire. Nous avons été les premiers à lancer la <strong className="text-foreground">tomate pelée en 2007</strong>, les premiers sur l'<strong className="text-foreground">ouverture facile en 2012</strong>.
                </p>
                <p>
                  Aujourd'hui, SICAM marque l'histoire mondiale de la tomate en devenant la <strong className="text-foreground">première entreprise au monde</strong> à certifier son Double Concentré et ses Tomates Cubées « Zéro Résidu de Pesticides — ZRP ».
                </p>
                <p>
                  C'est l'aboutissement de décennies de savoir-faire, d'analyses rigoureuses (1 000 analyses/jour) et d'une traçabilité totale.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-secondary/5 border border-secondary/10 text-center sm:text-left">
                <img src={logoZrp} alt="Logo ZRP" className="w-20 h-20 object-contain flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-bold text-foreground text-lg mb-1">
                    Zéro Résidus de Pesticides
                  </p>
                  <p className="text-sm text-slate-600">
                    100% Naturel. Sans conservateurs, sans additifs et Zéro Résidus de pesticides.
                  </p>
                </div>
                <Link href="/zrp" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-white text-sm font-semibold hover:bg-secondary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50 flex-shrink-0" data-testid="link-zrp">
                  Découvrir le Zéro Résidu de Pesticides — ZRP
                  <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Frise chronologique (inversée : 2025 → 1958) ── */}
      <section className="py-20 bg-white" data-testid="frise-chronologique">
        <div className="container mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar size={24} className="text-primary" />
              </div>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground" data-testid="frise-title">
                Les dates clés
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-translate-x-px" />

              {timelineEvents.map((event, i) => (
                <FadeIn key={i} delay={Math.min(i * 0.1, 0.5)} direction={i % 2 === 0 ? "right" : "left"}>
                  <div
                    className={cn(
                      "relative flex items-start mb-10 last:mb-0",
                      i % 2 !== 0 && "md:flex-row-reverse"
                    )}
                    data-testid={`frise-event-${i}`}
                  >
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm -translate-x-1/2 mt-2 z-10" />

                    <div className={cn(
                      "ml-12 md:ml-0 md:w-[45%]",
                      i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"
                    )}>
                      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-serif font-bold mb-2">
                          {event.year}
                        </span>
                        <p className="text-base text-slate-700 leading-relaxed">{event.text}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
