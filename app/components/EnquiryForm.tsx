"use client";

import { useState } from "react";
import DateField from "./DateField";
import { getTodayDateInputValue } from "./dateInput";
import { submitEnquiry } from "./enquirySubmit";
import RevealOnScroll from "./RevealOnScroll";

export default function EnquiryForm() {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    try {
      await submitEnquiry(formData, "Homepage enquiry section");
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

  return (
    <section id="enquire" className="relative py-28 sm:py-40 px-6 bg-noir">
      {/* Background accent image */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/Landing%20Page/Photo_s%20To%20Use/Wedding%201_%20Fatima%20%26%20Mark/DSC01662-2.jpg')",
          }}
        />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-14 sm:mb-18">
            <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans block mb-4">
              Get In Touch
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cream mb-4">
              Let&apos;s tell <span className="italic">your</span> story
            </h2>
            <p className="text-cream-dim text-base font-sans font-light max-w-md mx-auto">
              Share a few details about your day and we&apos;ll be in touch
              within 24 hours.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Names */}
            <div>
              <label className="block text-[13px] tracking-[0.2em] uppercase text-foreground/65 font-sans mb-3">
                Your Names
              </label>
              <input
                type="text"
                name="names"
                value={formData.names}
                onChange={handleChange}
                placeholder="e.g. Sarah & James"
                required
                className="w-full border border-foreground/15 rounded-none bg-noir-light px-5 py-5 text-foreground text-lg placeholder:text-foreground/45 focus:border-gold/60 focus:bg-noir-lighter focus:outline-none transition-all duration-500 font-sans"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[13px] tracking-[0.2em] uppercase text-foreground/65 font-sans mb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full border border-foreground/15 rounded-none bg-noir-light px-5 py-5 text-foreground text-lg placeholder:text-foreground/45 focus:border-gold/60 focus:bg-noir-lighter focus:outline-none transition-all duration-500 font-sans"
              />
            </div>

            {/* Date */}
            <div>
              <div>
                <label className="block text-[13px] tracking-[0.2em] uppercase text-foreground/65 font-sans mb-3">
                  Wedding Date
                </label>
                <DateField
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={today}
                  className="w-full border border-foreground/15 rounded-none bg-noir-light px-5 py-5 text-foreground text-lg placeholder:text-foreground/45 focus:border-gold/60 focus:bg-noir-lighter focus:outline-none transition-all duration-500 font-sans"
                  hintClassName="left-5 text-lg"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[13px] tracking-[0.2em] uppercase text-foreground/65 font-sans mb-3">
                Tell Us About Your Day
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Share any details you'd like us to know..."
                required
                className="w-full border border-foreground/15 rounded-none bg-noir-light px-5 py-5 text-foreground text-lg placeholder:text-foreground/45 focus:border-gold/60 focus:bg-noir-lighter focus:outline-none transition-all duration-500 font-sans resize-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-6 text-center">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-block text-[14px] tracking-[0.2em] uppercase bg-gold hover:bg-gold-light text-foreground px-14 py-5 transition-all duration-500 font-sans font-medium"
              >
                {status === "sending" ? "Sending..." : "Send Enquiry"}
              </button>
              {statusMessage && (
                <p
                  className={`mt-4 text-sm font-sans ${
                    status === "error" ? "text-red-300" : "text-cream-dim"
                  }`}
                  role="status"
                >
                  {statusMessage}
                </p>
              )}
            </div>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
