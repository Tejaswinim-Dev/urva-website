"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Eye, Sparkles, ArrowRight } from "lucide-react";
import { useShop, ProductItem } from "@/context/ShopContext";

export default function ProductCollectionSection() {
  const { setQuickViewProduct, addToCart } = useShop();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Honey", "Sustainable Tableware", "Natural Products"];

  const products: ProductItem[] = [
    {
      id: "deep-forest-honey",
      name: "Deep Forest Honey",
      category: "Honey",
      subtitle: "Wild Honey • Single-Harvest",
      price: 780,
      unit: "350g Jar",
      description:
        "Harvested from wild bee colonies residing in the untouched tree hollows of ancient forests. Dark, complex, resinous notes loaded with raw enzymes.",
      image: "/images/honey-deep-forest.jpg",
      origin: "Central Indian Forest Biosphere",
      harvestMethod: "Ethical night foraging using smoke-free tribal techniques",
      inStock: true,
    },
    {
      id: "areca-plates-12",
      name: "Areca Palm Leaf Plates",
      category: "Sustainable Tableware",
      subtitle: "12 inch — 90 GSM • Round Dining Plate",
      price: 499,
      unit: "Pack of 25",
      description:
        "Crafted exclusively from naturally shed fallen palm fronds. Zero trees cut. Steam-pressed with natural leaf grain. Grease-proof, heat resilient, and microwave safe.",
      image: "/images/tableware-areca.jpg",
      gsm: "90 GSM",
      size: "12 inch",
      origin: "Karnataka Coastal Agroforests",
      harvestMethod: "Sun-dried fallen sheath collection",
      compostTime: "Composts in 60-90 days in home soil",
      inStock: true,
    },
    {
      id: "siali-plates-12",
      name: "Siali Leaf Plates",
      category: "Sustainable Tableware",
      subtitle: "Hand-Stitched • 12 & 14 inch — 90 GSM",
      price: 540,
      unit: "Pack of 20",
      description:
        "Hand-stitched wild siali leaves gathered from eastern tribal reserves. Joined with natural grass fiber twine. Deep forest aroma, completely earth-biodegradable.",
      image: "/images/tableware-siali.jpg",
      gsm: "90 GSM",
      size: "12 inch & 14 inch",
      origin: "Tribal Cooperatives, Odisha & Jharkhand",
      harvestMethod: "Handpicked wild climber leaves stitched by artisan elders",
      compostTime: "100% soil soluble in 45 days",
      inStock: true,
    },
    {
      id: "monofloral-honey",
      name: "Monofloral Honey",
      category: "Honey",
      subtitle: "Single-Origin Wild Nectar",
      price: 650,
      unit: "350g Jar",
      description:
        "Bottled during specific seasonal blooms. Golden, luminous, and delicate. Retains the purest botanical fragrance of wild forest mustard and acacia blossoms.",
      image: "/images/honey-monofloral.jpg",
      origin: "Sub-Himalayan Foothills",
      harvestMethod: "Seasonal single-bloom extraction",
      inStock: true,
    },
    {
      id: "polyfloral-honey",
      name: "Polyfloral Honey",
      category: "Honey",
      subtitle: "Wildflower Honey • Multi-Botanical",
      price: 590,
      unit: "350g Jar",
      description:
        "Rich amber honey formed by bees pollinating over 40 diverse indigenous wildflowers and medicinal herbs across seasonal monsoon flushes.",
      image: "/images/honey-polyfloral.jpg",
      origin: "Western Ghats Mountain Range",
      harvestMethod: "Multi-floral seasonal cold centrifugation",
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
        "Rare dark nectar harvested not from floral blossoms, but from the natural sweet sap exudates of sacred forest trees. Rich in potassium, iron, and deep malted caramel notes.",
      image: "/images/honey-honeydew.jpg",
      origin: "Sal & Teak Dense Forest Clustered Reserves",
      harvestMethod: "Rare autumn forest foraging",
      inStock: true,
    },
    {
      id: "heritage-millets",
      name: "Heritage Millets",
      category: "Natural Products",
      subtitle: "Ancient Grains • Unpolished",
      price: 340,
      unit: "1 kg Canvas Bag",
      description:
        "Rain-fed foxtail, barnyard, and finger millets (ragi) cultivated by smallholder tribal farmers without chemical inputs. Low glycemic, gluten-free, high fiber.",
      image: "/images/millets-grain.jpg",
      origin: "Deccan Plateau Drylands",
      harvestMethod: "Traditional sickle harvesting and sun winnowing",
      inStock: true,
    },
    {
      id: "pure-turmeric-powder",
      name: "Wild Turmeric Powder",
      category: "Natural Products",
      subtitle: "Sun-Cured Rhizomes • High Curcumin (>5.8%)",
      price: 290,
      unit: "250g Jar",
      description:
        "Aromatic, deep golden-orange turmeric powder slow-pounded from sun-cured indigenous rhizomes. High natural oil content with exceptional therapeutic purity.",
      image: "/images/turmeric-spice.jpg",
      origin: "Kandhamal & Meghalaya Tribal Belts",
      harvestMethod: "Hand-dug mature roots sun-dried on bamboo mats",
      inStock: true,
    },
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section
      id="collection"
      className="py-24 sm:py-32 lg:py-40 bg-[#FAF7F2] text-[#1C1E1B] border-t border-[#1C1E1B]/10 relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#6F8369]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#6F8369] font-semibold">
                Editorial Product Showcase
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#101F17] tracking-tight">
              The Living <span className="italic font-normal">Collection</span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-[#1C1E1B]/15 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] transition-all duration-300 relative cursor-pointer ${
                  activeCategory === category
                    ? "text-[#101F17] font-semibold"
                    : "text-[#5E625A] hover:text-[#101F17]"
                }`}
              >
                <span>{category}</span>
                {activeCategory === category && (
                  <span className="absolute bottom-[-9px] left-0 right-0 h-[2px] bg-[#101F17]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Showcase Grid (Spacious, Large Photography, Subtle Borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between border border-[#1C1E1B]/10 bg-white/40 p-5 hover:bg-white hover:border-[#1C1E1B]/20 transition-all duration-500 hover:shadow-[0_12px_32px_rgba(16,31,23,0.06)]"
            >
              <div>
                {/* Large Product Image Frame */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE4D7] cursor-pointer"
                  onClick={() => setQuickViewProduct(product)}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 bg-[#FAF7F2]/90 backdrop-blur-sm text-[#101F17] text-[11px] uppercase tracking-[0.2em] font-sans font-medium flex items-center gap-1.5 shadow-sm">
                      <Eye size={13} />
                      View Details
                    </span>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-[#101F17]/85 backdrop-blur-sm text-[#FAF7F2] text-[9px] uppercase font-sans tracking-[0.25em]">
                      {product.category}
                    </span>
                  </div>
                  {product.gsm && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 bg-[#8FA289] text-[#101F17] font-semibold text-[9px] uppercase tracking-wider">
                        {product.gsm}
                      </span>
                    </div>
                  )}
                </div>

                {/* Editorial Typography Details */}
                <div className="pt-6 space-y-2">
                  <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#6F8369] font-medium">
                    {product.subtitle}
                  </div>
                  <h3
                    onClick={() => setQuickViewProduct(product)}
                    className="font-serif text-2xl text-[#101F17] font-normal leading-snug group-hover:text-[#234534] transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#5E625A] line-clamp-2 leading-relaxed pt-1 font-light">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Price & Action Row (Responsive & Non-Overlapping) */}
              <div className="pt-5 mt-5 border-t border-[#1C1E1B]/10 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="font-serif text-xl font-semibold text-[#101F17]">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-[11px] text-[#5E625A] ml-1">/ {product.unit}</span>
                </div>

                <button
                  onClick={() => setQuickViewProduct(product)}
                  className="px-4.5 py-2.5 rounded-full bg-[#101F17] hover:bg-[#1E3528] text-[#FAF7F2] text-[10.5px] uppercase font-sans tracking-[0.18em] font-medium flex items-center gap-1.5 transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                >
                  <Eye size={13} />
                  <span>Preview & Select</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Footer Note */}
        <div className="mt-20 p-8 border border-[#1C1E1B]/10 bg-[#F1EDE3] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-xl text-[#101F17]">
              Need tailored samples or bulk institutional procurement?
            </h4>
            <p className="text-xs text-[#5E625A] max-w-xl">
              We supply eco-conscious weddings, luxury boutique resorts, and conscious catering with customized leaf plate sizes, branded beeswax seals, and custom packaging.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 bg-[#101F17] text-[#FAF7F2] text-xs uppercase font-sans tracking-[0.25em] font-medium hover:bg-[#234534] transition-colors whitespace-nowrap"
          >
            Request Sample Crate
          </a>
        </div>
      </div>
    </section>
  );
}
