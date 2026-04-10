"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  meta: string;
};

type MobileContactSheetSliderProps = {
  slides: Slide[];
  intervalMs?: number;
};

export default function MobileContactSheetSlider({
  slides,
  intervalMs = 3200,
}: MobileContactSheetSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");

    const handleChange = () => {
      const matches = mediaQuery.matches;
      setIsMobile(matches);

      if (!matches) {
        setActiveIndex(0);
      }
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!isMobile || slides.length <= 1) {
      return;
    }

    const timerId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);

    return () => {
      window.clearInterval(timerId);
    };
  }, [isMobile, slides.length, intervalMs]);

  if (slides.length === 0) {
    return null;
  }

  return (
    <div className="sm:hidden">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={`${slide.src}-${index}`} className="min-w-full px-1">
              <div className="bg-[#f4efe4] p-2 pb-4 border border-black/15 shadow-[0_14px_30px_rgba(0,0,0,0.24)]">
                <div className="relative aspect-4/5 overflow-hidden bg-noir-light">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <div className="pt-3 px-1 text-[10px] uppercase tracking-[0.18em] text-noir/75 font-sans">
                  {slide.meta}
                </div>
              </div>
            </div>
          ))}
        </div>

        {slides.length > 1 ? (
          <>
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-noir/65 text-cream border border-gold/30 flex items-center justify-center"
            >
              &lsaquo;
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-noir/65 text-cream border border-gold/30 flex items-center justify-center"
            >
              &rsaquo;
            </button>
          </>
        ) : null}
      </div>

      {slides.length > 1 ? (
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={`${slide.meta}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-6 bg-gold" : "w-2 bg-gold/35"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
