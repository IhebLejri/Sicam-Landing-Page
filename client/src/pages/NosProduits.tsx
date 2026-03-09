import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

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

import kg3Pulpe from "@assets/3-KG-PULPE-DE-TOMATE_1773059635480.png";
import kg3SP from "@assets/3KG-SP_1773059635480.png";
import kg3TC from "@assets/3-KG-TC_1773059635480.png";
import kg3TCA from "@assets/3KG-TCA_1773059635481.png";
import kg3TCP4 from "@assets/3-KG-TCP-4_-FR_1773059635481.png";
import kg3TCP15 from "@assets/3-KG-TCP-15_-FR_1773059635481.png";
import kg3TPC from "@assets/3-KG-TPC_1773059635482.png";
import kg3TPE from "@assets/3-KG-TPE-FR-1_1773059635482.png";

import confAbricot from "@assets/CONFITURE-ABRICOT_1773059334071.png";
import confCoing from "@assets/CONFITURE-COING_1773059334071.png";
import confFigue from "@assets/CONFITURE-FIGUE_1773059334072.png";
import confFraise from "@assets/CONFITURE-FRAISE_1773059334072.png";

import harissa70 from "@assets/ETUI-&-TUBE-HARISSA-70g_1773059349699.png";
import harissa140 from "@assets/ETUI-&-TUBE-HARISSA-140g_1773059349700.png";
import harissa135 from "@assets/H-135g_1773059349700.png";
import harissa380 from "@assets/H-380g_1773059349700.png";
import harissa760 from "@assets/H-760g_1773059349701.png";

import alRaha from "@assets/AL_RAHA_TPE_ANG_copie_1773059395998.png";
import alTaieAng from "@assets/AL_TAIE_TPC_ANG_1773059395999.png";
import alTaieArb from "@assets/AL_TAIE_TPC_ARB_1773059395999.png";
import baresaTC from "@assets/BARESA-TC_1773059395999.png";
import baresaTPE from "@assets/BARESA-TPE_1773059396000.png";
import bontaTPCAng from "@assets/BONTA_TPC_ANG_1773059418667.png";
import bontaTPCArb from "@assets/BONTA_TPC_ARB_1773059418667.png";
import bontaTPEAng from "@assets/BONTA_TPE_ANG_copie_1773059418667.png";
import bontaTPEArb from "@assets/BONTA_TPE_ARB_1773059418668.png";
import farmfoodTPC from "@assets/FARMFOOD-TPC_1773059418668.png";
import farmfoodTPE from "@assets/FARMFOOD_TPE_1773059418668.png";
import fifoodAng from "@assets/FIFOOD_TPE_ANG_1773059418669.png";
import fifoodArb from "@assets/FIFOOD_TPE_ARB_1773059418669.png";
import fleursChamps from "@assets/FLEURS-DES-CHAMPS_1773059418669.png";
import fleursPack from "@assets/FLEURS-DES-CHAMPS-PACK_1773059469210.png";
import kosta from "@assets/KOSTA_1773059469210.png";
import leaderTCA from "@assets/LEADER_TCA_1773059469210.png";
import leaderTPC from "@assets/LEADER_TPC_1773059469211.png";
import leaderTPE from "@assets/LEADER_TPE_1773059469211.png";
import makadirTPCAng from "@assets/MAKADIR_TPC_ANG_1773059469211.png";
import makadirTPCArb from "@assets/MAKADIR_TPC_ARB_1773059469212.png";
import makadirTPEAng from "@assets/MAKADIR_TPE_ANG_1773059502596.png";
import makadirTPEArb from "@assets/MAKADIR_TPE_ARB_1773059502597.png";
import plantTPC from "@assets/PLANT-TPC_1773059545634.png";
import reem from "@assets/REEM_1773059545634.png";
import rima from "@assets/RIMA_1773059545636.png";
import safaAng from "@assets/SAFA_FOOD_ANG_copie_1773059545636.png";
import safaArb from "@assets/SAFA_FOOD_TPE_ARB_2_1773059545637.png";
import santaTPC from "@assets/SANTA-MARIA-TPC_1773059545637.png";
import santaTPE from "@assets/SANTA-MARIA-TPE_1773059545638.png";
import pleinSoleilTPC from "@assets/TPC-PLEIN-SOLEIL_1773059545638.png";
import pleinSoleilTPE from "@assets/TPE-PLEIN-SOLEIL_1773059545638.png";

