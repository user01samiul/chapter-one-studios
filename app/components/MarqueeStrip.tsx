"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FRAMES } from "../data/media";

export default function MarqueeStrip() {
  const forwardTrack = [...FRAMES, ...FRAMES];
  const reverseTrack = [...FRAMES].reverse();
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const [activeAlt, setActiveAlt] = useState<string | null>(null);

  useEffect(() => {
    if (!activeSrc) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveSrc(null);
        setActiveAlt(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeSrc]);

  const openLightbox = (src: string, alt: string) => {
    setActiveSrc(src);
    setActiveAlt(alt);
  };

  const closeLightbox = () => {
    setActiveSrc(null);
    setActiveAlt(null);
  };

  return (
    <section className="relative bg-noir py-10 sm:py-14 border-y border-cream/6">
      <div className="marquee-wrap overflow-hidden">
        <div className="marquee-track">
          {[0, 1].map((group) => (
            <div className="marquee-group" key={group}>
              {forwardTrack.slice(0, FRAMES.length).map((frame, i) => (
                <div
                  key={`${group}-${i}`}
                  className="film-card relative mx-2 sm:mx-3 w-52 sm:w-64 md:w-72 shrink-0"
                >
                  <div className="film-sprocket film-sprocket--top" />
                  <div className="film-sprocket film-sprocket--bottom" />
                  <button
                    type="button"
                    className="film-photo relative h-32 sm:h-40 md:h-44 overflow-hidden bg-noir-light w-full text-left"
                    onClick={() => openLightbox(frame.src, frame.alt)}
                    aria-label={`Open photo: ${frame.alt}`}
                  >
                    <Image
                      src={frame.src}
                      alt={frame.alt}
                      fill
                      sizes="295px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/25" />
                  </button>
                  <div className="film-caption">{frame.alt}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 sm:mt-8 text-center">
        <span className="font-serif italic text-cream/55 text-sm sm:text-base">
          &mdash; and so many more &mdash;
        </span>
      </div>

      <div className="marquee-wrap overflow-hidden mt-6 sm:mt-8">
        <div className="marquee-track marquee-track--reverse">
          {[0, 1].map((group) => (
            <div className="marquee-group" key={`reverse-${group}`}>
              {reverseTrack.map((frame, i) => (
                <div
                  key={`reverse-${group}-${i}`}
                  className="film-card relative mx-2 sm:mx-3 w-52 sm:w-64 md:w-72 shrink-0"
                >
                  <div className="film-sprocket film-sprocket--top" />
                  <div className="film-sprocket film-sprocket--bottom" />
                  <button
                    type="button"
                    className="film-photo relative h-32 sm:h-40 md:h-44 overflow-hidden bg-noir-light w-full text-left"
                    onClick={() => openLightbox(frame.src, frame.alt)}
                    aria-label={`Open photo: ${frame.alt}`}
                  >
                    <Image
                      src={frame.src}
                      alt={frame.alt}
                      fill
                      sizes="295px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/25" />
                  </button>
                  <div className="film-caption">{frame.alt}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {activeSrc && activeAlt && (
        <div
          className="fixed inset-0 z-120 bg-black/88 backdrop-blur-[2px] p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activeAlt}
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 sm:right-7 sm:top-7 px-4 py-2 text-[11px] sm:text-xs tracking-[0.22em] uppercase text-cream border border-cream/45 bg-black/35 hover:bg-black/55 transition-colors"
            aria-label="Close image popup"
          >
            Close
          </button>

          <div
            className="relative mx-auto h-full w-full max-w-350"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeSrc}
              alt={activeAlt}
              fill
              sizes="100vw"
              priority
              className="object-contain"
            />
          </div>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 max-w-[90vw] text-center font-serif italic text-cream/90 text-base sm:text-lg px-3 py-1.5 bg-black/35 border border-cream/25">
            {activeAlt}
          </p>
        </div>
      )}
    </section>
  );
}
