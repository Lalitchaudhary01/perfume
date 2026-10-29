"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Fragrance Consultation",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono-luxury text-xs text-champagne-dark uppercase tracking-[0.24em] font-medium block mb-3">
            Client Care · Studio Concierge
          </span>
          <h1 className="editorial-title text-espresso font-light">
            Contact the Maison
          </h1>
          <p className="font-sans-luxury text-sm sm:text-base text-[#6B5547] mt-4 font-light leading-relaxed">
            Our atelier responds personally to inquiries regarding fragrance consultations, private orders, and provenance verification.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FAF5EE] p-8 rounded-3xl border border-champagne-subtle space-y-6">
              <h3 className="font-serif-luxury text-2xl text-espresso font-medium">
                Atelier Coordinates
              </h3>

              <div className="space-y-4 font-sans-luxury text-xs text-[#6A5548]">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-champagne-dark mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-mono-luxury text-[10px] uppercase text-champagne-dark block">
                      Direct Email
                    </span>
                    <a
                      href="mailto:concierge@maisonkiyora.com"
                      className="text-espresso font-medium hover:text-champagne transition-colors"
                    >
                      concierge@maisonkiyora.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-champagne-dark mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-mono-luxury text-[10px] uppercase text-champagne-dark block">
                      Private Telephone
                    </span>
                    <span className="text-espresso font-medium">
                      +33 (0) 1 42 68 88 00
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-champagne-dark mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-mono-luxury text-[10px] uppercase text-champagne-dark block">
                      Studio Coordinates
                    </span>
                    <span className="text-espresso font-medium">
                      18 Rue de la Paix, 75002 Paris & Gion, Kyoto
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#EFE4D4] border border-champagne-subtle">
              <span className="font-mono-luxury text-xs text-champagne-dark uppercase tracking-widest block mb-1">
                Concierge Hours
              </span>
              <p className="font-sans-luxury text-xs text-espresso leading-relaxed">
                Monday to Saturday · 10:00 to 18:00 CET. Inquiries are answered within one business dawn.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#FAF5EE] p-8 sm:p-10 rounded-3xl border border-champagne-subtle shadow-md">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#E5D2B8] flex items-center justify-center mx-auto text-espresso">
                  <Check className="w-7 h-7 text-champagne-dark" />
                </div>
                <h3 className="font-serif-luxury text-3xl text-espresso">
                  Your dispatch has been received.
                </h3>
                <p className="font-sans-luxury text-xs text-[#6B5547] max-w-sm mx-auto font-light leading-relaxed">
                  A Maison Kiyora fragrance specialist will review your inquiry and reply by tomorrow&apos;s morning mail.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-luxury-secondary text-xs py-2.5 px-6 mt-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-mono-luxury text-[11px] text-champagne-dark uppercase tracking-wider block mb-2">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-champagne-subtle text-xs font-sans-luxury text-espresso focus:outline-none focus:border-champagne"
                  />
                </div>

                <div>
                  <label className="font-mono-luxury text-[11px] text-champagne-dark uppercase tracking-wider block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="eleanor@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-champagne-subtle text-xs font-sans-luxury text-espresso focus:outline-none focus:border-champagne"
                  />
                </div>

                <div>
                  <label className="font-mono-luxury text-[11px] text-champagne-dark uppercase tracking-wider block mb-2">
                    Nature of Inquiry
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-champagne-subtle text-xs font-mono-luxury text-espresso focus:outline-none"
                  >
                    <option value="Fragrance Consultation">Personal Fragrance Consultation</option>
                    <option value="Order & Shipping">Order & Tracking Inquiries</option>
                    <option value="Press & Archival">Editorial & Press</option>
                    <option value="Wholesale & Retailers">Private Salon Stockist</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono-luxury text-[11px] text-champagne-dark uppercase tracking-wider block mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please let us know how the Maison may assist your olfactory journey..."
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-champagne-subtle text-xs font-sans-luxury text-espresso focus:outline-none focus:border-champagne"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-luxury-primary text-xs py-4 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>DISPATCH MESSAGE TO CONCIERGE</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
