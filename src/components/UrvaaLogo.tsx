import React from "react";

interface UrvaaLogoProps {
  variant?: "dark" | "light" | "gold";
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  className?: string;
}

export default function UrvaaLogo({
  variant = "dark",
  size = "md",
  showTagline = true,
  className = "",
}: UrvaaLogoProps) {
  const isLight = variant === "light";
  const isGold = variant === "gold";

  const textColor = isLight
    ? "text-[#F8F5EE]"
    : isGold
    ? "text-[#DF9F52]"
    : "text-[#101F17]";

  const subtextColor = isLight
    ? "text-[#C9D4C5]/80"
    : isGold
    ? "text-[#DF9F52]/80"
    : "text-[#5E625A]";

  const iconStroke = isLight
    ? "#F8F5EE"
    : isGold
    ? "#DF9F52"
    : "#101F17";

  const iconAccent = isLight
    ? "#8FA289"
    : isGold
    ? "#E8B86D"
    : "#234534";

  const sizeClasses = {
    sm: "gap-2",
    md: "gap-3",
    lg: "gap-3.5",
    xl: "gap-4",
  };

  const titleSizes = {
    sm: "text-lg tracking-[0.28em]",
    md: "text-2xl tracking-[0.3em]",
    lg: "text-3xl tracking-[0.32em]",
    xl: "text-4xl tracking-[0.35em]",
  };

  const subtitleSizes = {
    sm: "text-[9px] tracking-[0.24em]",
    md: "text-[10px] tracking-[0.28em]",
    lg: "text-xs tracking-[0.3em]",
    xl: "text-sm tracking-[0.32em]",
  };

  const iconSizes = {
    sm: 28,
    md: 36,
    lg: 44,
    xl: 56,
  };

  const currentIconSize = iconSizes[size];

  return (
    <div className={`flex items-center ${sizeClasses[size]} select-none group cursor-pointer ${className}`}>
      {/* Handcrafted Botanical & Root Iconography */}
      <div className="relative flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
        <svg
          width={currentIconSize}
          height={currentIconSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-colors duration-300"
        >
          {/* Subtle Outer Spiritual/Natural Ring */}
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke={iconStroke}
            strokeWidth="1.2"
            strokeDasharray="2 3"
            opacity="0.35"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke={iconStroke}
            strokeWidth="1.5"
            opacity="0.75"
          />

          {/* Central Sprouting Sacred Seed & Leaf (Urvaa) */}
          {/* Left Leaf Arch */}
          <path
            d="M50 20C40 32 36 45 42 60C45 66 50 72 50 72"
            stroke={iconStroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Right Leaf Arch */}
          <path
            d="M50 20C60 32 64 45 58 60C55 66 50 72 50 72"
            stroke={iconStroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Central Stem & Vein */}
          <path
            d="M50 18V76"
            stroke={iconAccent}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Delicate Side Veins */}
          <path
            d="M50 32L43 38M50 44L41 52M50 56L44 64"
            stroke={iconStroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M50 32L57 38M50 44L59 52M50 56L56 64"
            stroke={iconStroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Deep Forest Roots Motif at Base */}
          <path
            d="M50 76C47 81 40 85 33 87M50 76C53 81 60 85 67 87M50 76V89"
            stroke={iconAccent}
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.9"
          />
          
          {/* Morning Dew Drop / Pollen grain */}
          <circle cx="50" cy="18" r="3" fill={iconAccent} />
        </svg>
      </div>

      {/* Brand Wordmark & Tagline */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-serif tracking-widest font-semibold uppercase leading-none ${titleSizes[size]} ${textColor} transition-colors duration-300`}
          style={{ letterSpacing: "0.22em" }}
        >
          URVAA
        </span>
        {showTagline && (
          <span
            className={`font-sans uppercase font-medium mt-1 ${subtitleSizes[size]} ${subtextColor} transition-colors duration-300`}
            style={{ letterSpacing: "0.26em" }}
          >
            Rooted in Nature
          </span>
        )}
      </div>
    </div>
  );
}
