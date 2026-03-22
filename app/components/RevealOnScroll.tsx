"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  variant?: "up" | "fade" | "scale" | "left" | "right";
  delay?: number;
  threshold?: number;
}

export default function RevealOnScroll({
  children,
  className = "",
  variant = "up",
  delay = 0,
  threshold = 0.15,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const variantClass =
    variant === "up"
      ? "reveal"
      : variant === "fade"
        ? "reveal reveal-fade"
        : variant === "scale"
          ? "reveal reveal-scale"
          : variant === "left"
            ? "reveal reveal-left"
            : "reveal reveal-right";

  return (
    <div
      ref={ref}
      className={`${variantClass} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
