import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ShieldCheck, Award, X, Flame, Leaf } from "lucide-react";

import dct800g from "@assets/DCT-800G-FR_1773059756210.png";
import dct from "@assets/DCT-FR_1773059756210.png";
import pulpe from "@assets/PULPE-DE-TOMATE-FR_1773059756211.png";
import sp from "@assets/SP-FR_1773059756211.png";
import tc from "@assets/TC_1773059756212.png";
import tca from "@assets/TCA_1773059756212.png";
import tcp4 from "@assets/TCP-4_-FR_1773059756212.png";
import tcp15 from "@assets/TCP-15_-FR_1773059756213.png";
import tpc from "@assets/TPC-FR_1773059756213.png";
import tpe from "@assets/TPE_1773059756214.png";

import harissa135 from "@assets/H-135g_1773059349700.png";
import harissa380 from "@assets/H-380g_1773059349700.png";
import harissa760 from "@assets/H-760g_1773059349701.png";
import harissa70 from "@assets/ETUI-&-TUBE-HARISSA-70g_1773059349699.png";

import confAbricot from "@assets/CONFITURE-ABRICOT_1773059334071.png";
import confCoing from "@assets/CONFITURE-COING_1773059334071.png";
import confFigue from "@assets/CONFITURE-FIGUE_1773059334072.png";
import confFraise from "@assets/CONFITURE-FRAISE_1773059334072.png";

import ficheTPC from "@assets/fiche1_1773061001087.png";
import ficheTPE from "@assets/fiche2_1773061001087.png";
import ficheTCA from "@assets/fiche5_1773061001088.png";
import ficheTC from "@assets/fiche6_1773061001089.png";
import fichePulpe from "@assets/fiche7_1773061001089.png";
import ficheSP from "@assets/fiche8_1773061001089.png";
import ficheTCP4 from "@assets/fiche9_1773061001090.png";
import ficheTCP15 from "@assets/fiche10_1773061001090.png";
import ficheHarissa from "@assets/fiche11_1773061001090.png";
import ficheDCT from "@assets/fiche12_1773061001091.png";

import logoZrp from "@assets/Asset_3@2x_1772017659058.png";

type Category = "all" | "tomates" | "harissa" | "confitures" | "zrp";

interface Product {
  id: string;
  name: string;
  image: string;
  category: "tomates" | "harissa" | "confitures";
  description: string;
  tags: string[];
  zrp: boolean;
  formats: string;
  ficheImage?: string;
  badges?: string[];
}

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "Toutes les catégories" },
  { key: "tomates", label: "Tomates (10)" },
  { key: "harissa", label: "Harissa (4 formats)" },
  { key: "confitures", label: "Confitures (4 saveurs)" },
  { key: "zrp", label: "Certifié ZRP \u2605" },
];

const categoryIntros: Record<string, string> = {
  tomates: "La tomate est notre cœur de métier depuis 1969. 100 % d'origine tunisienne, récoltée en plein soleil, transformée rapidement pour préserver toutes ses qualités — nos tomates SICAM s'adaptent à toutes vos recettes, du quotidien à l'exceptionnel.",
  harissa: "La harissa SICAM, c'est une institution. Élue Produit de l'Année sept fois consécutives, elle est la harissa de référence en Tunisie — reconnue pour son équilibre entre feu et profondeur, sa couleur vive, et sa consistance qui nappe sans déchirer. Disponible en quatre formats pour s'adapter à tous les usages.",
  confitures: "Des fruits tunisiens sélectionnés avec soin, transformés en confitures généreuses et parfumées. Chaque pot est une invitation à retrouver le goût authentique des fruits du terroir tunisien.",
};

