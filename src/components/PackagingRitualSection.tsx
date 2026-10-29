"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Box, Crown, ShieldCheck } from "lucide-react";

export default function PackagingRitualSection() {
  const [activeTab, setActiveTab] = useState<"kraft" | "cap">("kraft");

  const craftDetails = [
    {
      icon: Box,
      title: "Unbleached Kraft Cylinder",
      desc: "Constructed from 100% recycled unbleached kraft board, offering complete thermal and UV protection for the macerated perfume oils within.",
    },
    {
      icon: Crown,
      title: "The Sculpted Obsidian Crown",
      desc: "Cast in dense obsidian black with tactile, undulating organic curves inspired by smoothed river stone, fitting into the hand like a talisman.",
    },
    {
      icon: ShieldCheck,
      title: "High-Clarity Architectural Glass",
      desc: "Substantial crystal glass with polished rectangular chamfers, designed to refract warm morning sun and stand gracefully for years on your vanity.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#EFE4D4] border-t border-b border-champagne-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono-luxury text-xs text-champagne-dark uppercase tracking-[0.24em] font-medium block mb-3">
            The Ritual of Unboxing
          </span>
          <h2 className="editorial-title text-espresso font-light">
            Kraft, glass, and a black crown.
          </h2>
          <p className="font-sans-luxury text-sm lg:text-base text-[#675244] mt-4 font-light leading-relaxed">
            Every fragrance travels in its signature kraft case, stamped with the mark of the maison — opened slowly, kept long after the first spray.
          </p>

          {/* Toggle between Kraft Box and Macro Cap */}
          <div className="inline-flex p-1.5 rounded-full bg-[#E5D5C2] border border-champagne-subtle mt-8">
            <button
              onClick={() => setActiveTab("kraft")}
              className={`px-5 py-2 rounded-full font-mono-luxury text-xs tracking-wider uppercase transition-all ${
                activeTab === "kraft"
                  ? "bg-espresso text-cream shadow-sm"
                  : "text-[#5A4535] hover:text-espresso"
              }`}
            >
              Kraft Travel Case
            </button>
            <button
              onClick={() => setActiveTab("cap")}
              className={`px-5 py-2 rounded-full font-mono-luxury text-xs tracking-wider uppercase transition-all ${
                activeTab === "cap"
                  ? "bg-espresso text-cream shadow-sm"
                  : "text-[#5A4535] hover:text-espresso"
              }`}
            >
              The Sculpted Cap Macro
            </button>
          </div>
        </div>

        {/* Feature Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Visual Showcase Frame */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full h-[450px] sm:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-cream group">
              {activeTab === "kraft" ? (
                <Image
                  src="/assets/yours-pine-kraft.jpg"
                  alt="Maison Kiyora authentic Kraft cylinder packaging and perfume bottle"
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              ) : (
                <Image
                  src="/assets/cap-macro.jpg"
                  alt="Maison Kiyora macro detail of sculpted black cap and bottle shoulder"
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              )}

              {/* Editorial Tag Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/55 backdrop-blur-md text-white border border-white/20 flex items-center justify-between">
                <div>
                  <p className="font-mono-luxury text-[10px] tracking-widest text-[#D4B692] uppercase">
                    {activeTab === "kraft" ? "AUTHENTIC CASE PACKAGING" : "MACRO CRAFTSMANSHIP"}
                  </p>
                  <p className="font-serif-luxury text-lg text-cream">
                    {activeTab === "kraft"
                      ? "Debossed Kraft Paper Cylinder · Protects From Heat & Light"
                      : "Hand-Finished Obsidian Gloss · Organic Asymmetric Facets"}
                  </p>
                </div>
                <span className="font-mono-luxury text-xs text-[#D4B692]">55 ML</span>
              </div>
            </div>
          </div>

          {/* Right Narrative & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#FAF5EE] p-8 rounded-3xl border border-champagne-subtle shadow-sm">
              <span className="font-mono-luxury text-xs text-champagne-dark uppercase tracking-widest block mb-2 font-medium">
                Understated Materiality
              </span>
              <h3 className="font-serif-luxury text-3xl text-espresso font-normal mb-4">
                Designed to be held before it is ever sprayed.
              </h3>
              <p className="font-sans-luxury text-xs sm:text-sm text-[#665042] leading-relaxed font-light mb-6">
                In a world of excessive cellophane and throwaway plastic, Maison Kiyora relies on the tactile warmth of heavy unbleached kraft board, weighted crystal glass, and a solid sculpted crown.
              </p>

              {/* Craft Details Cards */}
              <div className="space-y-4 pt-2 border-t border-champagne-subtle/40">
                {craftDetails.map((detail, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-xl bg-[#EFE3D3] flex items-center justify-center flex-shrink-0 text-champagne-dark mt-0.5">
                      <detail.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif-luxury text-lg text-espresso font-medium">
                        {detail.title}
                      </h4>
                      <p className="font-sans-luxury text-xs text-[#735F52] leading-relaxed mt-0.5 font-light">
                        {detail.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note badge */}
            <div className="p-4 rounded-2xl bg-[#E5D5C2]/60 border border-champagne-subtle flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-champagne-dark flex-shrink-0" />
              <p className="font-mono-luxury text-xs text-espresso">
                Each shipment is hand-inspected, packed with silk tissue, and sealed with our studio stamp.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
