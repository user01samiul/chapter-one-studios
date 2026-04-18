"use client";

import Image from "next/image";
import { useEnquiryModal } from "./EnquiryModalProvider";
import RevealOnScroll from "./RevealOnScroll";

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
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <RevealOnScroll>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15] mb-6">
            Limited Availability
            <br />
            Now booking for{" "}
            <span className="italic text-gold">2026 &amp; 2027</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg font-sans font-light max-w-lg mx-auto mb-10">
            We take on a limited number of weddings each season to give every
            couple the attention they deserve. Secure your date before it&apos;s
            gone.
          </p>
          <button
            onClick={open}
            className="inline-block text-[13px] tracking-[0.2em] uppercase bg-gold hover:bg-gold-light text-foreground px-10 py-4 transition-all duration-500 font-sans font-medium"
          >
            Check Availability
          </button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
