"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const W1 = "/Landing%20Page/Photo_s%20To%20Use/Wedding%201_%20Fatima%20%26%20Mark";
const W2 = "/Landing%20Page/Photo_s%20To%20Use/Wedding%202_%20Saed%20%26%20Nour";
const W3 = "/Landing%20Page/Photo_s%20To%20Use/Wedding%203%20_%20Saja%20and%20Ahmed/Photos";

const photoSets = [
  {
    couple: "Fatima & Mark",
    layout: "editorial-a" as const,
    images: [
      { src: `${W1}/DSC01580.jpg`, alt: "Couple walking through garden", aspect: "landscape" as const },
      { src: `${W1}/DSCF7916.jpg`, alt: "Bouquet detail", aspect: "portrait" as const },
      { src: `${W1}/DSC01741-2.jpg`, alt: "Couple on garden steps", aspect: "landscape" as const },
      { src: `${W1}/DSC01508.jpg`, alt: "Couple in garden", aspect: "landscape" as const },
      { src: `${W1}/DSC01662-2.jpg`, alt: "Couple in misty forest", aspect: "landscape" as const },
    ],
  },
  {
    couple: "Saed & Nour",
    layout: "editorial-b" as const,
    images: [
      { src: `${W2}/MUS04777.jpg`, alt: "Intimate portrait under veil", aspect: "portrait" as const },
      { src: `${W2}/MUS04371.jpg`, alt: "Couple by bridge in greenery", aspect: "landscape" as const },
      { src: `${W2}/MUS04092.jpg`, alt: "Groom seeing bride among flowers", aspect: "landscape" as const },
      { src: `${W2}/MUS04506.jpg`, alt: "Couple under large tree", aspect: "landscape" as const },
      { src: `${W2}/MUS02754.jpg`, alt: "Gold and black decor detail", aspect: "landscape" as const },
    ],
  },
  {
    couple: "Saja & Ahmed",
    layout: "editorial-c" as const,
    images: [
      { src: `${W3}/DSCF0352-Enhanced-NR.jpg`, alt: "Couple by the ocean at sunset", aspect: "portrait" as const },
      { src: `${W3}/DSC02664-Enhanced-NR.jpg`, alt: "Ring and bouquet detail", aspect: "portrait" as const },
      { src: `${W3}/DSC07127-Enhanced-NR-3.jpg`, alt: "Ring detail close-up", aspect: "portrait" as const },
      { src: `${W3}/DSC02892-Enhanced-NR.jpg`, alt: "Couple embracing on beach", aspect: "landscape" as const },
      { src: `${W3}/DSC00348-Enhanced-NR.jpg`, alt: "Ceremony moment", aspect: "landscape" as const },
    ],
  },
];

const films = [
  {
    couple: "Mark & Fatima",
    label: "Wedding Highlight Film",
    src: "/Landing%20Page/Video_s%20To%20Possibly%20Show/Wedding%201_%20Mark%20%26%20Fatima/MARK%20AND%20FATIMA%20REEL%204K.mp4",
    poster: `${W1}/DSC01580.jpg`,
  },
  {
    couple: "Nour & Saed",
    label: "Wedding Reel",
    src: "/Landing%20Page/Video_s%20To%20Possibly%20Show/Wedding%202_%20Nour%20%26%20Saed/Copy%20of%20Wedding_Reel%201_V1.mov",
    poster: `${W2}/MUS04371.jpg`,
  },
];

