"use client";

import React, { useState } from "react";
import { ArrowRight, Check, Send } from "lucide-react";

export default function FinalCTASection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-28 sm:py-36 lg:py-48 bg-[#FAF7F2] text-[#1C1E1B] relative overflow-hidden border-t border-[#1C1E1B]/10">
      {/* Subtle organic circle gradients in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#EFE9DD]/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10 flex flex-col items-center">
        {/* Subtle Pre-heading in Liquid Glass */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/60 liquid-glass mb-6 text-[10px] font-sans uppercase tracking-[0.3em] text-[#6F8369] font-semibold shadow-sm reveal-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1A3427] animate-pulse" />
          <span>The Gentle Revolution</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-[#101F17] tracking-tight leading-[1.05] reveal-fade-up reveal-delay-150">
          Bring nature <span className="italic font-normal text-[#1A3427]">closer.</span>
        </h2>

        {/* Body Copy */}
        <p className="mt-8 text-base sm:text-xl text-[#5E625A] font-light max-w-xl leading-relaxed reveal-fade-up reveal-delay-200">
          From unheated wild honey to hand-stitched leaf tableware, bring the grounding wisdom of rural artisans into your modern dining ritual.
        </p>

        {/* Curved Pill CTA Buttons */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto reveal-fade-up reveal-delay-250">
          <a
            href="#honey"
            className="w-full sm:w-auto px-7 sm:px-10 py-3.5 sm:py-4.5 bg-[#101F17] hover:bg-[#1E3528] text-[#FAF7F2] text-[11px] sm:text-xs uppercase font-sans tracking-[0.18em] sm:tracking-[0.22em] font-semibold rounded-full transition-all duration-300 shadow-[0_12px_35px_rgba(16,31,23,0.22)] hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-center"
          >
            Explore Urvaa
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 sm:px-9 py-3.5 sm:py-4.5 liquid-glass hover:bg-white text-[#101F17] text-[11px] sm:text-xs uppercase font-sans tracking-[0.16em] sm:tracking-[0.2em] font-semibold rounded-full transition-all duration-300 cursor-pointer text-center shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            Bulk & Wedding Orders
          </a>
        </div>

        {/* Direct Newsletter / Seasonal Harvest Alert in Liquid Glass Container */}
        <div className="mt-14 sm:mt-20 pt-10 sm:pt-12 border-t border-[#1C1E1B]/10 max-w-md w-full reveal-fade-up reveal-delay-300">
          <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#B4783B] font-semibold block mb-2">
            Seasonal Wild Harvest Alerts
          </span>
          <p className="text-xs text-[#5E625A] mb-5">
            Receive intimate field notes from our rural clusters and first access to rare, limited-batch wild honeys.
          </p>

          {subscribed ? (
            <div className="p-4 liquid-glass text-[#1A3427] text-xs font-serif italic flex items-center justify-center gap-2 rounded-2xl border border-white/80 shadow-sm">
              <Check size={14} className="text-[#6F8369]" />
              <span>Thank you. You are now rooted with Urvaa.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="liquid-glass rounded-full p-1 sm:p-1.5 border border-white/80 shadow-md flex items-center gap-1 sm:gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-3 sm:px-4 py-1.5 sm:py-2.5 bg-transparent text-xs text-[#1C1E1B] placeholder-[#5E625A]/60 focus:outline-none min-w-0"
              />
              <button
                type="submit"
                className="px-3.5 sm:px-6 py-1.5 sm:py-2.5 bg-[#101F17] text-[#FAF7F2] text-[10.5px] sm:text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#1E3528] transition-all duration-300 flex items-center gap-1.5 shadow-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex-shrink-0"
              >
                <span>Join</span>
                <Send size={11} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
