"use client";

import React from "react";
import SmoothScroll from "@/components/SmoothScroll";
import { ShopProvider } from "@/context/ShopContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandStorySection from "@/components/BrandStorySection";
import EditorialCarousel from "@/components/EditorialCarousel";
import TablewareSection from "@/components/TablewareSection";
import HoneyExperienceSection from "@/components/HoneyExperienceSection";
import RuralCraftsmanshipSection from "@/components/RuralCraftsmanshipSection";
import MilletsTurmericSection from "@/components/MilletsTurmericSection";
import InstagramCommunitySection from "@/components/InstagramCommunitySection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import QuickViewModal from "@/components/QuickViewModal";
import UrvaPreloader from "@/components/UrvaPreloader";
import ScrollRevealManager from "@/components/ScrollRevealManager";

export default function Home() {
  return (
    <ShopProvider>
      {/* Brand Preloader with Official Logo & Rotating Seal */}
      <UrvaPreloader />

      {/* Global Scroll-Triggered Reveal Animations */}
      <ScrollRevealManager />

      <SmoothScroll>
        <div className="relative min-h-screen bg-[#FAF7F2] text-[#1C1E1B] overflow-x-hidden selection:bg-[#1A3427] selection:text-[#FAF7F2]">
          {/* Minimalist Floating Navigation with authentic URVA logo */}
          <Navbar />

          {/* Main Editorial Flow */}
          <main>
            {/* 1. Fullscreen Hero with Cinematic Video Background */}
            <HeroSection />

            {/* 2. Interactive Product Carousel (Signature Archive) */}
            <EditorialCarousel />

            {/* 3. Brand Story: From the Roots */}
            <BrandStorySection />

            {/* 4. Sustainable Tableware Highlight (Areca & Siali 90 GSM) */}
            <TablewareSection />

            {/* 5. Honey Experience (Purely Wild. Naturally Golden.) */}
            <HoneyExperienceSection />

            {/* 6. Rural Craftsmanship (Where tradition becomes tomorrow) */}
            <RuralCraftsmanshipSection />

            {/* 7. Millets & Turmeric (Ancestral Earth Harvest) */}
            <MilletsTurmericSection />

            {/* 9. Instagram Community: Life at Urvaa (@urvaa_in) */}
            <InstagramCommunitySection />

            {/* 10. Final Minimal CTA: Bring nature closer */}
            <FinalCTASection />
          </main>

          {/* Footer: URVA — Delivering the Rural Aura / Igniting a revolution from the roots */}
          <Footer />

          {/* Curated Basket Drawer */}
          <CartDrawer />

          {/* Product Quick View Modal */}
          <QuickViewModal />
        </div>
      </SmoothScroll>
    </ShopProvider>
  );
}
