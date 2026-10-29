"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fragrance } from "@/data/fragrances";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Eye, ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  fragrance: Fragrance;
  index: number;
}

export default function ProductCard({ fragrance, index }: ProductCardProps) {
  const { addToCart, setQuickViewFragrance } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(fragrance, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1600);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewFragrance(fragrance);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="perfume-card group flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-card-subtle transition-all duration-700 relative overflow-hidden"
    >
      {/* Top Header Information */}
      <div className="flex items-start justify-between z-10">
        <div>
          <span className="font-mono-luxury text-[11px] tracking-[0.22em] text-champagne-dark uppercase font-medium">
            {fragrance.number} · {fragrance.size}
          </span>
          <p className="font-serif-luxury italic text-xs text-[#7A6658] mt-0.5">
            {fragrance.concentration}
          </p>
        </div>

        <span className="font-mono-luxury text-sm font-semibold text-espresso">
          {fragrance.currency}{fragrance.price}
        </span>
      </div>

      {/* Center Perfume Bottle Image Display */}
      <Link
        href={`/fragrance/${fragrance.slug}`}
        className="relative my-6 sm:my-8 h-72 sm:h-80 w-full flex items-center justify-center cursor-pointer select-none"
      >
        {/* Soft radial aura on hover */}
        <div
          className="absolute inset-0 rounded-full blur-2xl transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${fragrance.washColor} 0%, transparent 70%)`,
            opacity: isHovered ? 0.85 : 0.35,
          }}
        />

        {/* Real Product Photography Studio Frame */}
        <div className="relative w-full h-full flex items-center justify-center z-10 bottle-img rounded-2xl overflow-hidden shadow-sm border border-champagne-subtle/30 bg-[#FAF5EE]">
          <Image
            src={fragrance.image}
            alt={`${fragrance.name} by Maison Kiyora`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-all duration-700 group-hover:scale-105"
          />
        </div>

        {/* Quick View Button (hover reveal) */}
        <button
          onClick={handleQuickView}
          className={`absolute bottom-3 px-4 py-2 rounded-full glass-card border border-champagne-subtle text-espresso font-sans-luxury text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-md transition-all duration-500 z-20 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          aria-label={`Quick view ${fragrance.name}`}
        >
          <Eye className="w-3.5 h-3.5 text-champagne-dark" />
          <span>Quick View</span>
        </button>
      </Link>

      {/* Bottom Editorial Content */}
      <div className="z-10 pt-2 border-t border-champagne-subtle/30">
        <div className="flex items-baseline justify-between mb-1.5">
          <Link
            href={`/fragrance/${fragrance.slug}`}
            className="group/title flex items-center gap-1.5"
          >
            <h4 className="font-serif-luxury text-2xl font-medium text-espresso group-hover/title:text-champagne-dark transition-colors">
              {fragrance.name}
            </h4>
            <ArrowUpRight className="w-4 h-4 text-champagne opacity-0 -translate-x-1 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all" />
          </Link>
        </div>

        <p className="font-serif-luxury italic text-sm text-champagne-dark mb-3">
          &ldquo;{fragrance.tagline}&rdquo;
        </p>

        <p className="font-sans-luxury text-xs text-[#6B5749] line-clamp-2 leading-relaxed mb-5 font-light">
          {fragrance.description}
        </p>

        {/* Action Button: Add to Cart & Discover */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleAddToCart}
            className={`flex-1 py-3 px-4 rounded-lg font-sans-luxury text-xs tracking-[0.16em] uppercase font-semibold transition-all duration-500 flex items-center justify-center gap-2 ${
              isAdded
                ? "bg-champagne text-white"
                : "bg-espresso text-cream hover:bg-champagne hover:text-white"
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{isAdded ? "ADDED TO BAG" : "ADD TO BAG"}</span>
          </button>

          <Link
            href={`/fragrance/${fragrance.slug}`}
            className="p-3 rounded-lg border border-espresso/20 text-espresso hover:border-espresso hover:bg-espresso hover:text-cream transition-all flex items-center justify-center"
            title="Discover Fragrance Story"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Champagne Gold line animation at bottom of card */}
      <div className="gold-line absolute bottom-0 left-0 right-0 h-[2.5px] bg-champagne" />
    </div>
  );
}
