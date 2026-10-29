"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FRAGRANCES, Fragrance } from "@/data/fragrances";
import { useCart } from "@/context/CartContext";
import {
  Sparkles,
  Eye,
  ShoppingBag,
  ArrowRight,
  Flower2,
  Calendar,
} from "lucide-react";

export default function HeroThreeCanvas() {
  const [selectedFragrance, setSelectedFragrance] = useState<Fragrance>(FRAGRANCES[0]);
  const [isSpraying, setIsSpraying] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const mistCanvasRef = useRef<HTMLCanvasElement>(null);

  const { addToCart, setIsScentFinderOpen } = useCart();

  // Interactive Atomizer Spray burst
  const handleSpray = () => {
    setIsSpraying(true);
    if (desktopVideoRef.current) {
      desktopVideoRef.current.currentTime = 0;
      desktopVideoRef.current.play();
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.currentTime = 0;
      mobileVideoRef.current.play();
    }
    setTimeout(() => setIsSpraying(false), 1200);
  };

  // Live Golden Mist Particle Overlay Canvas (Desktop)
  useEffect(() => {
    const canvas = mistCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      maxAlpha: number;
    }> = [];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: width / 2 + (Math.random() - 0.5) * 160,
        y: height * 0.28 + Math.random() * 180,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -0.35 - Math.random() * 0.65,
        size: 1 + Math.random() * 2,
        alpha: Math.random() * 0.7,
        maxAlpha: 0.35 + Math.random() * 0.45,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx + Math.sin(Date.now() * 0.0018 + p.y) * 0.25;
        p.y += p.vy;
        p.alpha -= 0.0025;

        if (p.alpha <= 0 || p.y < 30) {
          p.x = width / 2 + (Math.random() - 0.5) * 110;
          p.y = height * 0.42 + Math.random() * 40;
          p.alpha = p.maxAlpha;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(225, 178, 105, ${Math.max(0, p.alpha)})`;
        ctx.shadowColor = "#B9956B";
        ctx.shadowBlur = 6;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const isVideoMode = selectedFragrance.slug === "mandarin-melons";

  return (
    <section className="relative w-full overflow-hidden bg-[#F7F0E6] select-none">
      
      {/* =================================================================== */}
      {/* 1. MOBILE HERO COMPOSITION (< lg) - Matches mobile reference image  */}
      {/* =================================================================== */}
      <div className="lg:hidden w-full flex flex-col pt-20">
        
        {/* Mobile Main Hero Screen: Video background with bottle on right, text on left */}
        <div 
          onClick={handleSpray}
          className="relative w-full min-h-[580px] sm:min-h-[660px] overflow-hidden flex flex-col justify-between pt-6 pb-6 px-5 cursor-pointer"
        >
          {/* Animated Video Background: 9:16 Vertical Video with bottle positioned on right */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
            {isVideoMode ? (
              <video
                ref={mobileVideoRef}
                src="/assets/gemini_generated_video_17c93e10.mp4"
                poster="/assets/mobile-hero-poster.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-[72%_center] pointer-events-none"
              />
            ) : (
              <Image
                src={selectedFragrance.campaignImage || selectedFragrance.image}
                alt={`${selectedFragrance.name} by Maison Kiyora`}
                fill
                priority
                sizes="100vw"
                className="object-cover object-[72%_center]"
              />
            )}

            {/* Soft Left Wash for Crisp Typography Contrast */}
            <div className="absolute inset-y-0 left-0 w-[72%] bg-gradient-to-r from-[#FAF5EE]/95 via-[#FAF5EE]/55 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#FAF5EE] to-transparent pointer-events-none" />
          </div>

          {/* Mobile Left Content Area */}
          <div className="relative z-10 max-w-[215px] sm:max-w-[245px] text-left pt-2">
            
            {/* Vertical Bar Eyebrow: SLOW / PERFUMERY / ART */}
            <div className="flex items-start gap-2 mb-4">
              <div className="w-[1.5px] h-9 bg-[#8F6E45] mt-0.5" />
              <div className="font-mono-luxury text-[9px] tracking-[0.22em] uppercase text-[#7A5832] font-semibold leading-[1.32]">
                SLOW<br />
                PERFUMERY<br />
                ART
              </div>
            </div>

            {/* Mobile Headline: THE ART / OF SLOW / PERFUMERY. */}
            <h1 className="font-serif-luxury text-[2.2rem] sm:text-[2.65rem] leading-[1.05] text-[#2E241D] font-normal tracking-[-0.02em] mb-3">
              THE ART <br />
              OF <span className="italic font-normal">SLOW</span> <br />
              PERFUMERY.
            </h1>

            {/* Mobile Brand Description */}
            <p className="font-sans-luxury text-[12px] sm:text-[13px] text-[#554032] leading-[1.5] mb-5 font-light">
              Fragrances crafted to linger. Memories made to stay. Composed with silence, patience, and 90-day cold maturation.
            </p>

            {/* Two Stacked CTA Buttons */}
            <div className="flex flex-col gap-2.5">
              <Link
                href="#collection"
                className="flex items-center justify-between px-3.5 py-2.5 bg-[#342820] hover:bg-[#201813] text-[#FAF5EE] rounded-[2px] transition-all duration-300 shadow-sm w-full"
              >
                <span className="font-mono-luxury text-[10px] tracking-[0.14em] uppercase font-medium">
                  DISCOVER THE COLLECTION
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </Link>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsScentFinderOpen(true);
                }}
                className="flex items-center justify-between px-3.5 py-2.5 bg-[#FAF5EE]/95 hover:bg-[#F2E7D8] text-[#2E241D] border border-[#C5A880]/60 rounded-[2px] transition-all duration-300 shadow-xs w-full cursor-pointer"
              >
                <span className="font-mono-luxury text-[10px] tracking-[0.14em] uppercase font-medium">
                  FIND YOUR SIGNATURE SCENT
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#8F6E45]" />
              </button>
            </div>

          </div>
        </div>

        {/* Mobile 3-Column Statistics Section (Matching Reference Image) */}
        <div className="relative z-10 border-t border-[#C5A880]/25 bg-[#FAF5EE] pt-5 pb-6 px-3">
          <div className="grid grid-cols-3 gap-1 text-center">
            
            {/* Stat 1: 7 SCENTS COLLECTION */}
            <div className="flex flex-col items-center justify-center">
              <Flower2 className="w-5 h-5 text-[#8F6E45] stroke-[1.2] mb-1.5" />
              <span className="font-serif-luxury text-lg font-medium text-[#2E241D] leading-tight">7</span>
              <span className="font-mono-luxury text-[10px] tracking-wider text-[#2E241D] font-bold uppercase mt-0.5">
                SCENTS
              </span>
              <span className="font-mono-luxury text-[8px] tracking-widest text-[#8F6E45] uppercase mt-0.5">
                COLLECTION
              </span>
            </div>

            {/* Stat 2: 55 ML EAU DE PARFUM */}
            <div className="flex flex-col items-center justify-center border-l border-r border-[#C5A880]/30 px-1">
              <svg className="w-5 h-5 text-[#8F6E45] mb-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="8" width="12" height="14" rx="2" />
                <path d="M10 8V5h4v3" />
                <circle cx="12" cy="15" r="2.5" />
              </svg>
              <span className="font-serif-luxury text-lg font-medium text-[#2E241D] leading-tight">55 ML</span>
              <span className="font-mono-luxury text-[8px] tracking-widest text-[#8F6E45] uppercase mt-1">
                EAU DE PARFUM
              </span>
            </div>

            {/* Stat 3: 90 DAYS MACERATION */}
            <div className="flex flex-col items-center justify-center">
              <Calendar className="w-5 h-5 text-[#8F6E45] stroke-[1.2] mb-1.5" />
              <span className="font-serif-luxury text-lg font-medium text-[#2E241D] leading-tight">90 DAYS</span>
              <span className="font-mono-luxury text-[8px] tracking-widest text-[#8F6E45] uppercase mt-1">
                MACERATION
              </span>
            </div>

          </div>
        </div>

        {/* Mobile Product Details Panel */}
        <div className="px-5 py-6 bg-[#FAF5EE] border-t border-[#DECDBB]/40">
          <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#DECDBB] shadow-xs">
            <div className="flex items-center justify-between mb-2 text-xs">
              <span className="font-mono-luxury text-[#7A604D] tracking-wider font-medium">
                {selectedFragrance.number} · {selectedFragrance.size}
              </span>
              <span className="font-serif-luxury italic text-[#8F735E]">
                {selectedFragrance.concentration}
              </span>
            </div>

            <h3 className="font-serif-luxury text-2xl font-medium text-[#2E241D] mb-1">
              {selectedFragrance.name}
            </h3>

            <p className="font-serif-luxury italic text-xs text-[#8F6E45] mb-3">
              &ldquo;{selectedFragrance.tagline}&rdquo;
            </p>

            <div className="flex items-baseline justify-between mb-4 pt-2 border-t border-[#DECDBB]/40">
              <span className="font-serif-luxury text-2xl font-medium text-[#2E241D]">
                {selectedFragrance.currency}{selectedFragrance.price}
              </span>
              <span className="font-mono-luxury text-[10px] text-[#8F6E45] uppercase tracking-wider">
                FREE KRAFT CASE INCLUDED
              </span>
            </div>

            <button
              onClick={() => addToCart(selectedFragrance, 1)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-[2px] bg-[#342820] text-[#FAF5EE] font-mono-luxury text-xs uppercase tracking-wider font-medium cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>ADD TO BAG · {selectedFragrance.currency}{selectedFragrance.price}</span>
            </button>
          </div>
        </div>

      </div>

      {/* =================================================================== */}
      {/* 2. DESKTOP HERO COMPOSITION (lg:) - 3-Column Luxury Layout          */}
      {/* =================================================================== */}
      <div className="hidden lg:flex relative min-h-screen w-full items-center justify-center pt-28 pb-16">
        
        {/* Full-Bleed 16:9 Video Canvas Background (Desktop) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          {isVideoMode ? (
            <div className="relative w-full h-full">
              <video
                ref={desktopVideoRef}
                src="/assets/gemini_generated_video_2a376ff7.mp4"
                poster="/assets/hero-poster-16x9.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center pointer-events-none"
              />
            </div>
          ) : (
            <div className="relative w-full h-full bg-[#FAF5EE]">
              <Image
                src={selectedFragrance.campaignImage || selectedFragrance.image}
                alt={`${selectedFragrance.name} by Maison Kiyora`}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          )}

          {/* Subtle Ambient Edges */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F0E6]/30 via-transparent to-[#F7F0E6]/20 pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#F7F0E6]/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#F7F0E6]/50 to-transparent pointer-events-none" />
        </div>

        {/* 3-Column Desktop Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-12 gap-6 xl:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Typography & Dual-Line CTAs */}
          <div className="col-span-4 flex flex-col justify-center text-left z-20">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#FAF5EE]/90 backdrop-blur-xs border border-[#C5A880]/50 text-[#7A5832] mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B9956B]" />
              <span className="font-mono-luxury text-[11px] tracking-[0.24em] uppercase font-semibold">
                Slow Perfumery Art
              </span>
            </div>

            <h1 className="font-serif-luxury text-[2.65rem] xl:text-[3.25rem] leading-[1.08] text-[#2E241D] font-normal tracking-[-0.01em] mb-6">
              THE ART OF <br />
              <span className="italic font-normal">SLOW</span> <br />
              PERFUMERY.
            </h1>

            <p className="font-sans-luxury text-[15px] text-[#5A4537] leading-relaxed mb-8 max-w-md font-light">
              Fragrances crafted to linger. Memories made to stay. Composed with silence, patience, and 90-day cold maturation.
            </p>

            <div className="flex items-center gap-3.5 justify-start">
              <Link
                href="#collection"
                className="group flex items-center justify-between gap-4 px-6 py-3.5 bg-[#342820] hover:bg-[#201813] text-[#FAF5EE] rounded-[3px] transition-all duration-300 shadow-sm hover:shadow-md min-w-[210px]"
              >
                <div className="flex flex-col text-left">
                  <span className="font-mono-luxury text-[9px] tracking-[0.22em] text-[#C5A880] uppercase">
                    DISCOVER
                  </span>
                  <span className="font-sans-luxury text-xs tracking-[0.16em] uppercase font-medium">
                    THE COLLECTION
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C5A880] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <button
                onClick={() => setIsScentFinderOpen(true)}
                className="group flex items-center justify-between gap-4 px-6 py-3.5 bg-[#FAF5EE]/95 hover:bg-[#F2E7D8] text-[#2E241D] border border-[#C5A880]/60 rounded-[3px] transition-all duration-300 shadow-xs hover:shadow-sm min-w-[210px] cursor-pointer"
              >
                <div className="flex flex-col text-left">
                  <span className="font-mono-luxury text-[9px] tracking-[0.22em] text-[#8F6E45] uppercase">
                    FIND YOUR
                  </span>
                  <span className="font-sans-luxury text-xs tracking-[0.16em] uppercase font-medium">
                    SIGNATURE SCENT
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8F6E45] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            <div className="mt-10 pt-6 border-t border-[#C5A880]/30 flex items-center justify-start gap-7 font-mono-luxury text-xs">
              <div>
                <p className="font-serif-luxury text-2xl font-medium text-[#2E241D]">7</p>
                <p className="text-[10px] tracking-[0.2em] text-[#8F6E45] uppercase mt-0.5">COLLECTION</p>
              </div>
              <div className="h-8 w-[1px] bg-[#C5A880]/35" />
              <div>
                <p className="font-serif-luxury text-2xl font-medium text-[#2E241D]">55 ML</p>
                <p className="text-[10px] tracking-[0.2em] text-[#8F6E45] uppercase mt-0.5">EAU DE PARFUM</p>
              </div>
              <div className="h-8 w-[1px] bg-[#C5A880]/35" />
              <div>
                <p className="font-serif-luxury text-2xl font-medium text-[#2E241D]">90 DAYS</p>
                <p className="text-[10px] tracking-[0.2em] text-[#8F6E45] uppercase mt-0.5">MACERATION</p>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Central Perfume Visual Area */}
          <div
            ref={containerRef}
            onClick={handleSpray}
            className="col-span-4 h-[640px] xl:h-[720px] relative flex items-center justify-center cursor-pointer z-10"
          >
            <canvas
              ref={mistCanvasRef}
              className="absolute inset-0 w-full h-full pointer-events-none z-15"
            />
          </div>

          {/* RIGHT COLUMN: Fragrance Information Card */}
          <div className="col-span-4 flex flex-col justify-center text-left z-20">
            <div className="bg-[#FAF6F0]/95 backdrop-blur-md p-6 lg:p-7 xl:p-8 rounded-3xl border border-[#DECDBB] shadow-[0_16px_45px_rgba(46,36,29,0.08)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(46,36,29,0.12)]">
              <div className="flex items-center justify-between mb-2.5 text-xs">
                <span className="font-mono-luxury text-[#7A604D] tracking-wider font-medium">
                  {selectedFragrance.number} · {selectedFragrance.size}
                </span>
                <span className="font-serif-luxury italic text-[#8F735E] text-sm">
                  {selectedFragrance.concentration}
                </span>
              </div>

              <h3 className="font-serif-luxury text-2xl lg:text-[1.85rem] font-medium text-[#2E241D] mb-1 leading-snug">
                {selectedFragrance.name}
              </h3>

              <p className="font-serif-luxury italic text-xs lg:text-[13px] text-[#8F6E45] mb-3">
                &ldquo;{selectedFragrance.tagline}&rdquo;
              </p>

              <p className="font-sans-luxury text-xs text-[#5D493B] leading-relaxed mb-5 font-light">
                {selectedFragrance.description}
              </p>

              <div className="space-y-2.5 mb-6 text-xs border-t border-b border-[#DECDBB]/60 py-4">
                <div className="grid grid-cols-12 gap-2 text-[11px]">
                  <span className="col-span-4 font-mono-luxury text-[#7A604D] uppercase tracking-wider font-medium">
                    TOP NOTES:
                  </span>
                  <span className="col-span-8 font-sans-luxury text-[#2E241D] font-normal">
                    {selectedFragrance.topNotes.slice(0, 2).join(", ")}
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-2 text-[11px]">
                  <span className="col-span-4 font-mono-luxury text-[#7A604D] uppercase tracking-wider font-medium">
                    HEART:
                  </span>
                  <span className="col-span-8 font-sans-luxury text-[#2E241D] font-normal">
                    {selectedFragrance.heartNotes.slice(0, 2).join(", ")}
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-2 text-[11px]">
                  <span className="col-span-4 font-mono-luxury text-[#7A604D] uppercase tracking-wider font-medium">
                    BASE:
                  </span>
                  <span className="col-span-8 font-sans-luxury text-[#2E241D] font-normal">
                    {selectedFragrance.baseNotes.slice(0, 2).join(", ")}
                  </span>
                </div>
              </div>

              <div className="flex items-baseline justify-between mb-5">
                <span className="font-serif-luxury text-3xl font-medium text-[#2E241D]">
                  {selectedFragrance.currency}{selectedFragrance.price}
                </span>
                <span className="font-mono-luxury text-[10px] text-[#8F6E45] uppercase tracking-wider">
                  FREE KRAFT CASE INCLUDED
                </span>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={() => addToCart(selectedFragrance, 1)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-[3px] bg-[#342820] hover:bg-[#201813] text-[#FAF5EE] font-mono-luxury text-xs uppercase tracking-wider font-medium transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>ADD TO BAG · {selectedFragrance.currency}{selectedFragrance.price}</span>
                </button>

                <Link
                  href={`/fragrance/${selectedFragrance.slug}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-[3px] bg-[#FAF6F0] hover:bg-[#F2E7D8] text-[#2E241D] border border-[#DECDBB] font-mono-luxury text-xs uppercase tracking-wider font-medium transition-all duration-300"
                >
                  <Eye className="w-3.5 h-3.5 text-[#8F6E45]" />
                  <span>EXPLORE CHAPTER</span>
                </Link>
              </div>
            </div>

            {/* Quick Switcher */}
            <div className="mt-4">
              <p className="font-mono-luxury text-[10px] uppercase tracking-widest text-[#8F6E45] mb-2 text-left">
                Explore Collection:
              </p>
              <div className="flex flex-wrap gap-1.5 justify-start">
                {FRAGRANCES.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFragrance(f)}
                    className={`px-2.5 py-1 text-[11px] font-sans-luxury rounded-[3px] transition-all border cursor-pointer ${
                      selectedFragrance.id === f.id
                        ? "bg-[#342820] text-[#FAF5EE] border-[#342820] shadow-xs font-medium"
                        : "bg-[#FAF5EE]/80 text-[#554032] border-[#DECDBB] hover:bg-[#F2E7D8]"
                    }`}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Marquee Ticker */}
      <div className="relative w-full py-2.5 border-t border-b border-[#C5A880]/30 bg-[#F0E5D4]/80 backdrop-blur-xs overflow-hidden whitespace-nowrap">
        <div className="ticker-track flex items-center gap-10 font-mono-luxury text-xs text-[#5D483A] tracking-[0.24em] uppercase">
          <span>Slow Perfumery Art · Fragrances Crafted to Linger</span>
          <span className="text-[#B9956B]">✦</span>
          <span>Seven Scents · 55 ml</span>
          <span className="text-[#B9956B]">✦</span>
          <span>Memories Made to Stay</span>
          <span className="text-[#B9956B]">✦</span>
          <span>Architectural Crystal Glass · Obsidian Sculpted Crown</span>
          <span className="text-[#B9956B]">✦</span>
          <span>Complimentary Kraft Travel Case With Every Order</span>
          <span className="text-[#B9956B]">✦</span>
          <span>Slow Perfumery Art · Fragrances Crafted to Linger</span>
          <span className="text-[#B9956B]">✦</span>
          <span>Seven Scents · 55 ml</span>
          <span className="text-[#B9956B]">✦</span>
          <span>Memories Made to Stay</span>
          <span className="text-[#B9956B]">✦</span>
        </div>
      </div>

    </section>
  );
}
