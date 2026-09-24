"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp, ShieldCheck, Leaf, HeartHandshake } from "lucide-react";
import { InstagramIcon } from "./Icons";
import UrvaBrandLogo from "./UrvaBrandLogo";

export default function Footer() {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Wedding / Event Tableware",
    message: "",
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#0A140E] text-[#FAF7F2] relative overflow-hidden border-t border-white/10">
      {/* Decorative botanical watermark */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#162A1F]/30 rounded-full blur-[140px] pointer-events-none" />

      {/* Inquiry / Bulk Procurement Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-16 border-b border-white/10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] uppercase font-sans tracking-[0.3em] text-[#DF9F52] font-semibold block">
              Bespoke & Institutional Inquiries
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2] font-light leading-tight">
              Partner with <span className="italic text-[#E8B86D]">Urvaa</span> for weddings, conscious dining, & bulk supply.
            </h3>
            <p className="text-xs sm:text-sm text-[#C9D4C5]/80 font-light leading-relaxed">
              We supply customized 12" and 14" (90 GSM) Areca and Siali leaf plates, custom raw honey gift jars with wax seals, and unpolished heritage grains to forward-thinking event organizers, luxury eco-resorts, and farm-to-table restaurants worldwide.
            </p>

            <div className="pt-4 space-y-2 text-xs text-[#A3B19E]">
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-[#DF9F52]" />
                <span>Craft Hubs: Mayurbhanj (Odisha) • Shivamogga (Karnataka)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#DF9F52]" />
                <span>harvest@urvaa.in • institutional@urvaa.in</span>
              </div>
              <div className="flex items-center gap-2">
                <InstagramIcon size={13} className="text-[#DF9F52]" />
                <span>@urvaa_in</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 liquid-glass-dark rounded-3xl border border-white/20 p-6 sm:p-8 shadow-2xl">
            {inquirySubmitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#DF9F52]/20 text-[#DF9F52] flex items-center justify-center mx-auto">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="font-serif text-2xl text-[#FAF7F2]">Inquiry Received with Reverence</h4>
                <p className="text-xs text-[#C9D4C5]/80 max-w-sm mx-auto">
                  Our rural logistics lead will connect with custom sample packages and wholesale pricing within 24 hours.
                </p>
                <button
                  onClick={() => setInquirySubmitted(false)}
                  className="mt-4 text-xs text-[#DF9F52] underline font-mono cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase font-sans tracking-widest text-[#A3B19E] block mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                      placeholder="e.g. Radhika Sharma"
                      className="w-full px-4 py-3 bg-[#0A140E]/80 rounded-xl border border-white/15 text-xs text-[#FAF7F2] placeholder-white/30 focus:outline-none focus:border-[#DF9F52] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-sans tracking-widest text-[#A3B19E] block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      placeholder="radhika@example.com"
                      className="w-full px-4 py-3 bg-[#0A140E]/80 rounded-xl border border-white/15 text-xs text-[#FAF7F2] placeholder-white/30 focus:outline-none focus:border-[#DF9F52] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase font-sans tracking-widest text-[#A3B19E] block mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={inquiryData.phone}
                      onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-[#0A140E]/80 rounded-xl border border-white/15 text-xs text-[#FAF7F2] placeholder-white/30 focus:outline-none focus:border-[#DF9F52] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-sans tracking-widest text-[#A3B19E] block mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={inquiryData.type}
                      onChange={(e) => setInquiryData({ ...inquiryData, type: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0A140E]/80 rounded-xl border border-white/15 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#DF9F52] transition-colors"
                    >
                      <option value="Wedding / Event Tableware">Eco-Wedding / Event Tableware</option>
                      <option value="Wild Honey Corporate Gifting">Wild Honey Corporate Gifting</option>
                      <option value="Restaurant & Cafe Supply">Restaurant & Cafe Sustainable Supply</option>
                      <option value="Sample Crate Request">Sample Crate Request</option>
                      <option value="Export / International">Export / International Supply</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase font-sans tracking-widest text-[#A3B19E] block mb-1">
                    Requirements & Estimated Quantities
                  </label>
                  <textarea
                    rows={3}
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                    placeholder="Tell us about your event date, required quantities (e.g. 500 plates of 12 inch 90 GSM), or honey jars..."
                    className="w-full px-4 py-3 bg-[#0A140E]/80 rounded-xl border border-white/15 text-xs text-[#FAF7F2] placeholder-white/30 focus:outline-none focus:border-[#DF9F52] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#DF9F52] hover:bg-[#E8B86D] text-[#0A140E] text-xs uppercase font-sans tracking-[0.25em] font-semibold rounded-full transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]"
                >
                  Submit Wholesale / Custom Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links & Brand Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <UrvaBrandLogo variant="light" size="lg" showTagline={true} />
            <p className="font-serif italic text-lg text-[#DF9F52] pt-2">
              “Igniting a revolution from the roots.”
            </p>
            <p className="text-xs text-[#C9D4C5]/80 font-light leading-relaxed max-w-sm">
              URVAA bridges ancient Indian rural craftsmanship and wild-harvested ecological products with modern daily living. Sourced in harmony with indigenous forest communities.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/urvaa_in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#DF9F52] hover:bg-white/10 transition-colors"
                aria-label="URVAA on Instagram"
              >
                <InstagramIcon size={14} />
              </a>
              <a
                href="mailto:contact@urvaa.in"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#DF9F52] hover:bg-white/10 transition-colors"
                aria-label="Email URVAA"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Column 1: Products */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-sans tracking-[0.25em] text-[#FAF7F2] font-semibold">
              The Harvest
            </h4>
            <ul className="space-y-2 text-xs text-[#C9D4C5]/75">
              <li>
                <a href="#honey" className="hover:text-[#DF9F52] transition-colors">
                  Deep Forest Honey
                </a>
              </li>
              <li>
                <a href="#honey" className="hover:text-[#DF9F52] transition-colors">
                  Monofloral Wild Honey
                </a>
              </li>
              <li>
                <a href="#honey" className="hover:text-[#DF9F52] transition-colors">
                  Polyfloral Wildflower
                </a>
              </li>
              <li>
                <a href="#honey" className="hover:text-[#DF9F52] transition-colors">
                  Honeydew Tree Honey
                </a>
              </li>
              <li>
                <a href="#tableware" className="hover:text-[#DF9F52] transition-colors">
                  Areca Palm Plates (90 GSM)
                </a>
              </li>
              <li>
                <a href="#tableware" className="hover:text-[#DF9F52] transition-colors">
                  Siali Hand-Stitched Plates
                </a>
              </li>
              <li>
                <a href="#natural-products" className="hover:text-[#DF9F52] transition-colors">
                  Heritage Millets & Turmeric
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Collective */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-sans tracking-[0.25em] text-[#FAF7F2] font-semibold">
              The Collective
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C9D4C5]/75">
              <li>
                <a href="#story" className="hover:text-[#DF9F52] transition-colors">
                  Our Story: From the Roots
                </a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-[#DF9F52] transition-colors">
                  Tribal Artisan Clusters
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-[#DF9F52] transition-colors">
                  Life at Urvaa (@urvaa_in)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#DF9F52] transition-colors">
                  Artisan Welfare Fund
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Certifications & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-sans tracking-[0.25em] text-[#FAF7F2] font-semibold">
              Integrity
            </h4>
            <div className="space-y-2 text-xs text-[#C9D4C5]/75">
              <div className="flex items-center gap-2">
                <Leaf size={13} className="text-[#8FA289]" />
                <span>100% Home Compostable</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={13} className="text-[#8FA289]" />
                <span>FSSAI Certified Food Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake size={13} className="text-[#8FA289]" />
                <span>Fair Remuneration to Tribes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DF9F52]" />
                <span>Zero Single-Use Plastics</span>
              </div>
              <div className="pt-3">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-widest text-[#DF9F52] hover:text-[#FAF7F2] transition-all liquid-glass-dark rounded-full px-4 py-2 border border-white/20 hover:border-[#DF9F52]/60 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                >
                  <ArrowUp size={12} />
                  <span>Return to Top</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with OneMario concept credit in Liquid Glass Pill */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A3B19E]">
          <div>
            © {new Date().getFullYear()} URVA. “Delivering the Rural Aura.” All rights reserved.
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 liquid-glass-dark border border-white/20 rounded-full text-[11px] text-[#DF9F52] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DF9F52] animate-pulse" />
            <span className="font-sans uppercase tracking-wider font-semibold">Website concept by OneMario</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#" className="hover:text-[#FAF7F2] transition-colors">
              Ethical Sourcing
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#FAF7F2] transition-colors">
              FSSAI Certified
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
