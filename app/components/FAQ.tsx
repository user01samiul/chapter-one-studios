"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

const faqs = [
  {
    question: "Do you offer both photography and videography together?",
    answer:
      "Yes — that's what makes us different. Our photographer and cinematographer work as one unified team, sharing the same creative direction. This means better coverage, zero coordination stress, and a cohesive final result across your photos and film.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "We recommend reaching out as early as possible, especially for peak season dates (October–April). We only take on a limited number of weddings each month to ensure every couple gets our full attention.",
  },
  {
    question: "Do you travel outside of Sydney?",
    answer:
      "Absolutely. While we're based in Sydney, we've captured weddings across Australia and are open to destination weddings internationally. Travel fees may apply depending on the location.",
  },
  {
    question: "How long until we receive our photos and film?",
    answer:
      "You'll receive a curated sneak peek within 1–2 weeks. Your full gallery is delivered within 6–8 weeks, and your cinematic film within 10–12 weeks. We believe in taking the time to craft something truly special.",
  },
  {
    question: "What is your pricing?",
    answer:
      "Every wedding is unique, so we tailor our packages to suit your needs. Reach out through our enquiry form and we'll send you our current pricing guide within 24 hours.",
  },
  {
    question: "Can we customise a package?",
    answer:
      "Of course. We offer flexible options for coverage hours, second shooters, engagement sessions, same-day edits, and more. We'll work with you to build the perfect package for your day.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-28 sm:py-36 px-6 bg-noir">
      <div className="max-w-[750px] mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans block mb-4">
              FAQ
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream">
              Common Questions
            </h2>
          </div>
        </RevealOnScroll>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <RevealOnScroll key={i} delay={i * 0.06}>
              <div className="border-b border-foreground/[0.12]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left gap-4 group !rounded-none"
                >
                  <span className="font-sans text-base sm:text-lg text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                    {faq.question}
                  </span>
                  <span
                    className={`text-gold/60 text-xl flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === i ? "max-h-60 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-foreground/62 text-sm sm:text-base leading-relaxed font-sans font-light pr-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
