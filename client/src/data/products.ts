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

export { dct800g as bgTomates, harissa760 as bgHarissa, confFraise as bgConfitures };

import logoZrpAsset from "@assets/Asset_3@2x_1772017659058.png";
export { logoZrpAsset as logoZrp };

export interface Product {
  id: string;
  name: string;
  image: string;
  category: "tomates" | "harissa" | "confitures";
  description: string;
  shortDesc: string;
  tags: string[];
  zrp: boolean;
  formats: string;
  ficheImage?: string;
  badges?: string[];
}

export interface CategoryConfig {
  key: "tomates" | "harissa" | "confitures";
  label: string;
  gradient: string;
  bgImage: string;
  subtitle: string;
  description: string;
}

export const categoryConfigs: CategoryConfig[] = [
  {
    key: "tomates",
    label: "Tomates",
    gradient: "from-[#6e0c14] via-[#9a1820] to-[#b82030]",
    bgImage: tpe,
    subtitle: "Notre cœur de métier depuis 1969",
    description: "La tomate est notre passion. 100 % d'origine tunisienne, récoltée en plein soleil de la Medjerda, transformée en quelques heures pour préserver intensité et couleur. Nos 10 références s'adaptent à toutes vos recettes, du quotidien à l'exceptionnel.",
  },
  {
    key: "harissa",
    label: "Harissa",
    gradient: "from-[#7a2400] via-[#b03a10] to-[#c85015]",
    bgImage: harissa760,
    subtitle: "7 fois Produit de l'Année",
    description: "La harissa SICAM, c'est une institution. Élue Produit de l'Année sept fois consécutives, elle est reconnue pour son équilibre parfait entre feu et profondeur, sa couleur vive, et sa consistance qui nappe sans déchirer. 4 formats pour tous les usages.",
  },
  {
    key: "confitures",
    label: "Confitures",
    gradient: "from-[#5c2e10] via-[#8c5020] to-[#a86a30]",
    bgImage: confFraise,
    subtitle: "Les fruits du terroir tunisien",
    description: "Des fruits tunisiens sélectionnés avec soin, transformés en confitures généreuses et parfumées. Chaque pot est une invitation à retrouver le goût authentique du terroir tunisien. 4 saveurs, autant de moments de partage.",
  },
];

