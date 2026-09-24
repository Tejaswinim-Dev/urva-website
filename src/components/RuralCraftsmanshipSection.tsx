"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { MapPin, Users, HeartHandshake, Sparkles, ArrowRight, Eye } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function RuralCraftsmanshipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  const stories = [
    {
      id: "artisans-village",
      title: "The Courtyard Collective",
      location: "Mayurbhanj Tribal Belt, Odisha",
      artisan: "Basanti Devi & Tribal Women's Guild",
      craft: "Siali Leaf Hand-Stitching",
      image: "/images/craftsmanship-artisans.jpg",
      quote:
        "We gather the fallen leaves and stitch each plate with fibers of wild grass. It is the craft of our grandmothers, now feeding our families with honor.",
      narrative:
        "Every morning after sunrise, artisan women gather in the communal clay courtyard. Using ancestral bamboo needles and wild grass twine, broad siali leaves are carefully interwoven into resilient, aromatic dining platters.",
    },
    {
      id: "hands-detail",
      title: "The Living Stitch",
      location: "Koraput Biosphere, Odisha",
      artisan: "Elder Kamala Soren (72)",
      craft: "Ancestral Leaf Threading",
      image: "/images/artisan-hands-detail.jpg",
      quote:
        "No glue, no iron staples, no factory smoke. Only the leaves that the forest drops and the twine we spin from the grass.",
      narrative:
        "A single Siali leaf plate requires up to 18 intricate manual stitches. The elasticity of the wild grass ensures structural tension without cracking or tearing, a technique perfected over seven generations.",
    },
    {
      id: "forest-foraging",
      title: "Custodians of the High Canopy",
      location: "Satpura Jungle Corridors, Central India",
      artisan: "Rameshwar Baiga & Forest Elders",
      craft: "Ethical Wild Honey Foraging",
      image: "/images/forest-foraging.jpg",
      quote:
        "We never take the entire comb. We take only what the bees can spare, leaving the brood intact so the colony thrives year after year.",
      narrative:
        "Indigenous honey collectors climb up to 80 feet into towering Sal and Mahua canopies at night. Using smoke-free herbal sprays, they gently harvest wild nectar without harming a single bee or damaging the hive core.",
    },
    {
      id: "agro-harvest",
      title: "The Fallen Sheath Gathering",
      location: "Coastal Agroforests, Shivamogga, Karnataka",
      artisan: "Gowda Farmer Cooperative",
      craft: "Zero-Felling Areca Sourcing",
      image: "/images/tableware-areca.jpg",
      quote:
        "The areca palm naturally sheds 6 to 8 fronds a year. We pick them from the fertile orchard floor, wash them in rainwater, and press them with steam.",
      narrative:
        "Not a single tree is cut down for Urvaa tableware. By converting fallen agricultural biomass into biodegradable luxury tableware, local farmers earn dependable supplementary income throughout the year.",
    },
    {
      id: "community-dinner",
      title: "The Circle of Sustenance",
      location: "Rural Sanctuaries of India",
      artisan: "500+ Rural Households Empowered",
      craft: "Conscious Rural Living",
      image: "/images/community-lifestyle.jpg",
      quote:
        "When you dine on an Urvaa plate or taste wild honey, you are sitting at the same table as the hands that crafted it.",
      narrative:
        "Urvaa reinvests 15% of all proceeds directly into rural community welfare, health clinics, and children's education funds across our partner artisan clusters.",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="craftsmanship"
      ref={sectionRef}
      className="py-28 sm:py-36 lg:py-44 bg-[#FAF7F2] text-[#1C1E1B] relative overflow-hidden border-t border-[#1C1E1B]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div ref={headlineRef} className="max-w-3xl mb-16 sm:mb-20 reveal-fade-up">
          <div className="flex items-center gap-3 mb-4 reveal-fade-up reveal-delay-75">
            <span className="w-8 h-[1px] bg-[#6F8369]" />
            <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#6F8369] font-semibold">
              Documentary Stories • Artisans of Urvaa
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#101F17] tracking-tight leading-[1.08] reveal-fade-up reveal-delay-150">
            Where tradition <br />
            <span className="italic font-normal text-[#1A3427]">becomes tomorrow.</span>
          </h2>

          <p className="mt-6 text-sm sm:text-base text-[#5E625A] font-light leading-relaxed max-w-2xl reveal-fade-up reveal-delay-200">
            Inspired by real village lives and documented directly across India’s rural heartlands. Behind every single plate, jar of wild nectar, and harvest grain are living faces, sacred traditions, and skilled human hands.
          </p>
        </div>

        {/* Horizontal Scrolling Documentary Image Gallery */}
        <div className="relative -mx-6 sm:-mx-8 lg:-mx-12 px-6 sm:px-8 lg:px-12">
          <div
            ref={scrollTrackRef}
            className="flex gap-8 overflow-x-auto pb-8 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {stories.map((story, idx) => (
              <div
                key={story.id}
                className={`w-[84vw] sm:w-[420px] lg:w-[480px] max-w-[500px] flex-shrink-0 snap-start liquid-glass rounded-3xl border border-white/80 p-5 sm:p-7 flex flex-col justify-between group hover:border-[#101F17]/40 transition-all duration-500 shadow-[0_16px_40px_rgba(16,31,23,0.06)] hover:shadow-[0_24px_50px_rgba(16,31,23,0.12)] reveal-fade-up ${
                  idx === 0
                    ? "reveal-delay-150"
                    : idx === 1
                    ? "reveal-delay-250"
                    : idx === 2
                    ? "reveal-delay-350"
                    : "reveal-delay-450"
                }`}
              >
                <div>
                  {/* Photo Frame */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/70 bg-[#EAE4D7] mb-6 shadow-sm">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 320px, 500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101F17]/70 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[#FAF7F2] text-[10px] uppercase font-sans tracking-widest">
                      <span className="flex items-center gap-1.5 liquid-glass-dark rounded-full px-3 py-1 border border-white/20">
                        <MapPin size={11} className="text-[#DF9F52]" />
                        {story.location}
                      </span>
                      <span className="font-mono liquid-glass-dark rounded-full px-2.5 py-1 border border-white/20">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Editorial Craft Narrative */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#6F8369] font-semibold">
                        {story.craft}
                      </span>
                      <span className="text-[11px] font-serif text-[#B4783B]">
                        {story.artisan}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#101F17] font-normal leading-tight">
                      {story.title}
                    </h3>

                    {/* Pull Quote */}
                    <p className="font-serif italic text-sm sm:text-base text-[#1A3427] pt-2 border-t border-[#1C1E1B]/8 leading-relaxed">
                      “{story.quote}”
                    </p>

                    <p className="text-xs text-[#5E625A] leading-relaxed pt-2 font-light">
                      {story.narrative}
                    </p>
                  </div>
                </div>

                {/* Card Footer Tag */}
                <div className="mt-6 pt-4 border-t border-[#1C1E1B]/8 flex items-center justify-between text-[11px] text-[#6F8369]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <HeartHandshake size={13} />
                    Direct Fair Compensation
                  </span>
                  <span className="font-mono uppercase tracking-wider text-[10px] text-[#5E625A]">
                    Verified Origin
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between text-xs text-[#5E625A]">
            <span className="font-serif italic">
              ← Scroll to follow the journey of Urvaa artisans across India →
            </span>
            <span className="hidden sm:inline font-mono uppercase text-[10px] tracking-wider text-[#6F8369]">
              Instagram: @urvaa_in Stories
            </span>
          </div>
        </div>

        {/* Impact Bar in Liquid Glass */}
        <div className="mt-20 pt-8 liquid-glass rounded-3xl p-6 sm:p-8 border border-white/80 shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-4 text-center reveal-fade-up reveal-delay-300">
          <div className="p-5 liquid-glass rounded-2xl border border-white/60 shadow-sm">
            <div className="font-serif text-3xl sm:text-4xl text-[#101F17] font-normal">520+</div>
            <div className="text-[11px] uppercase tracking-wider font-sans text-[#6F8369] mt-1">
              Rural Artisans Supported
            </div>
          </div>

          <div className="p-5 liquid-glass rounded-2xl border border-white/60 shadow-sm">
            <div className="font-serif text-3xl sm:text-4xl text-[#101F17] font-normal">14</div>
            <div className="text-[11px] uppercase tracking-wider font-sans text-[#6F8369] mt-1">
              Village Cooperatives
            </div>
          </div>

          <div className="p-5 liquid-glass rounded-2xl border border-white/60 shadow-sm">
            <div className="font-serif text-3xl sm:text-4xl text-[#101F17] font-normal">100%</div>
            <div className="text-[11px] uppercase tracking-wider font-sans text-[#6F8369] mt-1">
              Fallen Leaf & Wild Harvest
            </div>
          </div>

          <div className="p-5 liquid-glass rounded-2xl border border-white/60 shadow-sm">
            <div className="font-serif text-3xl sm:text-4xl text-[#101F17] font-normal">0%</div>
            <div className="text-[11px] uppercase tracking-wider font-sans text-[#6F8369] mt-1">
              Toxic Chemicals or Binders
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
