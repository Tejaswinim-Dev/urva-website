"use client";

import React from "react";
import { Leaf, Users, Globe, Check } from "lucide-react";

export default function SustainabilitySection() {
  const pillars = [
    {
      number: "01",
      title: "Naturally Sourced",
      subtitle: "Fallen Leaves • Zero Felling",
      description:
        "Every plate is shaped exclusively from naturally shed Areca palm leaves and wild forest siali fronds collected from the ground. We take only what nature offers freely without cutting down a single tree.",
    },
    {
      number: "02",
      title: "Rural Communities",
      subtitle: "Tribal Guilds • Dignified Livelihood",
      description:
        "We partner directly with indigenous tribal families and village women across Odisha and Karnataka, providing guaranteed above-market remuneration and preserving centuries-old hand-stitching crafts.",
    },
    {
      number: "03",
      title: "Planet Conscious",
      subtitle: "Soil to Soil • 60-90 Days",
      description:
        "Free from plastic, chemical coatings, synthetic glues, and toxic dyes. Once used, our tableware completely degrades in backyard garden compost within 60 to 90 days, returning directly to the soil as fertile humus.",
    },
  ];

  return (
    <section
      id="sustainability"
      className="py-24 sm:py-32 lg:py-40 bg-[#FAF7F2] text-[#1C1E1B] border-t border-[#1C1E1B]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#9E5338]" />
            <span className="text-[11px] font-sans uppercase tracking-[0.28em] text-[#9E5338] font-semibold">
              The Ecological Covenant
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#101F17] tracking-tight leading-[1.08]">
            What nature gives us, <br />
            <span className="italic font-normal text-[#1A3427]">we return with respect.</span>
          </h2>

          <p className="mt-6 text-sm sm:text-base text-[#5E625A] font-light leading-relaxed max-w-xl">
            A quiet commitment to ancient Indian sustainability. A complete closed loop where every creation emerges from the earth and returns to nourish it.
          </p>
        </div>

        {/* The Three Pillars (Minimal, Classic, Clean Editorial) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-[#F4EFE6] border border-[#1C1E1B]/10 p-8 sm:p-10 flex flex-col justify-between hover:border-[#101F17]/30 transition-all duration-500"
            >
              <div>
                <span className="font-serif text-3xl font-light text-[#9E5338] block mb-6">
                  {pillar.number}
                </span>

                <h3 className="font-serif text-2xl text-[#101F17] font-normal mb-1">
                  {pillar.title}
                </h3>

                <p className="text-[11px] font-sans uppercase tracking-wider text-[#9E5338] font-medium mb-4">
                  {pillar.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#5E625A] leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1C1E1B]/10 flex items-center gap-2 text-[11px] text-[#6F8369]">
                <Check size={13} />
                <span>100% Verified Soil Biodegradable</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
