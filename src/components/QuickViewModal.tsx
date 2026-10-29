"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { X, ShoppingBag, Sparkles, Check, ArrowRight } from "lucide-react";

export default function QuickViewModal() {
  const { quickViewFragrance, setQuickViewFragrance, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!quickViewFragrance) return null;

  const handleAdd = () => {
    addToCart(quickViewFragrance, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setQuickViewFragrance(null);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-in">
      {/* Click outside to close */}
      <div
        className="fixed inset-0"
        onClick={() => setQuickViewFragrance(null)}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl bg-cream border border-champagne-subtle rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewFragrance(null)}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-cream/80 backdrop-blur-sm text-espresso hover:text-champagne transition-colors border border-champagne-subtle"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Visual Product Frame */}
        <div
          className="md:col-span-5 p-8 flex items-center justify-center relative min-h-[340px] md:min-h-full"
          style={{
            backgroundColor: quickViewFragrance.washColor,
          }}
        >
          <div className="relative w-full max-w-xs h-80 rounded-2xl overflow-hidden shadow-xl border border-white/60">
            <Image
              src={quickViewFragrance.campaignImage || quickViewFragrance.image}
              alt={quickViewFragrance.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-6 right-6 text-center">
            <span className="font-mono-luxury text-[10px] uppercase tracking-widest text-[#5C4533]">
              Heavy Rectangular Glass · Obsidian Sculpted Crown
            </span>
          </div>
        </div>

        {/* Right Column: Editorial Product Information */}
        <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono-luxury text-xs text-champagne-dark font-semibold">
                {quickViewFragrance.number} · {quickViewFragrance.size}
              </span>
              <span className="text-[#8C6D48] text-xs">·</span>
              <span className="font-serif-luxury italic text-xs text-[#7A6455]">
                {quickViewFragrance.concentration}
              </span>
            </div>

            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-espresso font-medium mb-1">
              {quickViewFragrance.name}
            </h3>

            <p className="font-serif-luxury italic text-base text-champagne-dark mb-4">
              &ldquo;{quickViewFragrance.tagline}&rdquo;
            </p>

            <p className="font-sans-luxury text-sm text-[#635043] leading-relaxed mb-6 font-light">
              {quickViewFragrance.description}
            </p>

            {/* Olfactory Notes Pyramid */}
            <div className="bg-[#FAF5EE] p-4 rounded-xl border border-champagne-subtle mb-6">
              <span className="font-mono-luxury text-[10px] tracking-widest uppercase text-champagne-dark block mb-2.5 font-semibold">
                Olfactory Structure
              </span>
              <div className="space-y-2 text-xs font-sans-luxury">
                <div className="flex items-start">
                  <span className="w-16 font-mono-luxury text-[11px] text-[#7A6455]">TOP:</span>
                  <span className="text-espresso font-medium">{quickViewFragrance.topNotes.join(" · ")}</span>
                </div>
                <div className="flex items-start">
                  <span className="w-16 font-mono-luxury text-[11px] text-[#7A6455]">HEART:</span>
                  <span className="text-espresso font-medium">{quickViewFragrance.heartNotes.join(" · ")}</span>
                </div>
                <div className="flex items-start">
                  <span className="w-16 font-mono-luxury text-[11px] text-[#7A6455]">BASE:</span>
                  <span className="text-espresso font-medium">{quickViewFragrance.baseNotes.join(" · ")}</span>
                </div>
              </div>
            </div>

            {/* Longevity / Ritual detail */}
            <div className="flex items-center gap-6 text-xs font-mono-luxury text-[#6E594C] mb-6">
              <div>
                <span className="text-[10px] uppercase text-champagne-dark block">SILLAGE</span>
                <span>{quickViewFragrance.sillage}</span>
              </div>
              <div className="h-6 w-[1px] bg-champagne-subtle" />
              <div>
                <span className="text-[10px] uppercase text-champagne-dark block">SEASON</span>
                <span>{quickViewFragrance.season}</span>
              </div>
            </div>
          </div>

          {/* Bottom Actions: Price, Quantity & Add to Bag */}
          <div className="pt-6 border-t border-champagne-subtle">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="font-serif-luxury text-3xl font-semibold text-espresso">
                  {quickViewFragrance.currency}{quickViewFragrance.price}
                </span>
                <span className="font-mono-luxury text-xs text-[#7A6455] ml-2">55 ml EDP</span>
              </div>

              {/* Quantity Counter */}
              <div className="flex items-center border border-champagne-subtle rounded-lg bg-cream">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-espresso hover:text-champagne font-mono-luxury"
                >
                  -
                </button>
                <span className="px-3 font-mono-luxury text-xs font-semibold text-espresso">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 text-espresso hover:text-champagne font-mono-luxury"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleAdd}
                className={`flex-1 py-3.5 px-6 rounded-xl font-sans-luxury text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-400 flex items-center justify-center gap-2 ${
                  added
                    ? "bg-emerald-700 text-white"
                    : "bg-espresso text-cream hover:bg-champagne hover:text-white"
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>ADDED TO BAG</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD TO BAG · {quickViewFragrance.currency}{quickViewFragrance.price * quantity}</span>
                  </>
                )}
              </button>

              <Link
                href={`/fragrance/${quickViewFragrance.slug}`}
                onClick={() => setQuickViewFragrance(null)}
                className="py-3.5 px-4 rounded-xl border border-espresso text-espresso hover:bg-espresso hover:text-cream transition-all flex items-center justify-center font-sans-luxury text-xs uppercase tracking-wider font-semibold"
              >
                <span>Full Story</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
