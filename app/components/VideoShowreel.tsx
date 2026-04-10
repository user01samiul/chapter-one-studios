"use client";

import { useState, useRef } from "react";
import RevealOnScroll from "./RevealOnScroll";

export default function VideoShowreel() {
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
    <section id="film" className="relative py-24 sm:py-36 px-4 sm:px-6 bg-noir-light">
      <div className="max-w-[1100px] mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans block mb-4">
              Cinematic Wedding Films
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream">
              Watch Our Latest Film
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll variant="scale" delay={0.2}>
          <div className="relative aspect-video bg-noir overflow-hidden group cursor-pointer">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/Landing%20Page/Photo_s%20To%20Use/Wedding%201_%20Fatima%20%26%20Mark/DSC01580.jpg"
              onClick={handleVideoClick}
              onEnded={() => setIsPlaying(false)}
              playsInline
              controls={isPlaying}
            >
              <source
                src="/Landing%20Page/Video_s%20To%20Possibly%20Show/Wedding%201_%20Mark%20%26%20Fatima/MARK%20AND%20FATIMA%20REEL%204K.mp4"
                type="video/mp4"
              />
            </video>

            {/* Play button overlay */}
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all duration-700"
                onClick={handlePlay}
              >
                <div className="relative">
                  {/* Pulse ring */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ animation: "playPulse 3s ease-in-out infinite" }}
                  />
                  {/* Play button */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white/80 flex items-center justify-center group-hover:border-gold group-hover:scale-110 transition-all duration-500 backdrop-blur-sm bg-white/5">
                    <svg
                      className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1 group-hover:text-gold transition-colors duration-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <p className="text-center mt-8 text-cream-dim text-sm tracking-wide font-sans">
            Fatima &amp; Mark — Wedding Highlight Film
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
