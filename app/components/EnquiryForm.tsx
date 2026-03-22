"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    date: "",
    venue: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be implemented later
  };

  return (
    <section id="enquire" className="relative py-28 sm:py-40 px-6 bg-noir">
      {/* Background accent image */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/Landing%20Page/Photo_s%20To%20Use/Wedding%201_%20Fatima%20%26%20Mark/DSC01662-2.jpg')",
          }}
        />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-14 sm:mb-18">
            <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans block mb-4">
              Get In Touch
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cream mb-4">
              Let&apos;s tell <span className="italic">your</span> story
            </h2>
            <p className="text-cream-dim text-base font-sans font-light max-w-md mx-auto">
              Share a few details about your day and we&apos;ll be in touch
              within 24 hours.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Names */}
            <div>
              <label className="block text-[13px] tracking-[0.2em] uppercase text-cream/70 font-sans mb-3">
                Your Names
              </label>
              <input
                type="text"
                name="names"
                value={formData.names}
                onChange={handleChange}
                placeholder="e.g. Sarah & James"
                className="w-full bg-transparent border border-cream/20 rounded-none bg-cream/[0.04] px-5 py-5 text-cream text-lg placeholder:text-cream/35 focus:border-gold/60 focus:bg-cream/[0.06] focus:outline-none transition-all duration-500 font-sans"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[13px] tracking-[0.2em] uppercase text-cream/70 font-sans mb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-transparent border border-cream/20 rounded-none bg-cream/[0.04] px-5 py-5 text-cream text-lg placeholder:text-cream/35 focus:border-gold/60 focus:bg-cream/[0.06] focus:outline-none transition-all duration-500 font-sans"
              />
            </div>

            {/* Date & Venue row */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-[13px] tracking-[0.2em] uppercase text-cream/70 font-sans mb-3">
                  Wedding Date
                </label>
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="DD / MM / YYYY"
                  className="w-full bg-transparent border border-cream/20 rounded-none bg-cream/[0.04] px-5 py-5 text-cream text-lg placeholder:text-cream/35 focus:border-gold/60 focus:bg-cream/[0.06] focus:outline-none transition-all duration-500 font-sans"
                />
              </div>
              <div>
                <label className="block text-[13px] tracking-[0.2em] uppercase text-cream/70 font-sans mb-3">
                  Venue
                </label>
                <input
                  type="text"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  placeholder="Venue name or location"
                  className="w-full bg-transparent border border-cream/20 rounded-none bg-cream/[0.04] px-5 py-5 text-cream text-lg placeholder:text-cream/35 focus:border-gold/60 focus:bg-cream/[0.06] focus:outline-none transition-all duration-500 font-sans"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[13px] tracking-[0.2em] uppercase text-cream/70 font-sans mb-3">
                Tell Us About Your Day
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Share any details you'd like us to know..."
                className="w-full bg-transparent border border-cream/20 rounded-none bg-cream/[0.04] px-5 py-5 text-cream text-lg placeholder:text-cream/35 focus:border-gold/60 focus:bg-cream/[0.06] focus:outline-none transition-all duration-500 font-sans resize-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-6 text-center">
              <button
                type="submit"
                className="inline-block text-[14px] tracking-[0.2em] uppercase bg-gold hover:bg-gold-light text-noir px-14 py-5 transition-all duration-500 font-sans font-medium"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
