"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Eye, Plus, Check, Play, Pause } from "lucide-react";
import { useShop, ProductItem } from "@/context/ShopContext";

export default function EditorialCarousel() {
  const { setQuickViewProduct, addToCart } = useShop();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const carouselItems: ProductItem[] = [
    {
      id: "areca-12",
      name: "Areca Palm Leaf Plates",
      category: "Sustainable Tableware",
      subtitle: "12 & 14 inch — 90 GSM Heavyweight",
      price: 499,
      unit: "Pack of 25",
      description:
        "Formed from naturally shed fallen palm fronds. Zero trees cut. Steam-pressed with natural leaf grain. Microwave safe, oil resilient, and 100% soil compostable in 60-90 days.",
      image: "/images/tableware-areca.jpg",
      gsm: "90 GSM",
      size: "12 inch",
      origin: "Shivamogga Agroforests, Karnataka",
      harvestMethod: "Naturally shed fallen fronds collected from fertile soil",
      compostTime: "Composts in 60-90 days in home garden soil",
      inStock: true,
    },
    {
      id: "deep-forest-honey",
      name: "Deep Forest Honey",
      category: "Honey",
      subtitle: "Raw Wild Honey from Ancient Canopies",
      price: 780,
      unit: "350g Stone Jar",
      description:
        "Wild honey gathered from untouched cliff colonies in dense central Indian forests. High in natural pollen, bio-enzymes, and rich mineral undertones.",
      image: "/images/honey-deep-forest.jpg",
      origin: "Satpura Jungle Biosphere",
      harvestMethod: "Ethical smoke-free night foraging by indigenous forest dwellers",
      inStock: true,
    },
    {
      id: "siali-12",
      name: "Siali Leaf Plates",
      category: "Sustainable Tableware",
      subtitle: "Hand-Stitched • 12 & 14 inch — 90 GSM",
      price: 540,
      unit: "Pack of 20",
      description:
        "Hand-stitched wild siali creeper leaves gathered from tribal forests in Odisha. Joined using fine wild grass fibers by tribal craftswomen.",
      image: "/images/tableware-siali.jpg",
      gsm: "90 GSM",
      size: "12 inch",
      origin: "Mayurbhanj Tribal Reserve, Odisha",
      harvestMethod: "Handpicked wild climber leaves stitched with natural grass twine",
      compostTime: "100% soil soluble in 45 days",
      inStock: true,
    },
    {
      id: "monofloral-honey",
      name: "Monofloral Honey",
      category: "Honey",
      subtitle: "Single-Origin Wild Mustard & Acacia",
      price: 650,
      unit: "350g Glass Jar",
      description:
        "Bottled during a specific 21-day flowering window. Luminous golden hue with the purest delicate botanical perfume of wild forest blossoms.",
      image: "/images/honey-monofloral.jpg",
      origin: "Sub-Himalayan Foothills",
      harvestMethod: "Single-bloom seasonal isolation without blend mixing",
      inStock: true,
    },
    {
      id: "polyfloral-honey",
      name: "Polyfloral Honey",
      category: "Honey",
      subtitle: "Wildflower Honey • 40+ Botanical Species",
      price: 590,
      unit: "350g Jar",
      description:
        "Rich amber honey formed by bees visiting wild neem, mahua, jamun, and jasmine blossoms across pristine monsoon hills.",
      image: "/images/honey-polyfloral.jpg",
      origin: "Western Ghats Mountain Biosphere",
      harvestMethod: "Cold centrifugation, unheated (<40°C)",
      inStock: true,
    },
    {
      id: "honeydew-honey",
      name: "Honeydew Honey",
      category: "Honey",
      subtitle: "Tree Honey • Mineral Dense Caramel Nectar",
      price: 850,
      unit: "350g Heavy Jar",
      description:
        "Rare dark nectar harvested not from floral blossoms, but from the natural sweet sap exudates of sacred sal and teak canopies.",
      image: "/images/honey-honeydew.jpg",
      origin: "Ancient Sal Reserves of Eastern Ghats",
      harvestMethod: "Rare autumn forest foraging by tribal elders",
      inStock: true,
    },
    {
      id: "heritage-millets",
      name: "Heritage Millets",
      category: "Natural Products",
      subtitle: "Ancient Grains • Unpolished & Rain-Fed",
      price: 340,
      unit: "1 kg Canvas Bag",
      description:
        "Rain-fed foxtail, barnyard, and finger millets cultivated by smallholder tribal farmers without chemicals. Low glycemic and high dietary fiber.",
      image: "/images/millets-grain.jpg",
      origin: "Deccan Plateau Drylands",
      harvestMethod: "Traditional sickle harvesting and natural sun winnowing",
      inStock: true,
    },
    {
      id: "wild-turmeric",
      name: "Wild Turmeric Powder",
      category: "Natural Products",
      subtitle: "Sun-Cured Rhizomes • High Curcumin (>5.8%)",
      price: 290,
      unit: "250g Jar",
      description:
        "Aromatic, deep golden-orange turmeric powder slow-pounded from sun-cured indigenous rhizomes with high natural essential curcuma oils.",
      image: "/images/turmeric-spice.jpg",
      origin: "Eastern Ghats Mountain Belts",
      harvestMethod: "Hand-dug mature roots sun-dried on woven bamboo mats",
      inStock: true,
    },
  ];

  // Auto-play interval: smooth 2.8 second rotation
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused, carouselItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const handleQuickAdd = (item: ProductItem) => {
    addToCart(item);
    setAddedItem(item.id);
    setTimeout(() => setAddedItem(null), 1500);
  };

  const current = carouselItems[currentIndex];

  return (
    <section
      id="carousel"
      className="py-24 sm:py-32 lg:py-40 bg-[#FAF7F2] text-[#1C1E1B] border-t border-[#1C1E1B]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header with Carousel Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-6 reveal-fade-up">
          <div>
            <div className="flex items-center gap-3 mb-3 reveal-fade-up reveal-delay-75">
              <span className="w-8 h-[1px] bg-[#9E5338]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.28em] text-[#9E5338] font-semibold">
                Signature Harvest Carousel • 2.8s Auto-Cycle
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#101F17] tracking-tight reveal-fade-up reveal-delay-150">
              The Living <span className="italic font-normal text-[#9E5338]">Archive</span>
            </h2>
          </div>

          {/* Controls: Counter, Pause/Play toggle, and Curved Arrows */}
          <div className="flex items-center gap-3 reveal-fade-up reveal-delay-200">
            {/* Slide Index Counter Pill */}
            <span className="font-mono text-xs text-[#5E625A] tracking-widest liquid-glass rounded-full px-3.5 py-1.5 border border-white/60 shadow-sm">
              0{currentIndex + 1} / 0{carouselItems.length}
            </span>

            {/* Pause / Play toggle */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="w-9 h-9 liquid-glass rounded-full text-[#5E625A] hover:text-[#101F17] border border-white/60 hover:bg-white/80 transition-all flex items-center justify-center cursor-pointer shadow-sm"
              title={isPaused ? "Resume auto-advance" : "Pause auto-advance"}
              aria-label="Toggle auto-advance"
            >
              {isPaused ? <Play size={13} /> : <Pause size={13} />}
            </button>

            {/* Prev / Next buttons with curvature and glass */}
            <button
              onClick={prevSlide}
              className="w-10 h-10 liquid-glass rounded-full border border-white/60 hover:border-[#101F17] hover:bg-[#101F17] hover:text-[#FAF7F2] transition-all flex items-center justify-center cursor-pointer group shadow-sm hover:scale-105 active:scale-95"
              aria-label="Previous product"
            >
              <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" />
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 liquid-glass rounded-full border border-white/60 hover:border-[#101F17] hover:bg-[#101F17] hover:text-[#FAF7F2] transition-all flex items-center justify-center cursor-pointer group shadow-sm hover:scale-105 active:scale-95"
              aria-label="Next product"
            >
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Dynamic Progress Timer Bar (resets every 2.8 seconds) */}
        <div className="w-full h-[2px] bg-[#1C1E1B]/10 overflow-hidden mb-8 rounded-full reveal-fade-up reveal-delay-250">
          <div
            key={currentIndex}
            className={`h-full bg-[#9E5338] ${isPaused ? "w-full" : "animate-progress"}`}
          />
        </div>

        {/* Featured Slide Stage with Smooth 2-3s Motion in Liquid Glass Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center liquid-glass rounded-3xl border border-white/80 p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(16,31,23,0.08)] transition-all duration-500 reveal-fade-up reveal-delay-300"
        >
          {/* Left Column: Product Imagery with Smooth Ken Burns / Scale Effect */}
          <div className="lg:col-span-7 relative">
            <div
              key={`img-${currentIndex}`}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/70 bg-[#EAE4D7] cursor-pointer animate-fadeIn shadow-md"
              onClick={() => setQuickViewProduct(current)}
            >
              <Image
                src={current.image}
                alt={current.name}
                fill
                priority
                className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors pointer-events-none" />

              {/* Tag Badge */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3.5 py-1.5 liquid-glass-dark text-[#FAF7F2] text-[10px] uppercase font-sans tracking-[0.25em] rounded-full border border-white/20">
                  {current.category}
                </span>
                {current.gsm && (
                  <span className="px-3.5 py-1.5 bg-[#9E5338] text-[#FAF7F2] text-[10px] font-mono uppercase tracking-wider font-semibold rounded-full shadow-sm">
                    {current.gsm}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Product Description with Smooth Fade */}
          <div
            key={`content-${currentIndex}`}
            className="lg:col-span-5 flex flex-col justify-between space-y-6 animate-fadeIn"
          >
            <div>
              <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#9E5338] font-semibold block">
                {current.subtitle}
              </span>

              <h3
                onClick={() => setQuickViewProduct(current)}
                className="font-serif text-3xl sm:text-4xl text-[#101F17] font-normal leading-tight mt-1 hover:text-[#9E5338] transition-colors cursor-pointer"
              >
                {current.name}
              </h3>

              <div className="flex items-baseline gap-3 mt-3 pt-3 border-t border-[#1C1E1B]/10">
                <span className="font-serif text-2xl font-semibold text-[#101F17]">
                  ₹{current.price.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-[#5E625A]">/ {current.unit}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#5E625A] font-light leading-relaxed mt-4">
                {current.description}
              </p>
            </div>

            {/* Provenance note */}
            <div className="pt-4 border-t border-[#1C1E1B]/10 text-xs text-[#5E625A] space-y-1">
              <div>
                <span className="font-semibold text-[#101F17]">Origin:</span> {current.origin}
              </div>
              <div>
                <span className="font-semibold text-[#101F17]">Method:</span> {current.harvestMethod}
              </div>
            </div>

            {/* Actions: Curved Pill */}
            <div className="pt-4 border-t border-[#1C1E1B]/10 flex items-center gap-4">
              <button
                onClick={() => setQuickViewProduct(current)}
                className="flex-1 py-3 sm:py-3.5 px-4 sm:px-6 bg-[#101F17] hover:bg-[#1E3528] text-[#FAF7F2] text-[10.5px] sm:text-xs uppercase font-sans tracking-[0.15em] sm:tracking-[0.22em] font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]"
              >
                <Eye size={14} />
                <span>Preview & Select</span>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Thumbnail Strip with Curved Frames */}
        <div className="mt-8 flex gap-3 overflow-x-auto pb-4 no-scrollbar reveal-fade-up reveal-delay-350">
          {carouselItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative flex-shrink-0 w-20 h-16 sm:w-28 sm:h-20 rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "border-[#9E5338] ring-2 ring-[#9E5338]/40 scale-105 shadow-md"
                  : "border-white/60 opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="112px"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
