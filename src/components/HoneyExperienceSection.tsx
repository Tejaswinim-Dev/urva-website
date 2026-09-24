"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Droplets, Compass, Check, Eye } from "lucide-react";
import { useShop, ProductItem } from "@/context/ShopContext";

export default function HoneyExperienceSection() {
  const { addToCart, setQuickViewProduct } = useShop();

  const [quantities, setQuantities] = useState<Record<string, number>>({
    "deep-forest-honey": 1,
    "monofloral-honey": 1,
    "polyfloral-honey": 1,
    "honeydew-honey": 1,
  });

  const updateCardQuantity = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  const honeys: ProductItem[] = [
    {
      id: "deep-forest-honey",
      name: "Deep Forest Honey",
      category: "Honey",
      subtitle: "Wild Cliff Honey • Raw & Unheated",
      price: 780,
      unit: "350g Jar",
      description:
        "Harvested from wild colonies in ancient deciduous jungles. High in bio-enzymes, pollen grains, and dark resinous forest notes.",
      image: "/images/honey-deep-forest.jpg",
      origin: "Satpura Jungle Biosphere",
      harvestMethod: "Ethical smoke-free night foraging",
      inStock: true,
    },
    {
      id: "monofloral-honey",
      name: "Monofloral Honey",
      category: "Honey",
      subtitle: "Single-Origin Wild Mustard & Acacia",
      price: 650,
      unit: "350g Jar",
      description:
        "Bottled during a 21-day flowering bloom. Luminous golden tone with a gentle, perfumed wildflower fragrance.",
      image: "/images/honey-monofloral.jpg",
      origin: "Sub-Himalayan Foothills",
      harvestMethod: "Single-bloom seasonal isolation",
      inStock: true,
    },
    {
      id: "polyfloral-honey",
      name: "Polyfloral Honey",
      category: "Honey",
      subtitle: "Multi-Botanical • 40+ Species",
      price: 590,
      unit: "350g Jar",
      description:
        "Harvested as bees pollinate neem, mahua, jamun, and wild jasmine blossoms across monsoon hills. Complex multi-layered amber flavor.",
      image: "/images/honey-polyfloral.jpg",
      origin: "Western Ghats Mountain Biosphere",
      harvestMethod: "Cold centrifugation, unheated (<40°C)",
      inStock: true,
    },
    {
      id: "honeydew-honey",
      name: "Honeydew Honey",
      category: "Honey",
      subtitle: "Tree Honey • Mineral Dense",
      price: 850,
      unit: "350g Jar",
      description:
        "Rare autumn nectar harvested from the natural sweet sap exudates of sacred forest trees. Deep dark amber with rich malty notes.",
      image: "/images/honey-honeydew.jpg",
      origin: "Ancient Sal Reserves, Eastern Ghats",
      harvestMethod: "Rare autumn forest foraging",
      inStock: true,
    },
  ];

  return (
    <section
      id="honey"
      className="py-24 sm:py-32 lg:py-40 bg-[#09150E] text-[#FAF7F2] relative overflow-hidden"
    >
      {/* Subtle warm amber ambient light */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#DF9F52]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#234534]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16 reveal-fade-up">
          <div className="flex items-center gap-3 mb-3 reveal-fade-up reveal-delay-75">
            <span className="w-8 h-[1px] bg-[#DF9F52]" />
            <span className="text-[11px] font-sans uppercase tracking-[0.28em] text-[#DF9F52] font-semibold">
              The Wild Honey Archive
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-[#FAF7F2] reveal-fade-up reveal-delay-150">
            Purely Wild. <br />
            <span className="italic font-normal text-[#E8B86D]">Naturally Golden.</span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#C9D4C5]/85 font-light leading-relaxed max-w-xl reveal-fade-up reveal-delay-200">
            Harvested by indigenous forest elders using traditional, bee-friendly smoke-free techniques. Unpasteurized and dense with live enzymes.
          </p>
        </div>

        {/* Clean 4-Card Responsive Grid (No horizontal cutting or overflow!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {honeys.map((honey, index) => (
            <div
              key={honey.id}
              className={`liquid-glass-dark rounded-3xl border border-white/15 hover:border-[#DF9F52]/60 transition-all duration-500 p-5 flex flex-col justify-between group shadow-xl hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(223,159,82,0.18)] reveal-fade-up ${
                index === 0
                  ? "reveal-delay-150"
                  : index === 1
                  ? "reveal-delay-250"
                  : index === 2
                  ? "reveal-delay-350"
                  : "reveal-delay-450"
              }`}
            >
              <div>
                {/* 4:3 Image Container with Smooth Zoom & Curved Border */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A160F] mb-5 cursor-pointer rounded-2xl border border-white/10"
                  onClick={() => setQuickViewProduct(honey)}
                >
                  <Image
                    src={honey.image}
                    alt={honey.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A160F]/85 via-transparent to-transparent pointer-events-none" />

                  {/* Index badge */}
                  <div className="absolute top-3 left-3 text-[9.5px] font-mono text-[#DF9F52] liquid-glass-dark px-2.5 py-0.5 rounded-full border border-[#DF9F52]/30 shadow-sm">
                    0{index + 1}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-1.5">
                  <span className="text-[9.5px] uppercase font-sans tracking-[0.24em] text-[#DF9F52] font-semibold block">
                    {honey.subtitle}
                  </span>

                  <h3
                    onClick={() => setQuickViewProduct(honey)}
                    className="font-serif text-xl sm:text-2xl text-[#FAF7F2] font-normal leading-snug group-hover:text-[#E8B86D] transition-colors cursor-pointer"
                  >
                    {honey.name}
                  </h3>

                  <p className="text-xs text-[#C9D4C5]/75 font-light leading-relaxed pt-1 line-clamp-3">
                    {honey.description}
                  </p>
                </div>

                {/* Origin tag */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[10.5px] text-[#A3B19E]">
                  <Compass size={12} className="text-[#DF9F52] flex-shrink-0" />
                  <span className="truncate">{honey.origin}</span>
                </div>
              </div>

              {/* Price & Quantity Controls */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <div>
                  <span className="font-serif text-xl font-semibold text-[#FAF7F2]">
                    ₹{honey.price}
                  </span>
                  <span className="text-[10px] text-[#A3B19E] ml-1">/ {honey.unit}</span>
                </div>

                {/* Curved Liquid-Glass Quantity Stepper */}
                <div className="flex items-center liquid-glass-dark rounded-full border border-white/20 p-1 shadow-inner">
                  <button
                    onClick={() => updateCardQuantity(honey.id, -1)}
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-[#C9D4C5] hover:text-[#FAF7F2] hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label={`Decrease ${honey.name} quantity`}
                  >
                    —
                  </button>
                  <span className="w-6 text-center text-xs font-mono font-medium text-[#FAF7F2]">
                    {quantities[honey.id] || 1}
                  </span>
                  <button
                    onClick={() => updateCardQuantity(honey.id, 1)}
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-[#C9D4C5] hover:text-[#FAF7F2] hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label={`Increase ${honey.name} quantity`}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons Row — Spaced and Protected Against Overlapping */}
              <div className="mt-3.5 flex items-center gap-2">
                <button
                  onClick={() => setQuickViewProduct(honey)}
                  className="p-2.5 rounded-full liquid-glass-dark border border-white/20 text-[#FAF7F2] hover:border-[#DF9F52] hover:text-[#DF9F52] transition-all hover:scale-105 active:scale-95 cursor-pointer flex-shrink-0"
                  title="Preview details"
                  aria-label={`Preview ${honey.name}`}
                >
                  <Eye size={14} />
                </button>

                <button
                  onClick={() => {
                    addToCart(honey, undefined, true, quantities[honey.id] || 1);
                  }}
                  className="flex-1 py-2.5 px-3.5 bg-[#DF9F52] hover:bg-[#E8B86D] text-[#0A160F] text-[10.5px] uppercase font-sans tracking-[0.16em] font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_4px_16px_rgba(223,159,82,0.3)] hover:scale-[1.02] active:scale-[0.98] truncate"
                >
                  <span>Add to Basket</span>
                  <ArrowRight size={12} className="flex-shrink-0" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Purity Pillars in Curved Liquid Glass Container (Mobile-Friendly rounded-2xl sm:rounded-full) */}
        <div className="mt-14 liquid-glass-dark rounded-2xl sm:rounded-full py-5 px-6 sm:px-10 border border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-[#C9D4C5] reveal-fade-up reveal-delay-500">
          <div className="flex items-center gap-2">
            <Check size={14} className="text-[#DF9F52] flex-shrink-0" />
            <span>Never Heated (&lt;40°C)</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={14} className="text-[#DF9F52] flex-shrink-0" />
            <span>Zero Added Sugars</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={14} className="text-[#DF9F52] flex-shrink-0" />
            <span>Smoke-Free Harvesting</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={14} className="text-[#DF9F52] flex-shrink-0" />
            <span>Tribal Direct Royalties</span>
          </div>
        </div>
      </div>
    </section>
  );
}
