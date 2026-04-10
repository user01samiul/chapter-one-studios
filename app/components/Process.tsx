import RevealOnScroll from "./RevealOnScroll";

const steps = [
  {
    number: "01",
    title: "Enquire",
    description:
      "Reach out and tell us about your vision, your venue, and your date. We'll get back to you within 24 hours.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We'll meet (in person or virtually) to understand your story, discuss your timeline, and craft a plan tailored to your day.",
  },
  {
    number: "03",
    title: "Capture",
    description:
      "On the day, our team works seamlessly in the background — capturing every emotion, every detail, every moment that matters.",
  },
  {
    number: "04",
    title: "Relive",
    description:
      "Receive your cinematic film and curated gallery — a timeless collection you'll treasure for generations.",
  },
];

export default function Process() {
  return (
    <section className="relative py-28 sm:py-36 px-6 bg-noir-light">
      <div className="max-w-[1000px] mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans block mb-4">
              How It Works
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream">
              Simple from start to finish
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {steps.map((step, i) => (
            <RevealOnScroll key={i} delay={i * 0.12}>
              <div className="text-center md:text-left">
                <span className="font-serif text-5xl text-gold/20 block mb-4 leading-none">
                  {step.number}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-cream mb-3 italic">
                  {step.title}
                </h3>
                <p className="text-foreground/62 text-sm leading-relaxed font-sans font-light">
                  {step.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