const products: Product[] = [
  {
    id: "dct-800",
    name: "Double Concentré de Tomates",
    image: dct800g,
    category: "tomates",
    description: "Notre produit signature. Double concentré de tomates tunisiennes, cultivées en plein soleil et transformées dans les heures suivant la récolte pour préserver intensité et couleur. Sans conservateurs, sans arômes ajoutés. Une concentration de saveur pure, au format idéal pour la cuisine du quotidien et les grandes tablées.",
    tags: ["Tomates", "100 % tunisien", "Sans conservateurs"],
    zrp: true,
    formats: "Boîte 4/4 — 800g net | Disponible aussi en sac aseptique (usage professionnel)",
    ficheImage: ficheDCT,
  },
  {
    id: "dct-400",
    name: "Double Concentré de Tomates",
    image: dct,
    category: "tomates",
    description: "Le même double concentré SICAM, en format demi-boîte — idéal pour les petits foyers ou les recettes à portions individuelles. Même qualité, même engagement ZRP, même traçabilité totale du champ à la boîte.",
    tags: ["Tomates", "100 % tunisien", "Sans conservateurs"],
    zrp: true,
    formats: "Boîte ½ — 400g net",
    ficheImage: ficheDCT,
  },
  {
    id: "tpe",
    name: "Tomates Pelées Entières",
    image: tpe,
    category: "tomates",
    description: "Des tomates entières, pelées à la vapeur, conservées dans leur propre jus naturel. Charnues, fondantes, avec ce goût légèrement sucré que seul le soleil tunisien donne à la tomate. Parfaites pour les sauces, les plats mijotés, les coulis maison.",
    tags: ["Tomates", "100 % tunisien", "Sans conservateurs"],
    zrp: true,
    formats: "Boîte 4/4 — 800g net | Boîte ½ — 400g net",
    ficheImage: ficheTPE,
  },
  {
    id: "tpc",
    name: "Tomates Pelées en Cubes",
    image: tpc,
    category: "tomates",
    description: "Coupées en dés réguliers, prêtes à l'emploi. Texture ferme qui se tient à la cuisson, idéale pour les sauces chunky, les shakshuka, les tajines ou toute recette où vous souhaitez voir les morceaux. SICAM est la première entreprise au monde à avoir certifié ZRP ce format.",
    tags: ["Tomates", "100 % tunisien", "Sans conservateurs"],
    zrp: true,
    formats: "Boîte 4/4 — 800g net | Boîte ½ — 400g net",
    ficheImage: ficheTPC,
  },
  {
    id: "pulpe",
    name: "Pulpe de Tomate",
    image: pulpe,
    category: "tomates",
    description: "Une pulpe généreuse, obtenue par pressage doux des tomates fraîches. Texture naturelle préservée, couleur rouge intense, saveur équilibrée entre douceur et acidité. La base parfaite pour toutes vos sauces tomate maison, vos pizzas, vos soupes.",
    tags: ["Tomates", "100 % tunisien", "Sans conservateurs"],
    zrp: true,
    formats: "Boîte 4/4 — 800g net | En aseptique (usage professionnel)",
    ficheImage: fichePulpe,
  },
  {
    id: "tc",
    name: "Tomates Pelées Concassées",
    image: tc,
    category: "tomates",
    description: "Tomates pelées et concassées en morceaux irréguliers — texture rustique et généreuse, idéale pour les sauces à l'italienne, les ragouts et les plats de famille. La base incontournable de la cuisine méditerranéenne.",
    tags: ["Tomates", "100 % tunisien"],
    zrp: false,
    formats: "Boîte 4/4 — 800g net | Boîte ½ — 400g net",
    ficheImage: ficheTC,
  },
  {
    id: "tca",
    name: "Tomates Pelées Concassées à l'Ail",
    image: tca,
    category: "tomates",
    description: "Le classique revisité : des tomates concassées relevées d'ail naturel. Prêtes à l'emploi, sans préparation supplémentaire. Pour vos sauces pasta, vos bruschette et toutes vos recettes où l'ail est le fil conducteur.",
    tags: ["Tomates", "100 % tunisien", "Arôme naturel"],
    zrp: false,
    formats: "Boîte ½ — 400g net",
    ficheImage: ficheTCA,
  },
  {
    id: "tcp4",
    name: "Tomates Concassées Pimentées 4%",
    image: tcp4,
    category: "tomates",
    description: "Une touche de chaleur maîtrisée : 4 % de piment doux pour relever vos plats sans les dominer. Idéales pour les shakshuka, les sauces arabiata, les tajines ou simplement pour ceux qui aiment sentir la vie dans leur assiette.",
    tags: ["Tomates", "100 % tunisien", "Piment doux"],
    zrp: false,
    formats: "Boîte ½ — 400g net",
    ficheImage: ficheTCP4,
  },
  {
    id: "tcp15",
    name: "Tomates Concassées Piquantes 15%",
    image: tcp15,
    category: "tomates",
    description: "Pour les amateurs de saveurs qui s'assument. 15 % de piment — une intensité franche, sans compromis. La version pour ceux qui aiment que leurs plats aient du caractère. En sauce, en garniture, ou à la cuillère pour les aventuriers.",
    tags: ["Tomates", "100 % tunisien", "Piment fort"],
    zrp: false,
    formats: "Boîte ½ — 400g net",
    ficheImage: ficheTCP15,
  },
  {
    id: "sp",
    name: "Sauce Pizza Basilic & Origan",
    image: sp,
    category: "tomates",
    description: "Une sauce prête à l'emploi, parfumée au basilic et à l'origan naturels. La base idéale pour vos pizzas maison, mais aussi pour les bruschette, les pâtes ou toute recette qui mérite un fond aromatique méditerranéen. Résultat garanti, même pour les cuisiniers pressés.",
    tags: ["Tomates", "100 % tunisien", "Prête à l'emploi", "Herbes naturelles"],
    zrp: false,
    formats: "Boîte ½ — 400g net",
    ficheImage: ficheSP,
  },

  {
    id: "harissa-760",
    name: "Harissa SICAM — 760g",
    image: harissa760,
    category: "harissa",
    description: "Le grand format pour les vrais amateurs. Recette traditionnelle, piments tunisiens sélectionnés, texture généreuse. Idéale pour les grandes tablées, la cuisine en quantité, ou simplement pour ne jamais en manquer. La harissa qui a fait la réputation de SICAM depuis des décennies.",
    tags: ["Harissa", "Recette traditionnelle", "Piments sélectionnés"],
    zrp: false,
    formats: "Boîte — 760g net",
    ficheImage: ficheHarissa,
    badges: ["Produit de l'Année — 7 fois"],
  },
  {
    id: "harissa-380",
    name: "Harissa SICAM — 380g",
    image: harissa380,
    category: "harissa",
    description: "Le format familial — celui du quotidien. Même recette, même équilibre, même intensité que le grand format. Parfait pour accompagner les repas de famille, assaisonner les bricks, relever un couscous ou customiser un sandwich.",
    tags: ["Harissa", "Recette traditionnelle", "Format familial"],
    zrp: false,
    formats: "Boîte — 380g net",
    ficheImage: ficheHarissa,
    badges: ["Produit de l'Année — 7 fois"],
  },
  {
    id: "harissa-135",
    name: "Harissa SICAM — 135g",
    image: harissa135,
    category: "harissa",
    description: "Le format pratique du quotidien — pour les petits foyers, les repas individuels, ou comme premier contact avec la harissa SICAM. Compact, économique, fidèle à la recette originale.",
    tags: ["Harissa", "Recette traditionnelle", "Format pratique"],
    zrp: false,
    formats: "Boîte — 135g net",
    ficheImage: ficheHarissa,
    badges: ["Produit de l'Année — 7 fois"],
  },
  {
    id: "harissa-tube",
    name: "Harissa SICAM — Tube",
    image: harissa70,
    category: "harissa",
    description: "La harissa SICAM en tube — pratique, propre, refermable. Le compagnon idéal pour doser précisément votre harissa, en cuisine comme à table. Même recette, format optimisé pour le quotidien.",
    tags: ["Harissa", "Recette traditionnelle", "Format tube"],
    zrp: false,
    formats: "Tube 70g | Tube 140g",
    ficheImage: ficheHarissa,
    badges: ["Produit de l'Année — 7 fois"],
  },

  {
    id: "conf-abricot",
    name: "Confiture d'Abricot",
    image: confAbricot,
    category: "confitures",
    description: "Confiture d'abricots tunisiens, préparée avec des fruits sélectionnés pour leur maturité et leur parfum. Une texture généreuse et un goût ensoleillé qui rappelle les vergers du nord de la Tunisie.",
    tags: ["Confiture", "Fruits tunisiens"],
    zrp: false,
    formats: "Pot en verre",
  },
  {
    id: "conf-coing",
    name: "Confiture de Coing",
    image: confCoing,
    category: "confitures",
    description: "Le coing tunisien sublimé en confiture dorée et parfumée. Une saveur douce et subtilement épicée, parfaite pour les petits-déjeuners et les goûters authentiques.",
    tags: ["Confiture", "Fruits tunisiens"],
    zrp: false,
    formats: "Pot en verre",
  },
  {
    id: "conf-figue",
    name: "Confiture de Figue",
    image: confFigue,
    category: "confitures",
    description: "Des figues tunisiennes gorgées de soleil, transformées en une confiture onctueuse et savoureuse. Le goût du terroir tunisien dans chaque cuillère.",
    tags: ["Confiture", "Fruits tunisiens"],
    zrp: false,
    formats: "Pot en verre",
  },
  {
    id: "conf-fraise",
    name: "Confiture de Fraise",
    image: confFraise,
    category: "confitures",
    description: "Des fraises tunisiennes sélectionnées pour leur douceur et leur arôme intense. Une confiture classique, généreuse en fruits, pour tous les moments de partage.",
    tags: ["Confiture", "Fruits tunisiens"],
    zrp: false,
    formats: "Pot en verre",
  },
];

