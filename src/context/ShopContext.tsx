"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface ProductItem {
  id: string;
  name: string;
  category: "Honey" | "Sustainable Tableware" | "Natural Products";
  subtitle: string;
  price: number;
  unit: string;
  description: string;
  image: string;
  gsm?: string;
  size?: string;
  origin: string;
  harvestMethod: string;
  compostTime?: string;
  benefits?: string[];
  inStock: boolean;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
  selectedSize?: string;
}

interface ShopContextType {
  cart: CartItem[];
  addToCart: (
    product: ProductItem,
    size?: string,
    openDrawer?: boolean,
    quantity?: number
  ) => void;
  removeFromCart: (productId: string, size?: string) => void;
  updateQuantity: (productId: string, quantity: number, size?: string) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  quickViewProduct: ProductItem | null;
  setQuickViewProduct: (product: ProductItem | null) => void;
  totalItems: number;
  totalPrice: number;
  plasticPlatesOffset: number;
  isAudioPlaying: boolean;
  toggleAudio: () => void;
  clearCart: () => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Audio synthesis for tranquil nature ambient drone
  useEffect(() => {
    let audioCtx: AudioContext | null = null;
    let osc1: OscillatorNode | null = null;
    let osc2: OscillatorNode | null = null;
    let gainNode: GainNode | null = null;

    if (isAudioPlaying) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtx = new AudioContextClass();
        
        // Gentle warm drone (55Hz and 110Hz gentle harmonic tone like forest wind)
        osc1 = audioCtx.createOscillator();
        osc2 = audioCtx.createOscillator();
        gainNode = audioCtx.createGain();

        osc1.type = "sine";
        osc1.frequency.setValueAtTime(108, audioCtx.currentTime); // Sacred natural harmonic

        osc2.type = "sine";
        osc2.frequency.setValueAtTime(216, audioCtx.currentTime);

        gainNode.gain.setValueAtTime(0.015, audioCtx.currentTime); // very subtle background

        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        osc1.start();
        osc2.start();
      } catch {
        // AudioContext not permitted or supported
      }
    }

    return () => {
      if (osc1) osc1.stop();
      if (osc2) osc2.stop();
      if (audioCtx && audioCtx.state !== "closed") audioCtx.close();
    };
  }, [isAudioPlaying]);

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  const addToCart = (
    product: ProductItem,
    size?: string,
    openDrawer: boolean = false,
    quantity: number = 1
  ) => {
    const qtyToAdd = Math.max(1, quantity || 1);
    const itemSize = size || product.size;
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.selectedSize === itemSize
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.selectedSize === itemSize
            ? { ...item, quantity: item.quantity + qtyToAdd }
            : item
        );
      }
      return [...prev, { product, quantity: qtyToAdd, selectedSize: itemSize }];
    });
    if (openDrawer) {
      setIsCartOpen(true);
    }
  };

  const removeFromCart = (productId: string, size?: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && (!size || item.selectedSize === size))
      )
    );
  };

  const updateQuantity = (productId: string, quantity: number, size?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && (!size || item.selectedSize === size)
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // Each tableware item pack saves 25 single-use plastic plates
  const plasticPlatesOffset = cart.reduce((sum, item) => {
    if (item.product.category === "Sustainable Tableware") {
      return sum + item.quantity * 25;
    }
    return sum + item.quantity * 5;
  }, 0);

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        isCartOpen,
        setIsCartOpen,
        quickViewProduct,
        setQuickViewProduct,
        totalItems,
        totalPrice,
        plasticPlatesOffset,
        isAudioPlaying,
        toggleAudio,
        clearCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
}