import moroAng from "@assets/MORO_TPE_ANG_1773059502598.png";
import moroArb from "@assets/MORO_ARB_TPE_1773059502597.png";
import myGarden from "@assets/My_garden_of_eden_ANG_1773059502598.png";
import nadirTCAAng from "@assets/NADIR_TCA_ANG_2_1773059502599.png";
import nadirTCAArb from "@assets/NADIR_TCA_ARB_2_1773059502599.png";
import nadirTCPAng from "@assets/NADIR_TCP_4__ANG_._1773059502599.png";
import nadirTCPArb from "@assets/NADIR_TCP_4__ARB_2_1773059502600.png";
import nadirTPCAng from "@assets/NADIR_TPC_ANG_2_1773059545633.png";
import nadirTPEAng from "@assets/NADIR_TPE_ANG_2png_1773059545633.png";
import nadirTPEArb from "@assets/NADIR_TPE_ARB_2_1773059545634.png";

type Category = "all" | "tomates" | "tomates3kg" | "confitures" | "harissa" | "mdd";

interface Product {
  id: string;
  name: string;
  image: string;
  category: Category;
  size?: string;
}

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "Tous les produits" },
  { key: "tomates", label: "Tomates SICAM" },
  { key: "tomates3kg", label: "Tomates 3 KG" },
  { key: "confitures", label: "Confitures" },
  { key: "harissa", label: "Harissa" },
  { key: "mdd", label: "Marques Distributeurs" },
];

