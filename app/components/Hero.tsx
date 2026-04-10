"use client";

import Link from "next/link";
import { useEnquiryModal } from "./EnquiryModalProvider";

export default function Hero() {
  const { open } = useEnquiryModal();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
        poster="/Landing%20Page/Photo_s%20To%20Use/Wedding%201_%20Fatima%20%26%20Mark/DSC01580.jpg"
      >
        <source
          src="/Landing%20Page/Video_s%20To%20Possibly%20Show/Wedding%201_%20Mark%20%26%20Fatima/MARK%20AND%20FATIMA%20REEL%204K.mp4"
          type="video/mp4"
        />
      </video>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center sm:items-start sm:justify-end h-full px-6 sm:px-12 md:px-20 pb-16 sm:pb-32 max-w-[1400px] mx-auto text-center sm:text-left">
        <div
          className="w-16 h-[1px] bg-gold/70 mb-8 mx-auto sm:mx-0"
          style={{
            animation:
              "lineExpand 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both",
            transformOrigin: "center",
          }}
        />

        <h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] tracking-tight max-w-4xl"
          style={{
            animation:
              "heroTextReveal 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.6s both",
          }}
        >
          Your love story,
          <br />
          <span className="italic text-gold">cinematic & timeless</span>
        </h1>

        <p
          className="mt-6 sm:mt-8 text-white/70 text-sm sm:text-base md:text-lg font-sans font-light max-w-lg leading-relaxed"
          style={{
            animation:
              "heroTextReveal 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.9s both",
          }}
        >
          Premium wedding photography &amp; cinematic film.
          <br className="hidden sm:block" />
          One seamless team — Sydney &amp; beyond.
        </p>

        <div
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4"
          style={{
            animation:
              "heroTextReveal 1.4s cubic-bezier(0.22, 1, 0.36, 1) 1.2s both",
          }}
        >
          <button
            onClick={open}
            className="text-[12px] sm:text-[13px] tracking-[0.2em] uppercase bg-gold hover:bg-gold-light text-foreground px-9 py-4 transition-all duration-500 font-sans font-medium"
            style={{ borderRadius: "9999px" }}
          >
            Enquire Now
          </button>
          <Link
            href="#work"
            className="text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-white/65 hover:text-white border border-white/30 hover:border-white/55 px-9 py-4 transition-all duration-500 font-sans"
            style={{ borderRadius: "9999px" }}
          >
            View Our Work
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-6 sm:right-12 md:right-20 flex flex-col items-center gap-3 z-10">
        <span
          className="text-white/40 text-[9px] tracking-[0.3em] uppercase font-sans"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full bg-gold/50"
            style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
