"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Sun, ShieldCheck, ArrowRight, Heart } from "lucide-react";
import { useShop, ProductItem } from "@/context/ShopContext";

export default function MilletsTurmericSection() {
  const { addToCart, setQuickViewProduct } = useShop();

  const milletProduct: ProductItem = {
    id: "heritage-millets",
    name: "Heritage Millets Selection",
    category: "Natural Products",
    subtitle: "Ancient Drought-Resilient Grains",
    price: 340,
    unit: "1 kg Bag",
    description:
      "Grown by smallholder dryland tribal farmers without synthetic fertilizers or chemical pesticides. Naturally low glycemic index, gluten-free, rich in iron and calcium.",
    image: "/images/millets-grain.jpg",
    origin: "Deccan Plateau Rain-Fed Farmlands",
    harvestMethod: "Sickle harvested and naturally sun-winnowed",
    inStock: true,
  };

  const turmericProduct: ProductItem = {
    id: "pure-turmeric-powder",
    name: "Wild Sun-Cured Turmeric Powder",
    category: "Natural Products",
    subtitle: "Curcumin > 5.8% • Aromatic Golden Root",
    price: 290,
    unit: "250g Glass Jar",
    description:
      "Hand-dug mature turmeric rhizomes cured by boiling and slow sun-drying on woven bamboo mats. Retains high essential oils and natural medicinal potency.",
    image: "/images/turmeric-spice.jpg",
    origin: "Eastern Ghats Mountain Clustered Tribes",
    harvestMethod: "Traditional slow hammer-pounded, zero artificial coloring",
    inStock: true,
  };

  return (
    <section
      id="natural-products"
      className="py-24 sm:py-36 lg:py-44 bg-[#F7F3EB] text-[#1C1E1B] relative overflow-hidden border-t border-[#1C1E1B]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Pre-heading */}
        <div className="flex items-center gap-3 mb-4 reveal-fade-up">
          <span className="w-8 h-[1px] bg-[#B4783B]" />
          <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#B4783B] font-semibold">
            Ancestral Earth Harvest
          </span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#101F17] tracking-tight leading-[1.08] reveal-fade-up reveal-delay-150">
            Millets & Turmeric. <br />
            <span className="italic font-normal text-[#995535]">Sun-cured vitality.</span>
          </h2>
          <p className="mt-6 text-sm sm:text-base text-[#5E625A] font-light leading-relaxed reveal-fade-up reveal-delay-200">
            Long before industrial monoculture, India’s agrarian wisdom relied on resilient ancient millets and healing golden turmeric. Sourced directly from rain-fed tribal farming clusters with zero chemicals.
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Visual Frame */}
          <div className="lg:col-span-7 relative reveal-fade-up reveal-delay-250">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(180,120,59,0.12)] bg-[#EAE4D7] border border-white/80">
              <Image
                src="/images/millets-turmeric.jpg"
                alt="Artisanal bowls of golden millets and sun-cured turmeric powder"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white text-xs">
                <span className="font-serif italic text-xs sm:text-sm drop-shadow">
                  Stone-ground & unpolished • Direct tribal harvest
                </span>
                <span className="self-start sm:self-auto liquid-glass text-[#101F17] px-3 py-1 text-[9.5px] uppercase font-sans tracking-widest font-semibold rounded-full border border-white/60 shadow-sm flex-shrink-0">
                  Zero Preservatives
                </span>
              </div>
            </div>
          </div>

          {/* Product Pair Cards in Liquid Glass */}
          <div className="lg:col-span-5 space-y-6">
            {/* Millets Card */}
            <div className="p-6 sm:p-7 liquid-glass rounded-3xl border border-white/80 hover:border-[#B4783B]/50 transition-all duration-300 shadow-lg hover:shadow-xl reveal-fade-up reveal-delay-300">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#6F8369] font-semibold">
                    Ancient Staple Grain
                  </span>
                  <h3 className="font-serif text-2xl text-[#101F17] mt-0.5">
                    Heritage Millets Selection
                  </h3>
                  <p className="text-xs text-[#5E625A] mt-1 font-light leading-relaxed">
                    Unpolished Foxtail, Little & Ragi millets. Naturally pest-resistant, requires 70% less water than rice or wheat.
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#1C1E1B]/8 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="font-serif text-xl font-semibold text-[#101F17]">₹340</span>
                  <span className="text-[11px] text-[#5E625A]"> / 1 kg Canvas Sack</span>
                </div>
                <button
                  onClick={() => setQuickViewProduct(milletProduct)}
                  className="px-4.5 sm:px-6 py-2 sm:py-2.5 bg-[#101F17] hover:bg-[#1E3528] text-[#FAF7F2] text-[10.5px] sm:text-[11px] uppercase font-sans tracking-[0.16em] sm:tracking-[0.22em] font-semibold rounded-full transition-all duration-300 cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  Preview & Select
                </button>
              </div>
            </div>

            {/* Turmeric Card */}
            <div
              onClick={() => setQuickViewProduct(turmericProduct)}
              className="p-6 sm:p-7 liquid-glass rounded-3xl border border-white/80 hover:border-[#DF9F52]/50 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer reveal-fade-up reveal-delay-400"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#B4783B] font-semibold">
                    Medicinal Golden Root
                  </span>
                  <h3 className="font-serif text-2xl text-[#101F17] mt-0.5">
                    Wild Turmeric Powder
                  </h3>
                  <p className="text-xs text-[#5E625A] mt-1 font-light leading-relaxed">
                    High curcumin content (&gt;5.8%) verified. Sun-dried on woven bamboo mats and slow pounded to preserve volatile curcuma oils.
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#1C1E1B]/8 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="font-serif text-xl font-semibold text-[#101F17]">₹290</span>
                  <span className="text-[11px] text-[#5E625A]"> / 250g Jar</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setQuickViewProduct(turmericProduct);
                  }}
                  className="px-4.5 sm:px-6 py-2 sm:py-2.5 bg-[#101F17] hover:bg-[#1E3528] text-[#FAF7F2] text-[10.5px] sm:text-[11px] uppercase font-sans tracking-[0.16em] sm:tracking-[0.22em] font-semibold rounded-full transition-all duration-300 cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  Preview & Select
                </button>
              </div>
            </div>

            {/* Farm Story Note */}
            <div className="p-4.5 liquid-glass rounded-2xl border border-[#B4783B]/30 text-xs text-[#5E625A] reveal-fade-up reveal-delay-500">
              <span className="font-semibold text-[#101F17]">Seasonal Harvest Notice: </span>
              Each batch is dated with the harvest season and geographic village cluster code printed directly onto the natural packaging label.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
