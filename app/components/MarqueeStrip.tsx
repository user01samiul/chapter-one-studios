import Image from "next/image";
import { FRAMES } from "../data/media";

export default function MarqueeStrip() {
  const track = [...FRAMES, ...FRAMES];

  return (
    <section
      className="relative bg-noir py-10 sm:py-14 border-y border-cream/[0.06]"
      aria-hidden="true"
    >
      <div className="marquee-wrap overflow-hidden">
        <div className="marquee-track">
          {[0, 1].map((group) => (
            <div className="marquee-group" key={group}>
              {track.slice(0, FRAMES.length).map((frame, i) => (
                <div
                  key={`${group}-${i}`}
                  className="relative mx-2 sm:mx-3 h-[130px] sm:h-[160px] md:h-[180px] w-[200px] sm:w-[240px] md:w-[280px] overflow-hidden bg-noir-light flex-shrink-0"
                >
                  <Image
                    src={frame.src}
                    alt=""
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/25" />
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
    </section>
  );
}
