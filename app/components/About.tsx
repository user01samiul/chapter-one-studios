import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 sm:py-40 px-6 bg-noir overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Image side */}
          <RevealOnScroll variant="left">
            <div className="relative aspect-[3/4] max-h-[600px] overflow-hidden">
              <Image
                src="/Landing%20Page/Photo_s%20To%20Use/Wedding%201_%20Fatima%20%26%20Mark/DSC01774-2.jpg"
                alt="Wedding photography by Chapter One Studio's"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Subtle gold border accent */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold/20 pointer-events-none" />
            </div>
          </RevealOnScroll>

          {/* Text side */}
          <div>
            <RevealOnScroll variant="right">
              <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans block mb-6">
                Why Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream leading-[1.2] mb-8">
                One seamless team.
                <br />
                <span className="italic">Photo &amp; video, covered.</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll variant="right" delay={0.2}>
              <div className="space-y-6 text-cream-dim text-base sm:text-lg leading-relaxed font-light font-sans">
                <p>
                  We believe your wedding deserves more than separate vendors
                  trying to stay out of each other&apos;s way. At Chapter One,
                  your photographer and cinematographer work as one — sharing
                  the same creative vision, anticipating each other&apos;s
                  movements, and capturing moments that would otherwise be
                  missed.
                </p>
                <p>
                  The result? A cohesive story told through both stills and
                  motion. No coordination stress. No missed angles. Just your
                  day, beautifully told.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="right" delay={0.4}>
              <div className="mt-10 flex items-center gap-6">
                <div className="w-12 h-[1px] bg-gold/40" />
                <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-sans">
                  Sydney &amp; Beyond
                </span>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
