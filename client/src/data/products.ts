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
import harissa140 from "@assets/ETUI-&-TUBE-HARISSA-140g_1779868415546.png";

import confAbricot470 from "@assets/CON_Abricot_1780561408199.png";
import confAbricot270 from "@assets/EXTRA-ABRICOT-nobg_1780561408198.png";
import confCoing470 from "@assets/Conf_Coing_1780561408200.png";
import confCoing270 from "@assets/EXTRA-COING-nobg_1780561408198.png";
import confFigue470 from "@assets/CON_Figue_1780561408199.png";
import confFigue270 from "@assets/EXTRA-FIGUE-nobg_1780561408198.png";
import confFraise470 from "@assets/CONF_Fraise_1780561408197.png";
import confFraise270 from "@assets/EXTRA-FRAISE-nobg_1780561408199.png";

import packTCA from "@assets/PACK_DE_3_TCA_nobg.png";
import packTCP4 from "@assets/PACK_DE_3_TCP_4PCT_nobg.png";
import packTCP15 from "@assets/PACK_DE_3_TCP_15PCT_nobg.png";
import packTPC from "@assets/PACK_DE_3_TPC_nobg.png";
import packTPE from "@assets/PACK_DE_3_TPE_nobg.png";
import packPulpe from "@assets/PACK_DE3_PULPE_V1_nobg.png";
import packSP from "@assets/PACK_DE_3_SP_nobg.png";
import packTC from "@assets/PACK_DE_3_TC_nobg.png";

import champignons from "@assets/CHAMPIGNONS-DE-PARIS_1779446577492.png";
import haricotVert from "@assets/HARICOT-VERT_1779446585181.png";
import maisDoux from "@assets/MAIS-DOUX-280g_1779446595506.png";
import petitsPois from "@assets/PETITS-POIDS_1779446602018.png";
import petitsPoisCarottes from "@assets/PETITS-POIS-ET-CAROTTES_1779446608283.png";

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

export { dct as bgTomates, harissa760 as bgHarissa, confFraise470 as bgConfitures };

import logoZrpAsset from "@assets/Asset_3@2x_1779867553760.png";
export { logoZrpAsset as logoZrp };

export type ProductCategory =
  | "dct"
  | "tomate-pelee"
  | "pulpe"
  | "sauce-pizza"
  | "harissa"
  | "confitures"
  | "legumineuses"
  | "packs";

export interface Product {
  id: string;
  name: string;
  image: string;
  category: ProductCategory;
  description: string;
  shortDesc: string;
  tags: string[];
  zrp: boolean;
  formats: string;
  ficheImage?: string;
  badges?: string[];
}

export interface CategoryConfig {
  key: ProductCategory;
  label: string;
  gradient: string;
  bgImage: string;
  subtitle: string;
  description: string;
  portraitCrop?: boolean;
}

