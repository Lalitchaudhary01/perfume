"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FRAGRANCES } from "@/data/fragrances";
import { useCart } from "@/context/CartContext";
import { X, Search, ArrowRight } from "lucide-react";

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen } = useCart();
  const [query, setQuery] = useState("");

  if (!isSearchOpen) return null;

  const filtered = query.trim() === ""
    ? FRAGRANCES.slice(0, 4)
    : FRAGRANCES.filter((f) =>
        f.name.toLowerCase().includes(query.toLowerCase()) ||
        f.tagline.toLowerCase().includes(query.toLowerCase()) ||
        f.olfactoryFamily.toLowerCase().includes(query.toLowerCase()) ||
        f.topNotes.some((n) => n.toLowerCase().includes(query.toLowerCase())) ||
        f.heartNotes.some((n) => n.toLowerCase().includes(query.toLowerCase())) ||
        f.baseNotes.some((n) => n.toLowerCase().includes(query.toLowerCase()))
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-20 sm:pt-28 bg-black/60 backdrop-blur-md animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="relative z-10 w-full max-w-2xl bg-cream border border-champagne-subtle rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-champagne-subtle mb-6">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-5 h-5 text-champagne-dark" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by fragrance name, notes (e.g. mandarin, oud, pine), or mood..."
              className="w-full bg-transparent text-espresso placeholder:text-[#998373] text-sm sm:text-base font-sans-luxury focus:outline-none"
            />
          </div>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 rounded-full hover:bg-beige text-espresso transition-colors ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div>
          <span className="font-mono-luxury text-[10px] text-champagne-dark uppercase tracking-widest block mb-4">
            {query.trim() === "" ? "Signature Fragrances" : `Found ${filtered.length} Results`}
          </span>

          <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
            {filtered.length === 0 ? (
              <p className="font-sans-luxury text-sm text-[#7A6455] py-8 text-center">
                No fragrances found matching &ldquo;{query}&rdquo;.
              </p>
            ) : (
              filtered.map((f) => (
                <Link
                  key={f.id}
                  href={`/fragrance/${f.slug}`}
                  onClick={() => setIsSearchOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF5EE] hover:bg-beige border border-champagne-subtle/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="relative w-14 h-16 rounded-xl flex items-center justify-center p-1 border border-champagne-subtle flex-shrink-0"
                      style={{ backgroundColor: f.washColor }}
                    >
                      <Image
                        src={f.image}
                        alt={f.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono-luxury text-[10px] text-champagne-dark font-medium">
                          {f.number}
                        </span>
                        <h4 className="font-serif-luxury text-lg text-espresso font-medium group-hover:text-champagne-dark">
                          {f.name}
                        </h4>
                      </div>
                      <p className="font-serif-luxury italic text-xs text-[#8A7363]">
                        {f.tagline}
                      </p>
                      <p className="font-mono-luxury text-[10px] text-[#A68F7E] mt-0.5">
                        {f.size} · {f.currency}{f.price}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-champagne opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
