"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Fragrance } from "@/data/fragrances";

export interface CartItem {
  fragrance: Fragrance;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (fragrance: Fragrance, quantity?: number) => void;
  removeFromCart: (fragranceId: string) => void;
  updateQuantity: (fragranceId: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  quickViewFragrance: Fragrance | null;
  setQuickViewFragrance: (f: Fragrance | null) => void;
  isScentFinderOpen: boolean;
  setIsScentFinderOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  lastAddedName: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewFragrance, setQuickViewFragrance] = useState<Fragrance | null>(null);
  const [isScentFinderOpen, setIsScentFinderOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [lastAddedName, setLastAddedName] = useState<string | null>(null);

  // Load from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("maison_kiyora_cart");
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch {
      // Ignore
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    try {
      localStorage.setItem("maison_kiyora_cart", JSON.stringify(cart));
    } catch {
      // Ignore
    }
  }, [cart]);

  const addToCart = (fragrance: Fragrance, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.fragrance.id === fragrance.id);
      if (existing) {
        return prev.map((item) =>
          item.fragrance.id === fragrance.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { fragrance, quantity }];
    });

    setLastAddedName(fragrance.name);
    setIsCartOpen(true);

    setTimeout(() => {
      setLastAddedName(null);
    }, 3500);
  };

  const removeFromCart = (fragranceId: string) => {
    setCart((prev) => prev.filter((item) => item.fragrance.id !== fragranceId));
  };

  const updateQuantity = (fragranceId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(fragranceId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.fragrance.id === fragranceId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.fragrance.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        quickViewFragrance,
        setQuickViewFragrance,
        isScentFinderOpen,
        setIsScentFinderOpen,
        isSearchOpen,
        setIsSearchOpen,
        lastAddedName,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