export const categoryConfigs: CategoryConfig[] = [
  {
    key: "dct",
    label: "Double Concentré de Tomate",
    gradient: "from-[#7a0e33] via-[#a01040] to-[#c61653]",
    bgImage: dct,
    subtitle: "Notre signature depuis 1969",
    description: "Le double concentré de tomates SICAM, c'est l'essence même de la tomate tunisienne. Cultivées sous le soleil de la Medjerda, transformées en environ 3h pour préserver intensité et couleur. Sans conservateurs, sans arômes ajoutés.",
  },
  {
    key: "tomate-pelee",
    label: "Tomates Pelées",
    gradient: "from-[#7a1018] via-[#a01a22] to-[#c02030]",
    bgImage: tpe,
    subtitle: "Gamme Tomate Pelée — Entières, Concassées & Cubées",
    description: "Des tomates pelées à la vapeur, conservées dans leur propre jus naturel. Charnues, fondantes, avec ce goût légèrement sucré que seul le soleil tunisien donne. Entières, en cubes, concassées natures ou aromatisées — 6 références pour toutes vos recettes.",
  },
  {
    key: "pulpe",
    label: "Pulpe de Tomate",
    gradient: "from-[#5e1010] via-[#8a1a1a] to-[#b02020]",
    bgImage: pulpe,
    subtitle: "Gamme Pulpe — Texture naturelle préservée",
    description: "Une pulpe généreuse, obtenue par pressage doux des tomates fraîches. Texture naturelle préservée, couleur rouge intense. La base parfaite pour toutes vos sauces tomate maison, vos pizzas, vos soupes.",
  },
  {
    key: "sauce-pizza",
    label: "Sauce Pizza",
    gradient: "from-[#6e1a0a] via-[#9a2a10] to-[#c03a18]",
    bgImage: sp,
    subtitle: "Prête à l'emploi — Basilic et Origan",
    description: "Une sauce prête à l'emploi, parfumée au basilic et à l'origan naturels. La base idéale pour vos pizzas maison, les bruschette, les pâtes ou toute recette méditerranéenne.",
  },
  {
    key: "harissa",
    label: "Harissa",
    gradient: "from-[#7a2400] via-[#b03a10] to-[#c85015]",
    bgImage: harissa760,
    subtitle: "7 fois Produit de l'Année",
    description: "La harissa SICAM, c'est une institution. Élue Produit de l'Année sept fois consécutives, elle est reconnue pour son équilibre parfait entre feu et profondeur, sa couleur vive, et sa consistance qui nappe sans déchirer. 5 formats pour tous les usages.",
  },
  {
    key: "confitures",
    label: "Confitures",
    gradient: "from-[#5c2e10] via-[#8c5020] to-[#a86a30]",
    bgImage: confFraise470,
    subtitle: "Les fruits du terroir tunisien",
    description: "Des fruits tunisiens sélectionnés avec soin, transformés en confitures généreuses et parfumées. Chaque boîte est une invitation à retrouver le goût authentique du terroir tunisien. 4 saveurs, autant de moments de partage.",
  },
  {
    key: "legumineuses",
    label: "Légumineuses",
    gradient: "from-[#1a4020] via-[#2a6030] to-[#3a7a3a]",
    bgImage: haricotVert,
    subtitle: "Légumes en conserve — Fraîcheur préservée",
    description: "Des légumes sélectionnés avec soin, conservés au naturel pour préserver toute leur fraîcheur et leur valeur nutritive. Champignons, haricots verts, maïs doux, petits pois — une gamme complète pour accompagner vos plats au quotidien.",
  },
  {
    key: "packs",
    label: "Packs",
    gradient: "from-[#1a2a4a] via-[#253560] to-[#2e4080]",
    bgImage: packTPE,
    subtitle: "Format Pack 3 × 400g — Économique & pratique",
    description: "Nos produits phares conditionnés en pack de 3 boîtes 400g. Le format idéal pour les grandes familles, la restauration ou simplement faire des réserves sans jamais manquer de qualité SICAM. Tomates pelées, concassées, en cubes, sauce pizza et pulpe — toute la gamme en pack.",
  },
];

