"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Compass, Sparkles, MapPin, Layers, RefreshCw } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface StoryView {
  id: string;
  title: string;
  tag: string;
  location: string;
  image: string;
  quote: string;
  detail: string;
}

export default function BrandStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageBoxRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const storyViews: StoryView[] = [
    {
      id: "canopy",
      title: "The Living Canopy",
      tag: "Sacred Forest Biosphere",
      location: "Satpura Jungle Corridors, Central India",
      image: "/images/hero-landscape.jpg",
      quote: "Where fallen leaves and wild cliff colonies naturally begin.",
      detail: "Dense deciduous canopies where fallen Areca and Siali fronds are gathered by indigenous forest elders with zero tree felling.",
    },
    {
      id: "stitch",
      title: "The Living Stitch",
      tag: "7 Generations of Tribal Handcraft",
      location: "Mayurbhanj Tribal Guild, Odisha",
      image: "/images/artisan-hands-detail.jpg",
      quote: "18 stitches of wild grass twine. Zero glue, zero factory smoke.",
      detail: "Kamala-ji (72) interweaving mature wild creeper leaves with hand-spun grass fibers to shape sturdy 90 GSM organic platters.",
    },
    {
      id: "guild",
      title: "The Courtyard Guild",
      tag: "Artisan Women's Guild",
      location: "Coastal Agroforests, Shivamogga",
      image: "/images/craftsmanship-artisans.jpg",
      quote: "Dignified rural livelihoods rooted in communal harmony.",
      detail: "Village women gathering at sunrise to wash fallen fronds in fresh spring water and steam-press them into timeless luxury tableware.",
    },
  ];

  const [activeViewIndex, setActiveViewIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);

  const currentView = storyViews[activeViewIndex];
  const nextView = storyViews[(activeViewIndex + 1) % storyViews.length];

  // Auto-cycle through perspectives smoothly every 5.5 seconds unless paused by interaction
  useEffect(() => {
    if (!isRotating) return;
    const timer = setInterval(() => {
      setActiveViewIndex((prev) => (prev + 1) % storyViews.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isRotating, storyViews.length]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageBoxRef.current,
        { scale: 0.95, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
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
      id="story"
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-40 bg-[#FAF7F2] text-[#1C1E1B] relative overflow-hidden"
    >
      {/* Decorative ambient warm light */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#DF9F52]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Creative Multi-Perspective Visual Showcase */}
          <div className="lg:col-span-6 relative">
            {/* Interactive Viewport Stage */}
            <div
              ref={imageBoxRef}
              onMouseEnter={() => setIsRotating(false)}
              onMouseLeave={() => setIsRotating(true)}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(16,31,23,0.14)] bg-[#EAE4D7] border border-white/80 group"
            >
              {/* Dynamic Main Photograph with smooth crossfade and zoom */}
              <div key={currentView.id} className="absolute inset-0 animate-fadeIn">
                <Image
                  src={currentView.image}
                  alt={currentView.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Artistic Vignette and Contrast Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A120D]/80 via-black/15 to-black/25 pointer-events-none" />

              {/* Top Bar: Provenance Coordinates & Live Indicator */}
              <div className="absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 flex items-center justify-between z-20 pointer-events-none">
                <div className="flex items-center gap-2 liquid-glass-dark rounded-full px-3 sm:px-3.5 py-1.5 border border-white/20 shadow-md">
                  <MapPin size={11} className="text-[#DF9F52] flex-shrink-0 animate-pulse" />
                  <span className="text-[10px] font-mono tracking-wider text-[#FAF7F2] truncate max-w-[145px] sm:max-w-xs">
                    {currentView.location}
                  </span>
                </div>

                <div className="liquid-glass-dark rounded-full px-3 py-1 text-[9.5px] font-mono uppercase tracking-widest text-[#DF9F52] border border-white/20 shadow-md flex-shrink-0">
                  0{activeViewIndex + 1} / 0{storyViews.length}
                </div>
              </div>

              {/* Rotating Circular Authentic URVA Seal Badge with Official Logo */}
              {/* Positioned on left side to completely avoid colliding with the top-right phase numbers (01/03) */}
              <div className="absolute top-16 sm:top-20 left-4 sm:left-5 z-20 pointer-events-none">
                <div className="relative w-16 h-16 sm:w-22 sm:h-22 rounded-full liquid-glass-dark border border-[#DF9F52]/45 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-center">
                  {/* Rotating Circular Text SVG */}
                  <svg
                    className="w-full h-full animate-[spin_20s_linear_infinite]"
                    viewBox="0 0 100 100"
                  >
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[8px] font-sans uppercase tracking-[0.24em] fill-[#DF9F52] font-semibold">
                      <textPath href="#circlePath" startOffset="0%">
                        URVA • ROOTED IN NATURE • ESTD. INDIA •
                      </textPath>
                    </text>
                  </svg>
                  {/* Center Official URVA Logo Emblem */}
                  <div className="absolute w-7 h-7 sm:w-10 sm:h-10 rounded-full overflow-hidden shadow-lg border border-[#DF9F52]/50 bg-black/60">
                    <Image
                      src="/images/urva-official-circle.png"
                      alt="URVA Official Logo"
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Inset Region: Next View positioned at right end directly on top of the paragraph card */}
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 z-20 pointer-events-none">
                {/* Secondary Floating Perspective Switcher — Right End on Top of the Para Card */}
                <div className="flex justify-end mb-2 sm:mb-2.5">
                  <button
                    onClick={() => setActiveViewIndex((activeViewIndex + 1) % storyViews.length)}
                    className="pointer-events-auto liquid-glass rounded-2xl p-2 border border-white/90 shadow-2xl flex items-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer max-w-[180px] sm:max-w-[200px] text-left group/inset"
                    title="Click to switch perspective"
                  >
                    <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden flex-shrink-0 border border-white/60">
                      <Image
                        src={nextView.image}
                        alt={nextView.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover/inset:scale-110"
                        sizes="48px"
                      />
                      <div className="absolute inset-0 bg-black/15 flex items-center justify-center">
                        <RefreshCw size={12} className="text-white drop-shadow" />
                      </div>
                    </div>
                    <div className="min-w-0 pr-1">
                      <span className="text-[8px] sm:text-[8.5px] uppercase font-sans tracking-widest text-[#9E5338] font-bold block">
                        Next View
                      </span>
                      <span className="text-[10.5px] sm:text-[11px] font-serif font-medium text-[#101F17] truncate block">
                        {nextView.title}
                      </span>
                    </div>
                  </button>
                </div>

                {/* Bottom Inset Quote Card in Liquid Glass — Unobstructed & Clean */}
                <div className="pointer-events-auto p-4 sm:p-5 liquid-glass rounded-2xl border border-white/80 text-left shadow-xl">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[9.5px] font-sans uppercase tracking-[0.25em] text-[#9E5338] font-semibold block">
                      {currentView.tag}
                    </span>
                    <span className="text-[9.5px] font-serif italic text-[#5E625A] hidden sm:inline">
                      Tap above to change viewpoint
                    </span>
                  </div>
                  <p className="font-serif italic text-sm sm:text-base text-[#101F17] leading-snug">
                    “{currentView.quote}”
                  </p>
                  <p className="text-[11px] text-[#5E625A] mt-1 font-light leading-relaxed hidden sm:block">
                    {currentView.detail}
                  </p>
                </div>
              </div>
            </div>

            {/* Creative Liquid Glass View Selector Tabs */}
            <div className="mt-5 flex justify-center">
              <div className="inline-flex liquid-glass rounded-full p-1.5 border border-white/70 shadow-md gap-1 sm:gap-1.5">
                {storyViews.map((view, idx) => (
                  <button
                    key={view.id}
                    onClick={() => {
                      setActiveViewIndex(idx);
                      setIsRotating(false);
                    }}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[9.5px] sm:text-[10.5px] uppercase font-sans tracking-[0.14em] sm:tracking-[0.2em] font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                      activeViewIndex === idx
                        ? "bg-[#101F17] text-[#FAF7F2] shadow-md scale-100"
                        : "text-[#5E625A] hover:text-[#101F17] hover:bg-white/50"
                    }`}
                  >
                    {idx === 0 && "🌿 Canopy"}
                    {idx === 1 && "🖐️ Handstitch"}
                    {idx === 2 && "🏡 Village Guild"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Editorial Copy */}
          <div ref={contentRef} className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="reveal-fade-up">
              <div className="flex items-center gap-3 mb-2.5">
                <span className="w-8 h-[1px] bg-[#9E5338]" />
                <span className="text-[10.5px] font-sans uppercase tracking-[0.28em] text-[#9E5338] font-semibold">
                  Philosophy & Origin
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#101F17] tracking-tight leading-[1.08]">
                From the <span className="italic font-normal text-[#9E5338]">Roots</span>
              </h2>
            </div>

            <p className="font-serif text-xl sm:text-2xl text-[#101F17] font-light leading-relaxed reveal-fade-up reveal-delay-150">
              “At Urvaa, we bring together traditional rural skills and naturally sourced products to create things that are better for people and the planet.”
            </p>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#5E625A] font-light leading-relaxed reveal-fade-up reveal-delay-200">
              <p>
                In a world of synthetic disposables and processed shortcuts, URVA returns to the foundational wisdom of Indian villages. Naturally fallen leaves from Areca palms and wild Siali climbers are shaped by skilled artisan hands into durable tableware that composts back into living garden soil within 90 days.
              </p>
              <p>
                Our honey is raw, unheated, and gathered directly from wild cliff colonies in harmony with indigenous forest elders, preserving the living enzymes of India’s untouched canopies.
              </p>
            </div>

            {/* Three Simple Pillars in Liquid Glass Container */}
            <div className="grid grid-cols-3 gap-3 p-5 liquid-glass rounded-2xl border border-white/70 shadow-sm reveal-fade-up reveal-delay-250">
              <div className="space-y-1">
                <div className="font-serif text-base sm:text-lg font-medium text-[#101F17]">Ancestral</div>
                <p className="text-[10.5px] text-[#5E625A] leading-snug">Generations of tribal craft.</p>
              </div>
              <div className="space-y-1">
                <div className="font-serif text-base sm:text-lg font-medium text-[#101F17]">Zero Felling</div>
                <p className="text-[10.5px] text-[#5E625A] leading-snug">Naturally fallen leaves only.</p>
              </div>
              <div className="space-y-1">
                <div className="font-serif text-base sm:text-lg font-medium text-[#101F17]">Dignity</div>
                <p className="text-[10.5px] text-[#5E625A] leading-snug">Fair direct tribal income.</p>
              </div>
            </div>

            {/* Link CTA in Curved Pill */}
            <div className="pt-2 reveal-fade-up reveal-delay-300">
              <a
                href="#tableware"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#101F17] hover:bg-[#1E3528] text-[#FAF7F2] text-[11px] sm:text-xs uppercase font-sans tracking-[0.18em] sm:tracking-[0.24em] font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group cursor-pointer text-center"
              >
                <span>Explore Sustainable Tableware</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

