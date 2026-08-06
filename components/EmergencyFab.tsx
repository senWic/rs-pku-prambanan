"use client";

import { useState } from "react";
import { Phone, MessageCircle, Plus, X } from "lucide-react";

export default function EmergencyFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <>
          <a
            href="tel:0274496111"
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-navy-700 shadow-lg"
          >
            <Phone size={16} className="text-maroon-600" /> Telepon IGD
          </a>
          <a
            href="https://wa.me/6281200000000"
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-navy-700 shadow-lg"
          >
            <MessageCircle size={16} className="text-green-600" /> WhatsApp
          </a>
        </>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Kontak darurat"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-maroon-600 text-cream shadow-lg transition hover:bg-maroon-700"
      >
        {open ? <X size={22} /> : <Plus size={22} />}
      </button>
    </div>
  );
}
