"use client";

import React, { useRef, useEffect } from "react";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headlineRef.current?.children || [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15 }
      )
        .fromTo(
          sublineRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.7"
        )
        .fromTo(
          ctaRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.6"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0A120D] text-[#FAF7F2] pt-36 sm:pt-44 lg:pt-48 pb-16"
    >
      {/* Full-Bleed Bright & Polished Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-100"
          style={{
            filter: "brightness(1.08) contrast(1.06) saturate(1.18)",
          }}
        >
          <source src="/images/gemini_generated_video_3a74ae1b_gwr_video_mvp.mp4" type="video/mp4" />
          <source src="/images/gemini_generated_video_3a74ae1b.mp4" type="video/mp4" />
        </video>

        {/* Minimal, Classic & Luminous Overlays (Keeps the video bright & vivid!) */}
        {/* Soft top gradient to ensure navbar legibility */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/55 via-black/20 to-transparent pointer-events-none" />

        {/* 50% Contrast Layer to make all hero text highlight sharply over the video */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />

        {/* Soft bottom transition gradient into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/40 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content — Centered with Generous Space below the Navbar */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center my-auto">
        {/* Concept Credit Badge — Liquid Glass Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/35 bg-black/45 backdrop-blur-xl mb-7 text-[11px] font-sans uppercase tracking-[0.26em] text-[#FAF7F2] shadow-[0_8px_25px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.35)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DF9F52] animate-pulse" />
          <span className="text-[#E8B86D] font-semibold">Website concept by OneMario</span>
          <span className="text-white/40">•</span>
          <span className="text-white/90">URVA</span>
        </div>

        {/* Classical Serif Headlines */}
        <h1
          ref={headlineRef}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] font-light leading-[1.04] tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.55)] max-w-4xl"
        >
          <span className="block font-normal">Rooted in Nature.</span>
          <span className="block italic text-[#FCD38D] font-light mt-1 sm:mt-2">
            Crafted with Purpose.
          </span>
        </h1>

        {/* Brand Tagline & Supporting Statement */}
        <div ref={sublineRef} className="mt-6 sm:mt-8 space-y-2 max-w-2xl">
          <p className="font-serif italic text-lg sm:text-2xl text-[#FAF7F2] font-light tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            “Delivering the Rural Aura”
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-[#FAF7F2]/90 font-light leading-relaxed tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            Sustainable products inspired by nature, traditional knowledge, and rural Indian craftsmanship.
          </p>
        </div>

        {/* Action CTAs — Curved Pills & Liquid Glass */}
        <div
          ref={ctaRef}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <a
            href="#carousel"
            className="w-full sm:w-auto px-10 py-4.5 rounded-full bg-[#FAF7F2] text-[#0A120D] hover:bg-white text-xs uppercase font-sans tracking-[0.25em] font-semibold transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:scale-105 active:scale-95 cursor-pointer text-center"
          >
            Explore Collection
          </a>
          <a
            href="#story"
            className="w-full sm:w-auto px-10 py-4.5 rounded-full border border-white/40 text-white hover:bg-white/20 bg-white/10 backdrop-blur-xl text-xs uppercase font-sans tracking-[0.25em] font-medium transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 cursor-pointer text-center"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
