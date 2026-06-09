"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Images } from "lucide-react";
import {
  galleryItems,
  galleryCategories,
  type GalleryItem,
} from "@/data/gallery";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? galleryItems
        : galleryItems.filter((i) => i.category === active),
    [active]
  );

  const open = useCallback((idx: number) => setLightbox(idx), []);
  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((p) => (p === null ? p : (p + 1) % filtered.length)),
    [filtered.length]
  );
  const prev = useCallback(
    () =>
      setLightbox((p) =>
        p === null ? p : (p - 1 + filtered.length) % filtered.length
      ),
    [filtered.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, next, prev]);

  const current: GalleryItem | null =
    lightbox !== null ? filtered[lightbox] : null;

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {galleryCategories.map((cat) => {
          const isActive = active === cat;
          const count =
            cat === "All"
              ? galleryItems.length
              : galleryItems.filter((i) => i.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                isActive ? "text-white" : "text-ink/60 hover:text-ink"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-red to-brand-red-soft shadow-[0_10px_24px_-8px_rgba(192,56,43,0.55)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 inline-flex items-center gap-1.5">
                {cat}
                <span
                  className={cn(
                    "rounded-full px-1.5 text-[11px]",
                    isActive ? "bg-white/20" : "bg-black/[0.06]"
                  )}
                >
                  {count}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Masonry — full-aspect, uncropped, high-resolution */}
      <motion.div
        layout
        className="mt-12 columns-1 gap-6 lg:columns-2 [&>*]:mb-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, idx) => (
            <motion.button
              key={item.src}
              layout
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => open(idx)}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-3xl bg-ink shadow-soft ring-1 ring-black/5 transition-shadow hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.w}
                height={item.h}
                quality={90}
                loading="lazy"
                sizes="(max-width:1024px) 100vw, 50vw"
                className="h-auto w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="text-left">
                  <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                    {item.category}
                  </span>
                  <p className="mt-2 font-display text-sm font-bold text-white">
                    {item.title}
                  </p>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/90 text-ink">
                  <ZoomIn className="h-5 w-5" />
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-md sm:p-8"
            onClick={close}
          >
            {/* Top bar */}
            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 text-white sm:p-7">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Images className="h-4 w-4" />
                {(lightbox ?? 0) + 1} / {filtered.length}
              </div>
              <button
                onClick={close}
                aria-label="Close"
                className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Prev / Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-3 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-3 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.div
              key={current.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex max-h-[82vh] w-full max-w-5xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full overflow-hidden rounded-3xl ring-1 ring-white/10">
                <Image
                  src={current.src}
                  alt={current.alt}
                  width={1600}
                  height={900}
                  className="h-auto max-h-[72vh] w-full object-contain"
                  priority
                />
              </div>
              <div className="mt-4 text-center">
                <span className="rounded-full bg-brand-red/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                  {current.category}
                </span>
                <p className="mt-3 font-display text-lg font-bold text-white">
                  {current.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
