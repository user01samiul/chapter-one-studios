import RevealOnScroll from "./RevealOnScroll";

export default function IntroStatement() {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 px-6 bg-noir">
      <div className="max-w-3xl mx-auto text-center">
        <RevealOnScroll>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.15] tracking-tight">
            We tell love stories
            <br />
            <span className="italic text-gold">
              through film &amp; photography
            </span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="mt-8 sm:mt-10 text-cream-dim text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-sans font-light">
            Sydney-based wedding cinematography and photography. One team, one
            vision — every moment, beautifully preserved.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.35}>
          <div className="mt-10 sm:mt-14">
            <a
              href="#enquire"
              className="inline-block text-[13px] tracking-[0.2em] uppercase bg-gold hover:bg-gold-light text-foreground px-10 py-4 transition-all duration-500 font-sans"
            >
              Enquire Now
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
