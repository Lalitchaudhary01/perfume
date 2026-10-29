"use client";

import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { FRAGRANCES } from "@/data/fragrances";
import { useCart } from "@/context/CartContext";
import { Compass, Filter, Sparkles } from "lucide-react";

export default function ShopPage() {
  const { setIsScentFinderOpen } = useCart();
  const [selectedSort, setSelectedSort] = useState<string>("featured");
  const [selectedFamily, setSelectedFamily] = useState<string>("all");

  const families = [
    { id: "all", label: "All Seven Scents" },
    { id: "citrus", label: "Solar Citrus & Dew" },
    { id: "woods", label: "Velvet Woods & Pine" },
    { id: "gourmand", label: "Cherry & Liqueur" },
    { id: "amber", label: "Warm Amber & Cashmere" },
  ];

  let filtered = FRAGRANCES.filter((f) => {
    if (selectedFamily === "all") return true;
    if (selectedFamily === "citrus") return f.olfactoryFamily.toLowerCase().includes("citrus");
    if (selectedFamily === "woods") return f.olfactoryFamily.toLowerCase().includes("wood") || f.olfactoryFamily.toLowerCase().includes("pine");
    if (selectedFamily === "gourmand") return f.name.toLowerCase().includes("cherry");
    if (selectedFamily === "amber") return f.olfactoryFamily.toLowerCase().includes("amber") || f.olfactoryFamily.toLowerCase().includes("nectar");
    return true;
  });

  if (selectedSort === "price-asc") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (selectedSort === "price-desc") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Editorial Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono-luxury text-xs text-champagne-dark uppercase tracking-[0.24em] font-medium block mb-3">
            Shop All · Seven Editions
          </span>
          <h1 className="editorial-title text-espresso font-light">
            The Complete Collection
          </h1>
          <p className="font-sans-luxury text-sm sm:text-base text-[#6B5547] mt-4 font-light leading-relaxed">
            Seven fragrances composed to linger. Memories made to stay. Housed in 55 ml architectural crystal glass with a sculpted obsidian crown.
          </p>

          <button
            onClick={() => setIsScentFinderOpen(true)}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EFE3D3] border border-champagne-subtle text-xs font-mono-luxury uppercase tracking-widest text-espresso hover:bg-beige transition-all"
          >
            <Compass className="w-3.5 h-3.5 text-champagne-dark" />
            <span>Need Guidance? Take Scent Quiz</span>
          </button>
        </div>

        {/* Filter and Sorting Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-champagne-subtle mb-10">
          <div className="flex flex-wrap items-center gap-2">
            {families.map((fam) => (
              <button
                key={fam.id}
                onClick={() => setSelectedFamily(fam.id)}
                className={`px-4 py-2 rounded-full font-mono-luxury text-xs uppercase tracking-wider transition-all duration-300 border ${
                  selectedFamily === fam.id
                    ? "bg-espresso text-cream border-espresso shadow-xs"
                    : "bg-[#FAF5EE] text-[#554032] border-champagne-subtle hover:bg-beige"
                }`}
              >
                {fam.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono-luxury text-xs text-[#7A6455]">SORT BY:</span>
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="px-3.5 py-2 rounded-lg bg-[#FAF5EE] border border-champagne-subtle text-xs font-mono-luxury text-espresso focus:outline-none"
            >
              <option value="featured">Maison Order</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((fragrance, index) => (
            <ProductCard
              key={fragrance.id}
              fragrance={fragrance}
              index={index}
            />
          ))}
        </div>

        {/* Packaging note banner */}
        <div className="mt-20 p-8 rounded-3xl bg-[#EFE4D4] border border-champagne-subtle text-center max-w-3xl mx-auto">
          <Sparkles className="w-5 h-5 text-champagne-dark mx-auto mb-2" />
          <h3 className="font-serif-luxury text-2xl text-espresso mb-2">
            Complimentary Kraft Travel Case With Every Order
          </h3>
          <p className="font-sans-luxury text-xs text-[#6B5547] leading-relaxed max-w-lg mx-auto font-light">
            Each 55 ml bottle is packaged inside an unbleached debossed kraft cylinder, complete with handwritten seal and fragrance notes booklet.
          </p>
        </div>

      </div>
    </div>
  );
}
