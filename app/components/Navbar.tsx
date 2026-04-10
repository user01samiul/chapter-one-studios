"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useEnquiryModal } from "./EnquiryModalProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useEnquiryModal();
  const desktopLinkClass = `text-[13px] tracking-[0.2em] uppercase transition-colors duration-300 font-sans ${
    scrolled
      ? "text-foreground/65 hover:text-foreground"
      : "text-white/78 hover:text-white"
  }`;
  const mobileToggleBarClass = scrolled ? "bg-foreground" : "bg-white";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-noir/95 backdrop-blur-md shadow-[0_10px_35px_rgba(31,27,22,0.08)] border-b border-noir-lighter/70"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex items-center justify-between h-20 sm:h-24">
        {/* Logo */}
        <Link href="#" className="relative w-36 sm:w-44 h-12 flex-shrink-0">
          <Image
            src="/Landing%20Page/Logo_s/1.png"
            alt="Chapter One Studio's"
            fill
            className={`object-contain object-left transition-all duration-300 ${
              scrolled ? "invert" : ""
            }`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#work" className={desktopLinkClass}>
            Portfolio
          </Link>
          <Link href="#film" className={desktopLinkClass}>
            Film
          </Link>
          <Link href="#about" className={desktopLinkClass}>
            About
          </Link>
          <button
            onClick={open}
            className="text-[13px] tracking-[0.2em] uppercase bg-gold/90 hover:bg-gold text-foreground px-7 py-3 transition-all duration-300 font-sans"
          >
            Enquire
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 !rounded-none"
          aria-label="Menu"
        >
          <span
            className={`w-6 h-[1.5px] ${mobileToggleBarClass} transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
          />
          <span
            className={`w-6 h-[1.5px] ${mobileToggleBarClass} transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-[1.5px] ${mobileToggleBarClass} transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-noir/98 backdrop-blur-xl border-b border-noir-lighter transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          <Link
            href="#work"
            onClick={() => setMenuOpen(false)}
            className="text-[13px] tracking-[0.2em] uppercase text-foreground/65 hover:text-foreground transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="#film"
            onClick={() => setMenuOpen(false)}
            className="text-[13px] tracking-[0.2em] uppercase text-foreground/65 hover:text-foreground transition-colors"
          >
            Film
          </Link>
          <Link
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-[13px] tracking-[0.2em] uppercase text-foreground/65 hover:text-foreground transition-colors"
          >
            About
          </Link>
          <button
            onClick={() => {
              setMenuOpen(false);
              open();
            }}
            className="text-[13px] tracking-[0.2em] uppercase bg-gold/90 text-foreground px-7 py-3 text-center transition-all"
          >
            Enquire
          </button>
        </div>
      </div>
    </nav>
  );
}
