"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import EnquiryModal from "./EnquiryModal";

const EnquiryModalContext = createContext<{ open: () => void }>({
  open: () => {},
});

export function useEnquiryModal() {
  return useContext(EnquiryModalContext);
}

export default function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <EnquiryModalContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <EnquiryModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </EnquiryModalContext.Provider>
  );
}
