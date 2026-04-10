"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CarouselCounter from "./CarouselCounter";
import RevealOnScroll from "./RevealOnScroll";
import { FRAMES } from "../data/media";

const MAIN_POOL = [0, 3, 10, 11, 13, 4, 7, 12];
const ACCENT_TOP = [2, 5, 15, 8];
const ACCENT_BOTTOM = [6, 9, 14, 1];

const MAIN = MAIN_POOL.map((i) => FRAMES[i]);
const TOP = ACCENT_TOP.map((i) => FRAMES[i]);
const BOTTOM = ACCENT_BOTTOM.map((i) => FRAMES[i]);

function useTick(length: number, interval: number, offset = 0) {
  const [idx, setIdx] = useState(offset % length);
  useEffect(() => {
    const id = setInterval(() => setIdx((n) => (n + 1) % length), interval);
    return () => clearInterval(id);
  }, [length, interval]);
  return idx;
}

function AccentTile({
  pool,
  interval,
  offset,
  sizes,
}: {
  pool: typeof TOP;
  interval: number;
  offset: number;
  sizes: string;
}) {
  const active = useTick(pool.length, interval, offset);
  return (
    <div className="relative w-full h-full overflow-hidden bg-noir-light">
      {pool.map((frame, i) => (
        <div
          key={frame.src}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-out"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <Image
            src={frame.src}
            alt={frame.alt}
            fill
            sizes={sizes}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function StoryOverture() {
  const active = useTick(MAIN.length, 4800, 0);

  return (
    <section className="relative bg-background py-20 sm:py-32 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* ── Image cluster (8 cols on desktop) ─────────────────── */}
          <div className="lg:col-span-8 relative order-2 lg:order-1">
            <div className="grid grid-cols-12 gap-3 sm:gap-5">
              {/* Big main cross-fade — 8 cols */}
              <div className="col-span-12 sm:col-span-8 relative">
                <div className="relative aspect-[4/5] sm:aspect-[5/6] overflow-hidden bg-noir-light">
                  {MAIN.map((frame, i) => (
                    <div
                      key={frame.src}
                      className="absolute inset-0 transition-opacity duration-[1600ms] ease-out"
                      style={{ opacity: i === active ? 1 : 0 }}
                    >
                      <Image
                        src={frame.src}
                        alt={frame.alt}
                        fill
                        priority={i === 0}
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        className={i === active ? "object-cover ken-burns" : "object-cover"}
                      />
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
                    <CarouselCounter current={active + 1} total={MAIN.length} variant="dark" />
                  </div>
                  <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 z-10 flex items-center gap-3 text-white/80">
                    <div className="w-8 h-[1px] bg-white/60" />
                    <span className="font-serif italic text-sm sm:text-base">
                      {MAIN[active].alt.toLowerCase()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Two stacked accent tiles — 4 cols */}
              <div className="col-span-12 sm:col-span-4 flex flex-row sm:flex-col gap-3 sm:gap-5">
                <div className="flex-1 relative aspect-[4/5]">
                  <AccentTile
                    pool={TOP}
                    interval={5200}
                    offset={0}
                    sizes="(min-width: 640px) 28vw, 50vw"
                  />
                </div>
                <div className="flex-1 relative aspect-[4/5]">
                  <AccentTile
                    pool={BOTTOM}
                    interval={5800}
                    offset={1}
                    sizes="(min-width: 640px) 28vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Text column (4 cols on desktop) ───────────────────── */}
          <div className="lg:col-span-4 lg:pl-4 xl:pl-8 order-1 lg:order-2 lg:pt-10 xl:pt-16">
            <RevealOnScroll>
              <div className="flex items-center gap-4 mb-7">
                <div className="w-8 h-[1px] bg-gold/70" />
                <span className="text-gold text-[10px] sm:text-[11px] tracking-[0.4em] uppercase font-sans">
                  A Living Archive
                </span>
              </div>
            </RevealOnScroll>

            <h2 className="font-serif text-foreground leading-[1.0] text-[2.6rem] sm:text-6xl md:text-6xl xl:text-7xl">
              <span className="overture-word delay-a block italic text-gold-dark">Candid.</span>
              <span className="overture-word delay-b block">Beautiful.</span>
              <span className="overture-word delay-c block italic text-gold-dark">Unforgettable.</span>
            </h2>

            <RevealOnScroll>
              <p className="mt-7 sm:mt-8 text-cream-dim text-[15px] sm:text-base font-sans font-light max-w-md leading-[1.75]">
                Real people, real moments — never a photoshoot pretending to be a wedding. We capture your day the way it actually happens, and keep it the way you&apos;ll want to remember it.
              </p>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="mt-8 sm:mt-10 flex items-center gap-4">
                <div className="w-10 h-[1px] bg-gold/60" />
                <span className="font-serif italic text-foreground/55 text-sm tracking-wide">
                  Keep scrolling — it unfolds
                </span>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
