"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  X,
  ArrowRight,
  ArrowLeft,
  Check,
  ShieldCheck,
  Lock,
  CreditCard,
  QrCode,
  Truck,
  MapPin,
  Sparkles,
  PackageCheck,
  FileText,
  BadgeCheck,
} from "lucide-react";
import gsap from "gsap";
import { useShop, CartItem } from "@/context/ShopContext";

type CheckoutStep = "basket" | "address" | "payment" | "confirmation";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    totalPrice,
    clearCart,
  } = useShop();

  const [step, setStep] = useState<CheckoutStep>("basket");
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<"upi" | "card" | "cod">("upi");

  // Pre-filled realistic dummy address for instant trust & 1-click test
  const [address, setAddress] = useState({
    name: "Ananya Sharma",
    phone: "+91 98765 43210",
    email: "ananya.sharma@example.com",
    street: "Villa 42, Palm Meadows, Whitefield",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560066",
  });

  // Stored snapshot for order confirmation
  const [placedOrder, setPlacedOrder] = useState<{
    id: string;
    items: CartItem[];
    total: number;
    date: string;
  } | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isCartOpen && backdropRef.current && drawerRef.current) {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power3.out" }
      );
      gsap.fromTo(
        drawerRef.current,
        { opacity: 0, x: "100%" },
        { opacity: 1, x: "0%", duration: 0.8, ease: "expo.out" }
      );
    }
  }, [isCartOpen]);

  // Handle ESC key to close cart
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    if (isCartOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCartOpen]);

  // Lock background scroll and pause Lenis while the drawer is open
  useEffect(() => {
    if (isCartOpen) {
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
  }, [isCartOpen]);

  const handleClose = () => {
    setIsCartOpen(false);
    if (step === "confirmation") {
      setTimeout(() => {
        setStep("basket");
      }, 350);
    }
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const orderId = `URVA-${Math.floor(10000 + Math.random() * 90000)}`;
      setPlacedOrder({
        id: orderId,
        items: [...cart],
        total: totalPrice,
        date: new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      });
      clearCart();
      setIsProcessing(false);
      setStep("confirmation");
    }, 1200);
  };

  if (!isCartOpen) return null;

  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      data-lenis-prevent="true"
      data-lenis-prevent-wheel="true"
      data-lenis-prevent-touch="true"
      onWheel={(e) => e.stopPropagation()}
    >
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-[#0a140e]/65 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10 h-full pointer-events-none">
        <div
          ref={drawerRef}
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          data-lenis-prevent-touch="true"
          className="w-screen max-w-md h-full max-h-screen liquid-glass rounded-l-3xl text-[#1C1E1B] shadow-2xl flex flex-col border-l border-white/80 overscroll-contain relative pointer-events-auto select-none sm:select-auto"
          onWheel={(e) => e.stopPropagation()}
        >
          {/* STEP 1: BASKET VIEW */}
          {step === "basket" && (
            <>
              {/* Header */}
              <div className="px-6 sm:px-8 py-5 border-b border-[#1C1E1B]/10 flex items-center justify-between flex-shrink-0 bg-transparent">
                <div className="flex items-baseline gap-2.5">
                  <h2 className="font-serif text-2xl text-[#101F17] tracking-wide">
                    Curated Basket
                  </h2>
                  <span className="text-xs font-mono text-[#5E625A]">
                    ({totalItemCount})
                  </span>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 flex items-center justify-center text-[#5E625A] hover:text-[#101F17] liquid-glass hover:bg-white rounded-full transition-all border border-white/60 cursor-pointer shadow-sm"
                  aria-label="Close basket"
                >
                  <X size={16} strokeWidth={1.5} />
                </button>
              </div>

              {/* Items List */}
              <div
                ref={scrollContainerRef}
                data-lenis-prevent="true"
                data-lenis-prevent-wheel="true"
                data-lenis-prevent-touch="true"
                className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 sm:px-8 py-6 space-y-6 no-scrollbar touch-pan-y"
                style={{
                  WebkitOverflowScrolling: "touch",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  overscrollBehavior: "contain",
                }}
                onWheel={(e) => e.stopPropagation()}
              >
                {cart.length === 0 ? (
                  <div className="h-full min-h-[260px] flex flex-col items-center justify-center text-center p-8">
                    <p className="font-serif text-2xl text-[#101F17] mb-2">Your basket is empty</p>
                    <p className="text-xs text-[#5E625A] max-w-xs leading-relaxed font-light">
                      Explore our pure wild honeys, handcrafted leaf tableware, and ancestral grains.
                    </p>
                  </div>
                ) : (
                  cart.map((item, idx) => (
                    <div
                      key={`${item.product.id}-${item.selectedSize || "default"}-${idx}`}
                      className="flex gap-4 pb-6 border-b border-[#1C1E1B]/8 last:border-b-0"
                    >
                      <div className="relative w-20 h-20 flex-shrink-0 bg-[#EDE6D8] overflow-hidden rounded-2xl border border-white/80 shadow-sm">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>

                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div className="flex justify-between items-start gap-2">
                          <div className="min-w-0">
                            <h4 className="font-serif text-lg text-[#101F17] leading-snug truncate">
                              {item.product.name}
                            </h4>
                            <p className="text-xs text-[#5E625A] mt-0.5 truncate">
                              {item.selectedSize || item.product.subtitle}
                            </p>
                          </div>
                          <span className="font-serif text-base text-[#101F17] font-semibold flex-shrink-0">
                            ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                          </span>
                        </div>

                        <div className="flex items-center justify-between mt-3.5 pt-2">
                          {/* Curved Stepper Pill */}
                          <div className="flex items-center liquid-glass rounded-full border border-white/80 p-0.5 shadow-sm">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity - 1,
                                  item.selectedSize
                                )
                              }
                              className="w-7 h-7 rounded-full flex items-center justify-center text-xs text-[#5E625A] hover:text-[#101F17] hover:bg-white transition-colors cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              —
                            </button>
                            <span className="w-8 text-center text-xs font-mono font-medium text-[#101F17]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity + 1,
                                  item.selectedSize
                                )
                              }
                              className="w-7 h-7 rounded-full flex items-center justify-center text-xs text-[#5E625A] hover:text-[#101F17] hover:bg-white transition-colors cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                            className="text-xs text-[#5E625A] hover:text-[#9E5338] transition-colors cursor-pointer py-1 px-3 rounded-full hover:bg-black/5"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Basket Summary & Proceed to Checkout */}
              {cart.length > 0 && (
                <div className="border-t border-[#1C1E1B]/10 p-6 sm:p-8 bg-transparent space-y-5 flex-shrink-0">
                  <div className="space-y-2.5 text-xs text-[#5E625A]">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-mono text-[#101F17]">
                        ₹{totalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pan-India Delivery</span>
                      <span className="text-[#101F17]">Complimentary</span>
                    </div>
                    <div className="pt-2.5 border-t border-[#1C1E1B]/10 flex justify-between font-serif text-lg text-[#101F17]">
                      <span>Total</span>
                      <span className="font-semibold">
                        ₹{totalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-1">
                    <button
                      onClick={() => setStep("address")}
                      className="w-full py-4 px-4 sm:px-8 bg-[#101F17] hover:bg-[#1A3427] text-[#FAF7F2] text-[11px] sm:text-xs uppercase font-sans tracking-[0.16em] sm:tracking-[0.22em] font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <span>Proceed to Delivery & Checkout</span>
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>

                    <div className="text-center text-[10px] text-[#5E625A] pt-1 tracking-wider uppercase font-medium">
                      Rooted in Nature. Crafted with Purpose.
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* STEP 2: DELIVERY ADDRESS & CONTACT */}
          {step === "address" && (
            <>
              {/* Header */}
              {/* Header */}
              <div className="px-6 sm:px-8 py-5 border-b border-[#1C1E1B]/10 flex items-center justify-between flex-shrink-0 bg-transparent">
                <button
                  onClick={() => setStep("basket")}
                  className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] text-[#5E625A] hover:text-[#101F17] liquid-glass rounded-full px-3.5 py-1.5 border border-white/60 cursor-pointer transition-all shadow-sm"
                >
                  <ArrowLeft size={13} />
                  <span>Basket</span>
                </button>
                <div className="text-center">
                  <h2 className="font-serif text-xl text-[#101F17]">Delivery Details</h2>
                  <span className="text-[10px] uppercase font-mono text-[#9E5338]">Step 1 of 2</span>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 flex items-center justify-center text-[#5E625A] hover:text-[#101F17] liquid-glass hover:bg-white rounded-full transition-all border border-white/60 cursor-pointer shadow-sm"
                  aria-label="Close drawer"
                >
                  <X size={16} strokeWidth={1.5} />
                </button>
              </div>

              {/* Address Form (Pre-filled for 1-click test, fully editable) */}
              <div
                className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 sm:px-8 py-6 space-y-5 no-scrollbar touch-pan-y"
                style={{
                  WebkitOverflowScrolling: "touch",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
                onWheel={(e) => e.stopPropagation()}
              >
                <div className="p-4 liquid-glass rounded-2xl border border-white/80 text-xs text-[#3D403A] flex items-center gap-2.5 shadow-sm">
                  <Truck size={16} className="text-[#2F5A44] flex-shrink-0" />
                  <span>
                    Carbon-neutral express delivery dispatched from our rural tribal clusters.
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#5E625A] mb-1.5 font-medium">
                      Recipient Full Name
                    </label>
                    <input
                      type="text"
                      value={address.name}
                      onChange={(e) => setAddress({ ...address, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/80 rounded-xl border border-white/80 text-[#101F17] focus:border-[#101F17] outline-none font-medium shadow-sm transition-colors"
                      placeholder="e.g. Ananya Sharma"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#5E625A] mb-1.5 font-medium">
                        Phone (WhatsApp)
                      </label>
                      <input
                        type="text"
                        value={address.phone}
                        onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white/80 rounded-xl border border-white/80 text-[#101F17] focus:border-[#101F17] outline-none font-medium shadow-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#5E625A] mb-1.5 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={address.email}
                        onChange={(e) => setAddress({ ...address, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/80 rounded-xl border border-white/80 text-[#101F17] focus:border-[#101F17] outline-none font-medium shadow-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#5E625A] mb-1.5 font-medium">
                      Delivery Address / Flat / Villa
                    </label>
                    <input
                      type="text"
                      value={address.street}
                      onChange={(e) => setAddress({ ...address, street: e.target.value })}
                      className="w-full px-4 py-3 bg-white/80 rounded-xl border border-white/80 text-[#101F17] focus:border-[#101F17] outline-none font-medium shadow-sm transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    <div>
                      <label className="block text-[10.5px] uppercase tracking-wider text-[#5E625A] mb-1.5 font-medium">
                        City
                      </label>
                      <input
                        type="text"
                        value={address.city}
                        onChange={(e) => setAddress({ ...address, city: e.target.value })}
                        className="w-full px-3.5 py-3 bg-white/80 rounded-xl border border-white/80 text-[#101F17] focus:border-[#101F17] outline-none font-medium shadow-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10.5px] uppercase tracking-wider text-[#5E625A] mb-1.5 font-medium">
                        State
                      </label>
                      <input
                        type="text"
                        value={address.state}
                        onChange={(e) => setAddress({ ...address, state: e.target.value })}
                        className="w-full px-3.5 py-3 bg-white/80 rounded-xl border border-white/80 text-[#101F17] focus:border-[#101F17] outline-none font-medium shadow-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10.5px] uppercase tracking-wider text-[#5E625A] mb-1.5 font-medium">
                        PIN Code
                      </label>
                      <input
                        type="text"
                        value={address.pincode}
                        onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                        className="w-full px-3.5 py-3 bg-white/80 rounded-xl border border-white/80 text-[#101F17] focus:border-[#101F17] outline-none font-mono font-medium shadow-sm transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Packaging & Origin Assurance in Liquid Glass */}
                <div className="pt-2 border-t border-[#1C1E1B]/10 space-y-2 text-[11px] text-[#5E625A]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#2F5A44]" />
                    <span>Packed in plastic-free recycled Kraft paper and jute cord.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#9E5338]" />
                    <span>Dispatched directly from rural Karnataka & Satpura clusters.</span>
                  </div>
                </div>
              </div>

              {/* Continue to Payment Footer */}
              <div className="border-t border-[#1C1E1B]/10 p-6 sm:p-8 bg-transparent space-y-4 flex-shrink-0">
                <div className="flex justify-between items-center text-xs text-[#5E625A]">
                  <span>Total Amount Payable</span>
                  <span className="font-serif text-xl font-semibold text-[#101F17]">
                    ₹{totalPrice.toLocaleString("en-IN")}
                  </span>
                </div>

                <button
                  onClick={() => setStep("payment")}
                  className="w-full py-4 px-4 sm:px-8 bg-[#101F17] hover:bg-[#1A3427] text-[#FAF7F2] text-[11px] sm:text-xs uppercase font-sans tracking-[0.16em] sm:tracking-[0.22em] font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>Continue to Secure Payment</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </>
          )}

          {/* STEP 3: DUMMY SECURE PAYMENT */}
          {step === "payment" && (
            <>
              {/* Header */}
              <div className="px-6 sm:px-8 py-5 border-b border-[#1C1E1B]/10 flex items-center justify-between flex-shrink-0 bg-transparent">
                <button
                  onClick={() => setStep("address")}
                  className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] text-[#5E625A] hover:text-[#101F17] liquid-glass rounded-full px-3.5 py-1.5 border border-white/60 cursor-pointer transition-all shadow-sm"
                >
                  <ArrowLeft size={13} />
                  <span>Address</span>
                </button>
                <div className="text-center">
                  <h2 className="font-serif text-xl text-[#101F17]">Payment Method</h2>
                  <span className="text-[10px] uppercase font-mono text-[#9E5338]">Step 2 of 2</span>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 flex items-center justify-center text-[#5E625A] hover:text-[#101F17] liquid-glass hover:bg-white rounded-full transition-all border border-white/60 cursor-pointer shadow-sm"
                  aria-label="Close drawer"
                >
                  <X size={16} strokeWidth={1.5} />
                </button>
              </div>

              {/* Payment Methods */}
              <div
                className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 sm:px-8 py-6 space-y-5 no-scrollbar touch-pan-y"
                style={{
                  WebkitOverflowScrolling: "touch",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
                onWheel={(e) => e.stopPropagation()}
              >
                {/* Total Recap in Liquid Glass Dark Box */}
                <div className="p-5 liquid-glass-dark rounded-2xl border border-white/20 text-[#FAF7F2] flex items-center justify-between shadow-lg">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#A3B19E] block">
                      Total Payable
                    </span>
                    <span className="font-serif text-2xl font-bold">
                      ₹{totalPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10.5px] text-[#A3B19E]">
                    <Lock size={13} className="text-[#DF9F52]" />
                    <span>256-Bit SSL Encrypted</span>
                  </div>
                </div>

                {/* Payment Option Tabs */}
                <div className="space-y-3">
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#101F17] block">
                    Select Payment Gateway:
                  </label>

                  {/* 1. UPI */}
                  <div
                    onClick={() => setSelectedPayment("upi")}
                    className={`p-4.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      selectedPayment === "upi"
                        ? "liquid-glass border-[#101F17] shadow-md ring-1 ring-[#101F17] scale-[1.01]"
                        : "liquid-glass border-white/80 hover:border-[#101F17]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-white border border-white/80 flex items-center justify-center text-[#2F5A44] shadow-sm">
                          <QrCode size={18} />
                        </div>
                        <div>
                          <div className="font-serif text-base text-[#101F17] font-semibold">
                            UPI / Instant QR
                          </div>
                          <div className="text-[11px] text-[#5E625A]">
                            Google Pay, PhonePe, Paytm, BHIM
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#2F5A44] bg-[#DFE5DA] px-2.5 py-1 rounded-full font-semibold">
                        Instant 0% Fee
                      </span>
                    </div>

                    {selectedPayment === "upi" && (
                      <div className="mt-4 pt-4 border-t border-[#1C1E1B]/10 flex flex-col sm:flex-row items-center gap-4 text-xs">
                        {/* Dummy QR representation */}
                        <div className="w-24 h-24 bg-white/90 rounded-2xl border-2 border-dashed border-[#1C1E1B]/30 flex flex-col items-center justify-center text-center p-2 shadow-sm">
                          <QrCode size={36} className="text-[#101F17]" />
                          <span className="text-[9px] font-mono text-[#5E625A] mt-1">Scan & Pay</span>
                        </div>
                        <div className="space-y-1 text-center sm:text-left">
                          <p className="font-medium text-[#101F17]">
                            VPA: <span className="font-mono text-[#9E5338]">urva.collective@icici</span>
                          </p>
                          <p className="text-[11px] text-[#5E625A]">
                            Scan using any UPI app or click confirm to verify payment demonstration.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2. Card */}
                  <div
                    onClick={() => setSelectedPayment("card")}
                    className={`p-4.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      selectedPayment === "card"
                        ? "liquid-glass border-[#101F17] shadow-md ring-1 ring-[#101F17] scale-[1.01]"
                        : "liquid-glass border-white/80 hover:border-[#101F17]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-white border border-white/80 flex items-center justify-center text-[#101F17] shadow-sm">
                          <CreditCard size={18} />
                        </div>
                        <div>
                          <div className="font-serif text-base text-[#101F17] font-semibold">
                            Credit / Debit Card
                          </div>
                          <div className="text-[11px] text-[#5E625A]">
                            RuPay, Visa, Mastercard, Diners
                          </div>
                        </div>
                      </div>
                    </div>

                    {selectedPayment === "card" && (
                      <div className="mt-4 pt-4 border-t border-[#1C1E1B]/10 space-y-2.5 text-xs">
                        <div>
                          <label className="block text-[10px] uppercase text-[#5E625A] mb-1 font-medium">
                            Card Number
                          </label>
                          <input
                            type="text"
                            readOnly
                            value="4532 •••• •••• 8912"
                            className="w-full px-3.5 py-2.5 bg-white/80 rounded-xl border border-white/80 font-mono text-sm text-[#101F17] shadow-sm"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[10px] uppercase text-[#5E625A] mb-1 font-medium">
                              Expiry
                            </label>
                            <input
                              type="text"
                              readOnly
                              value="08 / 29"
                              className="w-full px-3.5 py-2 bg-white/80 rounded-xl border border-white/80 font-mono text-xs text-[#101F17] shadow-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] uppercase text-[#5E625A] mb-1 font-medium">
                              CVV
                            </label>
                            <input
                              type="password"
                              readOnly
                              value="•••"
                              className="w-full px-3.5 py-2 bg-white/80 rounded-xl border border-white/80 font-mono text-xs text-[#101F17] shadow-sm"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 3. COD */}
                  <div
                    onClick={() => setSelectedPayment("cod")}
                    className={`p-4.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      selectedPayment === "cod"
                        ? "liquid-glass border-[#101F17] shadow-md ring-1 ring-[#101F17] scale-[1.01]"
                        : "liquid-glass border-white/80 hover:border-[#101F17]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-white border border-white/80 flex items-center justify-center text-[#9E5338] shadow-sm">
                          <Truck size={18} />
                        </div>
                        <div>
                          <div className="font-serif text-base text-[#101F17] font-semibold">
                            Cash on Delivery
                          </div>
                          <div className="text-[11px] text-[#5E625A]">
                            Pay at your doorstep via Cash or UPI
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Seals */}
                <div className="p-4 liquid-glass rounded-2xl border border-white/80 flex items-center gap-2.5 text-xs text-[#3D403A] shadow-sm">
                  <BadgeCheck size={18} className="text-[#2F5A44] flex-shrink-0" />
                  <span>
                    100% Guaranteed Authenticity. 15% directly funds the tribal artisan welfare guild.
                  </span>
                </div>
              </div>

              {/* Confirm Payment Footer */}
              <div className="border-t border-[#1C1E1B]/10 p-6 sm:p-8 bg-transparent space-y-4 flex-shrink-0">
                <button
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                  className="w-full py-4 px-4 sm:px-8 bg-[#101F17] hover:bg-[#1A3427] text-[#FAF7F2] text-[11px] sm:text-xs uppercase font-sans tracking-[0.16em] sm:tracking-[0.22em] font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75"
                >
                  {isProcessing ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Verifying & Placing Order...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm & Pay ₹{totalPrice.toLocaleString("en-IN")}</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </div>
            </>
          )}

          {/* STEP 4: ORDER CONFIRMATION & HIGH TRUST SCREEN */}
          {step === "confirmation" && (
            <>
              {/* Header */}
              <div className="px-6 sm:px-8 py-5 border-b border-[#1C1E1B]/10 flex items-center justify-between flex-shrink-0 bg-transparent">
                <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#2F5A44] font-semibold liquid-glass rounded-full px-3.5 py-1 border border-white/60">
                  <Check size={15} />
                  <span>Order Placed Successfully</span>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 flex items-center justify-center text-[#5E625A] hover:text-[#101F17] liquid-glass hover:bg-white rounded-full transition-all border border-white/60 cursor-pointer shadow-sm"
                  aria-label="Close drawer"
                >
                  <X size={16} strokeWidth={1.5} />
                </button>
              </div>

              {/* Confirmation Content */}
              <div
                className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 sm:px-8 py-6 space-y-5 no-scrollbar touch-pan-y"
                style={{
                  WebkitOverflowScrolling: "touch",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
                onWheel={(e) => e.stopPropagation()}
              >
                {/* Visual Success Hero */}
                <div className="text-center py-4 space-y-2 border-b border-[#1C1E1B]/10">
                  <div className="w-16 h-16 bg-[#2F5A44] text-[#FAF7F2] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Check size={32} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-serif text-3xl text-[#101F17] tracking-tight">
                    Thank You, {address.name.split(" ")[0]}!
                  </h3>
                  <p className="text-xs text-[#5E625A] max-w-sm mx-auto leading-relaxed">
                    Your harvest selection has been recorded. Our rural dispatch cooperative in Shivamogga & Satpura is carefully packing your order.
                  </p>
                </div>

                {/* High Trust Order Card */}
                <div className="liquid-glass rounded-3xl p-5 sm:p-6 border border-white/80 space-y-3.5 shadow-md text-xs">
                  <div className="flex justify-between items-center pb-3 border-b border-[#1C1E1B]/10">
                    <div>
                      <span className="text-[10px] uppercase font-sans tracking-wider text-[#5E625A] block">
                        Order Reference
                      </span>
                      <span className="font-mono text-sm font-semibold text-[#101F17]">
                        #{placedOrder?.id || "URVA-82941"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#2F5A44] bg-[#DFE5DA] px-3 py-1 rounded-full font-semibold uppercase">
                      Payment Verified
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#5E625A] block">
                        Date Placed
                      </span>
                      <span className="text-[#101F17] font-medium">
                        {placedOrder?.date || "Today"}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#5E625A] block">
                        Total Paid
                      </span>
                      <span className="font-serif text-base font-bold text-[#101F17]">
                        ₹{placedOrder?.total.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#1C1E1B]/10">
                    <span className="text-[10px] uppercase tracking-wider text-[#5E625A] block">
                      Delivery Destination
                    </span>
                    <p className="text-[#101F17] font-medium mt-0.5">
                      {address.name}, {address.street}, {address.city}, {address.state} - {address.pincode}
                    </p>
                  </div>
                </div>

                {/* Dispatch & Delivery Timeline in Liquid Glass */}
                <div className="liquid-glass rounded-2xl p-5 border border-white/80 space-y-3 text-xs shadow-sm">
                  <div className="font-serif text-base text-[#101F17] font-semibold flex items-center gap-2">
                    <PackageCheck size={16} className="text-[#9E5338]" />
                    <span>Harvest Dispatch Schedule</span>
                  </div>

                  <div className="space-y-2.5 text-[11.5px] text-[#5E625A] border-l-2 border-[#2F5A44] pl-3 ml-1">
                    <div>
                      <p className="font-medium text-[#101F17]">Dispatched within 24 Hours</p>
                      <p className="text-[10.5px]">Packed directly at the tribal producer cooperative.</p>
                    </div>
                    <div>
                      <p className="font-medium text-[#101F17]">Estimated Delivery: 3–4 Days</p>
                      <p className="text-[10.5px]">Via carbon-neutral priority transit to {address.city}.</p>
                    </div>
                  </div>
                </div>

                {/* Communication Notification */}
                <div className="p-3.5 liquid-glass rounded-2xl border border-white/70 text-[11px] text-[#3D403A] flex items-center gap-2.5 shadow-sm">
                  <Sparkles size={15} className="text-[#9E5338] flex-shrink-0" />
                  <span>
                    Tracking link and invoice sent to <strong className="text-[#101F17]">{address.phone}</strong> &amp; <strong className="text-[#101F17]">{address.email}</strong>.
                  </span>
                </div>
              </div>

              {/* Confirmation Footer */}
              <div className="border-t border-[#1C1E1B]/10 p-6 sm:p-8 bg-transparent space-y-3 flex-shrink-0">
                <button
                  onClick={handleClose}
                  className="w-full py-4 px-4 sm:px-8 bg-[#101F17] hover:bg-[#1A3427] text-[#FAF7F2] text-[11px] sm:text-xs uppercase font-sans tracking-[0.16em] sm:tracking-[0.22em] font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>Continue Exploring URVA</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  onClick={() => {
                    alert(
                      `Receipt for Order #${placedOrder?.id || "URVA-82941"} downloaded to your device.`
                    );
                  }}
                  className="w-full py-3.5 px-6 liquid-glass hover:bg-white text-[#1C1E1B] border border-white/80 text-xs uppercase font-sans tracking-[0.2em] font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:scale-[1.01] active:scale-[0.99]"
                >
                  <FileText size={14} />
                  <span>Download Order Receipt (PDF)</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
