"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FILMS } from "../data/media";
import RevealOnScroll from "./RevealOnScroll";

export default function FilmMoments() {
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (i: number) => {
    const v = videoRefs.current[i];
    if (!v) return;

    videoRefs.current.forEach((item, idx) => {
      if (item && idx !== i) {
        item.pause();
        item.currentTime = 0;
      }
    });

    v.play();
    setPlayingIdx(i);
  };

  return (
    <section
      id="film"
      className="relative bg-noir-light py-24 sm:py-36 overflow-hidden"
    >
      <RevealOnScroll>
        <div className="max-w-350 mx-auto px-6 sm:px-10 mb-14 sm:mb-20">
          <div>
            <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans block mb-4">
              Short Films
            </span>
            <h2 className="font-serif text-cream text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
              A taste of the day,
              <br />
              <span className="italic text-gold">in motion.</span>
            </h2>
          </div>
        </div>
      </RevealOnScroll>

      <div className="max-w-350 mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {FILMS.map((film, i) => (
            <div key={film.src} className="min-w-0">
              <div className="relative aspect-video overflow-hidden bg-black group">
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                  poster={film.poster}
                  playsInline
                  preload="metadata"
                  controls={playingIdx === i}
                  onEnded={() => setPlayingIdx(null)}
                >
                  <source src={film.src} type="video/mp4" />
                </video>

                {playingIdx !== i && (
                  <>
                    <Image
                      src={film.poster}
                      alt={film.label}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-all duration-700" />
                    <button
                      type="button"
                      onClick={() => handlePlay(i)}
                      aria-label={`Play ${film.label}`}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/70 flex items-center justify-center backdrop-blur-sm bg-white/5 group-hover:border-gold group-hover:scale-110 transition-all duration-500"
                        style={{
                          animation: "playPulse 2.5s ease-out infinite",
                        }}
                      >
                        <svg
                          className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:text-gold ml-1 transition-colors duration-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </button>
                  </>
                )}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="font-serif italic text-cream text-lg sm:text-xl">
                  {film.caption}
                </span>
                <span className="text-cream/40 text-[10px] tracking-[0.25em] uppercase font-sans">
                  {film.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
