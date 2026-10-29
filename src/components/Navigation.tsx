"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import {
  ShoppingBag,
  Search,
  User,
  Menu,
  X,
  Compass,
  ArrowRight,
} from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const pathname = usePathname();
  const { totalCount, setIsCartOpen, setIsSearchOpen, setIsScentFinderOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Shop All", href: "/shop" },
    { name: "Fragrances", href: "/#collection" },
    { name: "Our Philosophy", href: "/philosophy" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#171513] text-[#F7F0E6] text-[11px] font-mono-luxury py-2 px-4 text-center tracking-[0.2em] uppercase relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden md:inline text-[#B9956B]">SLOW PERFUMERY ART</span>
          <span className="mx-auto md:mx-0">
            COMPLIMENTARY WORLDWIDE DELIVERY · EACH ORDER INCLUDES KRAFT CASE
          </span>
          <button
            onClick={() => setIsScentFinderOpen(true)}
            className="hidden md:flex items-center gap-1.5 text-[#B9956B] hover:text-[#FFFFFF] transition-colors"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>FIND YOUR SCENT</span>
          </button>
        </div>
      </div>

      {/* Main Luxury Navbar */}
      <header
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#F7F0E6]/95 backdrop-blur-md shadow-xs border-b border-champagne-subtle/40 py-2.5 sm:py-3.5"
            : "bg-[#F7F0E6]/85 backdrop-blur-sm py-3 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-1.5 sm:p-2 text-espresso hover:text-champagne transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Left Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-sans-luxury text-[13px] tracking-[0.16em] uppercase transition-colors relative py-1 ${
                    isActive
                      ? "text-espresso font-semibold"
                      : "text-[#624D3E] hover:text-espresso"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-champagne" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Center Brand Wordmark (Always crisp and single-line on mobile) */}
          <Link
            href="/"
            className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-[1.01] px-1 sm:px-2"
          >
            <span className="font-serif-luxury text-[17px] sm:text-2xl lg:text-[2rem] tracking-[0.15em] sm:tracking-[0.18em] uppercase text-espresso font-normal whitespace-nowrap leading-tight">
              MAISON KIYORA
            </span>
            <span className="font-mono-luxury text-[8px] sm:text-[9px] tracking-[0.22em] sm:tracking-[0.38em] uppercase text-champagne-dark mt-[-1px] group-hover:text-espresso transition-colors whitespace-nowrap">
              Slow Perfumery Art
            </span>
          </Link>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1.5 sm:gap-3 lg:gap-5">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 sm:p-2 text-espresso hover:text-champagne transition-colors"
              aria-label="Search collection"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Account (hidden on xs mobile to give maximum room to center logo, accessible in drawer) */}
            <button
              onClick={() => setIsAccountOpen(!isAccountOpen)}
              className="hidden sm:block p-2 text-espresso hover:text-champagne transition-colors relative"
              aria-label="Client account"
            >
              <User className="w-4 h-4" />
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="group flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-[#EFE3D3] hover:bg-beige border border-champagne-subtle transition-all"
              aria-label="View shopping bag"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-espresso group-hover:text-champagne-dark transition-colors" />
                {totalCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-espresso text-cream font-mono-luxury text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {totalCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-mono-luxury text-xs text-espresso font-medium">
                BAG {totalCount > 0 && `(${totalCount})`}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Account Popover Modal */}
      {isAccountOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-end p-6 pt-24 bg-black/20 backdrop-blur-xs">
          <div className="bg-[#FAF5EE] border border-champagne-subtle p-6 rounded-2xl w-full max-w-sm shadow-xl relative animate-fade-up">
            <button
              onClick={() => setIsAccountOpen(false)}
              className="absolute top-4 right-4 p-1 text-espresso/60 hover:text-espresso"
            >
              <X className="w-4 h-4" />
            </button>
            <span className="font-mono-luxury text-[10px] tracking-widest uppercase text-champagne-dark">
              Client Portal
            </span>
            <h4 className="font-serif-luxury text-2xl text-espresso mt-1 mb-2">
              Welcome to the Maison
            </h4>
            <p className="font-sans-luxury text-xs text-[#6A574A] mb-5 leading-relaxed">
              Access your order history, signature scent consultations, and private releases.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter client email..."
                className="w-full px-4 py-2.5 rounded-lg border border-champagne-subtle bg-cream text-espresso text-xs font-sans-luxury focus:outline-none focus:border-champagne"
              />
              <button
                onClick={() => {
                  alert("Sign in link has been sent to your email.");
                  setIsAccountOpen(false);
                }}
                className="w-full btn-luxury-primary text-xs py-2.5"
              >
                <span>SEND PRIVATE ACCESS LINK</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-cream p-7 flex flex-col justify-between shadow-2xl border-r border-champagne-subtle">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-champagne-subtle">
                <div>
                  <span className="font-serif-luxury text-xl tracking-[0.14em] uppercase text-espresso">
                    MAISON KIYORA
                  </span>
                  <p className="font-mono-luxury text-[9px] tracking-widest text-champagne-dark uppercase">
                    Slow Perfumery Art
                  </p>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-espresso hover:text-champagne"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif-luxury text-2xl text-espresso hover:text-champagne-dark transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-champagne" />
                  </Link>
                ))}

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsScentFinderOpen(true);
                  }}
                  className="text-left font-serif-luxury text-2xl text-champagne-dark hover:text-espresso transition-colors flex items-center justify-between"
                >
                  <span>Scent Discovery Quiz</span>
                  <Compass className="w-4 h-4 text-champagne" />
                </button>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsAccountOpen(true);
                  }}
                  className="text-left font-serif-luxury text-2xl text-[#624D3E] hover:text-espresso transition-colors flex items-center justify-between"
                >
                  <span>Client Account</span>
                  <User className="w-4 h-4 text-champagne" />
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-champagne-subtle text-xs font-mono-luxury text-[#7A6455]">
              <p className="uppercase tracking-widest text-[10px] text-espresso mb-1">
                Atelier & Studio
              </p>
              <p>Seven fragrances · 55 ml each</p>
              <p className="mt-2 text-[10px] text-champagne-dark">
                © 2026 MAISON KIYORA
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
