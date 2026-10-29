"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FRAGRANCES } from "@/data/fragrances";
import { useCart } from "@/context/CartContext";
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";

export default function StorytellingSection() {
  const { addToCart } = useCart();
  
  // Curated 4 spotlight story fragrances from prompt: Mandarin Melons, Yours Pine, Cherry You Lost, Autumn Hugs
  const storySlugs = ["mandarin-melons", "yours-pine", "cherry-you-lost", "autumn-hugs"];
  const storyFragrances = storySlugs
    .map((slug) => FRAGRANCES.find((f) => f.slug === slug)!)
    .filter(Boolean);

  const [activeIndex, setActiveIndex] = useState(0);
  const current = storyFragrances[activeIndex];

  const storyAtmospheres: Record<
    string,
    {
      palette: string;
      quote: string;
      sceneTitle: string;
      sceneDesc: string;
      notesVisual: string[];
      accentHex: string;
      bgStyle: string;
    }
  > = {
    "mandarin-melons": {
      palette: "Warm Orange, Honey Dew & Cream Limestone",
      quote: "The quiet luxury of dawn breaking across an Italian terrace.",
      sceneTitle: "Morning Solar Radiance",
      sceneDesc:
        "Sunlight streaming through tall curtains, heating the cold travertine stone. Freshly peeled mandarin rind releasing fragrant oils into crisp dawn air, gently laced with ripe melon sweetness.",
      notesVisual: ["Sun-ripened Sicilian Mandarin", "Dew-kissed Charentais Melon", "Solar Amber & Neroli"],
      accentHex: "#b05f24",
      bgStyle: "from-[#F9EFE3] to-[#F1DFC6]",
    },
    "yours-pine": {
      palette: "Muted Alpine Sage, Travertine & Whipped Iris",
      quote: "The profound silence found only deep inside an evergreen grove.",
      sceneTitle: "Architectural Forest Air",
      sceneDesc:
        "High-altitude Siberian pine needles powdered with first snow. Resinous white birch and creamy sandalwood wrapped in cold Frankincense smoke — grounding, pure, and meditative.",
      notesVisual: ["Siberian Pine Needles", "White Birch Bark", "Hojari Frankincense Resin"],
      accentHex: "#5d6f47",
      bgStyle: "from-[#F4EFE6] to-[#E5E0CE]",
    },
    "cherry-you-lost": {
      palette: "Burgundy Liqueur, Deep Cherry & Warm Velvet",
      quote: "A romance recalled not in grief, but in exquisite gratitude.",
      sceneTitle: "Nocturnal Longing & Velvet",
      sceneDesc:
        "Dark Morello cherry macerated in bitter almond liqueur, layered against velvety Turkish rose petals and roasted smoked tonka bean. An indelible memory that stays on wool scarves.",
      notesVisual: ["Dark Cherry Liqueur", "Bitter Roasted Almond", "Smoked Tonka & Ambergris"],
      accentHex: "#7c2f33",
      bgStyle: "from-[#F7ECE8] to-[#EADAD2]",
    },
    "autumn-hugs": {
      palette: "Spiced Cardamom, Amber Glow & Raw Wool",
      quote: "The tender weight of an autumn coat pulled close against twilight.",
      sceneTitle: "Cashmere, Amber & Hearth",
      sceneDesc:
        "Cracked green cardamom pods steeping into golden liquid amber. Roasted chestnuts and dry vanilla pod wrapped in pure cashmere wool as twilight settles over Paris.",
      notesVisual: ["Cracked Green Cardamom", "Golden Liquid Amber", "Roasted Chestnut & Vanilla"],
      accentHex: "#9a5f28",
      bgStyle: "from-[#F7EFE4] to-[#EEDCC4]",
    },
  };

  const currentAtmosphere = storyAtmospheres[current.slug];

  return (
    <section className="py-24 lg:py-32 bg-cream relative overflow-hidden border-t border-champagne-subtle/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono-luxury text-xs text-champagne-dark uppercase tracking-[0.24em] font-medium block mb-3">
            Fragrance Stories · Chapters in Scent
          </span>
          <h2 className="editorial-title text-espresso font-light">
            Every bottle holds a small chapter.
          </h2>
          <p className="font-sans-luxury text-sm lg:text-base text-[#6B5547] mt-4 font-light">
            Each Maison Kiyora creation is envisioned as a sensory scene — atmospheric, tactile, and slowly unhurried.
          </p>

          {/* Fragrance selector tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {storyFragrances.map((f, i) => (
              <button
                key={f.id}
                onClick={() => setActiveIndex(i)}
                className={`px-5 py-2.5 rounded-full font-serif-luxury text-base transition-all duration-400 border ${
                  activeIndex === i
                    ? "bg-espresso text-cream border-espresso shadow-md scale-105"
                    : "bg-[#FAF5EE] text-[#554032] border-champagne-subtle hover:bg-beige"
                }`}
              >
                {f.number} · {f.name}
              </button>
            ))}
          </div>
        </div>

        {/* Cinematic Story Feature Canvas */}
        <div
          className={`rounded-3xl p-8 lg:p-14 border border-champagne-subtle bg-gradient-to-br ${currentAtmosphere.bgStyle} transition-all duration-700 shadow-xl relative overflow-hidden`}
        >
          {/* Subtle architectural stone texture accent */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.6),transparent_60%)] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Product & Campaign Photography Display */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-md h-[440px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white/40 group">
                <Image
                  src={current.campaignImage || current.image}
                  alt={current.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 py-2.5 px-4 rounded-xl bg-black/40 backdrop-blur-md text-white flex items-center justify-between border border-white/20">
                  <span className="font-mono-luxury text-[10px] tracking-widest uppercase text-[#E5D2B8]">
                    {currentAtmosphere.sceneTitle}
                  </span>
                  <span className="font-mono-luxury text-[10px] tracking-widest text-white/80">
                    {current.number} · 55 ML
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-champagne" />
                  <span className="font-mono-luxury text-xs text-champagne-dark uppercase tracking-widest font-semibold">
                    {current.number} · {currentAtmosphere.palette}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-4xl lg:text-5xl text-espresso font-normal leading-tight mb-3">
                  {current.name}
                </h3>

                <p className="font-serif-luxury italic text-xl lg:text-2xl text-[#87502B] mb-6">
                  &ldquo;{currentAtmosphere.quote}&rdquo;
                </p>

                <p className="font-sans-luxury text-sm lg:text-base text-[#4E3D31] leading-relaxed mb-8 font-light">
                  {currentAtmosphere.sceneDesc}
                </p>

                {/* Scent notes breakdown */}
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/80 mb-8 space-y-3">
                  <span className="font-mono-luxury text-[11px] text-espresso uppercase tracking-widest font-semibold block">
                    Sensory Composition
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    {currentAtmosphere.notesVisual.map((note, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-[#FAF5EE]/90 border border-champagne-subtle/40">
                        <span className="font-mono-luxury text-[9px] text-champagne-dark uppercase block">
                          Phase 0{idx + 1}
                        </span>
                        <p className="font-sans-luxury text-xs text-espresso font-medium mt-0.5">
                          {note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => addToCart(current, 1)}
                  className="btn-luxury-primary w-full sm:w-auto text-xs py-3.5 px-8"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>ADD TO BAG · {current.currency}{current.price}</span>
                </button>

                <Link
                  href={`/fragrance/${current.slug}`}
                  className="btn-luxury-secondary w-full sm:w-auto text-xs py-3.5 px-6 flex items-center justify-center gap-2"
                >
                  <span>READ FULL CHAPTER</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
