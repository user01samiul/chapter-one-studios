"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Weddings Filmed & Photographed" },
  { value: 300, suffix: "K+", label: "Social Media Followers" },
  { value: 100, suffix: "%", label: "5-Star Reviews" },
  { value: 3, suffix: "+", label: "Years of Experience" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-serif text-4xl sm:text-5xl md:text-6xl text-gold">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 sm:py-28 px-6 bg-noir border-y border-cream/[0.04]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-cream/50 text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
