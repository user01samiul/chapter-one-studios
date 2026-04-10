"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import CarouselCounter from "./CarouselCounter";
import RevealOnScroll from "./RevealOnScroll";
import { FRAMES } from "../data/media";

// Curated ribbon order — mix orientations for visual rhythm
const RIBBON_ORDER = [0, 2, 3, 5, 7, 10, 6, 11, 13, 8, 15, 4, 14, 1, 12, 9];
const RIBBON = RIBBON_ORDER.map((i) => FRAMES[i]);

export default function PhotoRibbon() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: false,
    dragFree: true,
  });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const handler = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", handler);
    emblaApi.on("reInit", handler);
    return () => {
      emblaApi.off("select", handler);
      emblaApi.off("reInit", handler);
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
            <div className="flex items-center gap-5">
              <CarouselCounter current={selected + 1} total={RIBBON.length} />
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => emblaApi?.scrollPrev()}
                  aria-label="Previous frame"
                  className="w-11 h-11 border border-foreground/15 hover:border-gold text-foreground/60 hover:text-gold transition-colors duration-500 flex items-center justify-center"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => emblaApi?.scrollNext()}
                  aria-label="Next frame"
                  className="w-11 h-11 border border-foreground/15 hover:border-gold text-foreground/60 hover:text-gold transition-colors duration-500 flex items-center justify-center"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
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
            return (
              <div key={`${frame.src}-${i}`} className={`flex-shrink-0 ${width}`}>
                <div
                  className={`relative ${isPortrait ? "aspect-[4/5]" : "aspect-[3/2]"} overflow-hidden bg-noir-light group`}
                >
                  <Image
                    src={frame.src}
                    alt={frame.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 52vw, 86vw"
                    className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
