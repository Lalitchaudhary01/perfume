"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND_STORY } from "@/data/fragrances";
import { ArrowRight, Compass } from "lucide-react";

export default function PhilosophyPage() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Editorial Heading Block */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="font-mono-luxury text-xs text-champagne-dark uppercase tracking-[0.28em] font-medium block mb-4">
            Our Philosophy · The House Manifesto
          </span>
          <h1 className="editorial-title text-espresso font-light">
            Scent is an art. <br />
            <span className="italic font-normal">Memory</span> is its masterpiece.
          </h1>
          <div className="w-24 h-[1px] bg-champagne mx-auto my-8" />
          <p className="font-serif-luxury italic text-2xl text-[#6B5344] leading-relaxed">
            &ldquo;{BRAND_STORY.statement}&rdquo;
          </p>
        </div>

        {/* Feature Hero Campaign Image */}
        <div className="relative w-full h-[400px] sm:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-champagne-subtle mb-24">
          <Image
            src="/assets/mandarin-campaign.jpg"
            alt="Maison Kiyora Slow Perfumery Art"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8 sm:p-14">
            <div className="text-white max-w-xl">
              <span className="font-mono-luxury text-xs text-[#E5D2B8] uppercase tracking-widest block mb-2">
                Slow Perfumery Art
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl">
                Composed for presence, not performance.
              </h3>
            </div>
          </div>
        </div>

        {/* The 4 Architectural Pillars */}
        <div className="max-w-4xl mx-auto space-y-16 mb-24">
          {BRAND_STORY.pillars.map((p, idx) => (
            <div
              key={p.number}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-14 border-b border-champagne-subtle/60"
            >
              <div className="md:col-span-4">
                <span className="font-mono-luxury text-sm font-bold text-champagne-dark tracking-widest block mb-2">
                  PILLAR 0{idx + 1}
                </span>
                <h3 className="font-serif-luxury text-3xl text-espresso font-normal">
                  {p.title}
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="font-sans-luxury text-base text-[#614D40] leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Packaging Callout Section */}
        <div className="rounded-3xl bg-[#FAF5EE] border border-champagne-subtle p-8 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative h-80 rounded-2xl overflow-hidden">
            <Image
              src="/assets/yours-pine-kraft.jpg"
              alt="Maison Kiyora Kraft Packaging"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="font-mono-luxury text-xs text-champagne-dark uppercase tracking-widest">
              The Ritual of Unboxing
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-espresso font-normal">
              Kraft, glass, and a black crown.
            </h3>
            <p className="font-sans-luxury text-sm text-[#665042] leading-relaxed font-light">
              Every fragrance travels in its signature kraft case, stamped with the mark of the maison — opened slowly, kept long after the first spray.
            </p>
            <div className="pt-2">
              <Link href="/shop" className="btn-luxury-primary text-xs py-3.5 px-8">
                <span>EXPLORE ALL SEVEN EDITIONS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
