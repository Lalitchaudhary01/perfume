"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND_STORY } from "@/data/fragrances";
import { ArrowRight, Compass } from "lucide-react";

export default function PhilosophySection() {
  return (
    <section className="py-24 lg:py-36 bg-cream relative overflow-hidden">
      {/* Background radial warmth */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#EFE3D3] rounded-full filter blur-3xl opacity-50 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Editorial Title Block */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <span className="font-mono-luxury text-xs text-champagne-dark uppercase tracking-[0.24em] font-semibold block mb-4">
            Our Philosophy · The House of Kiyora
          </span>
          <h2 className="editorial-title text-espresso font-light">
            Scent is an art. <br />
            <span className="italic font-normal">Memory</span> is its masterpiece.
          </h2>
          <div className="w-24 h-[1.5px] bg-champagne mt-6 mb-6" />
          <p className="font-serif-luxury text-xl lg:text-2xl text-[#6B5344] leading-relaxed italic font-normal">
            &ldquo;Maison Kiyora composes fragrance the way a letter is written — without hurry, with intention. We believe a scent should not announce itself; it should stay, quietly, in the rooms and seasons of a life.&rdquo;
          </p>
        </div>

        {/* 4 Brand Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {BRAND_STORY.pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-8 rounded-2xl bg-[#FAF5EE] border border-champagne-subtle hover:bg-beige transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <span className="font-mono-luxury text-xs text-champagne-dark font-bold tracking-widest block mb-4">
                  PILLAR {pillar.number}
                </span>
                <h3 className="font-serif-luxury text-2xl text-espresso font-medium mb-3 group-hover:text-champagne-dark transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-sans-luxury text-xs sm:text-[13px] text-[#695649] leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
              <div className="w-8 h-[1px] bg-champagne-subtle mt-6 group-hover:w-full group-hover:bg-champagne transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Editorial Campaign Banner */}
        <div className="rounded-3xl bg-[#FAF5EE] border border-champagne-subtle p-8 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono-luxury text-xs text-champagne-dark uppercase tracking-widest">
              Slow Perfumery Art
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-espresso font-normal leading-tight">
              A perfume is never finished until it meets your skin.
            </h3>
            <p className="font-sans-luxury text-sm text-[#665042] leading-relaxed font-light max-w-xl">
              Each 55 ml Eau de Parfum is formulated to interact with the natural warmth and chemistry of your pulse points, revealing individual nuance over eight to twelve continuous hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/philosophy" className="btn-luxury-primary text-xs py-3.5 px-8">
                <span>READ OUR ESSAY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/shop" className="btn-luxury-secondary text-xs py-3.5 px-6">
                <span>EXPLORE ALL 7 SCENTS</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-champagne-subtle">
            <Image
              src="/assets/mandarin-campaign.jpg"
              alt="Maison Kiyora Slow Perfumery Art Campaign"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
