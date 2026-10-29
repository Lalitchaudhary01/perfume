"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Gift } from "lucide-react";

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, subtotal, totalCount } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [isGiftNote, setIsGiftNote] = useState(false);
  const [giftMessage, setGiftMessage] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!isCartOpen) return null;

  const discount = promoApplied ? subtotal * 0.1 : 0;
  const finalTotal = subtotal - discount;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "SLOWPERFUMERY" || promoCode.trim().toUpperCase() === "KIYORA10") {
      setPromoApplied(true);
    } else {
      alert("Please enter a valid code (e.g. KIYORA10)");
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      alert(
        `Thank you for initiating your order with Maison Kiyora!\nTotal: $${finalTotal.toFixed(
          2
        )}\nItems: ${totalCount} bottle(s).\n\n(This is a verified checkout entry point. Secure payment gateway connects here.)`
      );
      setIsCheckingOut(false);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-500"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-cream h-full flex flex-col justify-between shadow-2xl z-10 border-l border-champagne-subtle animate-slide-left">
        {/* Header */}
        <div className="p-6 border-b border-champagne-subtle flex items-center justify-between bg-[#FAF5EE]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-espresso" />
            <h3 className="font-serif-luxury text-2xl text-espresso font-medium">
              Your Bag {totalCount > 0 && `(${totalCount})`}
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-full hover:bg-beige text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping & Kraft Case Banner */}
        <div className="bg-[#EFE3D3] px-6 py-2.5 border-b border-champagne-subtle flex items-center justify-between text-[11px] font-mono-luxury text-espresso">
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-champagne-dark" />
            COMPLIMENTARY SHIPPING UNLOCKED
          </span>
          <span className="text-champagne-dark">55 ML EDP</span>
        </div>

        {/* Cart Item List / Empty State */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#EFE3D3] flex items-center justify-center mb-4">
                <ShoppingBag className="w-7 h-7 text-champagne-dark" />
              </div>
              <h4 className="font-serif-luxury text-2xl text-espresso mb-2">
                Your Bag is Empty
              </h4>
              <p className="font-sans-luxury text-xs text-[#7A6455] max-w-xs mb-6 font-light">
                Discover our signature collection of seven 55 ml fragrances composed with slow perfumery art.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-luxury-primary text-xs py-3 px-6"
              >
                <span>EXPLORE THE COLLECTION</span>
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.fragrance.id}
                className="flex gap-4 pb-6 border-b border-champagne-subtle/50 relative group"
              >
                {/* Bottle Thumbnail */}
                <div
                  className="relative w-20 h-24 rounded-xl flex items-center justify-center flex-shrink-0 p-1 border border-champagne-subtle"
                  style={{ backgroundColor: item.fragrance.washColor }}
                >
                  <Image
                    src={item.fragrance.image}
                    alt={item.fragrance.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <Link
                        href={`/fragrance/${item.fragrance.slug}`}
                        onClick={() => setIsCartOpen(false)}
                        className="font-serif-luxury text-lg font-medium text-espresso hover:text-champagne-dark transition-colors"
                      >
                        {item.fragrance.name}
                      </Link>
                      <button
                        onClick={() => removeFromCart(item.fragrance.id)}
                        className="text-espresso/40 hover:text-red-700 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="font-mono-luxury text-[10px] text-champagne-dark uppercase">
                      {item.fragrance.size} · {item.fragrance.concentration}
                    </p>
                    <p className="font-serif-luxury italic text-xs text-[#7A6658] mt-0.5">
                      Included: Kraft Travel Case & Seal
                    </p>
                  </div>

                  {/* Quantity & Price */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-champagne-subtle rounded-md bg-[#FAF5EE]">
                      <button
                        onClick={() => updateQuantity(item.fragrance.id, item.quantity - 1)}
                        className="px-2.5 py-0.5 text-xs font-mono-luxury text-espresso hover:text-champagne"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-mono-luxury font-medium text-espresso">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.fragrance.id, item.quantity + 1)}
                        className="px-2.5 py-0.5 text-xs font-mono-luxury text-espresso hover:text-champagne"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-serif-luxury text-lg font-semibold text-espresso">
                      ${(item.fragrance.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Complimentary Kraft Box Callout */}
          {cart.length > 0 && (
            <div className="bg-[#FAF5EE] p-4 rounded-xl border border-champagne-subtle flex items-start gap-3">
              <Gift className="w-4 h-4 text-champagne-dark flex-shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-mono-luxury text-[11px] font-semibold text-espresso block mb-1">
                  THE RITUAL OF UNBOXING
                </span>
                <p className="font-sans-luxury text-[11px] text-[#7A6455] leading-relaxed">
                  Each bottle is secured within an embossed unbleached kraft cylinder. Add a handwritten calligraphy note upon request.
                </p>
                <button
                  onClick={() => setIsGiftNote(!isGiftNote)}
                  className="font-mono-luxury text-[10px] text-champagne-dark underline mt-1.5 uppercase tracking-wider font-medium hover:text-espresso"
                >
                  {isGiftNote ? "Hide gift note" : "+ Add complimentary gift note"}
                </button>

                {isGiftNote && (
                  <textarea
                    rows={2}
                    value={giftMessage}
                    onChange={(e) => setGiftMessage(e.target.value)}
                    placeholder="Enter your personal gift inscription here..."
                    className="w-full mt-2 p-2 rounded border border-champagne-subtle bg-cream text-espresso text-xs font-sans-luxury focus:outline-none"
                  />
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-champagne-subtle bg-[#FAF5EE]">
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2 mb-4">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Promo Code (e.g. KIYORA10)"
                className="flex-1 px-3 py-2 rounded-lg border border-champagne-subtle bg-cream text-xs font-mono-luxury text-espresso uppercase placeholder:normal-case focus:outline-none focus:border-champagne"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-espresso text-cream text-[11px] font-sans-luxury uppercase tracking-wider rounded-lg hover:bg-champagne transition-colors font-medium"
              >
                Apply
              </button>
            </form>

            {promoApplied && (
              <div className="flex justify-between text-xs font-mono-luxury text-emerald-800 mb-2">
                <span>Maison Privilege (10% Off):</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}

            <div className="space-y-1.5 mb-4 text-xs font-mono-luxury text-[#6E594C]">
              <div className="flex justify-between">
                <span>SUBTOTAL</span>
                <span className="font-semibold text-espresso">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>WORLDWIDE SHIPPING</span>
                <span className="text-emerald-700 font-semibold">COMPLIMENTARY</span>
              </div>
              <div className="flex justify-between">
                <span>ESTIMATED TAX</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="pt-2 border-t border-champagne-subtle flex justify-between text-base font-serif-luxury font-semibold text-espresso">
                <span>TOTAL</span>
                <span>${finalTotal.toFixed(2)} USD</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full btn-luxury-primary text-xs py-4 flex items-center justify-center gap-2"
            >
              <span>{isCheckingOut ? "PREPARING CHECKOUT..." : "PROCEED TO CHECKOUT"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="font-mono-luxury text-[9px] text-center text-[#8C6D48] uppercase tracking-widest mt-3">
              Encrypted 256-Bit SSL Checkout · Handled with Care
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
