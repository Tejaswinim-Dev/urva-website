"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Check, MapPin, Sparkles, Sprout, ShieldAlert, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useShop, ProductItem } from "@/context/ShopContext";

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, setIsCartOpen } = useShop();
  const [selectedSize, setSelectedSize] = useState<string>("12 inch — 90 GSM");
  const [modalQuantity, setModalQuantity] = useState<number>(1);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const backdropRef = React.useRef<HTMLDivElement>(null);
  const cardRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (quickViewProduct && backdropRef.current && cardRef.current) {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power3.out" }
      );
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "expo.out", delay: 0.05 }
      );
    }
  }, [quickViewProduct]);

  // Reset added state and quantity on product change
  useEffect(() => {
    setIsAdded(false);
    setModalQuantity(1);
    setSelectedSize("12 inch — 90 GSM");
  }, [quickViewProduct]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setQuickViewProduct(null);
      }
    };
    if (quickViewProduct) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [quickViewProduct, setQuickViewProduct]);

  // Lock scroll and pause Lenis while modal is open
  useEffect(() => {
    if (quickViewProduct) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      const win = window as unknown as { __lenis?: { stop: () => void; start: () => void } };
      win.__lenis?.stop();
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      const win = window as unknown as { __lenis?: { stop: () => void; start: () => void } };
      win.__lenis?.start();
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      const win = window as unknown as { __lenis?: { stop: () => void; start: () => void } };
      win.__lenis?.start();
    };
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isTableware = product.category === "Sustainable Tableware";

  const unitPrice = React.useMemo(() => {
    if (!product) return 0;
    if (isTableware) {
      const is14 = selectedSize.includes("14");
      if (product.id.includes("siali")) {
        return is14 ? 640 : 540;
      }
      return is14 ? 599 : 499;
    }
    return product.price;
  }, [product, isTableware, selectedSize]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 lg:p-8"
      data-lenis-prevent="true"
      data-lenis-prevent-wheel="true"
      data-lenis-prevent-touch="true"
      onWheel={(e) => e.stopPropagation()}
    >
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-[#0a140e]/75 backdrop-blur-md transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Card — Liquid Glass with Rounded Curvature */}
      <div
        ref={cardRef}
        data-lenis-prevent="true"
        data-lenis-prevent-wheel="true"
        data-lenis-prevent-touch="true"
        onWheel={(e) => e.stopPropagation()}
        className="relative bg-[#FAF7F2]/95 backdrop-blur-2xl text-[#1C1E1B] max-w-4xl w-full border border-white/60 shadow-[0_30px_70px_rgba(0,0,0,0.35)] rounded-3xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[94dvh] sm:max-h-[90vh]"
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-3.5 sm:top-5 right-3.5 sm:right-5 z-30 w-9 h-9 sm:w-10 sm:h-10 bg-white/90 hover:bg-white text-[#1C1E1B] rounded-full border border-white/80 shadow-md backdrop-blur-md flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Product Image Area — Responsive Height so it doesn't crowd mobile view */}
        <div className="relative w-full md:w-1/2 h-52 sm:h-64 md:h-auto min-h-[200px] md:min-h-[320px] bg-[#EAE4D7] overflow-hidden flex-shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none">
            <span className="px-3 py-1 bg-[#101F17]/85 backdrop-blur-sm text-[#FAF7F2] text-[10px] uppercase font-sans tracking-[0.25em] rounded-full">
              {product.category}
            </span>
            {product.gsm && (
              <span className="px-3 py-1 bg-[#8FA289]/90 backdrop-blur-sm text-[#101F17] font-semibold text-[10px] uppercase tracking-wider rounded-full">
                {product.gsm} Certified
              </span>
            )}
          </div>
        </div>

        {/* Product Details Area */}
        <div
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          data-lenis-prevent-touch="true"
          onWheel={(e) => e.stopPropagation()}
          className="w-full md:w-1/2 p-5 sm:p-7 md:p-8 overflow-y-auto overscroll-contain no-scrollbar flex flex-col justify-between space-y-5"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="space-y-4">
            <div>
              <span className="text-[10px] uppercase font-sans tracking-[0.28em] text-[#6F8369] font-semibold">
                URVAA Heritage Harvest
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#101F17] mt-1 leading-tight">
                {product.name}
              </h3>
              <p className="font-serif italic text-sm sm:text-base text-[#5E625A] mt-0.5">
                {product.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-baseline gap-2.5 pt-2 border-t border-[#1C1E1B]/10">
              <span className="font-serif text-2xl font-bold text-[#101F17]">
                ₹{unitPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-xs text-[#5E625A]">/ {product.unit}</span>
              <span className="text-[10px] text-[#6F8369] font-medium bg-[#DFE5DA] px-2.5 py-0.5 rounded-full">
                Fair Trade Royalty to Artisans
              </span>
            </div>

            <p className="text-xs text-[#3D403A] leading-relaxed">
              {product.description}
            </p>

            {/* Tableware Size Selector */}
            {isTableware && (
              <div className="space-y-2.5 pt-3 border-t border-[#1C1E1B]/10">
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#101F17] block">
                  Select Dimension & Weight:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["12 inch — 90 GSM", "14 inch — 90 GSM"].map((sizeOpt) => (
                    <button
                      key={sizeOpt}
                      onClick={() => setSelectedSize(sizeOpt)}
                      className={`p-3 text-xs text-left rounded-2xl border transition-all duration-300 cursor-pointer ${
                        selectedSize === sizeOpt
                          ? "border-[#101F17] bg-[#101F17] text-[#FAF7F2] shadow-md scale-[1.02]"
                          : "border-white/80 bg-white/70 text-[#1C1E1B] hover:border-[#101F17]"
                      }`}
                    >
                      <div className="font-serif text-sm font-medium">{sizeOpt.split(" — ")[0]}</div>
                      <div className="text-[10.5px] opacity-75 mt-0.5">{sizeOpt.split(" — ")[1]}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Stepper Selector */}
            <div className="flex items-center justify-between py-3 border-t border-[#1C1E1B]/10">
              <div>
                <span className="text-xs uppercase font-sans tracking-wider font-semibold text-[#101F17] block">
                  Select Quantity:
                </span>
                <span className="text-[11px] text-[#5E625A]">
                  Total: ₹{(unitPrice * modalQuantity).toLocaleString("en-IN")}
                </span>
              </div>

              {/* Curved Liquid-Glass Stepper */}
              <div className="flex items-center liquid-glass rounded-full border border-white/80 p-0.5 shadow-sm">
                <button
                  onClick={() => setModalQuantity((q) => Math.max(1, q - 1))}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs text-[#5E625A] hover:text-[#101F17] hover:bg-white transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  —
                </button>
                <span className="w-8 sm:w-10 text-center text-xs font-mono font-semibold text-[#101F17]">
                  {modalQuantity}
                </span>
                <button
                  onClick={() => setModalQuantity((q) => q + 1)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs text-[#5E625A] hover:text-[#101F17] hover:bg-white transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Provenance & Methodology in Curved Box */}
            <div className="space-y-2 pt-3 border-t border-[#1C1E1B]/10 text-xs">
              <div className="flex items-start gap-2 text-[#5E625A]">
                <MapPin size={13} className="text-[#6F8369] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#1C1E1B]">Origin: </span>
                  {product.origin}
                </div>
              </div>

              <div className="flex items-start gap-2 text-[#5E625A]">
                <Sprout size={13} className="text-[#6F8369] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#1C1E1B]">Method: </span>
                  {product.harvestMethod}
                </div>
              </div>

              {product.compostTime && (
                <div className="flex items-start gap-2 text-[#5E625A]">
                  <Sparkles size={13} className="text-[#6F8369] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1E1B]">Compostability: </span>
                    {product.compostTime}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action CTA with Rounded-Full Curvature & Protected Spacing */}
          <div className="pt-4 border-t border-[#1C1E1B]/10 space-y-3.5">
            {isAdded ? (
              <div className="space-y-3.5 animate-fadeIn">
                <div className="p-3.5 liquid-glass rounded-2xl border border-white/80 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2.5 text-xs text-[#101F17]">
                    <Check size={16} className="text-[#2F5A44] flex-shrink-0" />
                    <span className="font-serif text-sm font-medium">Added ({modalQuantity}) to your Curated Basket</span>
                  </div>
                  <span className="text-xs font-mono font-medium text-[#101F17]">
                    ₹{(unitPrice * modalQuantity).toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 pt-1 w-full">
                  <button
                    onClick={() => {
                      setQuickViewProduct(null);
                      setIsCartOpen(true);
                    }}
                    className="w-full sm:flex-1 py-3.5 px-4 bg-[#101F17] hover:bg-[#1A3427] text-[#FAF7F2] text-[11px] sm:text-xs uppercase font-sans tracking-[0.16em] sm:tracking-[0.2em] font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] text-center"
                  >
                    <span>Proceed to Basket</span>
                    <ArrowRight size={13} />
                  </button>

                  <button
                    onClick={() => setQuickViewProduct(null)}
                    className="w-full sm:flex-1 py-3.5 px-4 liquid-glass hover:bg-white text-[#1C1E1B] border border-white/80 text-[11px] sm:text-xs uppercase font-sans tracking-[0.16em] sm:tracking-[0.2em] font-semibold rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98] text-center"
                  >
                    <span>Continue Exploring</span>
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  addToCart(
                    { ...product, price: unitPrice },
                    isTableware ? selectedSize : undefined,
                    false,
                    modalQuantity
                  );
                  setIsAdded(true);
                }}
                className="w-full py-4 px-6 bg-[#101F17] hover:bg-[#1A3427] text-[#FAF7F2] text-xs uppercase font-sans tracking-[0.2em] font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Add {modalQuantity > 1 ? `(${modalQuantity}) ` : ""}to Basket — ₹{(unitPrice * modalQuantity).toLocaleString("en-IN")}</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            )}

            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] text-[#5E625A] pt-1 text-center">
              <span>✓ Carbon-Neutral Transit</span>
              <span>•</span>
              <span>✓ 100% Earth-Degradable</span>
              <span>•</span>
              <span>✓ Chemical Free</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
