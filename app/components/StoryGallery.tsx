import Image from "next/image";
import type { ReactNode } from "react";
import { FRAMES } from "../data/media";
import PhotoRibbon from "./PhotoRibbon";
import RevealOnScroll from "./RevealOnScroll";

// Hand-picked indices into FRAMES for each slot in the scroll
const HERO_OPEN = 3;
const TRIO_1 = [6, 15, 5];
const TRIO_1_META = [
  "ROLL 04 / FRAME 18",
  "ROLL 05 / FRAME 03",
  "ROLL 05 / FRAME 19",
];
const PAIR_BIG = 7;
const PAIR_SMALL = 2;
const DUO = [4, 10];
const TRIO_2 = [8, 13, 11];
const HERO_CLOSE = 12;

function Quote({
  children,
  compact = false,
}: {
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <RevealOnScroll>
      <div
        className={`max-w-[680px] mx-auto px-6 text-center ${
          compact ? "my-6 sm:my-8" : "my-20 sm:my-28"
        }`}
      >
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="w-8 h-[1px] bg-gold/50" />
          <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-sans">
            Moment
          </span>
          <div className="w-8 h-[1px] bg-gold/50" />
        </div>
        <p className="font-serif italic text-foreground/78 text-xl sm:text-2xl md:text-[1.75rem] leading-[1.3]">
          {children}
        </p>
      </div>
    </RevealOnScroll>
  );
}

