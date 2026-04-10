"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect } from "react";
import { FRAMES } from "../data/media";
import RevealOnScroll from "./RevealOnScroll";

// Curated ribbon order — mix orientations for visual rhythm
const RIBBON_ORDER = [0, 2, 3, 5, 7, 10, 6, 11, 13, 8, 15, 4, 14, 1, 12, 9];
const RIBBON = RIBBON_ORDER.map((i) => FRAMES[i]);
const CAMERA_DAY = "04.10.26";

function getTimeCode(index: number) {
  const hour = 13 + (index % 7);
  const minute = (7 + index * 9) % 60;
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

export default function PhotoRibbon() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: false,
    dragFree: true,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const intervalId = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 3600);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <RevealOnScroll>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 mb-10 sm:mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-gold text-[11px] tracking-[0.35em] uppercase font-sans block mb-3">
                Scroll the reel
              </span>
              <h3 className="font-serif text-foreground text-3xl sm:text-4xl md:text-5xl leading-tight max-w-xl">
                <span className="italic">Frames</span> we keep coming back to.
              </h3>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Previous frame"
                className="w-11 h-11 border border-foreground/15 hover:border-gold text-foreground/60 hover:text-gold transition-colors duration-500 flex items-center justify-center"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M15 18l-6-6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Next frame"
                className="w-11 h-11 border border-foreground/15 hover:border-gold text-foreground/60 hover:text-gold transition-colors duration-500 flex items-center justify-center"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M9 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <div className="overflow-hidden embla-grab" ref={emblaRef}>
        <div className="flex gap-4 sm:gap-6 pl-6 sm:pl-10 pr-6 sm:pr-10">
          {RIBBON.map((frame, i) => {
            const isPortrait = frame.orientation === "portrait";
            const width = isPortrait
              ? "w-[70vw] sm:w-[38vw] md:w-[26vw] lg:w-[20vw]"
              : "w-[86vw] sm:w-[52vw] md:w-[38vw] lg:w-[30vw]";
            const timeCode = getTimeCode(i);
            return (
              <div key={`${frame.src}-${i}`} className={`shrink-0 ${width}`}>
                <div className="group bg-[#f5efe4] p-2 pb-3 border border-black/15 shadow-[0_14px_30px_rgba(0,0,0,0.24)]">
                  <div
                    className={`relative ${isPortrait ? "aspect-4/5" : "aspect-3/2"} overflow-hidden bg-noir-light`}
                  >
                    <Image
                      src={frame.src}
                      alt={frame.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 52vw, 86vw"
                      className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute left-2 top-2 bg-noir/72 text-cream text-[9px] leading-none tracking-[0.14em] px-2 py-1 font-mono">
                      {CAMERA_DAY} {timeCode}
                    </div>
                  </div>
                  <p className="pt-2 px-0.5 text-[10px] sm:text-[11px] text-noir/75 uppercase tracking-[0.16em] font-sans truncate">
                    {frame.alt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Previous frame"
          className="w-11 h-11 border border-foreground/15 hover:border-gold text-foreground/60 hover:text-gold transition-colors duration-500 flex items-center justify-center"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M15 18l-6-6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Next frame"
          className="w-11 h-11 border border-foreground/15 hover:border-gold text-foreground/60 hover:text-gold transition-colors duration-500 flex items-center justify-center"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M9 6l6 6-6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
