"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroThreeCanvas from "@/components/HeroThreeCanvas";
import ProductCard from "@/components/ProductCard";
import StorytellingSection from "@/components/StorytellingSection";
import PackagingRitualSection from "@/components/PackagingRitualSection";
import PhilosophySection from "@/components/PhilosophySection";
import { FRAGRANCES } from "@/data/fragrances";
import { useCart } from "@/context/CartContext";
import { Sparkles, ArrowRight, Compass, SlidersHorizontal } from "lucide-react";

export default function HomePage() {
  const { setIsScentFinderOpen } = useCart();
  const [filterFamily, setFilterFamily] = useState<string>("all");

  const families = [
    { id: "all", label: "All Seven Scents" },
    { id: "citrus", label: "Citrus & Dew" },
    { id: "wood", label: "Woods & Resins" },
    { id: "cherry", label: "Cherry & Liqueur" },
    { id: "amber", label: "Amber & Spices" },
  ];

  const filteredFragrances = FRAGRANCES.filter((f) => {
    if (filterFamily === "all") return true;
    if (filterFamily === "citrus") return f.olfactoryFamily.toLowerCase().includes("citrus");
    if (filterFamily === "wood") return f.olfactoryFamily.toLowerCase().includes("wood") || f.olfactoryFamily.toLowerCase().includes("pine");
    if (filterFamily === "cherry") return f.name.toLowerCase().includes("cherry");
    if (filterFamily === "amber") return f.olfactoryFamily.toLowerCase().includes("amber") || f.olfactoryFamily.toLowerCase().includes("nectar");
    return true;
  });

  return (
    <div className="w-full">
      {/* 1. CINEMATIC 3D HERO (Centerpiece) */}
      <HeroThreeCanvas />

      {/* 2. SIGNATURE FRAGRANCE COLLECTION */}
      <section id="collection" className="py-24 lg:py-32 bg-cream scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="font-mono-luxury text-xs text-champagne-dark uppercase tracking-[0.24em] font-medium block mb-3">
                The Collection · Seven Scents
              </span>
              <h2 className="editorial-title text-espresso font-light">
                Seven scents, <br />
                <span className="italic font-normal">one quiet language.</span>
              </h2>
              <p className="font-sans-luxury text-sm sm:text-base text-[#6B5547] max-w-lg mt-4 font-light leading-relaxed">
                Each fragrance is composed to be worn slowly and remembered longer. Discover the collection, one 55 ml bottle at a time.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {families.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilterFamily(cat.id)}
                  className={`px-4 py-2 rounded-full font-mono-luxury text-xs uppercase tracking-wider transition-all duration-300 border ${
                    filterFamily === cat.id
                      ? "bg-espresso text-cream border-espresso shadow-xs"
                      : "bg-[#FAF5EE] text-[#554032] border-champagne-subtle hover:bg-beige"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid: Real product photography cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFragrances.map((fragrance, index) => (
              <ProductCard
                key={fragrance.id}
                fragrance={fragrance}
                index={index}
              />
            ))}
          </div>

          {/* Interactive discovery prompt at bottom of grid */}
          <div className="mt-16 p-8 rounded-3xl bg-[#FAF5EE] border border-champagne-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-[#EFE3D3] flex items-center justify-center flex-shrink-0 text-champagne-dark">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif-luxury text-2xl text-espresso font-medium">
                  Unsure which scent speaks to you?
                </h4>
                <p className="font-sans-luxury text-xs text-[#7A6455] font-light mt-0.5">
                  Take our interactive three-step fragrance discovery questionnaire.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsScentFinderOpen(true)}
              className="btn-luxury-primary text-xs py-3.5 px-6 whitespace-nowrap"
            >
              <span>DISCOVERY CONCIERGE</span>
            </button>
          </div>

        </div>
      </section>

      {/* 3. SCROLL-DRIVEN PRODUCT SHOWCASE & MACRO DETAILS */}
      <section className="py-20 bg-[#FAF5EE] border-t border-b border-champagne-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono-luxury text-xs text-champagne-dark uppercase tracking-widest font-semibold">
              The Architecture of Kiyora
            </span>
            <h2 className="font-serif-luxury text-4xl lg:text-5xl text-espresso font-light leading-tight">
              Honest transparent glass. <br />
              <span className="italic font-normal">A sculpted obsidian cap.</span>
            </h2>
            <p className="font-sans-luxury text-sm text-[#665042] leading-relaxed font-light">
              We reject the industry obsession with decorative masks. Our bottle is a monolithic rectangular crystal volume, polished smooth to display the true color of cold-macerated perfume essence. Crowned by a tactile black cap inspired by water-sculpted river stone.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 font-mono-luxury text-xs text-[#7A6455]">
              <div className="border-l border-champagne pl-4">
                <p className="text-espresso font-semibold text-sm">55 ML FORMAT</p>
                <p className="text-[11px] text-champagne-dark mt-1">Single deliberate volume</p>
              </div>
              <div className="border-l border-champagne pl-4">
                <p className="text-espresso font-semibold text-sm">90-DAY INFUSION</p>
                <p className="text-[11px] text-champagne-dark mt-1">Slow artisanal extraction</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-xl border border-champagne-subtle">
            <Image
              src="/assets/cap-macro.jpg"
              alt="Sculpted black cap macro craftsmanship"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white font-mono-luxury text-[10px] uppercase tracking-widest">
              THE BLACK CROWN · SCULPTED CAP
            </div>
          </div>
        </div>
      </section>

      {/* 4. IMMERSIVE FRAGRANCE STORYTELLING */}
      <StorytellingSection />

      {/* 5. THE RITUAL OF UNBOXING (PACKAGING SHOWCASE) */}
      <section id="packaging">
        <PackagingRitualSection />
      </section>

      {/* 6. BRAND PHILOSOPHY */}
      <PhilosophySection />
    </div>
  );
}