export const allProducts: Product[] = [
  {
    id: "dct-400",
    name: "Double Concentré de Tomates 400g",
    image: dct,
    category: "dct",
    description: "Notre produit signature. Double concentré de tomates tunisiennes, cultivées en plein soleil et transformées dans les heures suivant la récolte pour préserver intensité et couleur. Sans conservateurs, sans arômes ajoutés. Idéal pour les petits foyers ou les recettes à portions individuelles.",
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
    category: "tomate-pelee",
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
    category: "tomate-pelee",
    description: "Coupées en dés réguliers, prêtes à l'emploi. Texture ferme qui se tient à la cuisson, idéale pour les sauces chunky, les shakshuka, les tajines. SICAM est la première entreprise au monde à certifier ZRP ce format.",
    shortDesc: "Tomates en cubes, certifiées ZRP",
    tags: ["100 % tunisien", "Sans conservateurs"],
    zrp: true,
    formats: "Boîte 4/4 — 800g | Boîte ½ — 400g",
    ficheImage: ficheTPC,
  },
  {
    id: "tc",
    name: "Tomates Pelées Concassées",
    image: tc,
    category: "tomate-pelee",
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
    category: "tomate-pelee",
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
    category: "tomate-pelee",
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
    category: "tomate-pelee",
    description: "15 % de piment — une intensité franche, sans compromis. Pour ceux qui aiment que leurs plats aient du caractère. En sauce, en garniture, ou pour les aventuriers.",
    shortDesc: "Tomates + piment fort 15%",
    tags: ["100 % tunisien", "Piment fort"],
    zrp: false,
    formats: "Boîte ½ — 400g net",
    ficheImage: ficheTCP15,
  },
  {
    id: "pulpe",
    name: "Pulpe de Tomate",
    image: pulpe,
    category: "pulpe",
    description: "Une pulpe généreuse, obtenue par pressage doux des tomates fraîches. Texture naturelle préservée, couleur rouge intense. La base parfaite pour toutes vos sauces tomate maison, vos pizzas, vos soupes.",
    shortDesc: "Pulpe fine de tomates, texture naturelle",
    tags: ["100 % tunisien", "Sans conservateurs"],
    zrp: true,
    formats: "Boîte 4/4 — 800g | Aseptique professionnel",
    ficheImage: fichePulpe,
  },
  {
    id: "sp",
    name: "Sauce Pizza Basilic et Origan",
    image: sp,
    category: "sauce-pizza",
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
    id: "harissa-tube-140",
    name: "Harissa SICAM Tube 140g",
    image: harissa140,
    category: "harissa",
    description: "La harissa SICAM en grand tube — format généreux, pratique et refermable. La même recette authentique en format économique pour un usage quotidien. Pratique pour la cuisine et la table.",
    shortDesc: "Grand tube, format économique",
    tags: ["Recette traditionnelle", "Format tube"],
    zrp: false,
    formats: "Tube — 140g net",
    ficheImage: ficheHarissa,
    badges: ["Produit de l'Année — 7 fois"],
  },
  {
    id: "harissa-tube-70",
    name: "Harissa SICAM Tube 70g",
    image: harissa70,
    category: "harissa",
    description: "La harissa SICAM en tube — pratique, propre, refermable. Le compagnon idéal pour doser précisément votre harissa en cuisine comme à table.",
    shortDesc: "Format tube, refermable",
    tags: ["Recette traditionnelle", "Format tube"],
    zrp: false,
    formats: "Tube — 70g net",
    ficheImage: ficheHarissa,
    badges: ["Produit de l'Année — 7 fois"],
  },
  {
    id: "conf-abricot-470",
    name: "Confiture d'Abricot",
    image: confAbricot470,
    category: "confitures",
    description: "Confiture d'abricots tunisiens, préparée avec des fruits sélectionnés pour leur maturité et leur parfum. Texture généreuse, goût ensoleillé qui rappelle les vergers du nord de la Tunisie. Sans conservateurs, sans colorants.",
    shortDesc: "Abricots tunisiens, saveur ensoleillée",
    tags: ["Fruits tunisiens", "Sans conservateurs"],
    zrp: false,
    formats: "Boîte — 470g net",
  },
  {
    id: "conf-abricot-270",
    name: "Confiture d'Abricot",
    image: confAbricot270,
    category: "confitures",
    description: "Confiture d'abricots tunisiens, préparée avec des fruits sélectionnés pour leur maturité et leur parfum. Texture généreuse, goût ensoleillé qui rappelle les vergers du nord de la Tunisie. Sans conservateurs, sans colorants.",
    shortDesc: "Abricots tunisiens, saveur ensoleillée",
    tags: ["Fruits tunisiens", "Sans conservateurs"],
    zrp: false,
    formats: "Boîte — 270g net",
  },
  {
    id: "conf-coing-470",
    name: "Confiture de Coing",
    image: confCoing470,
    category: "confitures",
    description: "Le coing tunisien sublimé en confiture dorée et parfumée. Saveur douce et subtilement épicée, parfaite pour les petits-déjeuners et les goûters authentiques. Sans conservateurs, sans colorants.",
    shortDesc: "Coing tunisien, saveur dorée",
    tags: ["Fruits tunisiens", "Sans conservateurs"],
    zrp: false,
    formats: "Boîte — 470g net",
  },
  {
    id: "conf-coing-270",
    name: "Confiture de Coing",
    image: confCoing270,
    category: "confitures",
    description: "Le coing tunisien sublimé en confiture dorée et parfumée. Saveur douce et subtilement épicée, parfaite pour les petits-déjeuners et les goûters authentiques. Sans conservateurs, sans colorants.",
    shortDesc: "Coing tunisien, saveur dorée",
    tags: ["Fruits tunisiens", "Sans conservateurs"],
    zrp: false,
    formats: "Boîte — 270g net",
  },
  {
    id: "conf-figue-470",
    name: "Confiture de Figue",
    image: confFigue470,
    category: "confitures",
    description: "Des figues tunisiennes gorgées de soleil, transformées en une confiture onctueuse et savoureuse. Le goût du terroir tunisien dans chaque cuillère. Sans conservateurs, sans colorants.",
    shortDesc: "Figues tunisiennes, goût du terroir",
    tags: ["Fruits tunisiens", "Sans conservateurs"],
    zrp: false,
    formats: "Boîte — 470g net",
  },
  {
    id: "conf-figue-270",
    name: "Confiture de Figue",
    image: confFigue270,
    category: "confitures",
    description: "Des figues tunisiennes gorgées de soleil, transformées en une confiture onctueuse et savoureuse. Le goût du terroir tunisien dans chaque cuillère. Sans conservateurs, sans colorants.",
    shortDesc: "Figues tunisiennes, goût du terroir",
    tags: ["Fruits tunisiens", "Sans conservateurs"],
    zrp: false,
    formats: "Boîte — 270g net",
  },
  {
    id: "conf-fraise-470",
    name: "Confiture de Fraise",
    image: confFraise470,
    category: "confitures",
    description: "Des fraises tunisiennes sélectionnées pour leur douceur et leur arôme intense. Confiture classique, généreuse en fruits, pour tous les moments de partage. Sans conservateurs, sans colorants.",
    shortDesc: "Fraises tunisiennes, généreuse en fruits",
    tags: ["Fruits tunisiens", "Sans conservateurs"],
    zrp: false,
    formats: "Boîte — 470g net",
  },
  {
    id: "conf-fraise-270",
    name: "Confiture de Fraise",
    image: confFraise270,
    category: "confitures",
    description: "Des fraises tunisiennes sélectionnées pour leur douceur et leur arôme intense. Confiture classique, généreuse en fruits, pour tous les moments de partage. Sans conservateurs, sans colorants.",
    shortDesc: "Fraises tunisiennes, généreuse en fruits",
    tags: ["Fruits tunisiens", "Sans conservateurs"],
    zrp: false,
    formats: "Boîte — 270g net",
  },
  {
    id: "champignons-paris",
    name: "Champignons de Paris Pieds et Morceaux",
    image: champignons,
    category: "legumineuses",
    description: "Des champignons de Paris tendres et savoureux, conservés au naturel. Pieds et morceaux sélectionnés pour leur fraîcheur et leur arôme délicat. Parfaits pour vos omelettes, pizzas, sauces et plats mijotés.",
    shortDesc: "Pieds et morceaux, 400g net",
    tags: ["Conserve naturelle", "Prêt à l'emploi"],
    zrp: false,
    formats: "Boîte — 400g net / 210g égoutté",
  },
  {
    id: "haricots-verts",
    name: "Haricots Verts Très fins",
    image: haricotVert,
    category: "legumineuses",
    description: "Des haricots verts très fins, cueillis à maturité et conservés dans leur jus naturel. Croquants, savoureux, prêts à l'emploi. Idéaux en accompagnement, en salade ou dans vos plats cuisinés.",
    shortDesc: "Très fins, 400g net",
    tags: ["Conserve naturelle", "Sans additifs"],
    zrp: false,
    formats: "Boîte — 400g net / 220g égoutté",
  },
  {
    id: "mais-doux",
    name: "Maïs Doux en Grains",
    image: maisDoux,
    category: "legumineuses",
    description: "Des grains de maïs doux, dorés et sucrés, conservés sous vide pour préserver toute leur fraîcheur. Parfaits pour vos salades, vos garnitures de pizza, vos wraps ou comme accompagnement.",
    shortDesc: "En grains sous vide, 300g net",
    tags: ["Conserve naturelle", "Sans additifs"],
    zrp: false,
    formats: "Boîte — 300g net / 285g égoutté",
  },
  {
    id: "petits-pois",
    name: "Petits Pois Très fins",
    image: petitsPois,
    category: "legumineuses",
    description: "De petits pois très fins, tendres et sucrés. Conservés au naturel pour préserver leur couleur verte intense et leur saveur délicate. Idéaux pour vos riz, couscous, omelettes et accompagnements.",
    shortDesc: "Très fins, 400g net",
    tags: ["Conserve naturelle", "Sans additifs"],
    zrp: false,
    formats: "Boîte — 400g net / 280g égoutté",
  },
  {
    id: "petits-pois-carottes",
    name: "Petits Pois et Carottes",
    image: petitsPoisCarottes,
    category: "legumineuses",
    description: "L'association classique des petits pois très fins et des carottes fondantes, conservée au naturel. Une garniture colorée et nutritive, prête à l'emploi, pour accompagner vos plats du quotidien.",
    shortDesc: "Mélange classique, 400g net",
    tags: ["Conserve naturelle", "Mélange"],
    zrp: false,
    formats: "Boîte — 400g net / 265g égoutté",
  },
  {
    id: "pack-tpe",
    name: "Pack Tomates Pelées Entières 3×400g",
    image: packTPE,
    category: "packs",
    description: "Nos tomates pelées entières au jus naturel, conditionnées en pack économique de 3 boîtes 400g. Idéales pour toutes vos sauces, plats mijotés et coulis maison. Qualité SICAM, format pratique.",
    shortDesc: "Pack 3×400g, tomates entières",
    tags: ["Pack économique", "100 % tunisien"],
    zrp: false,
    formats: "Pack 3 × 400g",
  },
  {
    id: "pack-tpc",
    name: "Pack Tomates Pelées en Cubes 3×400g",
    image: packTPC,
    category: "packs",
    description: "Des dés de tomates pelées prêts à l'emploi, en pack de 3 boîtes. Texture ferme qui se tient à la cuisson — idéal pour les sauces chunky, les shakshuka et les tajines. Format avantageux.",
    shortDesc: "Pack 3×400g, tomates en cubes",
    tags: ["Pack économique", "100 % tunisien"],
    zrp: false,
    formats: "Pack 3 × 400g",
  },
  {
    id: "pack-tc",
    name: "Pack Tomates Pelées Concassées 3×400g",
    image: packTC,
    category: "packs",
    description: "Nos tomates pelées concassées en morceaux généreux, en pack de 3. La base incontournable de la cuisine méditerranéenne — sauces, ragouts, pizzas. Pratique et économique.",
    shortDesc: "Pack 3×400g, tomates concassées",
    tags: ["Pack économique", "100 % tunisien"],
    zrp: false,
    formats: "Pack 3 × 400g",
  },
  {
    id: "pack-tca",
    name: "Pack Tomates Concassées à l'Ail 3×400g",
    image: packTCA,
    category: "packs",
    description: "Tomates pelées concassées parfumées à l'ail, en pack de 3 boîtes 400g. Un concentré de saveur méditerranéenne pour vos sauces, pâtes et plats cuisinés.",
    shortDesc: "Pack 3×400g, à l'ail",
    tags: ["Pack économique", "Aromatisé à l'ail"],
    zrp: false,
    formats: "Pack 3 × 400g",
  },
  {
    id: "pack-tcp4",
    name: "Pack Tomates Concassées Pimentées 4% 3×400g",
    image: packTCP4,
    category: "packs",
    description: "Tomates pelées concassées avec 4 % de piment — une chaleur douce et parfumée, en pack de 3 boîtes.",
    shortDesc: "Pack 3×400g, pimentées 4%",
    tags: ["Pack économique", "Légèrement pimenté"],
    zrp: false,
    formats: "Pack 3 × 400g",
  },
  {
    id: "pack-tcp15",
    name: "Pack Tomates Concassées Piquantes +15% 3×400g",
    image: packTCP15,
    category: "packs",
    description: "Pour les amateurs de sensations fortes — tomates concassées avec plus de 15 % de piment, en pack de 3 boîtes 400g.",
    shortDesc: "Pack 3×400g, piquantes +15%",
    tags: ["Pack économique", "Très pimenté"],
    zrp: false,
    formats: "Pack 3 × 400g",
  },
  {
    id: "pack-pulpe",
    name: "Pack Pulpe de Tomates 3×400g",
    image: packPulpe,
    category: "packs",
    description: "Notre pulpe de tomates généreuse et naturelle, en pack économique de 3 boîtes. Texture naturelle préservée, couleur rouge intense.",
    shortDesc: "Pack 3×400g, pulpe naturelle",
    tags: ["Pack économique", "100 % tunisien"],
    zrp: false,
    formats: "Pack 3 × 400g",
  },
  {
    id: "pack-sp",
    name: "Pack Sauce Pizza Basilic et Origan 3×400g",
    image: packSP,
    category: "packs",
    description: "Notre sauce pizza prête à l'emploi au basilic et à l'origan naturels, en pack de 3 boîtes 400g.",
    shortDesc: "Pack 3×400g, basilic et origan",
    tags: ["Pack économique", "Prête à l'emploi"],
    zrp: false,
    formats: "Pack 3 × 400g",
  },
];

export function findProduct(id: string): Product | null {
  return allProducts.find(p => p.id === id) ?? null;
}

export function getProductsByCategory(cat: ProductCategory): Product[] {
  return allProducts.filter(p => p.category === cat);
}

export function getZRPProducts(): Product[] {
  return allProducts.filter(p => p.zrp);
}
