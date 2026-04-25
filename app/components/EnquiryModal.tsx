"use client";

import { useEffect, useState } from "react";
import DateField from "./DateField";
import { getTodayDateInputValue } from "./dateInput";
import { submitEnquiry } from "./enquirySubmit";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const today = getTodayDateInputValue();
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    date: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState("");

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

  const resetForm = () => {
    setFormData({
      names: "",
      email: "",
      date: "",
      message: "",
    });
    setStatus("idle");
    setStatusMessage("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    try {
      await submitEnquiry(formData, "Enquiry modal");
      setFormData({
        names: "",
        email: "",
        date: "",
        message: "",
      });
      setStatus("sent");
      setStatusMessage("Thank you. Your enquiry has been sent.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "We could not send your enquiry right now.",
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={handleClose}
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
          onClick={handleClose}
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
          <p className="text-cream-dim text-base font-sans font-light leading-relaxed">
            Tell us a little about your day and we&apos;ll get back to you
            within 24 hours.
          </p>
        </div>

        {status === "sent" ? (
          <div className="py-8" role="status">
            <h3 className="font-serif text-2xl text-cream mb-3">
              Thank you for your enquiry.
            </h3>
            <p className="text-cream-dim text-base font-sans font-light leading-relaxed">
              We&apos;ve received your details and will get back to you within
              24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="names"
                value={formData.names}
                onChange={handleChange}
                placeholder="Your names"
                required
                className="w-full bg-transparent border-b border-foreground/15 py-3.5 text-foreground text-base placeholder:text-foreground/45 focus:border-gold/50 focus:outline-none transition-colors duration-500 font-sans"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="w-full bg-transparent border-b border-foreground/15 py-3.5 text-foreground text-base placeholder:text-foreground/45 focus:border-gold/50 focus:outline-none transition-colors duration-500 font-sans"
              />
            </div>
            <div>
              <DateField
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={today}
                className="w-full bg-transparent border-b border-foreground/15 py-3.5 text-foreground text-base placeholder:text-foreground/45 focus:border-gold/50 focus:outline-none transition-colors duration-500 font-sans"
                hintClassName="left-0 text-base"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us about your day..."
                required
                className="w-full bg-transparent border-b border-foreground/15 py-3.5 text-foreground text-base placeholder:text-foreground/45 focus:border-gold/50 focus:outline-none transition-colors duration-500 font-sans resize-none"
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full text-[14px] tracking-[0.2em] uppercase bg-gold hover:bg-gold-light text-foreground py-4 transition-all duration-500 font-sans font-medium"
              >
                {status === "sending" ? "Sending..." : "Send Enquiry"}
              </button>
              {statusMessage && (
                <p className="mt-4 text-sm font-sans text-red-300" role="status">
                  {statusMessage}
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
