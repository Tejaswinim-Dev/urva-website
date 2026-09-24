"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function UrvaPreloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(15);
  const [statusText, setStatusText] = useState("Rooting in Nature...");
  const preloaderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scrolling while preloader is active
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Progress tick intervals
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressTimer);
          return 90;
        }
        const next = prev + Math.floor(Math.random() * 18 + 10);
        if (next > 40 && next < 75) {
          setStatusText("Harvesting Rural Aura...");
        } else if (next >= 75) {
          setStatusText("Entering URVA Collective...");
        }
        return Math.min(next, 90);
      });
    }, 180);

    const handleComplete = () => {
      setProgress(100);
      setStatusText("Delivering the Rural Aura");

      setTimeout(() => {
        if (contentRef.current && preloaderRef.current) {
          const tl = gsap.timeline({
            onComplete: () => {
              setLoading(false);
              document.body.style.overflow = "";
              document.documentElement.style.overflow = "";
              // Trigger Lenis start if initialized
              const win = window as unknown as { __lenis?: { start: () => void } };
              win.__lenis?.start();
            },
          });

          tl.to(contentRef.current, {
            scale: 0.96,
            opacity: 0,
            y: -15,
            duration: 0.6,
            ease: "power2.inOut",
          }).to(
            preloaderRef.current,
            {
              opacity: 0,
              duration: 0.75,
              ease: "power3.inOut",
            },
            "-=0.2"
          );
        } else {
          setLoading(false);
          document.body.style.overflow = "";
          document.documentElement.style.overflow = "";
        }
      }, 550);
    };

    // Check if window is already loaded
    if (document.readyState === "complete") {
      setTimeout(handleComplete, 1400);
    } else {
      const onLoad = () => {
        setTimeout(handleComplete, 1200);
      };
      window.addEventListener("load", onLoad);
      // Safety fallback max 3.2s
      const fallbackTimer = setTimeout(handleComplete, 3200);
      return () => {
        clearInterval(progressTimer);
        window.removeEventListener("load", onLoad);
        clearTimeout(fallbackTimer);
      };
    }

    return () => {
      clearInterval(progressTimer);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] bg-[#0A120D] text-[#FAF7F2] flex flex-col items-center justify-center overflow-hidden select-none w-screen w-full h-[100dvh] max-h-[100dvh]"
      style={{
        transition: "opacity 0.6s ease-out",
      }}
    >
      {/* Ambient glowing atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#DF9F52]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#1A3427]/25 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Preloader Stage */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm sm:max-w-md w-full"
      >
        {/* Animated Brand Emblem Seal */}
        <div className="relative mb-7">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full liquid-glass-dark border border-[#DF9F52]/40 shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex items-center justify-center">
            {/* Rotating SVG Seal Text */}
            <svg
              className="w-full h-full animate-[spin_16s_linear_infinite]"
              viewBox="0 0 100 100"
            >
              <path
                id="preloaderCircle"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[7.8px] font-sans uppercase tracking-[0.24em] fill-[#DF9F52] font-semibold">
                <textPath href="#preloaderCircle" startOffset="0%">
                  URVA • ROOTED IN NATURE • ESTD. INDIA •
                </textPath>
              </text>
            </svg>

            {/* Center Official URVA Logo */}
            <div className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-xl border border-[#DF9F52]/60 bg-black/75 p-0.5">
              <Image
                src="/images/urva-official-circle.png"
                alt="URVA Official Logo"
                fill
                className="object-cover rounded-full"
                priority
                sizes="56px"
              />
            </div>
          </div>

          {/* Gentle Pulse Ripple */}
          <div className="absolute inset-0 rounded-full border border-[#DF9F52]/25 animate-ping pointer-events-none" />
        </div>

        {/* Brand Typography */}
        <h1 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2] font-light tracking-[0.24em] uppercase leading-none drop-shadow-md">
          URVA
        </h1>
        <p className="font-serif italic text-sm sm:text-base text-[#DF9F52] mt-2 tracking-wider">
          “Delivering the Rural Aura”
        </p>

        {/* Minimal Liquid-Glass Progress Indicator */}
        <div className="mt-8 w-48 sm:w-56 space-y-2.5">
          <div className="w-full h-[2.5px] bg-white/10 rounded-full overflow-hidden liquid-glass border border-white/15 p-[0.5px]">
            <div
              className="h-full bg-gradient-to-r from-[#B4783B] via-[#DF9F52] to-[#FCD38D] rounded-full transition-all duration-300 ease-out shadow-[0_0_12px_rgba(223,159,82,0.6)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono tracking-wider text-[#A3B19E]">
            <span className="truncate pr-2">{statusText}</span>
            <span className="text-[#DF9F52] font-semibold">{progress}%</span>
          </div>
        </div>

        {/* Quiet Assurance */}
        <div className="mt-7 flex items-center gap-2 text-[9.5px] uppercase font-sans tracking-[0.25em] text-[#C9D4C5]/60">
          <span className="w-1 h-1 rounded-full bg-[#DF9F52]" />
          <span>Single-Origin • Wild Harvest • Handcrafted</span>
        </div>
      </div>
    </div>
  );
}
