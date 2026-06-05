"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { site } from "@/data/site";

export function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={site.phoneHref}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-gradient-to-br from-brand-red to-brand-red-soft px-5 py-4 text-white shadow-[0_18px_40px_-12px_rgba(192,56,43,0.7)] sm:bottom-7 sm:right-7"
          aria-label={`Call ${site.phone}`}
        >
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-brand-red/40" />
          <span className="grid h-6 w-6 place-items-center">
            <Phone className="h-5 w-5" />
          </span>
          <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 group-hover:max-w-[160px] sm:block">
            Call for a Free Quote
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
