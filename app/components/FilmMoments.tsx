"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import CarouselCounter from "./CarouselCounter";
import RevealOnScroll from "./RevealOnScroll";
import { FILMS } from "../data/media";

export default function FilmMoments() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "center" });
  const [selected, setSelected] = useState(0);
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (!emblaApi) return;
    const handler = () => {
      const idx = emblaApi.selectedScrollSnap();
      setSelected(idx);
      setPlayingIdx(null);
      videoRefs.current.forEach((v, i) => {
        if (v && i !== idx) {
          v.pause();
          v.currentTime = 0;
        }
      });
    };
    emblaApi.on("select", handler);
    emblaApi.on("reInit", handler);
    return () => {
      emblaApi.off("select", handler);
      emblaApi.off("reInit", handler);
    };
  }, [emblaApi]);

  const handlePlay = (i: number) => {
    const v = videoRefs.current[i];
    if (!v) return;
    v.play();
    setPlayingIdx(i);
  };

  return (
    <section id="film" className="relative bg-noir-light py-24 sm:py-36 overflow-hidden">
      <RevealOnScroll>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 mb-14 sm:mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
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
            <CarouselCounter current={selected + 1} total={FILMS.length} />
          </div>
        </div>
      </RevealOnScroll>

      <div className="overflow-hidden embla-grab" ref={emblaRef}>
        <div className="flex gap-6 sm:gap-10 px-6 sm:px-20">
          {FILMS.map((film, i) => (
            <div
              key={film.src}
              className="flex-shrink-0 w-[88vw] sm:w-[78vw] md:w-[72vw] lg:w-[68vw]"
            >
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
                      sizes="80vw"
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
                        style={{ animation: "playPulse 2.5s ease-out infinite" }}
                      >
                        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:text-gold ml-1 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
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
