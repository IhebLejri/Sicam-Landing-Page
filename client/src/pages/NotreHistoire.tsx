import { Link } from "wouter";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { ArrowRight, Sprout, Factory, Tractor, FlaskConical, Calendar } from "lucide-react";

import logoZrp from "@assets/Asset_3@2x_1772017659058.png";

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

const timelineEvents = [
  { year: "1958", text: "Youssef Bayahi lance la première entreprise, genèse du Groupe." },
  { year: "1969", text: "Naissance de SICAM à Medjez El Bab." },
  { year: "2012", text: "Innovation « Easy Open » (Ouverture Facile)." },
  { year: "2013", text: "Création de PROCAN (Autonomie sur l'emballage métallique)." },
  { year: "2016", text: "Lancement de SICAM AGRI (Partenariat agricole intégré)." },
  { year: "2021", text: "Internationalisation avec l'acquisition de PLANT SAS (France)." },
  { year: "2025", text: "Révolution Zéro Résidu de Pesticides — ZRP (Certification)." },
];

export default function NotreHistoire() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 bg-gradient-to-b from-primary/95 to-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl" />
        </div>
        <div className="container mx-auto px-6 md:px-8 relative z-10 text-center max-w-4xl">
          <FadeIn>
            <p className="text-xs font-display font-semibold tracking-[0.2em] text-white/40 uppercase mb-6" data-testid="hero-surtitre">
              Une famille, une terre, une passion
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight" data-testid="histoire-title">
              L'Héritage SICAM : Une passion tunisienne, une excellence mondiale.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ── La Racine ── */}
      <section className="py-20 bg-white" data-testid="bloc-racine">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Sprout size={24} className="text-primary" />
                </div>
                <span className="text-sm font-bold tracking-[0.15em] text-primary/60 uppercase">La Racine</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="bloc-racine-title">
                1969 : Là où tout a commencé
              </h2>
            </FadeIn>

            <SectionVideo src={`${BASE}/sec1.mp4`} label="Vidéo — La Racine de SICAM" />

            <FadeIn delay={0.15}>
              <div className="space-y-5 text-slate-600">
                <p>
                  L'histoire de SICAM est avant tout une histoire de transmission. Elle prend racine dans la vision d'un homme, <strong className="text-foreground">Youssef Bayahi (1920–2007)</strong>, un pionnier qui a cru, dès l'aube de l'indépendance, au potentiel infini de l'agriculture tunisienne.
                </p>
                <p>
                  En 1969, il choisit les terres fertiles de <strong className="text-foreground">Medjez El Bab</strong> pour planter une graine qui allait grandir avec le pays. Son rêve n'était pas seulement de construire une usine, mais de valoriser le travail de nos agriculteurs et d'offrir aux familles tunisiennes le meilleur de nos champs, toute l'année.
                </p>
                <p>
                  Cet esprit de famille, transmis de père en fils, reste aujourd'hui notre boussole. Il guide chaque décision, préservant l'âme d'une entreprise restée fidèle à ses valeurs fondatrices tout en regardant vers l'avenir.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── L'Excellence Industrielle ── */}
      <section className="py-20 bg-background" data-testid="bloc-excellence">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Factory size={24} className="text-primary" />
                </div>
                <span className="text-sm font-bold tracking-[0.15em] text-primary/60 uppercase">L'Excellence Industrielle</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="bloc-excellence-title">
                Du cœur de la Medjerda au Top 20 Mondial
              </h2>
            </FadeIn>

            <SectionVideo src={`${BASE}/sec2.mp4`} label="Vidéo — L'Excellence Industrielle SICAM" />

            <FadeIn delay={0.1}>
              <p className="text-slate-600 mb-8">
                Ce qui a commencé comme une aventure locale est devenu une référence internationale. SICAM est aujourd'hui le <strong className="text-foreground">1er transformateur de tomates en Tunisie</strong> et se hisse fièrement dans le <strong className="text-foreground">Top 20 mondial</strong> des industriels de la tomate.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h3 className="text-lg font-bold text-primary mb-6">Notre force ? La maîtrise totale de la filière.</h3>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Capacité record",
                  text: "Nos installations transforment jusqu'à 10 000 tonnes de tomates fraîches par jour en pleine saison.",
                  stat: "10 000 t/j",
                },
                {
                  title: "Rapidité",
                  text: "Grâce à notre implantation stratégique, la tomate passe du champ à la boîte en environ 3h seulement.",
                  stat: "Environ 3h",
                },
                {
                  title: "Présence globale",
                  text: "De l'Afrique à l'Europe, en passant par l'Amérique, nos produits sont les ambassadeurs du savoir-faire tunisien.",
                  stat: "30+ pays",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={0.1 * (i + 1)} direction="up">
                  <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm h-full flex flex-col" data-testid={`excellence-card-${i}`}>
                    <span className="text-2xl font-serif font-bold text-primary mb-2">{item.stat}</span>
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed flex-1">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Le Partenariat Agricole ── */}
      <section className="py-20 bg-white" data-testid="bloc-agri">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Tractor size={24} className="text-secondary" />
                </div>
                <span className="text-sm font-bold tracking-[0.15em] text-secondary/60 uppercase">Le Partenariat Agricole</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="bloc-agri-title">
                SICAM Agri : La main dans la main avec la terre
              </h2>
            </FadeIn>

            <SectionVideo src={`${BASE}/sec3.mp4`} label="Vidéo — Le Partenariat Agricole SICAM" />

            <FadeIn delay={0.1}>
              <p className="text-slate-600 mb-4">
                Chez SICAM, nous sommes d'abord des agriculteurs. En 2016, nous avons structuré notre engagement en créant <strong className="text-foreground">SICAM Agri</strong>.
              </p>
              <p className="text-slate-600 mb-8">
                Nous ne nous contentons pas d'acheter des récoltes ; nous construisons l'avenir avec nos <strong className="text-foreground">2 100 agriculteurs partenaires</strong>.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stat: "30",
                  unit: "ingénieurs agronomes",
                  text: "Accompagnement technique sur le terrain au quotidien.",
                },
                {
                  stat: "12",
                  unit: "récolteuses mécaniques",
                  text: "Gestion intelligente de l'eau (goutte-à-goutte), soutien financier et mécanisation.",
                },
                {
                  stat: "6 000+",
                  unit: "hectares",
                  text: "De tomates cultivés avec passion et respect des normes éthiques les plus strictes (SMETA, BSCI).",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={0.1 * (i + 1)} direction="up">
                  <div className="bg-secondary/5 rounded-2xl border border-secondary/10 p-6 h-full" data-testid={`agri-card-${i}`}>
                    <div className="mb-3">
                      <span className="text-3xl font-serif font-bold text-secondary">{item.stat}</span>
                      <span className="text-sm font-semibold text-secondary/70 ml-1.5">{item.unit}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── L'Innovation et le Futur ── */}
      <section className="py-20 bg-background" data-testid="bloc-zrp">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <FlaskConical size={24} className="text-secondary" />
                </div>
                <span className="text-sm font-bold tracking-[0.15em] text-secondary/60 uppercase">L'Innovation et le Futur</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="bloc-zrp-title">
                Pionniers par nature : L'Engagement Zéro Résidu de Pesticides — ZRP
              </h2>
            </FadeIn>

            <SectionVideo src={`${BASE}/sec4.mp4`} label="Vidéo — L'Innovation et le Futur SICAM" />

            <FadeIn delay={0.1}>
              <div className="space-y-5 text-slate-600">
                <p>
                  L'héritage ne nous empêche pas d'innover, au contraire. Nous avons été les premiers à lancer la <strong className="text-foreground">tomate pelée en 2008</strong>, les premiers sur l'<strong className="text-foreground">ouverture facile en 2012</strong>.
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
                    100 % Naturel. Sans conservateurs. Sans additifs.
                  </p>
                  <p className="text-sm text-slate-600">
                    Et désormais, avec la garantie absolue d'une pureté certifiée.
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

      {/* ── Frise chronologique ── */}
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
                        <p className="text-sm text-slate-700 leading-relaxed">{event.text}</p>
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
