"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, ArrowUpRight } from "lucide-react";
import UrvaBrandLogo from "./UrvaBrandLogo";
import { useShop } from "@/context/ShopContext";

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tableware", href: "#tableware" },
    { name: "Wild Honey", href: "#honey" },
    { name: "Earth Harvest", href: "#harvest" },
    { name: "Craft & Story", href: "#story" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 flex items-center ${
          isScrolled
            ? "bg-[#FAF7F2]/85 backdrop-blur-2xl border-b border-white/50 shadow-[0_10px_35px_rgba(0,0,0,0.05)]"
            : "bg-gradient-to-b from-black/65 via-black/25 to-transparent text-[#FAF7F2]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full flex items-center justify-between">
          {/* Left Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] font-sans uppercase tracking-[0.24em] font-medium transition-colors duration-200 relative group py-1 ${
                  isScrolled
                    ? "text-[#1C1E1B]/85 hover:text-[#1C1E1B]"
                    : "text-[#FAF7F2]/90 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-[#1C1E1B]" : "bg-[#FAF7F2]"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Center Brand Logo */}
          <Link href="/" className="transition-opacity hover:opacity-95">
            <UrvaBrandLogo
              variant={isScrolled ? "dark" : "light"}
              size="sm"
              showTagline={true}
            />
          </Link>

          {/* Right Actions: Concept Credit & Basket */}
          <div className="flex items-center gap-3.5 sm:gap-5">
            {/* OneMario Concept Pill — Liquid Glass */}
            <div
              className={`hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-sans uppercase tracking-wider font-semibold border shadow-sm ${
                isScrolled
                  ? "bg-white/80 border-[#1C1E1B]/12 text-[#9E5338] backdrop-blur-md"
                  : "bg-white/12 border-white/30 text-[#E8B86D] backdrop-blur-md"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#DF9F52] animate-pulse" />
              <span>OneMario Concept</span>
            </div>

            {/* Bag Button — Liquid Glass & Curved Pill */}
            <button
              onClick={() => setIsCartOpen(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95 ${
                isScrolled
                  ? "bg-white/85 backdrop-blur-xl border-[#1C1E1B]/15 text-[#101F17] hover:bg-white"
                  : "bg-white/15 backdrop-blur-xl border-white/40 text-white hover:bg-white/25 shadow-md"
              }`}
              aria-label="Open curated basket"
            >
              <ShoppingBag size={14} />
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] font-medium hidden sm:inline">
                Basket
              </span>
              <span
                className={`w-4 h-4 rounded-full text-[9px] font-mono flex items-center justify-center font-bold ${
                  isScrolled
                    ? "bg-[#101F17] text-[#FAF7F2]"
                    : "bg-white text-[#101F17]"
                }`}
              >
                {totalItems}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-1.5 transition-colors ${
                isScrolled ? "text-[#1C1E1B]" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Minimal Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-[#0A120D]/85 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FAF7F2] shadow-2xl p-6 flex flex-col justify-between border-l border-[#1C1E1B]/10 z-10">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#1C1E1B]/10">
                <UrvaBrandLogo variant="dark" size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#5E625A] hover:text-[#1C1E1B]"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-8 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-serif text-[#1C1E1B] hover:text-[#9E5338] transition-colors py-1 flex items-center justify-between border-b border-[#1C1E1B]/5"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="opacity-40" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#1C1E1B]/10 space-y-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full py-3.5 bg-[#1C1E1B] text-[#FAF7F2] text-xs uppercase tracking-[0.24em] font-medium rounded-full transition-all shadow-md active:scale-95"
              >
                Inquire & Bulk Orders
              </a>
              <div className="text-[11px] text-center text-[#5E625A] tracking-wider">
                Concept by OneMario • @urvaa_in
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
