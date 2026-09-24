"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, ShieldCheck, Sprout, Flame, Droplet, ArrowRight, Sparkles } from "lucide-react";
import { useShop, ProductItem } from "@/context/ShopContext";

export default function TablewareSection() {
  const { addToCart, setQuickViewProduct } = useShop();
  const [selectedPlate, setSelectedPlate] = useState<"areca" | "siali">("areca");
  const [selectedSize, setSelectedSize] = useState<"12" | "14">("12");
  const [tablewareQuantity, setTablewareQuantity] = useState<number>(1);

  const arecaProduct: ProductItem = {
    id: "areca-tableware-full",
    name: "Areca Palm Leaf Plates",
    category: "Sustainable Tableware",
    subtitle: `${selectedSize} inch — 90 GSM Heavyweight`,
    price: selectedSize === "12" ? 499 : 599,
    unit: "Pack of 25",
    description:
      "Formed from naturally shed fallen areca palm leaf sheaths. Washed in fresh spring water and steam-pressed into elegant, sturdy plates with zero chemicals or glues.",
    image: "/images/tableware-areca.jpg",
    gsm: "90 GSM",
    size: `${selectedSize} inch`,
    origin: "Coastal Karnataka Agro-forests",
    harvestMethod: "Sun-shed fallen palm fronds collected by smallholder farmers",
    compostTime: "Composts completely in 60 to 90 days in home garden soil",
    inStock: true,
  };

  const sialiProduct: ProductItem = {
    id: "siali-tableware-full",
    name: "Siali Leaf Plates",
    category: "Sustainable Tableware",
    subtitle: `${selectedSize} inch — 90 GSM Artisan Stitched`,
    price: selectedSize === "12" ? 540 : 640,
    unit: "Pack of 20",
    description:
      "Hand-stitched wild siali creeper leaves gathered from tribal forests in Odisha. Joined using fine wild grass fibers by tribal craftswomen.",
    image: "/images/tableware-siali.jpg",
    gsm: "90 GSM",
    size: `${selectedSize} inch`,
    origin: "Eastern Ghats Forest Cooperatives, Odisha",
    harvestMethod: "Wild-harvested mature siali leaves stitched with wild grass threads",
    compostTime: "Returns to soil as organic mulch in under 45 days",
    inStock: true,
  };

  const currentProduct = selectedPlate === "areca" ? arecaProduct : sialiProduct;

  return (
    <section
      id="tableware"
      className="py-24 sm:py-36 lg:py-44 bg-[#F5F0E6] text-[#1C1E1B] relative overflow-hidden border-t border-[#1C1E1B]/10"
    >
      {/* Editorial Decorative Watermark */}
      <div className="absolute top-12 right-12 text-[140px] lg:text-[220px] font-serif font-bold text-[#1C1E1B]/[0.025] select-none pointer-events-none leading-none">
        URVA
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Pre-heading */}
        <div className="flex items-center gap-3 mb-4 reveal-fade-up">
          <span className="w-8 h-[1px] bg-[#6F8369]" />
          <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#6F8369] font-semibold">
            The Tableware Showcase
          </span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#101F17] tracking-tight leading-[1.08] reveal-fade-up reveal-delay-150">
            Made by hand. <br />
            <span className="italic font-normal text-[#1A3427]">Inspired by nature.</span>
          </h2>
          <p className="mt-6 text-sm sm:text-base text-[#5E625A] font-light leading-relaxed reveal-fade-up reveal-delay-200">
            A conscious alternative to plastic and bleached paper disposables. Formed from fallen palm fronds and forest siali leaves, offering unparalleled natural elegance and heavy-duty 90 GSM durability for feasts, celebrations, and everyday mindful living.
          </p>
        </div>

        {/* Interactive Material Selector Tabs in Liquid Glass Pill Container (Responsive on mobile) */}
        <div className="flex flex-col sm:inline-flex sm:flex-row w-full sm:w-auto liquid-glass rounded-2xl sm:rounded-full p-1.5 border border-white/60 shadow-md mb-10 sm:mb-12 gap-1 sm:gap-0 reveal-fade-up reveal-delay-250">
          <button
            onClick={() => setSelectedPlate("areca")}
            className={`w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs uppercase font-sans tracking-[0.16em] sm:tracking-[0.2em] font-semibold rounded-xl sm:rounded-full transition-all duration-300 relative cursor-pointer text-center ${
              selectedPlate === "areca"
                ? "bg-[#101F17] text-[#FAF7F2] shadow-md scale-100"
                : "text-[#5E625A] hover:text-[#101F17] hover:bg-white/50"
            }`}
          >
            Areca Palm Leaf Plates
          </button>

          <button
            onClick={() => setSelectedPlate("siali")}
            className={`w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs uppercase font-sans tracking-[0.16em] sm:tracking-[0.2em] font-semibold rounded-xl sm:rounded-full transition-all duration-300 relative cursor-pointer text-center ${
              selectedPlate === "siali"
                ? "bg-[#101F17] text-[#FAF7F2] shadow-md scale-100"
                : "text-[#5E625A] hover:text-[#101F17] hover:bg-white/50"
            }`}
          >
            Siali Leaf Plates (Hand-Stitched)
          </button>
        </div>

        {/* Feature Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Rich Macro Photography with Zoom Feature */}
          <div className="lg:col-span-7 relative reveal-fade-up reveal-delay-300">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(16,31,23,0.12)] bg-[#EAE4D7] border border-white/80">
              <Image
                src={currentProduct.image}
                alt={currentProduct.name}
                fill
                className="object-cover transition-all duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

              {/* Floating Specification Pills */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3.5 py-1.5 liquid-glass rounded-full text-[#101F17] text-[10px] font-sans uppercase tracking-[0.25em] font-semibold border border-white/60">
                  {selectedPlate === "areca" ? "Fallen Palm Sheath" : "Hand-Stitched Siali"}
                </span>
                <span className="px-3.5 py-1.5 bg-[#101F17] text-[#FAF7F2] text-[10px] font-mono uppercase tracking-wider font-bold rounded-full">
                  90 GSM Heavy-Duty
                </span>
              </div>

              {/* Image Footer: Responsive Flex Column on mobile, row on tablet/desktop */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[#FAF7F2]">
                <span className="font-serif italic text-xs sm:text-sm line-clamp-1 sm:line-clamp-none drop-shadow">
                  {selectedPlate === "areca"
                    ? "Steam-formed fallen fronds • Zero trees felled"
                    : "Interwoven with wild grass thread • Tribal heritage"}
                </span>
                <button
                  onClick={() => setQuickViewProduct(currentProduct)}
                  className="self-start sm:self-auto px-3.5 py-1.5 liquid-glass hover:bg-white/90 text-[10px] uppercase font-sans tracking-wider text-[#101F17] rounded-full font-semibold transition-all cursor-pointer flex-shrink-0 shadow-sm"
                >
                  View Macro Details
                </button>
              </div>
            </div>

            {/* Micro Thumbnail of the alternate plate for quick side-by-side comparison */}
            <div className="mt-5 flex items-center gap-3">
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#5E625A]">
                Compare varieties:
              </span>
              <button
                onClick={() => setSelectedPlate("areca")}
                className={`flex items-center gap-2 p-1.5 rounded-2xl border transition-all cursor-pointer ${
                  selectedPlate === "areca"
                    ? "border-[#101F17] bg-white shadow-sm"
                    : "border-transparent opacity-70 hover:opacity-100 bg-white/40"
                }`}
              >
                <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                  <Image
                    src="/images/tableware-areca.jpg"
                    alt="Areca Palm"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-serif pr-2 font-medium">Areca Palm</span>
              </button>

              <button
                onClick={() => setSelectedPlate("siali")}
                className={`flex items-center gap-2 p-1.5 rounded-2xl border transition-all cursor-pointer ${
                  selectedPlate === "siali"
                    ? "border-[#101F17] bg-white shadow-sm"
                    : "border-transparent opacity-70 hover:opacity-100 bg-white/40"
                }`}
              >
                <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                  <Image
                    src="/images/tableware-siali.jpg"
                    alt="Siali Leaf"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-serif pr-2 font-medium">Siali Leaf</span>
              </button>
            </div>
          </div>

          {/* Right Column: Liquid Glass Container with Dimensions, Specs & Ordering */}
          <div className="lg:col-span-5 liquid-glass rounded-3xl p-7 sm:p-9 border border-white/80 shadow-xl space-y-6 flex flex-col justify-between reveal-fade-up reveal-delay-350">
            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.28em] text-[#6F8369] font-semibold block">
                Single-Origin Tableware
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#101F17] font-normal leading-tight mt-1">
                {currentProduct.name}
              </h3>
              <p className="font-serif italic text-base text-[#5E625A] mt-1">
                {currentProduct.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#3D403A] leading-relaxed font-light">
              {currentProduct.description}
            </p>

            {/* Dimension & GSM Selection with Curved Cards */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-sans uppercase tracking-[0.2em] font-semibold text-[#101F17]">
                  Plate Diameter
                </span>
                <span className="text-[#6F8369] font-medium">90 GSM Industrial Grade</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedSize("12")}
                  className={`p-4.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    selectedSize === "12"
                      ? "border-[#101F17] bg-[#101F17] text-[#FAF7F2] shadow-md scale-[1.02]"
                      : "border-white/80 bg-white/70 text-[#1C1E1B] hover:border-[#101F17]"
                  }`}
                >
                  <div className="font-serif text-lg font-medium">12 inch — 90 GSM</div>
                  <div className="text-[11px] opacity-80 mt-0.5">Classic Full Dinner Plate</div>
                  <div className="font-mono text-xs font-semibold mt-2">
                    {selectedPlate === "areca" ? "₹499" : "₹540"}{" "}
                    <span className="opacity-70 font-normal">/ pack</span>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedSize("14")}
                  className={`p-4.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    selectedSize === "14"
                      ? "border-[#101F17] bg-[#101F17] text-[#FAF7F2] shadow-md scale-[1.02]"
                      : "border-white/80 bg-white/70 text-[#1C1E1B] hover:border-[#101F17]"
                  }`}
                >
                  <div className="font-serif text-lg font-medium">14 inch — 90 GSM</div>
                  <div className="text-[11px] opacity-80 mt-0.5">Grand Thali & Feast Size</div>
                  <div className="font-mono text-xs font-semibold mt-2">
                    {selectedPlate === "areca" ? "₹599" : "₹640"}{" "}
                    <span className="opacity-70 font-normal">/ pack</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Performance & Natural Attributes in Curved Pill Box */}
            <div className="grid grid-cols-2 gap-3.5 pt-4 border-t border-[#1C1E1B]/10 text-xs">
              <div className="flex items-center gap-2 text-[#3D403A]">
                <Flame size={15} className="text-[#C68A4C] flex-shrink-0" />
                <span>Microwave Safe (2 min)</span>
              </div>
              <div className="flex items-center gap-2 text-[#3D403A]">
                <Droplet size={15} className="text-[#6F8369] flex-shrink-0" />
                <span>Leakproof for Gravies</span>
              </div>
              <div className="flex items-center gap-2 text-[#3D403A]">
                <Sprout size={15} className="text-[#6F8369] flex-shrink-0" />
                <span>Composts in 60-90 Days</span>
              </div>
              <div className="flex items-center gap-2 text-[#3D403A]">
                <ShieldCheck size={15} className="text-[#101F17] flex-shrink-0" />
                <span>Zero Wax or Binders</span>
              </div>
            </div>

            {/* Quantity Stepper & Action Controls */}
            <div className="pt-4 border-t border-[#1C1E1B]/10 space-y-3.5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-sans uppercase tracking-wider font-semibold text-[#101F17] block">
                    Quantity ({tablewareQuantity} {tablewareQuantity === 1 ? "pack" : "packs"})
                  </span>
                  <span className="text-[11px] text-[#5E625A]">
                    Total: ₹{(currentProduct.price * tablewareQuantity).toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Curved Liquid Glass Quantity Stepper */}
                <div className="flex items-center liquid-glass rounded-full border border-white/80 p-0.5 shadow-sm">
                  <button
                    onClick={() => setTablewareQuantity((q) => Math.max(1, q - 1))}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs text-[#5E625A] hover:text-[#101F17] hover:bg-white transition-colors cursor-pointer"
                    aria-label="Decrease plate quantity"
                  >
                    —
                  </button>
                  <span className="w-8 sm:w-10 text-center text-xs font-mono font-semibold text-[#101F17]">
                    {tablewareQuantity}
                  </span>
                  <button
                    onClick={() => setTablewareQuantity((q) => q + 1)}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs text-[#5E625A] hover:text-[#101F17] hover:bg-white transition-colors cursor-pointer"
                    aria-label="Increase plate quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons: Clean Non-Overlapping Layout */}
              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => setQuickViewProduct(currentProduct)}
                  className="w-full sm:w-auto px-4 sm:px-5 py-3 sm:py-3.5 liquid-glass hover:bg-white text-[#101F17] border border-white/80 text-[11px] sm:text-xs uppercase font-sans tracking-[0.14em] sm:tracking-[0.16em] font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Preview Details</span>
                </button>

                <button
                  onClick={() => {
                    addToCart(currentProduct, `${selectedSize} inch — 90 GSM`, true, tablewareQuantity);
                  }}
                  className="w-full sm:flex-1 py-3 sm:py-3.5 px-4 sm:px-6 bg-[#101F17] hover:bg-[#1E3528] text-[#FAF7F2] text-[11px] sm:text-xs uppercase font-sans tracking-[0.14em] sm:tracking-[0.2em] font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] text-center"
                >
                  <span>Add to Basket — ₹{(currentProduct.price * tablewareQuantity).toLocaleString("en-IN")}</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
                  />
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#5E625A] pt-1">
                <span>✓ Pack of {selectedPlate === "areca" ? "25" : "20"} Plates ({currentProduct.gsm})</span>
                <span>•</span>
                <span>Includes 15% Artisan Direct Royalty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