function ProductCard({ product, index, onFicheClick }: { product: Product; index: number; onFicheClick: (img: string, name: string) => void }) {
  return (
    <FadeIn delay={Math.min(index * 0.08, 0.5)} direction="up">
      <div
        className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
        data-testid={`product-card-${product.id}`}
      >
        <div className="relative aspect-square bg-gradient-to-b from-slate-50 to-white p-6 flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {product.zrp && (
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-secondary text-white text-xs font-bold shadow-lg" data-testid={`badge-zrp-${product.id}`}>
              <ShieldCheck size={14} />
              ZRP
            </div>
          )}
          {product.badges?.map((badge, i) => (
            <div key={i} className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-amber-500 text-white text-xs font-bold shadow-lg" data-testid={`badge-award-${product.id}`}>
              <Award size={14} />
              <span className="hidden sm:inline">{badge}</span>
              <span className="sm:hidden">7x</span>
            </div>
          ))}
        </div>

        <div className="p-5 flex flex-col flex-1 border-t border-slate-50">
          <h3 className="font-bold text-base text-foreground leading-snug mb-2" data-testid={`product-name-${product.id}`}>
            {product.name}
          </h3>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {product.tags.map((tag, i) => (
              <span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                {tag === "Piment fort" && <Flame size={10} className="text-red-500" />}
                {tag === "Piment doux" && <Flame size={10} className="text-orange-400" />}
                {tag.includes("tunisien") && <Leaf size={10} className="text-secondary" />}
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-slate-500 leading-relaxed mb-3 line-clamp-3 flex-1">
            {product.description}
          </p>

          <p className="text-xs text-slate-400 font-medium mb-3" data-testid={`product-formats-${product.id}`}>
            {product.formats}
          </p>

          {product.ficheImage && (
            <button
              onClick={() => onFicheClick(product.ficheImage!, product.name)}
              className="w-full mt-auto py-2.5 px-4 rounded-xl bg-primary/5 hover:bg-primary/10 text-primary text-sm font-semibold transition-colors border border-primary/10"
              data-testid={`fiche-btn-${product.id}`}
            >
              Fiche technique
            </button>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

export default function NosProduits() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [ficheOpen, setFicheOpen] = useState(false);
  const [ficheImg, setFicheImg] = useState("");
  const [ficheName, setFicheName] = useState("");

  const openFiche = (img: string, name: string) => {
    setFicheImg(img);
    setFicheName(name);
    setFicheOpen(true);
  };

  const filtered = activeCategory === "zrp"
    ? products.filter((p) => p.zrp)
    : activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const realCategories = categories.filter(c => c.key !== "all" && c.key !== "zrp");

  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-primary to-[#b8050f] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeIn>
            <p className="text-sm md:text-base font-bold tracking-widest text-white/70 uppercase mb-4">
              100 % tunisien. Du champ à votre table.
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight" data-testid="products-title">
              Nos produits — La générosité tunisienne, mise en boîte depuis 1969
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Chaque produit SICAM est le résultat d'un choix : celui de la qualité sur le compromis, de la traçabilité sur l'opacité, du goût authentique sur le standardisé. Des tomates cultivées sous le soleil de Medjez El Bab aux confitures de fruits tunisiens, en passant par notre harissa de caractère — voici notre gamme complète.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-6 bg-white sticky top-[52px] md:top-[64px] z-30 border-b border-slate-100 shadow-sm" role="toolbar" aria-label="Filtrer par catégorie">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3" data-testid="product-filters">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  "px-4 md:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200",
                  cat.key === "zrp" && activeCategory === cat.key
                    ? "bg-secondary text-white shadow-lg shadow-secondary/25"
                    : cat.key === "zrp" && activeCategory !== cat.key
                      ? "bg-secondary/10 text-secondary hover:bg-secondary/20 border border-secondary/20"
                      : activeCategory === cat.key
                        ? "bg-primary text-white shadow-lg shadow-primary/25"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800"
                )}
                data-testid={`filter-${cat.key}`}
                aria-pressed={activeCategory === cat.key}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          {activeCategory === "zrp" && (
            <FadeIn>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 p-6 rounded-2xl bg-secondary/5 border border-secondary/10 text-center sm:text-left">
                <img src={logoZrp} alt="Logo ZRP" className="w-16 h-16 object-contain flex-shrink-0" />
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-secondary mb-1">
                    Produits Certifiés Zéro Résidu de Pesticides
                  </h2>
                  <p className="text-sm text-slate-600">
                    Saisons 2024 & 2025 — Certification CCPB N° 02/2025/10. Analysés sur plus de 600 molécules de pesticides.
                  </p>
                </div>
              </div>
            </FadeIn>
          )}

          {activeCategory === "all" ? (
            <>
              {realCategories.map((cat) => {
                const catProducts = products.filter(p => p.category === cat.key);
                const intro = categoryIntros[cat.key];
                return (
                  <div key={cat.key} className="mb-20 last:mb-0" data-testid={`section-${cat.key}`}>
                    <FadeIn>
                      <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">
                        {cat.label}
                      </h2>
                      <div className="w-16 h-1 bg-primary rounded-full mb-4" />
                      {intro && (
                        <p className="text-slate-600 leading-relaxed max-w-3xl mb-8">
                          {intro}
                        </p>
                      )}
                    </FadeIn>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {catProducts.map((product, i) => (
                        <ProductCard key={product.id} product={product} index={i} onFicheClick={openFiche} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {activeCategory !== "zrp" && categoryIntros[activeCategory] && (
                <FadeIn>
                  <p className="text-slate-600 leading-relaxed max-w-3xl mb-8">
                    {categoryIntros[activeCategory]}
                  </p>
                </FadeIn>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} onFicheClick={openFiche} />
                ))}
              </div>
            </>
          )}

          <FadeIn>
            <div className="mt-20 bg-gradient-to-r from-secondary to-emerald-700 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                  Service Marques Distributeurs (MDD)
                </h3>
                <p className="text-white/90 text-lg max-w-2xl mx-auto">
                  SICAM propose un service complet de fabrication sous marques distributeurs. Nous accompagnons nos partenaires internationaux avec des produits sur mesure, conformes aux standards de qualité les plus exigeants.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Dialog open={ficheOpen} onOpenChange={setFicheOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
          <DialogTitle className="sr-only">Fiche technique — {ficheName}</DialogTitle>
          <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white border-b">
            <h3 className="font-bold text-lg text-foreground">Fiche technique — {ficheName}</h3>
            <button
              onClick={() => setFicheOpen(false)}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
              data-testid="fiche-modal-close"
              aria-label="Fermer la fiche technique"
            >
              <X size={20} />
            </button>
          </div>
          {ficheImg && (
            <div className="p-4">
              <img
                src={ficheImg}
                alt={`Fiche technique — ${ficheName}`}
                className="w-full h-auto rounded-lg"
                data-testid="fiche-modal-image"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
