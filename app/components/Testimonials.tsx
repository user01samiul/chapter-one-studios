"use client";

import { useCallback, useEffect, useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

const testimonials = [
  {
    quote:
      "From the first meeting, we knew Chapter One was different. They didn't just capture our wedding — they made us feel like the only two people in the room. The film still gives us chills.",
    names: "Fatima & Mark",
  },
  {
    quote:
      "We never had to worry about a single thing on the day. They moved like ghosts — present everywhere, visible nowhere. The photos are timeless.",
    names: "Saed & Nour",
  },
  {
    quote:
      "The way they captured our day was beyond anything we imagined. Every frame tells a story. We've watched our film a hundred times and it still makes us cry.",
    names: "Saja & Ahmed",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setTimeout(() => setIsTransitioning(false), 600);
      }, 500);
    },
    [isTransitioning],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [current, goTo]);

  return (
    <section className="relative py-28 sm:py-40 px-6 bg-noir-light overflow-hidden">
      {/* Decorative quote mark */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 text-gold/[0.06] font-serif text-[200px] sm:text-[300px] leading-none select-none pointer-events-none">
        &ldquo;
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans block mb-4">
              Kind Words
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream">
              From Our Couples
            </h2>
          </div>
        </RevealOnScroll>

        {/* Carousel */}
        <div className="relative min-h-[280px] sm:min-h-[240px] flex items-center justify-center">
          {/* Left arrow */}
          <button
            onClick={() =>
              goTo((current - 1 + testimonials.length) % testimonials.length)
            }
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:translate-x-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-foreground/15 hover:border-gold/50 text-foreground/45 hover:text-gold transition-all duration-300 z-10"
            style={{ borderRadius: "9999px" }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={() => goTo((current + 1) % testimonials.length)}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-foreground/15 hover:border-gold/50 text-foreground/45 hover:text-gold transition-all duration-300 z-10"
            style={{ borderRadius: "9999px" }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          <blockquote
            className={`text-center transition-all duration-500 ease-in-out ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground/90 leading-relaxed italic px-12 sm:px-16">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
            <footer className="mt-8">
              <div className="w-8 h-[1px] bg-gold/50 mx-auto mb-5" />
              <cite className="not-italic text-gold text-[12px] tracking-[0.3em] uppercase font-sans">
                {testimonials[current].names}
              </cite>
            </footer>
          </blockquote>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Testimonial ${i + 1}`}
              className="relative w-8 h-[2px] bg-foreground/15 overflow-hidden transition-all duration-300"
            >
              <span
                className={`absolute inset-0 bg-gold transition-transform duration-[6000ms] ease-linear origin-left ${
                  i === current && !isTransitioning
                    ? "scale-x-100"
                    : "scale-x-0"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
