"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/data/site";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "mx-auto mt-3 flex max-w-7xl items-center justify-between gap-4 rounded-full px-4 py-1 transition-all duration-500 sm:mt-4 sm:px-5",
          scrolled
            ? "bg-white shadow-[0_10px_40px_-15px_rgba(11,12,14,0.25)] backdrop-blur-xl ring-1 ring-black/5 sm:mx-4"
            : "bg-transparent sm:mx-6"
        )}
      >
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative grid h-12 w-12 place-items-center sm:h-14 sm:w-14">
            <Image
              src="/logo.png"
              alt={site.legalName}
              width={56}
              height={56}
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-display text-[15px] font-bold tracking-tight transition-colors",
                scrolled || open ? "text-ink" : "text-white"
              )}
            >
              Perrin&apos;s
            </span>
            <span
              className={cn(
                "text-[11px] font-medium tracking-wide transition-colors",
                scrolled || open ? "text-ink/55" : "text-white/70"
              )}
            >
              Grading, Septic &amp; Earthwork
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors",
                  active ? "font-bold" : "font-medium",
                  scrolled
                    ? "text-ink/70 hover:text-ink"
                    : "text-white/80 hover:text-white"
                )}
              >
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <Button
            href={site.phoneHref}
            size="sm"
            variant="primary"
            className="hidden shadow-none hover:shadow-none sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden md:inline">{site.phone}</span>
            <span className="md:hidden">Call</span>
          </Button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid h-9 w-9 place-items-center rounded-full transition-colors lg:hidden",
              scrolled || open
                ? "bg-ink/[0.06] text-ink hover:bg-ink/10"
                : "bg-white/10 text-white hover:bg-white/20"
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ y: "-12%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-8%", opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-3 top-20 overflow-hidden rounded-4xl bg-white p-3 shadow-card ring-1 ring-black/5"
            >
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{
                  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                }}
                className="flex flex-col gap-1"
              >
                {nav.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <motion.li
                      key={item.href}
                      variants={{
                        hidden: { opacity: 0, x: -16 },
                        show: { opacity: 1, x: 0 },
                      }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between rounded-2xl px-5 py-4 text-lg transition-colors",
                          active
                            ? "font-bold text-ink"
                            : "font-semibold text-ink/70 hover:bg-ink/[0.04]"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
              <div className="mt-3 grid grid-cols-1 gap-2 p-2">
                <Button href={site.phoneHref} size="md" variant="primary">
                  <Phone className="h-4 w-4" /> {site.phone}
                </Button>
                <Button href="/contact" size="md" variant="dark">
                  Get a Free Estimate
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