const products: Product[] = [
  { id: "dct", name: "Double Concentré de Tomates", image: dct, category: "tomates", size: "400g" },
  { id: "dct-800", name: "Double Concentré de Tomates", image: dct800g, category: "tomates", size: "800g" },
  { id: "pulpe", name: "Pulpe de Tomates", image: pulpe, category: "tomates", size: "400g" },
  { id: "sp", name: "Sauce Pizza Basilic et Origan", image: sp, category: "tomates", size: "400g" },
  { id: "tc", name: "Tomates Pelées Concassées", image: tc, category: "tomates", size: "400g" },
  { id: "tca", name: "Tomates Pelées Concassées à l'Ail", image: tca, category: "tomates", size: "400g" },
  { id: "tcp4", name: "Tomates Concassées Pimentées 4%", image: tcp4, category: "tomates", size: "400g" },
  { id: "tcp15", name: "Tomates Concassées Piquantes +15%", image: tcp15, category: "tomates", size: "400g" },
  { id: "tpc", name: "Tomates Pelées en Cubes", image: tpc, category: "tomates", size: "400g" },
  { id: "tpe", name: "Tomates Entières Pelées", image: tpe, category: "tomates", size: "400g" },

  { id: "3kg-pulpe", name: "Pulpe de Tomates", image: kg3Pulpe, category: "tomates3kg", size: "3 KG" },
  { id: "3kg-sp", name: "Sauce Pizza Basilic et Origan", image: kg3SP, category: "tomates3kg", size: "3 KG" },
  { id: "3kg-tc", name: "Tomates Pelées Concassées", image: kg3TC, category: "tomates3kg", size: "3 KG" },
  { id: "3kg-tca", name: "Tomates Pelées Concassées à l'Ail", image: kg3TCA, category: "tomates3kg", size: "3 KG" },
  { id: "3kg-tcp4", name: "Tomates Concassées Pimentées 4%", image: kg3TCP4, category: "tomates3kg", size: "3 KG" },
  { id: "3kg-tcp15", name: "Tomates Concassées Piquantes +15%", image: kg3TCP15, category: "tomates3kg", size: "3 KG" },
  { id: "3kg-tpc", name: "Tomates Pelées en Cubes", image: kg3TPC, category: "tomates3kg", size: "3 KG" },
  { id: "3kg-tpe", name: "Tomates Pelées Entières", image: kg3TPE, category: "tomates3kg", size: "3 KG" },

  { id: "conf-abricot", name: "Confiture d'Abricot", image: confAbricot, category: "confitures" },
  { id: "conf-coing", name: "Confiture de Coing", image: confCoing, category: "confitures" },
  { id: "conf-figue", name: "Confiture de Figue", image: confFigue, category: "confitures" },
  { id: "conf-fraise", name: "Confiture de Fraise", image: confFraise, category: "confitures" },

  { id: "harissa-70", name: "Harissa en Tube", image: harissa70, category: "harissa", size: "70g" },
  { id: "harissa-140", name: "Harissa en Tube", image: harissa140, category: "harissa", size: "140g" },
  { id: "harissa-135", name: "Harissa", image: harissa135, category: "harissa", size: "135g" },
  { id: "harissa-380", name: "Harissa", image: harissa380, category: "harissa", size: "380g" },
  { id: "harissa-760", name: "Harissa", image: harissa760, category: "harissa", size: "760g" },

  { id: "al-raha", name: "Al Raha", image: alRaha, category: "mdd" },
  { id: "al-taie-ang", name: "Al Taie (EN)", image: alTaieAng, category: "mdd" },
  { id: "al-taie-arb", name: "Al Taie (AR)", image: alTaieArb, category: "mdd" },
  { id: "baresa-tc", name: "Baresa TC", image: baresaTC, category: "mdd" },
  { id: "baresa-tpe", name: "Baresa TPE", image: baresaTPE, category: "mdd" },
  { id: "bonta-tpc-ang", name: "Bonta TPC (EN)", image: bontaTPCAng, category: "mdd" },
  { id: "bonta-tpc-arb", name: "Bonta TPC (AR)", image: bontaTPCArb, category: "mdd" },
  { id: "bonta-tpe-ang", name: "Bonta TPE (EN)", image: bontaTPEAng, category: "mdd" },
  { id: "bonta-tpe-arb", name: "Bonta TPE (AR)", image: bontaTPEArb, category: "mdd" },
  { id: "farmfood-tpc", name: "Farmfood TPC", image: farmfoodTPC, category: "mdd" },
  { id: "farmfood-tpe", name: "Farmfood TPE", image: farmfoodTPE, category: "mdd" },
  { id: "fifood-ang", name: "Fifood (EN)", image: fifoodAng, category: "mdd" },
  { id: "fifood-arb", name: "Fifood (AR)", image: fifoodArb, category: "mdd" },
  { id: "fleurs-champs", name: "Fleurs des Champs", image: fleursChamps, category: "mdd" },
  { id: "fleurs-pack", name: "Fleurs des Champs Pack", image: fleursPack, category: "mdd" },
  { id: "kosta", name: "Kosta", image: kosta, category: "mdd" },
  { id: "leader-tca", name: "Leader TCA", image: leaderTCA, category: "mdd" },
  { id: "leader-tpc", name: "Leader TPC", image: leaderTPC, category: "mdd" },
  { id: "leader-tpe", name: "Leader TPE", image: leaderTPE, category: "mdd" },
  { id: "makadir-tpc-ang", name: "Makadir TPC (EN)", image: makadirTPCAng, category: "mdd" },
  { id: "makadir-tpc-arb", name: "Makadir TPC (AR)", image: makadirTPCArb, category: "mdd" },
  { id: "makadir-tpe-ang", name: "Makadir TPE (EN)", image: makadirTPEAng, category: "mdd" },
  { id: "makadir-tpe-arb", name: "Makadir TPE (AR)", image: makadirTPEArb, category: "mdd" },
  { id: "moro-ang", name: "Moro (EN)", image: moroAng, category: "mdd" },
  { id: "moro-arb", name: "Moro (AR)", image: moroArb, category: "mdd" },
  { id: "my-garden", name: "My Garden of Eden", image: myGarden, category: "mdd" },
  { id: "nadir-tca-ang", name: "Nadir TCA (EN)", image: nadirTCAAng, category: "mdd" },
  { id: "nadir-tca-arb", name: "Nadir TCA (AR)", image: nadirTCAArb, category: "mdd" },
  { id: "nadir-tcp-ang", name: "Nadir TCP (EN)", image: nadirTCPAng, category: "mdd" },
  { id: "nadir-tcp-arb", name: "Nadir TCP (AR)", image: nadirTCPArb, category: "mdd" },
  { id: "nadir-tpc-ang", name: "Nadir TPC (EN)", image: nadirTPCAng, category: "mdd" },
  { id: "nadir-tpe-ang", name: "Nadir TPE (EN)", image: nadirTPEAng, category: "mdd" },
  { id: "nadir-tpe-arb", name: "Nadir TPE (AR)", image: nadirTPEArb, category: "mdd" },
  { id: "plant-tpc", name: "Plant TPC", image: plantTPC, category: "mdd" },
  { id: "reem", name: "Reem", image: reem, category: "mdd" },
  { id: "rima", name: "Rima", image: rima, category: "mdd" },
  { id: "safa-ang", name: "Safa Food (EN)", image: safaAng, category: "mdd" },
  { id: "safa-arb", name: "Safa Food (AR)", image: safaArb, category: "mdd" },
  { id: "santa-tpc", name: "Santa Maria TPC", image: santaTPC, category: "mdd" },
  { id: "santa-tpe", name: "Santa Maria TPE", image: santaTPE, category: "mdd" },
  { id: "pleinsoleil-tpc", name: "Plein Soleil TPC", image: pleinSoleilTPC, category: "mdd" },
  { id: "pleinsoleil-tpe", name: "Plein Soleil TPE", image: pleinSoleilTPE, category: "mdd" },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <FadeIn delay={Math.min(index * 0.05, 0.4)} direction="up">
      <div
        className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
        data-testid={`product-card-${product.id}`}
      >
        <div className="relative aspect-square bg-gradient-to-b from-slate-50 to-white p-6 flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-4 text-center border-t border-slate-50">
          <h3 className="font-bold text-sm text-foreground leading-snug" data-testid={`product-name-${product.id}`}>
            {product.name}
          </h3>
          {product.size && (
            <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold" data-testid={`product-size-${product.id}`}>
              {product.size}
            </span>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

export default function NosProduits() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-primary to-[#b8050f] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4" data-testid="products-title">
              Nos Produits
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Toute la richesse de la tomate tunisienne, transformée avec passion et savoir-faire depuis 1969.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 bg-white sticky top-[52px] md:top-[64px] z-30 border-b border-slate-100 shadow-sm" role="toolbar" aria-label="Filtrer par catégorie">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3" data-testid="product-filters">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  "px-4 md:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200",
                  activeCategory === cat.key
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
          {activeCategory === "all" ? (
            <>
              {categories.filter(c => c.key !== "all").map((cat) => {
                const catProducts = products.filter(p => p.category === cat.key);
                return (
                  <div key={cat.key} className="mb-16 last:mb-0" data-testid={`section-${cat.key}`}>
                    <FadeIn>
                      <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">
                        {cat.label}
                      </h2>
                      <div className="w-16 h-1 bg-primary rounded-full mb-8" />
                    </FadeIn>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                      {catProducts.map((product, i) => (
                        <ProductCard key={product.id} product={product} index={i} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}

          <FadeIn>
            <div className="mt-20 bg-gradient-to-r from-secondary to-emerald-700 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                  Service Marques Distributeurs (MDD)
                </h3>
                <p className="text-white/90 text-lg max-w-2xl mx-auto mb-2">
                  SICAM propose un service complet de fabrication sous marques distributeurs. Nous accompagnons nos partenaires internationaux avec des produits sur mesure, conformes aux standards de qualité les plus exigeants.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
