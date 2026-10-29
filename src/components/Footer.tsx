"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FRAGRANCES } from "@/data/fragrances";
import { ArrowRight, Check, Compass, Mail } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#171513] text-[#FAF6F0] pt-20 pb-12 border-t border-[#332A22]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Newsletter & Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2C241E] items-start">
          <div className="lg:col-span-6 space-y-4">
            <span className="font-serif-luxury text-3xl sm:text-4xl tracking-[0.16em] uppercase text-[#F7F0E6] block">
              MAISON KIYORA
            </span>
            <p className="font-mono-luxury text-xs text-[#B9956B] tracking-[0.32em] uppercase">
              Slow Perfumery Art
            </p>
            <p className="font-serif-luxury italic text-lg text-[#D4C4B5] max-w-md pt-2">
              &ldquo;The art of slow perfumery. Fragrances crafted to linger. Memories made to stay.&rdquo;
            </p>
            <p className="font-sans-luxury text-xs text-[#9E8B7D] font-light max-w-md leading-relaxed">
              Composed without hurry, filtered after ninety days of silent resting. Housed in transparent rectangular crystal glass crowned with an obsidian sculpted cap.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6 bg-[#211E1B] p-8 rounded-2xl border border-[#3A322A]">
            <span className="font-mono-luxury text-xs text-[#B9956B] uppercase tracking-widest block mb-2 font-semibold">
              The Maison Letters
            </span>
            <h4 className="font-serif-luxury text-2xl text-[#FAF6F0] mb-2 font-normal">
              Receive private dispatch from our studio.
            </h4>
            <p className="font-sans-luxury text-xs text-[#A89688] mb-5 font-light leading-relaxed">
              Occasional letters on olfactory composition, season transitions, and limited archival reserves. Never noise.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-[#2D2620] border border-[#B9956B] text-xs font-mono-luxury text-[#B9956B] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#B9956B]" />
                <span>You have been inscribed in the Maison Letters registry.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-[#7A6B5F] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#171513] border border-[#3A322A] text-xs font-sans-luxury text-white placeholder:text-[#6F6054] focus:outline-none focus:border-[#B9956B]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#B9956B] text-[#171513] hover:bg-[#FAF6F0] text-xs font-sans-luxury font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-[#2C241E] text-xs font-sans-luxury">
          
          {/* Col 1: Collection */}
          <div>
            <h5 className="font-mono-luxury text-xs uppercase tracking-widest text-[#B9956B] mb-5 font-semibold">
              The Seven Scents
            </h5>
            <ul className="space-y-3 font-serif-luxury text-base text-[#D4C4B5]">
              {FRAGRANCES.map((f) => (
                <li key={f.id}>
                  <Link
                    href={`/fragrance/${f.slug}`}
                    className="hover:text-[#B9956B] transition-colors"
                  >
                    {f.name} <span className="font-mono-luxury text-[11px] text-[#7A685A]">({f.number})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: The House */}
          <div>
            <h5 className="font-mono-luxury text-xs uppercase tracking-widest text-[#B9956B] mb-5 font-semibold">
              The House
            </h5>
            <ul className="space-y-3 font-sans-luxury text-[#B5A496]">
              <li>
                <Link href="/philosophy" className="hover:text-white transition-colors">
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  Full Collection
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Client Concierge
                </Link>
              </li>
              <li>
                <Link href="/#packaging" className="hover:text-white transition-colors">
                  The Ritual of Unboxing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Concierge & Orders */}
          <div>
            <h5 className="font-mono-luxury text-xs uppercase tracking-widest text-[#B9956B] mb-5 font-semibold">
              Client Care
            </h5>
            <ul className="space-y-3 font-sans-luxury text-[#B5A496]">
              <li>
                <span>Complimentary Delivery</span>
              </li>
              <li>
                <span>Kraft Travel Cylinder Included</span>
              </li>
              <li>
                <span>Authentic 55 ml Bottles</span>
              </li>
              <li>
                <span>Batch & Provenance Verification</span>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Bespoke Consultations
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Atelier & Specs */}
          <div>
            <h5 className="font-mono-luxury text-xs uppercase tracking-widest text-[#B9956B] mb-5 font-semibold">
              Atelier Coordinates
            </h5>
            <div className="space-y-3 text-[#A89688]">
              <p>Maison Kiyora Slow Perfumery Art</p>
              <p className="font-mono-luxury text-[11px] text-[#B9956B]">
                Seven Fragrances · 55 ML Each
              </p>
              <p>Studio Paris & Kyoto</p>
              <p className="font-mono-luxury text-[11px]">concierge@maisonkiyora.com</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Fine Print */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono-luxury text-[#7A6B5F] gap-4">
          <p>© 2026 MAISON KIYORA · SLOW PERFUMERY ART · ALL RIGHTS RESERVED</p>
          <p className="tracking-widest text-[10px] uppercase text-[#B9956B]">
            ALL FRAGRANCES 55 ML · HAND-FINISHED OBSIDIAN CROWN
          </p>
          <div className="flex gap-6 text-[11px]">
            <Link href="/philosophy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/philosophy" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Concierge
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
