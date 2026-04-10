"use client";

import { useEffect, useState } from "react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    date: "",
    venue: "",
    message: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg bg-noir border border-foreground/[0.12] p-8 sm:p-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: "fadeUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
          borderRadius: "4px",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-foreground/45 hover:text-foreground transition-colors duration-300 !rounded-none"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="w-10 h-[1px] bg-gold/50 mb-5" />
          <h2 className="font-serif text-2xl sm:text-3xl text-cream leading-[1.2] mb-2">
            Begin your <span className="italic text-gold">chapter</span>
          </h2>
          <p className="text-foreground/60 text-sm sm:text-base font-sans font-light">
            Share a few details and we&apos;ll be in touch within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              name="names"
              value={formData.names}
              onChange={handleChange}
              placeholder="Your names"
              className="w-full bg-noir-light border border-foreground/15 px-4 py-4 text-foreground text-base placeholder:text-foreground/45 focus:border-gold/50 focus:bg-noir-lighter focus:outline-none transition-all duration-500 font-sans !rounded-none"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full bg-noir-light border border-foreground/15 px-4 py-4 text-foreground text-base placeholder:text-foreground/45 focus:border-gold/50 focus:bg-noir-lighter focus:outline-none transition-all duration-500 font-sans !rounded-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="Wedding date"
              className="w-full bg-noir-light border border-foreground/15 px-4 py-4 text-foreground text-base placeholder:text-foreground/45 focus:border-gold/50 focus:bg-noir-lighter focus:outline-none transition-all duration-500 font-sans !rounded-none"
            />
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              placeholder="Venue"
              className="w-full bg-noir-light border border-foreground/15 px-4 py-4 text-foreground text-base placeholder:text-foreground/45 focus:border-gold/50 focus:bg-noir-lighter focus:outline-none transition-all duration-500 font-sans !rounded-none"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us about your day..."
              className="w-full bg-noir-light border border-foreground/15 px-4 py-4 text-foreground text-base placeholder:text-foreground/45 focus:border-gold/50 focus:bg-noir-lighter focus:outline-none transition-all duration-500 font-sans resize-none !rounded-none"
            />
          </div>
          <button
            type="submit"
            className="w-full text-[14px] tracking-[0.2em] uppercase bg-gold hover:bg-gold-light text-foreground py-4 transition-all duration-500 font-sans font-medium"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
