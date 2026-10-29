"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FRAGRANCES, Fragrance } from "@/data/fragrances";
import { useCart } from "@/context/CartContext";
import { X, Sparkles, ArrowRight, ShoppingBag, RotateCcw } from "lucide-react";

export default function ScentFinderModal() {
  const { isScentFinderOpen, setIsScentFinderOpen, addToCart } = useCart();
  const [step, setStep] = useState(1);
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [selectedProfile, setSelectedProfile] = useState<string>("");
  const [recommendedFragrance, setRecommendedFragrance] = useState<Fragrance | null>(null);

  if (!isScentFinderOpen) return null;

  const moods = [
    {
      id: "morning",
      title: "Sun-Warmed Mornings",
      desc: "Luminous, golden rays, fresh dew on fruit, and slow awakening.",
      scentSlug: "mandarin-melons",
    },
    {
      id: "forest",
      title: "Quiet Alpine Evergreen",
      desc: "Crisp pine needles, misty forest trails, stillness, and contemplation.",
      scentSlug: "yours-pine",
    },
    {
      id: "romance",
      title: "Nostalgic Twilight Memory",
      desc: "Deep cherry liqueur, intimate whispers, roasted tonka, and longing.",
      scentSlug: "cherry-you-lost",
    },
    {
      id: "autumn",
      title: "Wool, Amber & Warmth",
      desc: "Warm spiced amber, roasted chestnut, fireside ease, and cashmere.",
      scentSlug: "autumn-hugs",
    },
    {
      id: "berry-wood",
      title: "Velvet Woods & Berry",
      desc: "A soft blush of wild raspberry set against aged smoke and noble oud.",
      scentSlug: "oody-raspberry",
    },
  ];

  const profiles = [
    { id: "citrus", title: "Solar Citrus & Dew", matches: "mandarin-melons" },
    { id: "woody", title: "Pine, Cedar & Smoked Resins", matches: "yours-pine" },
    { id: "gourmand", title: "Liqueur Cherry & Tonka", matches: "cherry-you-lost" },
    { id: "amber", title: "Warm Amber & Cardamom", matches: "autumn-hugs" },
    { id: "oud", title: "Wild Berries & Cambodian Oud", matches: "oody-raspberry" },
  ];

  const handleSelectMood = (scentSlug: string) => {
    setSelectedMood(scentSlug);
    setStep(2);
  };

  const handleSelectProfile = (scentSlug: string) => {
    setSelectedProfile(scentSlug);
    // Find matching fragrance
    const match = FRAGRANCES.find((f) => f.slug === scentSlug) || FRAGRANCES[0];
    setRecommendedFragrance(match);
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedMood("");
    setSelectedProfile("");
    setRecommendedFragrance(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={() => setIsScentFinderOpen(false)}
      />

      <div className="relative z-10 w-full max-w-3xl bg-cream border border-champagne-subtle rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={() => setIsScentFinderOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-beige text-espresso transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D3] text-champagne-dark font-mono-luxury text-[10px] tracking-widest uppercase mb-3">
            <Sparkles className="w-3 h-3 text-champagne" />
            <span>Fragrance Concierge</span>
          </div>
          <h3 className="font-serif-luxury text-3xl sm:text-4xl text-espresso font-medium">
            Find Your Signature Scent
          </h3>
          <p className="font-sans-luxury text-xs text-[#7A6455] mt-2 font-light">
            A quiet ritual of personal discovery. Composed to linger on skin and in memory.
          </p>

          {/* Steps Indicator */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1.5 rounded-full transition-all duration-400 ${
                  step === s
                    ? "w-8 bg-champagne"
                    : step > s
                    ? "w-4 bg-espresso"
                    : "w-4 bg-beige"
                }`}
              />
            ))}
          </div>
        </div>

        {/* STEP 1: Choose Mood */}
        {step === 1 && (
          <div className="space-y-3">
            <p className="font-mono-luxury text-xs text-champagne-dark uppercase tracking-widest text-center mb-4">
              STEP 1: Which atmosphere calls to you?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {moods.map((m) => (
                <button
                  key={m.id}
                  onClick={() => handleSelectMood(m.scentSlug)}
                  className="p-5 rounded-2xl bg-[#FAF5EE] border border-champagne-subtle/70 hover:border-champagne hover:bg-beige text-left transition-all duration-300 group"
                >
                  <h4 className="font-serif-luxury text-xl text-espresso font-medium group-hover:text-champagne-dark mb-1">
                    {m.title}
                  </h4>
                  <p className="font-sans-luxury text-xs text-[#6F5B4E] leading-relaxed font-light">
                    {m.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Choose Olfactory Family */}
        {step === 2 && (
          <div className="space-y-3">
            <p className="font-mono-luxury text-xs text-champagne-dark uppercase tracking-widest text-center mb-4">
              STEP 2: Choose your preferred olfactory texture
            </p>
            <div className="space-y-2.5 max-w-lg mx-auto">
              {profiles.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleSelectProfile(p.matches)}
                  className="w-full p-4 rounded-xl bg-[#FAF5EE] border border-champagne-subtle hover:border-champagne hover:bg-beige text-left transition-all flex items-center justify-between group"
                >
                  <span className="font-serif-luxury text-lg text-espresso group-hover:text-champagne-dark">
                    {p.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-champagne opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Recommended Fragrance */}
        {step === 3 && recommendedFragrance && (
          <div className="bg-[#FAF5EE] p-6 sm:p-8 rounded-2xl border border-champagne-subtle animate-fade-up">
            <span className="font-mono-luxury text-[11px] text-champagne-dark uppercase tracking-widest block text-center mb-2 font-medium">
              YOUR SIGNATURE SCENT MATCH
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mt-4">
              <div
                className="sm:col-span-5 h-64 relative rounded-xl flex items-center justify-center p-2 border border-champagne-subtle"
                style={{ backgroundColor: recommendedFragrance.washColor }}
              >
                <Image
                  src={recommendedFragrance.image}
                  alt={recommendedFragrance.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="sm:col-span-7 space-y-3">
                <span className="font-mono-luxury text-xs text-[#8F6E45]">
                  {recommendedFragrance.number} · {recommendedFragrance.size}
                </span>

                <h4 className="font-serif-luxury text-3xl text-espresso font-medium">
                  {recommendedFragrance.name}
                </h4>

                <p className="font-serif-luxury italic text-sm text-champagne-dark">
                  &ldquo;{recommendedFragrance.tagline}&rdquo;
                </p>

                <p className="font-sans-luxury text-xs text-[#624F42] leading-relaxed font-light">
                  {recommendedFragrance.description}
                </p>

                <div className="pt-2 text-xs font-mono-luxury text-[#7A6455]">
                  <span className="text-espresso font-semibold">KEY NOTES: </span>
                  <span>{recommendedFragrance.topNotes[0]}, {recommendedFragrance.heartNotes[0]}, {recommendedFragrance.baseNotes[0]}</span>
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => {
                      addToCart(recommendedFragrance, 1);
                      setIsScentFinderOpen(false);
                    }}
                    className="flex-1 btn-luxury-primary text-xs py-3"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>ADD TO BAG · {recommendedFragrance.currency}{recommendedFragrance.price}</span>
                  </button>

                  <Link
                    href={`/fragrance/${recommendedFragrance.slug}`}
                    onClick={() => setIsScentFinderOpen(false)}
                    className="btn-luxury-secondary text-xs py-3 px-4"
                  >
                    Explore Chapter
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center mt-6 pt-4 border-t border-champagne-subtle/50">
              <button
                onClick={handleReset}
                className="font-mono-luxury text-[11px] text-[#7A6455] hover:text-espresso inline-flex items-center gap-1.5 uppercase tracking-wider"
              >
                <RotateCcw className="w-3 h-3 text-champagne" />
                <span>Start Discovery Again</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
