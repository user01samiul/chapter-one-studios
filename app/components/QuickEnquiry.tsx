"use client";

import Image from "next/image";
import { useState } from "react";
import DateField from "./DateField";
import { getTodayDateInputValue } from "./dateInput";
import { submitEnquiry } from "./enquirySubmit";

export default function QuickEnquiry() {
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
      await submitEnquiry(formData, "Quick enquiry section");
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
    <section className="relative bg-noir overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 min-h-[700px]">
        {/* Left — Image */}
        <div className="relative hidden lg:block lg:h-auto">
          <Image
            src="/Landing%20Page/Photo_s%20To%20Use/Wedding%202_%20Saed%20%26%20Nour/MUS04777.jpg"
            alt="Intimate wedding portrait"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/35" />
        </div>

        {/* Right — Form */}
        <div className="relative z-10 flex items-center px-6 sm:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-28">
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="mb-10">
              <div className="w-10 h-[1px] bg-gold/50 mb-6" />
              <h2 className="font-serif text-3xl sm:text-4xl text-cream leading-[1.2] mb-3">
                Begin your <span className="italic text-gold">chapter</span>
              </h2>
              <p className="text-cream-dim text-base font-sans font-light leading-relaxed">
                Tell us a little about your day and we&apos;ll get back to you
                within 24 hours.
              </p>
            </div>

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
          </div>
        </div>
      </div>
    </section>
  );
}