function VideoCard({
  film,
}: {
  film: (typeof films)[0];
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="group">
      <div className="relative aspect-video bg-noir-lighter overflow-hidden cursor-pointer">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={film.poster}
          onClick={handleVideoClick}
          onEnded={() => setIsPlaying(false)}
          playsInline
          controls={isPlaying}
        >
          <source src={film.src} type="video/mp4" />
        </video>

        {!isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-noir/40 group-hover:bg-noir/25 transition-all duration-700"
            onClick={handlePlay}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-cream/70 flex items-center justify-center group-hover:border-gold group-hover:scale-110 transition-all duration-500 backdrop-blur-sm bg-white/5">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-cream ml-1 group-hover:text-gold transition-colors duration-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-cream text-sm font-serif italic">{film.couple}</span>
        <span className="text-cream/40 text-[11px] tracking-[0.15em] uppercase font-sans">
          {film.label}
        </span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="relative bg-noir">
      {/* ── PHOTOGRAPHY ── */}
      <div className="py-24 sm:py-32 px-4 sm:px-6">
        <div className="max-w-[1100px] mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16 sm:mb-20">
              <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans block mb-4">
                Photography
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream">
                Moments Frozen in Time
              </h2>
              <p className="mt-4 text-cream-dim text-base font-sans font-light max-w-lg mx-auto">
                Every glance, every touch — preserved with intention and artistry.
              </p>
            </div>
          </RevealOnScroll>

          {/* Wedding sets */}
          <div className="space-y-20 sm:space-y-28">
            {photoSets.map((set, setIndex) => (
              <div key={setIndex}>
                <RevealOnScroll>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-[1px] bg-gold/40" />
                    <span className="text-gold/70 text-[12px] tracking-[0.25em] uppercase font-sans">
                      {set.couple}
                    </span>
                  </div>
                </RevealOnScroll>

                {/* Editorial layouts per set */}
                {set.layout === "editorial-a" && (
                  <div className="flex flex-col gap-2 sm:gap-3">
                    {/* Row 1: wide landscape + portrait, equal height */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 h-[220px] sm:h-[280px] md:h-[320px]">
                      <RevealOnScroll variant="scale" delay={0.1} className="col-span-2 h-full">
                        <div className="relative h-full overflow-hidden bg-noir-light group cursor-pointer">
                          <Image src={set.images[0].src} alt={set.images[0].alt} fill sizes="66vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                          <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/15 transition-all duration-700" />
                        </div>
                      </RevealOnScroll>
                      <RevealOnScroll variant="scale" delay={0.2} className="h-full">
                        <div className="relative h-full overflow-hidden bg-noir-light group cursor-pointer">
                          <Image src={set.images[1].src} alt={set.images[1].alt} fill sizes="33vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                          <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/15 transition-all duration-700" />
                        </div>
                      </RevealOnScroll>
                    </div>
                    {/* Row 2: three images — small, wide, small */}
                    <div className="grid grid-cols-4 gap-2 sm:gap-3">
                      <RevealOnScroll variant="scale" delay={0.3}>
                        <div className="relative aspect-square overflow-hidden bg-noir-light group cursor-pointer">
                          <Image src={set.images[2].src} alt={set.images[2].alt} fill sizes="25vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                          <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/15 transition-all duration-700" />
                        </div>
                      </RevealOnScroll>
                      <RevealOnScroll variant="scale" delay={0.4} className="col-span-2">
                        <div className="relative aspect-[2/1] overflow-hidden bg-noir-light group cursor-pointer">
                          <Image src={set.images[3].src} alt={set.images[3].alt} fill sizes="50vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                          <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/15 transition-all duration-700" />
                        </div>
                      </RevealOnScroll>
                      <RevealOnScroll variant="scale" delay={0.5}>
                        <div className="relative aspect-square overflow-hidden bg-noir-light group cursor-pointer">
                          <Image src={set.images[4].src} alt={set.images[4].alt} fill sizes="25vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                          <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/15 transition-all duration-700" />
                        </div>
                      </RevealOnScroll>
                    </div>
                  </div>
                )}

                {set.layout === "editorial-b" && (
                  /* Layout B: portrait left + 2 landscape stacked right, then wide */
                  <div className="flex flex-col gap-3">
                    {/* Row 1: tall portrait + 2 stacked landscapes */}
                    <div className="grid grid-cols-2 gap-3">
                      <RevealOnScroll variant="scale" delay={0.1}>
                        <div className="relative aspect-[3/4] overflow-hidden bg-noir-light group cursor-pointer">
                          <Image src={set.images[0].src} alt={set.images[0].alt} fill sizes="50vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                          <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/15 transition-all duration-700" />
                        </div>
                      </RevealOnScroll>
                      <div className="flex flex-col gap-3">
                        <RevealOnScroll variant="scale" delay={0.2}>
                          <div className="relative aspect-[16/10] overflow-hidden bg-noir-light group cursor-pointer">
                            <Image src={set.images[1].src} alt={set.images[1].alt} fill sizes="50vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                            <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/15 transition-all duration-700" />
                          </div>
                        </RevealOnScroll>
                        <RevealOnScroll variant="scale" delay={0.3}>
                          <div className="relative aspect-[16/10] overflow-hidden bg-noir-light group cursor-pointer">
                            <Image src={set.images[2].src} alt={set.images[2].alt} fill sizes="50vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                            <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/15 transition-all duration-700" />
                          </div>
                        </RevealOnScroll>
                      </div>
                    </div>
                    {/* Row 2: two landscapes */}
                    <div className="grid grid-cols-2 gap-3">
                      <RevealOnScroll variant="scale" delay={0.4}>
                        <div className="relative aspect-[4/3] overflow-hidden bg-noir-light group cursor-pointer">
                          <Image src={set.images[3].src} alt={set.images[3].alt} fill sizes="50vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                          <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/15 transition-all duration-700" />
                        </div>
                      </RevealOnScroll>
                      <RevealOnScroll variant="scale" delay={0.5}>
                        <div className="relative aspect-[4/3] overflow-hidden bg-noir-light group cursor-pointer">
                          <Image src={set.images[4].src} alt={set.images[4].alt} fill sizes="50vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                          <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/15 transition-all duration-700" />
                        </div>
                      </RevealOnScroll>
                    </div>
                  </div>
                )}

                {set.layout === "editorial-c" && (
                  /* Layout C: 3 portraits top, 2 landscapes bottom */
                  <div className="flex flex-col gap-3">
                    {/* Row 1: 3 portraits */}
                    <div className="grid grid-cols-3 gap-3">
                      {set.images.slice(0, 3).map((img, i) => (
                        <RevealOnScroll key={i} variant="scale" delay={0.1 + i * 0.1}>
                          <div className="relative aspect-[3/4] overflow-hidden bg-noir-light group cursor-pointer">
                            <Image src={img.src} alt={img.alt} fill sizes="33vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                            <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/15 transition-all duration-700" />
                          </div>
                        </RevealOnScroll>
                      ))}
                    </div>
                    {/* Row 2: 2 landscapes */}
                    <div className="grid grid-cols-2 gap-3">
                      {set.images.slice(3, 5).map((img, i) => (
                        <RevealOnScroll key={i} variant="scale" delay={0.4 + i * 0.1}>
                          <div className="relative aspect-[4/3] overflow-hidden bg-noir-light group cursor-pointer">
                            <Image src={img.src} alt={img.alt} fill sizes="50vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                            <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/15 transition-all duration-700" />
                          </div>
                        </RevealOnScroll>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="flex items-center justify-center py-4">
        <div className="w-24 h-[1px] bg-cream/[0.08]" />
      </div>

      {/* ── FILMS ── */}
      <div id="film" className="py-24 sm:py-32 px-4 sm:px-6 bg-noir-light">
        <div className="max-w-[1200px] mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16 sm:mb-20">
              <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans block mb-4">
                Cinematography
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream">
                Wedding Films
              </h2>
              <p className="mt-4 text-cream-dim text-base font-sans font-light max-w-lg mx-auto">
                Cinematic storytelling that lets you relive every emotion.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {films.map((film, i) => (
              <RevealOnScroll key={i} variant="scale" delay={i * 0.15}>
                <VideoCard film={film} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
