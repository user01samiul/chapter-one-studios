"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";
import { useEnquiryModal } from "./EnquiryModalProvider";

export default function AvailabilityCTA() {
  const { open } = useEnquiryModal();

  return (
    <section className="relative py-28 sm:py-36 px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/Landing%20Page/Photo_s%20To%20Use/Wedding%201_%20Fatima%20%26%20Mark/DSC01662-2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-noir/80" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <RevealOnScroll>
          <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans block mb-4">
            Limited Availability
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.15] mb-6">
            Now booking for <span className="italic text-gold">2025 &amp; 2026</span>
          </h2>
          <p className="text-cream/50 text-base sm:text-lg font-sans font-light max-w-lg mx-auto mb-10">
            We take on a limited number of weddings each season to give every
            couple the attention they deserve. Secure your date before it&apos;s gone.
          </p>
          <button
            onClick={open}
            className="inline-block text-[13px] tracking-[0.2em] uppercase bg-gold hover:bg-gold-light text-noir px-10 py-4 transition-all duration-500 font-sans font-medium"
          >
            Check Availability
          </button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
