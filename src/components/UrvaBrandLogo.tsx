"use client";

import React from "react";
import Image from "next/image";

interface UrvaBrandLogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}

export default function UrvaBrandLogo({
  variant = "dark",
  size = "md",
  showTagline = true,
  className = "",
}: UrvaBrandLogoProps) {
  const isLight = variant === "light";

  const sizeMap = {
    sm: { img: 40, title: "text-lg tracking-[0.24em]", tag: "text-[9px] tracking-[0.2em]" },
    md: { img: 50, title: "text-2xl tracking-[0.26em]", tag: "text-[10px] tracking-[0.22em]" },
    lg: { img: 64, title: "text-3xl tracking-[0.28em]", tag: "text-[11px] tracking-[0.24em]" },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3.5 select-none group cursor-pointer ${className}`}>
      {/* Official Urva Circular Logo Badge (1024x1024 High-Res, Transparent Background) */}
      <div
        className="relative flex-shrink-0 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-md"
        style={{ width: currentSize.img, height: currentSize.img }}
      >
        <Image
          src="/images/urva-official-circle.png"
          alt="URVA — Delivering the Rural Aura"
          fill
          sizes={`${currentSize.img * 2}px`}
          className="object-cover"
          priority
        />
      </div>

      {/* Clean Brand Typography */}
      <div className="flex flex-col justify-center text-left">
        <span
          className={`font-serif font-bold uppercase leading-none ${currentSize.title} ${
            isLight ? "text-[#FAF7F2]" : "text-[#1C1E1B]"
          } transition-colors`}
        >
          URVA
        </span>
        {showTagline && (
          <span
            className={`font-sans uppercase font-medium mt-1 ${currentSize.tag} ${
              isLight ? "text-[#E8B86D]" : "text-[#9E5338]"
            } transition-colors`}
          >
            Delivering the Rural Aura
          </span>
        )}
      </div>
    </div>
  );
}