export default function StoryGallery() {
  return (
    <section
      id="work"
      className="relative bg-background py-24 sm:py-36 overflow-hidden"
    >
      {/* ── Section opener ─────────────────────────────────────── */}
      <RevealOnScroll>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 mb-6 sm:mb-8">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="col-span-12 lg:col-span-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="w-10 h-[1px] bg-gold/60" />
                <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans">
                  A Single Unbroken Story
                </span>
                <div className="w-10 h-[1px] bg-gold/60" />
              </div>
              <h2 className="font-serif text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.03] max-w-3xl mx-auto lg:mx-0">
                We don&apos;t count weddings
                <br />
                in projects.{" "}
                <span className="italic text-gold-dark">
                  We count them in moments.
                </span>
              </h2>
              <p className="mt-8 text-cream-dim text-base sm:text-lg font-sans font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Every day we capture becomes part of one ongoing story — the
                same quiet eye, the same care, the same love of the in-between.
                Here&apos;s a slice of it, in no particular order.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden bg-noir-light max-w-[680px] mx-auto lg:mx-0 lg:ml-auto">
                <Image
                  src={FRAMES[HERO_OPEN].src}
                  alt={FRAMES[HERO_OPEN].alt}
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <Quote compact>
        It begins quietly &mdash; long before the dress, the rings, the names on
        the card.
      </Quote>

      {/* ── 2. Portrait triptych ───────────────────────────────── */}
      <RevealOnScroll>
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10">
          <div className="text-center mb-10 sm:mb-12">
            <h3 className="font-serif text-foreground text-3xl sm:text-4xl md:text-5xl leading-[1.05] max-w-4xl mx-auto">
              We don&apos;t count weddings
              <br />
              in projects.{" "}
              <span className="italic text-gold-dark">
                We count them in moments.
              </span>
            </h3>
            <p className="mt-6 text-cream-dim text-base sm:text-lg font-sans font-light max-w-3xl mx-auto leading-relaxed">
              Every day we capture becomes part of one ongoing story — the same
              quiet eye, the same care, the same love of the in-between.
              Here&apos;s a slice of it, in no particular order.
            </p>
          </div>
          <div className="rounded-sm border border-gold/20 bg-noir-light/35 p-4 sm:p-6">
            <div className="flex items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.24em] text-gold/70 font-sans mb-4 sm:mb-5">
              <span>Contact Sheet</span>
              <span>Captured in-between</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {TRIO_1.map((i, k) => (
                <div
                  key={k}
                  className={`group bg-[#f4efe4] p-2 pb-4 border border-black/15 shadow-[0_14px_30px_rgba(0,0,0,0.24)] transition-transform duration-500 ease-out ${
                    k === 0
                      ? "sm:-rotate-1"
                      : k === 1
                        ? "sm:rotate-1"
                        : "sm:-rotate-1"
                  } hover:rotate-0`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-noir-light">
                    <Image
                      src={FRAMES[i].src}
                      alt={FRAMES[i].alt}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="pt-3 px-1 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-noir/75 font-sans">
                    <span>{TRIO_1_META[k]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <Quote>
        And then &mdash; a look, a laugh, a hand held a little tighter than
        usual.
      </Quote>

      {/* ── 3. Asymmetric big + small ──────────────────────────── */}
      <RevealOnScroll>
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-12 gap-4 sm:gap-6">
            <div className="col-span-12 md:col-span-8 relative aspect-[4/3] overflow-hidden bg-noir-light group">
              <Image
                src={FRAMES[PAIR_BIG].src}
                alt={FRAMES[PAIR_BIG].alt}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="col-span-12 md:col-span-4 relative aspect-[3/4] overflow-hidden bg-noir-light group">
              <Image
                src={FRAMES[PAIR_SMALL].src}
                alt={FRAMES[PAIR_SMALL].alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* ── 4. Mid-gallery carousel ribbon (the counter moment) ─ */}
      <div className="my-24 sm:my-36">
        <PhotoRibbon />
      </div>

      <Quote>
        Some frames you&apos;ll want on the wall. Most, you&apos;ll want to live
        inside.
      </Quote>

      {/* ── 5. Two-landscape strip ─────────────────────────────── */}
      <RevealOnScroll>
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {DUO.map((i, k) => (
              <div
                key={k}
                className="relative aspect-[5/4] overflow-hidden bg-noir-light group"
              >
                <Image
                  src={FRAMES[i].src}
                  alt={FRAMES[i].alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <Quote>
        We&apos;re not there to direct your day. We&apos;re there to make sure
        it doesn&apos;t slip away.
      </Quote>

      {/* ── 6. Mixed triptych (different proportions) ──────────── */}
      <RevealOnScroll>
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-12 gap-4 sm:gap-6">
            <div className="col-span-12 md:col-span-5 relative aspect-[4/5] overflow-hidden bg-noir-light group">
              <Image
                src={FRAMES[TRIO_2[0]].src}
                alt={FRAMES[TRIO_2[0]].alt}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="col-span-12 md:col-span-4 relative aspect-[3/4] overflow-hidden bg-noir-light group">
              <Image
                src={FRAMES[TRIO_2[1]].src}
                alt={FRAMES[TRIO_2[1]].alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="col-span-12 md:col-span-3 relative aspect-[3/4] overflow-hidden bg-noir-light group">
              <Image
                src={FRAMES[TRIO_2[2]].src}
                alt={FRAMES[TRIO_2[2]].alt}
                fill
                sizes="(min-width: 768px) 25vw, 100vw"
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* ── 7. Closing hero frame ──────────────────────────────── */}
      <RevealOnScroll variant="fade">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10 mt-20 sm:mt-28">
          <div className="relative aspect-[21/9] overflow-hidden bg-noir-light">
            <Image
              src={FRAMES[HERO_CLOSE].src}
              alt={FRAMES[HERO_CLOSE].alt}
              fill
              sizes="(min-width: 1024px) 1400px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </RevealOnScroll>

      {/* ── Closing line ───────────────────────────────────────── */}
      <RevealOnScroll>
        <div className="max-w-[900px] mx-auto px-6 text-center mt-20 sm:mt-28">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-gold/60" />
            <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-sans">
              The Story Continues
            </span>
            <div className="w-10 h-[1px] bg-gold/60" />
          </div>
          <p className="font-serif italic text-foreground/75 text-2xl sm:text-3xl leading-snug">
            …one story, still being written.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
}
