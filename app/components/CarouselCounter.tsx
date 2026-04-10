"use client";

interface CarouselCounterProps {
  current: number;
  total: number;
  variant?: "light" | "dark";
  className?: string;
}

const pad = (n: number) => n.toString().padStart(2, "0");

export default function CarouselCounter({
  current,
  total,
  variant = "light",
  className = "",
}: CarouselCounterProps) {
  return (
    <div
      className={`counter-pill ${variant === "dark" ? "counter-pill--on-dark" : ""} ${className}`}
      aria-live="polite"
      aria-label={`Slide ${current} of ${total}`}
    >
      <span>{pad(current)}</span>
      <span className="counter-pill__bar" aria-hidden="true" />
      <span>{pad(total)}</span>
    </div>
  );
}
