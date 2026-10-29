"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FRAGRANCES, Fragrance } from "@/data/fragrances";
import { useCart } from "@/context/CartContext";
import {
  Sparkles,
  Eye,
  ShoppingBag,
  Compass,
  ArrowUpRight,
} from "lucide-react";

export default function HeroThreeCanvas() {
  const [selectedFragrance, setSelectedFragrance] = useState<Fragrance>(FRAGRANCES[0]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { addToCart, setIsScentFinderOpen } = useCart();

  // Gentle luxury parallax tilt on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8; // -4 to 4 deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8; // -4 to 4 deg
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const isVideoMode = selectedFragrance.slug === "mandarin-melons";

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-cream pt-24 pb-16 select-none">
      {/* Warm Ambient Architectural Glow Backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[920px] h-[920px] rounded-full bg-gradient-to-b from-[#FAF4EC] via-[#EFE2D0] to-transparent opacity-90 blur-3xl" />
        <div className="absolute top-0 right-12 w-96 h-96 bg-[#FAF6F0] rounded-full filter blur-2xl opacity-75" />
        <div className="absolute inset-0 bg-[radial-gradient(#B9956B_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.04]" />
      </div>

      {/* Main Grid Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        
        {/* Left Column: Brand Statement & Editorial Typography */}
        <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full bg-[#EFE4D4] border border-champagne-subtle text-champagne-dark mb-6">
            <Sparkles className="w-3.5 h-3.5 text-champagne" />
            <span className="font-mono-luxury text-[11px] tracking-[0.24em] uppercase font-semibold">
              Slow Perfumery Art
            </span>
          </div>

          <h1 className="editorial-title text-espresso font-light mb-6">
            THE ART OF <br />
            <span className="italic font-normal">SLOW</span> PERFUMERY.
          </h1>

          <p className="font-sans-luxury text-base lg:text-lg text-[#665042] leading-relaxed mb-8 max-w-md mx-auto lg:mx-0 font-light">
            Fragrances crafted to linger. Memories made to stay. Composed with silence, patience, and 90-day cold maturation.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link
              href="#collection"
              className="btn-luxury-primary w-full sm:w-auto"
            >
              <span>DISCOVER THE COLLECTION</span>
            </Link>

            <button
              onClick={() => setIsScentFinderOpen(true)}
              className="btn-luxury-secondary w-full sm:w-auto"
            >
              <Compass className="w-4 h-4 text-champagne" />
              <span>FIND YOUR SIGNATURE</span>
            </button>
          </div>

          {/* Quick specs badge */}
          <div className="mt-10 pt-6 border-t border-champagne-subtle flex items-center justify-center lg:justify-start gap-8 font-mono-luxury text-xs text-[#7A6455]">
            <div>
              <p className="font-semibold text-espresso">7 SCENTS</p>
              <p className="text-[10px] tracking-wider text-champagne-dark">COLLECTION</p>
            </div>
            <div className="h-7 w-[1px] bg-champagne-subtle" />
            <div>
              <p className="font-semibold text-espresso">55 ML</p>
              <p className="text-[10px] tracking-wider text-champagne-dark">EAU DE PARFUM</p>
            </div>
            <div className="h-7 w-[1px] bg-champagne-subtle" />
            <div>
              <p className="font-semibold text-espresso">90 DAYS</p>
              <p className="text-[10px] tracking-wider text-champagne-dark">MACERATION</p>
            </div>
          </div>
        </div>

        {/* Center: The Seamless Flacon with Feathered Edges & Layered Typography */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-5 h-[560px] sm:h-[660px] lg:h-[740px] relative flex items-center justify-center order-1 lg:order-2"
        >
          {/* Subtle Ambient Backlight Halo */}
          <div className="absolute w-[380px] h-[520px] rounded-full bg-gradient-to-b from-[#FAF4EC] via-[#EFE2D0] to-transparent opacity-85 filter blur-3xl pointer-events-none" />

          {/* Large Watermark Typography BEHIND / ABOVE the Flacon */}
          <div className="absolute top-2 inset-x-0 flex flex-col items-center justify-center pointer-events-none z-0">
            <span className="font-serif-luxury text-6xl sm:text-7xl lg:text-[5.5rem] tracking-[0.24em] text-[#493222]/[0.08] uppercase leading-none font-light">
              KIYORA
            </span>
            <span className="font-mono-luxury text-[9px] tracking-[0.45em] text-[#B9956B]/40 uppercase mt-[-4px]">
              Slow Perfumery Art
            </span>
          </div>

          {/* Floating Luxury Annotation Markers Over the Video Atmosphere */}
          {/* Annotation 1: Floating Cap */}
          <div className="absolute top-14 left-2 sm:left-4 z-20 pointer-events-none max-w-[130px] text-left hidden sm:block">
            <span className="font-mono-luxury text-[9px] text-[#8F6E45] uppercase tracking-widest block font-semibold">
              ✦ THE CROWN
            </span>
            <p className="font-serif-luxury italic text-xs text-espresso mt-0.5">
              Fluted Obsidian Lacquer
            </p>
          </div>

          {/* Annotation 2: Solar Mist */}
          <div className="absolute top-24 right-2 sm:right-4 z-20 pointer-events-none max-w-[130px] text-right hidden sm:block">
            <span className="font-mono-luxury text-[9px] text-[#8F6E45] uppercase tracking-widest block font-semibold">
              GOLDEN MIST ✦
            </span>
            <p className="font-serif-luxury italic text-xs text-espresso mt-0.5">
              Slow Solar Atomization
            </p>
          </div>

          {/* The Flacon Container with Smooth Perspective */}
          <div
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
              transition: isHovered ? "transform 0.15s ease-out" : "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className="relative w-full max-w-[460px] h-full flex items-center justify-center z-10"
          >
            {isVideoMode ? (
              /* Frameless Seamless Video with Multi-Layered Edge Fading */
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <video
                  ref={videoRef}
                  src="/assets/gemini_generated_video_9721361e.mp4"
                  poster="/assets/hero-cinematic.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain pointer-events-none"
                />

                {/* 100% INVISIBLE EDGE VIGNETTE OVERLAYS (Melts all 4 sides & corners into #F7F0E6) */}
                {/* 1. Radial Vignette: Dissolves corners completely */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, rgba(247, 240, 230, 0.55) 62%, rgba(247, 240, 230, 0.92) 80%, #F7F0E6 96%)",
                  }}
                />

                {/* 2. Linear Edge Fades: Softens Left, Right, Top, and Bottom */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to right, #F7F0E6 0%, transparent 18%, transparent 82%, #F7F0E6 100%), linear-gradient(to bottom, #F7F0E6 0%, transparent 14%, transparent 84%, #F7F0E6 100%)",
                  }}
                />
              </div>
            ) : (
              /* Image Fallback with same seamless edge melting */
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <Image
                  src={selectedFragrance.campaignImage || selectedFragrance.image}
                  alt={`${selectedFragrance.name} by Maison Kiyora`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-contain"
                />

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, rgba(247, 240, 230, 0.55) 62%, rgba(247, 240, 230, 0.92) 80%, #F7F0E6 96%)",
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to right, #F7F0E6 0%, transparent 18%, transparent 82%, #F7F0E6 100%), linear-gradient(to bottom, #F7F0E6 0%, transparent 14%, transparent 84%, #F7F0E6 100%)",
                  }}
                />
              </div>
            )}

            {/* Overlaid Editorial Seal Across Bottom of Bottle */}
            <div className="absolute bottom-6 sm:bottom-10 inset-x-2 z-20 pointer-events-none flex items-center justify-center gap-3">
              <div className="h-[1px] w-8 sm:w-16 bg-[#B9956B]/40" />
              <span className="font-mono-luxury text-[9px] sm:text-[10px] tracking-[0.26em] text-[#8F6E45] uppercase font-semibold text-center">
                {selectedFragrance.name} · {selectedFragrance.size}
              </span>
              <div className="h-[1px] w-8 sm:w-16 bg-[#B9956B]/40" />
            </div>

            {/* Soft contact shadow on travertine ground */}
            <div className="absolute bottom-4 w-72 h-8 bg-[#493222] opacity-15 blur-2xl rounded-full pointer-events-none" />
          </div>
        </div>

        {/* Right Column: Active Fragrance Spotlight & Scent Switcher */}
        <div className="lg:col-span-3 flex flex-col justify-center order-3 text-left">
          <div className="bg-[#FAF5EE] p-6 lg:p-7 rounded-2xl border border-champagne-subtle shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono-luxury text-xs text-champagne-dark font-medium">
                {selectedFragrance.number} · {selectedFragrance.size}
              </span>
              <span className="font-serif-luxury italic text-sm text-[#7A6455]">
                {selectedFragrance.concentration}
              </span>
            </div>

            <h3 className="font-serif-luxury text-2xl lg:text-3xl font-medium text-espresso mb-2">
              {selectedFragrance.name}
            </h3>

            <p className="font-serif-luxury italic text-sm text-champagne-dark mb-4">
              &ldquo;{selectedFragrance.tagline}&rdquo;
            </p>

            <p className="font-sans-luxury text-xs text-[#5D4B3E] leading-relaxed mb-6 font-light">
              {selectedFragrance.description}
            </p>

            {/* Scent notes breakdown */}
            <div className="space-y-2 mb-6 text-xs font-mono-luxury border-t border-b border-champagne-subtle/40 py-3.5">
              <div className="flex justify-between text-[#7A6455]">
                <span>TOP NOTES:</span>
                <span className="text-espresso font-medium">{selectedFragrance.topNotes.slice(0, 2).join(", ")}</span>
              </div>
              <div className="flex justify-between text-[#7A6455]">
                <span>HEART:</span>
                <span className="text-espresso font-medium">{selectedFragrance.heartNotes.slice(0, 2).join(", ")}</span>
              </div>
              <div className="flex justify-between text-[#7A6455]">
                <span>BASE:</span>
                <span className="text-espresso font-medium">{selectedFragrance.baseNotes.slice(0, 2).join(", ")}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-5">
              <span className="font-serif-luxury text-2xl font-semibold text-espresso">
                {selectedFragrance.currency}{selectedFragrance.price}
              </span>
              <span className="font-mono-luxury text-[10px] text-champagne-dark uppercase">
                Free Kraft Case Included
              </span>
            </div>

            <div className="space-y-2.5">
              <button
                onClick={() => addToCart(selectedFragrance, 1)}
                className="w-full btn-luxury-primary text-xs py-3.5"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>ADD TO BAG · {selectedFragrance.currency}{selectedFragrance.price}</span>
              </button>

              <Link
                href={`/fragrance/${selectedFragrance.slug}`}
                className="w-full btn-luxury-secondary text-xs py-2.5 flex items-center justify-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5 text-champagne" />
                <span>EXPLORE CHAPTER</span>
              </Link>
            </div>
          </div>

          {/* Quick Switcher of 7 Fragrances */}
          <div className="mt-5">
            <p className="font-mono-luxury text-[10px] uppercase tracking-widest text-[#8F6E45] mb-2 text-center lg:text-left">
              Explore Collection:
            </p>
            <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
              {FRAGRANCES.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFragrance(f)}
                  className={`px-2.5 py-1 text-[11px] font-sans-luxury rounded-md transition-all border ${
                    selectedFragrance.id === f.id
                      ? "bg-espresso text-cream border-espresso shadow-xs"
                      : "bg-[#F3ECE1] text-[#554032] border-champagne-subtle hover:bg-beige"
                  }`}
                >
                  {f.name}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Marquee ticker of Slow Perfumery Art */}
      <div className="absolute bottom-0 left-0 right-0 py-2.5 border-t border-b border-champagne-subtle bg-[#F0E5D4] overflow-hidden whitespace-nowrap">
        <div className="ticker-track flex items-center gap-10 font-mono-luxury text-xs text-[#5D483A] tracking-[0.24em] uppercase">
          <span>Slow Perfumery Art · Fragrances Crafted to Linger</span>
          <span className="text-champagne">✦</span>
          <span>Seven Scents · 55 ml</span>
          <span className="text-champagne">✦</span>
          <span>Memories Made to Stay</span>
          <span className="text-champagne">✦</span>
          <span>Architectural Crystal Glass · Obsidian Sculpted Crown</span>
          <span className="text-champagne">✦</span>
          <span>Complimentary Kraft Travel Case With Every Order</span>
          <span className="text-champagne">✦</span>
          <span>Slow Perfumery Art · Fragrances Crafted to Linger</span>
          <span className="text-champagne">✦</span>
          <span>Seven Scents · 55 ml</span>
          <span className="text-champagne">✦</span>
          <span>Memories Made to Stay</span>
          <span className="text-champagne">✦</span>
        </div>
      </div>
    </section>
  );
}
