"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FRAGRANCES, getFragranceBySlug } from "@/data/fragrances";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import {
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Box,
  Crown,
  Clock,
  ArrowLeft,
  Check,
} from "lucide-react";

export default function FragranceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const fragrance = getFragranceBySlug(slug);

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [activeImgTab, setActiveImgTab] = useState<"bottle" | "campaign" | "kraft">("bottle");

  if (!fragrance) {
    return notFound();
  }

  const handleAddToCart = () => {
    addToCart(fragrance, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  // Other recommendations
  const relatedFragrances = FRAGRANCES.filter((f) => f.id !== fragrance.id).slice(0, 3);

  return (
    <div className="pt-28 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-2 font-mono-luxury text-xs text-[#7A6455]">
          <Link href="/shop" className="hover:text-espresso flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>COLLECTION</span>
          </Link>
          <span>/</span>
          <span className="text-espresso font-semibold uppercase">{fragrance.name}</span>
        </div>

        {/* Main Product Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div
              className="relative w-full h-[480px] sm:h-[580px] rounded-3xl flex items-center justify-center p-8 border border-champagne-subtle shadow-xl overflow-hidden transition-all duration-700"
              style={{ backgroundColor: fragrance.washColor }}
            >
              {activeImgTab === "bottle" && (
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={fragrance.image}
                    alt={fragrance.name}
                    fill
                    priority
                    className="object-cover rounded-2xl"
                  />
                </div>
              )}

              {activeImgTab === "campaign" && (
                <div className="relative w-full h-full">
                  <Image
                    src={fragrance.campaignImage || fragrance.image}
                    alt={`${fragrance.name} campaign`}
                    fill
                    priority
                    className="object-cover rounded-2xl"
                  />
                </div>
              )}

              {activeImgTab === "kraft" && (
                <div className="relative w-full h-full">
                  <Image
                    src={fragrance.kraftImage || "/assets/yours-pine-kraft.jpg"}
                    alt={`${fragrance.name} packaging`}
                    fill
                    priority
                    className="object-cover rounded-2xl"
                  />
                </div>
              )}

              {/* Watermark badge */}
              <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md text-espresso font-mono-luxury text-[10px] uppercase tracking-widest border border-white/60">
                {fragrance.number} · {fragrance.size}
              </div>
            </div>

            {/* Thumbnail switcher */}
            <div className="flex gap-3">
              <button
                onClick={() => setActiveImgTab("bottle")}
                className={`flex-1 py-3 px-2 rounded-xl text-xs font-mono-luxury uppercase tracking-wider border transition-all ${
                  activeImgTab === "bottle"
                    ? "bg-espresso text-cream border-espresso"
                    : "bg-[#FAF5EE] text-[#695648] border-champagne-subtle hover:bg-beige"
                }`}
              >
                The 55 ml Bottle
              </button>
              <button
                onClick={() => setActiveImgTab("campaign")}
                className={`flex-1 py-3 px-2 rounded-xl text-xs font-mono-luxury uppercase tracking-wider border transition-all ${
                  activeImgTab === "campaign"
                    ? "bg-espresso text-cream border-espresso"
                    : "bg-[#FAF5EE] text-[#695648] border-champagne-subtle hover:bg-beige"
                }`}
              >
                Campaign Story
              </button>
              <button
                onClick={() => setActiveImgTab("kraft")}
                className={`flex-1 py-3 px-2 rounded-xl text-xs font-mono-luxury uppercase tracking-wider border transition-all ${
                  activeImgTab === "kraft"
                    ? "bg-espresso text-cream border-espresso"
                    : "bg-[#FAF5EE] text-[#695648] border-champagne-subtle hover:bg-beige"
                }`}
              >
                Kraft Travel Case
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Product Information & Purchase */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono-luxury text-xs text-champagne-dark">
                <span>{fragrance.number}</span>
                <span>·</span>
                <span className="uppercase">{fragrance.olfactoryFamily}</span>
              </div>

              <h1 className="editorial-title text-espresso font-normal mb-3">
                {fragrance.name}
              </h1>

              <p className="font-serif-luxury italic text-xl lg:text-2xl text-champagne-dark mb-6">
                &ldquo;{fragrance.tagline}&rdquo;
              </p>

              <div className="flex items-baseline gap-3 pb-6 border-b border-champagne-subtle">
                <span className="font-serif-luxury text-4xl font-semibold text-espresso">
                  {fragrance.currency}{fragrance.price}
                </span>
                <span className="font-mono-luxury text-xs text-[#7A6455] uppercase tracking-wider">
                  55 ML · Eau de Parfum · In Stock
                </span>
              </div>

              <p className="font-sans-luxury text-sm sm:text-base text-[#5C483B] leading-relaxed my-6 font-light">
                {fragrance.description}
              </p>

              {/* Olfactory Structure Pyramid */}
              <div className="bg-[#FAF5EE] p-6 rounded-2xl border border-champagne-subtle space-y-4 mb-8">
                <span className="font-mono-luxury text-[11px] text-champagne-dark uppercase tracking-widest font-semibold block">
                  Olfactory Notes Architecture
                </span>
                <div className="space-y-3 font-sans-luxury text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-baseline">
                    <span className="font-mono-luxury text-xs text-[#7A6455] w-28 uppercase">
                      Top Opening:
                    </span>
                    <span className="text-espresso font-medium">
                      {fragrance.topNotes.join(" · ")}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline">
                    <span className="font-mono-luxury text-xs text-[#7A6455] w-28 uppercase">
                      Heart Accord:
                    </span>
                    <span className="text-espresso font-medium">
                      {fragrance.heartNotes.join(" · ")}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline">
                    <span className="font-mono-luxury text-xs text-[#7A6455] w-28 uppercase">
                      Base Memory:
                    </span>
                    <span className="text-espresso font-medium">
                      {fragrance.baseNotes.join(" · ")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Specifications row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-8 border-b border-champagne-subtle text-xs font-mono-luxury text-[#6B5547]">
                <div>
                  <span className="text-[10px] uppercase text-champagne-dark block">PERSISTENCE</span>
                  <span className="font-medium text-espresso">{fragrance.sillage}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-champagne-dark block">SEASON</span>
                  <span className="font-medium text-espresso">{fragrance.season}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-champagne-dark block">VOLUME</span>
                  <span className="font-medium text-espresso">55 ml / 1.86 fl. oz.</span>
                </div>
              </div>
            </div>

            {/* Actions: Quantity Selector & Add to Bag */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4">
                {/* Quantity */}
                <div className="flex items-center border border-champagne-subtle rounded-xl bg-[#FAF5EE] px-2 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-espresso hover:text-champagne font-mono-luxury text-sm"
                  >
                    -
                  </button>
                  <span className="px-4 font-mono-luxury text-sm font-semibold text-espresso">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-espresso hover:text-champagne font-mono-luxury text-sm"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag Button */}
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-4 px-8 rounded-xl font-sans-luxury text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-400 flex items-center justify-center gap-2 ${
                    isAdded
                      ? "bg-emerald-700 text-white"
                      : "bg-espresso text-cream hover:bg-champagne hover:text-white"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>ADDED TO YOUR BAG</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>ADD TO BAG · {fragrance.currency}{fragrance.price * quantity}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono-luxury text-[#7A6455]">
                <div className="flex items-center gap-2">
                  <Box className="w-4 h-4 text-champagne-dark" />
                  <span>Complimentary Kraft Case Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4 text-champagne-dark" />
                  <span>Obsidian Sculpted Cap Fitted</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* You May Also Discover */}
        <div className="mt-32 pt-16 border-t border-champagne-subtle">
          <div className="text-center mb-12">
            <span className="font-mono-luxury text-xs text-champagne-dark uppercase tracking-widest block mb-2">
              Scent Pairings
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-espresso font-normal">
              Complementary Chapters
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedFragrances.map((f, idx) => (
              <ProductCard key={f.id} fragrance={f} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