export const allProducts: Product[] = [
  {
    id: "dct-800",
    name: "Double Concentré de Tomates 800g",
    image: dct800g,
    category: "tomates",
    description: "Notre produit signature. Double concentré de tomates tunisiennes, cultivées en plein soleil et transformées dans les heures suivant la récolte pour préserver intensité et couleur. Sans conservateurs, sans arômes ajoutés. Une concentration de saveur pure, au format idéal pour la cuisine du quotidien et les grandes tablées.",
    shortDesc: "Double concentré, format grand public",
    tags: ["100 % tunisien", "Sans conservateurs"],
    zrp: true,
    formats: "Boîte 4/4 — 800g net",
    ficheImage: ficheDCT,
  },
  {
    id: "dct-400",
    name: "Double Concentré de Tomates 400g",
    image: dct,
    category: "tomates",
    description: "Le même double concentré SICAM, en format demi-boîte. Idéal pour les petits foyers ou les recettes à portions individuelles. Même qualité, même engagement ZRP, même traçabilité totale du champ à la boîte.",
    shortDesc: "Double concentré, format demi-boîte",
    tags: ["100 % tunisien", "Sans conservateurs"],
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
    shortDesc: "Tomates entières pelées au jus naturel",
    tags: ["100 % tunisien", "Sans conservateurs"],
    zrp: true,
    formats: "Boîte 4/4 — 800g | Boîte ½ — 400g",
    ficheImage: ficheTPE,
  },
  {
    id: "tpc",
    name: "Tomates Pelées en Cubes",
    image: tpc,
    category: "tomates",
    description: "Coupées en dés réguliers, prêtes à l'emploi. Texture ferme qui se tient à la cuisson, idéale pour les sauces chunky, les shakshuka, les tajines. SICAM est la première entreprise au monde à certifier ZRP ce format.",
    shortDesc: "Tomates en cubes, certifiées ZRP",
    tags: ["100 % tunisien", "Sans conservateurs"],
    zrp: true,
    formats: "Boîte 4/4 — 800g | Boîte ½ — 400g",
    ficheImage: ficheTPC,
  },
  {
    id: "pulpe",
    name: "Pulpe de Tomate",
    image: pulpe,
    category: "tomates",
    description: "Une pulpe généreuse, obtenue par pressage doux des tomates fraîches. Texture naturelle préservée, couleur rouge intense. La base parfaite pour toutes vos sauces tomate maison, vos pizzas, vos soupes.",
    shortDesc: "Pulpe fine de tomates, texture naturelle",
    tags: ["100 % tunisien", "Sans conservateurs"],
    zrp: true,
    formats: "Boîte 4/4 — 800g | Aseptique professionnel",
    ficheImage: fichePulpe,
  },
  {
    id: "tc",
    name: "Tomates Pelées Concassées",
    image: tc,
    category: "tomates",
    description: "Tomates pelées et concassées en morceaux irréguliers — texture rustique et généreuse, idéale pour les sauces à l'italienne, les ragouts et les plats de famille. La base incontournable de la cuisine méditerranéenne.",
    shortDesc: "Tomates concassées, texture généreuse",
    tags: ["100 % tunisien"],
    zrp: false,
    formats: "Boîte 4/4 — 800g | Boîte ½ — 400g",
    ficheImage: ficheTC,
  },
  {
    id: "tca",
    name: "Tomates Concassées à l'Ail",
    image: tca,
    category: "tomates",
    description: "Des tomates concassées relevées d'ail naturel. Prêtes à l'emploi. Pour vos sauces pasta, vos bruschette et toutes vos recettes où l'ail est le fil conducteur.",
    shortDesc: "Tomates concassées à l'ail naturel",
    tags: ["100 % tunisien", "Arôme naturel"],
    zrp: false,
    formats: "Boîte ½ — 400g net",
    ficheImage: ficheTCA,
  },
  {
    id: "tcp4",
    name: "Tomates Concassées Pimentées 4%",
    image: tcp4,
    category: "tomates",
    description: "Une touche de chaleur maîtrisée : 4 % de piment doux pour relever vos plats sans les dominer. Idéales pour les shakshuka, les sauces arabiata, les tajines.",
    shortDesc: "Tomates + piment doux 4%",
    tags: ["100 % tunisien", "Piment doux"],
    zrp: false,
    formats: "Boîte ½ — 400g net",
    ficheImage: ficheTCP4,
  },
  {
    id: "tcp15",
    name: "Tomates Concassées Piquantes 15%",
    image: tcp15,
    category: "tomates",
    description: "15 % de piment — une intensité franche, sans compromis. Pour ceux qui aiment que leurs plats aient du caractère. En sauce, en garniture, ou pour les aventuriers.",
    shortDesc: "Tomates + piment fort 15%",
    tags: ["100 % tunisien", "Piment fort"],
    zrp: false,
    formats: "Boîte ½ — 400g net",
    ficheImage: ficheTCP15,
  },
  {
    id: "sp",
    name: "Sauce Pizza Basilic & Origan",
    image: sp,
    category: "tomates",
    description: "Une sauce prête à l'emploi, parfumée au basilic et à l'origan naturels. La base idéale pour vos pizzas maison, les bruschette, les pâtes ou toute recette méditerranéenne.",
    shortDesc: "Sauce pizza prête à l'emploi",
    tags: ["100 % tunisien", "Prête à l'emploi"],
    zrp: false,
    formats: "Boîte ½ — 400g net",
    ficheImage: ficheSP,
  },
  {
    id: "harissa-760",
    name: "Harissa SICAM 760g",
    image: harissa760,
    category: "harissa",
    description: "Le grand format pour les vrais amateurs. Recette traditionnelle, piments tunisiens sélectionnés, texture généreuse. La harissa qui a fait la réputation de SICAM depuis des décennies.",
    shortDesc: "Grand format, recette traditionnelle",
    tags: ["Recette traditionnelle", "Piments sélectionnés"],
    zrp: false,
    formats: "Boîte — 760g net",
    ficheImage: ficheHarissa,
    badges: ["Produit de l'Année — 7 fois"],
  },
  {
    id: "harissa-380",
    name: "Harissa SICAM 380g",
    image: harissa380,
    category: "harissa",
    description: "Le format familial du quotidien. Même recette, même équilibre, même intensité. Parfait pour les repas de famille, les bricks, un couscous ou un sandwich.",
    shortDesc: "Format familial, usage quotidien",
    tags: ["Recette traditionnelle", "Format familial"],
    zrp: false,
    formats: "Boîte — 380g net",
    ficheImage: ficheHarissa,
    badges: ["Produit de l'Année — 7 fois"],
  },
  {
    id: "harissa-135",
    name: "Harissa SICAM 135g",
    image: harissa135,
    category: "harissa",
    description: "Le format pratique — pour les petits foyers, les repas individuels. Compact, économique, fidèle à la recette originale.",
    shortDesc: "Format pratique et compact",
    tags: ["Recette traditionnelle", "Format pratique"],
    zrp: false,
    formats: "Boîte — 135g net",
    ficheImage: ficheHarissa,
    badges: ["Produit de l'Année — 7 fois"],
  },
  {
    id: "harissa-tube",
    name: "Harissa SICAM Tube 70g",
    image: harissa70,
    category: "harissa",
    description: "La harissa SICAM en tube — pratique, propre, refermable. Le compagnon idéal pour doser précisément votre harissa en cuisine comme à table.",
    shortDesc: "Format tube, refermable",
    tags: ["Recette traditionnelle", "Format tube"],
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
    description: "Confiture d'abricots tunisiens, préparée avec des fruits sélectionnés pour leur maturité et leur parfum. Texture généreuse, goût ensoleillé qui rappelle les vergers du nord de la Tunisie.",
    shortDesc: "Abricots tunisiens, saveur ensoleillée",
    tags: ["Fruits tunisiens"],
    zrp: false,
    formats: "Pot en verre",
  },
  {
    id: "conf-coing",
    name: "Confiture de Coing",
    image: confCoing,
    category: "confitures",
    description: "Le coing tunisien sublimé en confiture dorée et parfumée. Saveur douce et subtilement épicée, parfaite pour les petits-déjeuners et les goûters authentiques.",
    shortDesc: "Coing tunisien, saveur dorée",
    tags: ["Fruits tunisiens"],
    zrp: false,
    formats: "Pot en verre",
  },
  {
    id: "conf-figue",
    name: "Confiture de Figue",
    image: confFigue,
    category: "confitures",
    description: "Des figues tunisiennes gorgées de soleil, transformées en une confiture onctueuse et savoureuse. Le goût du terroir tunisien dans chaque cuillère.",
    shortDesc: "Figues tunisiennes, goût du terroir",
    tags: ["Fruits tunisiens"],
    zrp: false,
    formats: "Pot en verre",
  },
  {
    id: "conf-fraise",
    name: "Confiture de Fraise",
    image: confFraise,
    category: "confitures",
    description: "Des fraises tunisiennes sélectionnées pour leur douceur et leur arôme intense. Confiture classique, généreuse en fruits, pour tous les moments de partage.",
    shortDesc: "Fraises tunisiennes, généreuse en fruits",
    tags: ["Fruits tunisiens"],
    zrp: false,
    formats: "Pot en verre",
  },
];

export function findProduct(id: string): Product | null {
  return allProducts.find(p => p.id === id) ?? null;
}

export function getProductsByCategory(cat: "tomates" | "harissa" | "confitures"): Product[] {
  return allProducts.filter(p => p.category === cat);
}

export function getZRPProducts(): Product[] {
  return allProducts.filter(p => p.zrp);
}
