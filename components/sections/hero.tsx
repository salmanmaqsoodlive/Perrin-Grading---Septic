"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const words = ["Solid", "Ground.", "Built", "to", "Last."];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink"
    >
      {/* Parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Land grading and septic work by Perrin's"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent" />
      </motion.div>

      {/* Floating glow accents */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-brand-red/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-brand-red/15 blur-[120px]" />

      <motion.div
        style={{ opacity }}
        className="container-px relative z-10 pt-28 pb-20"
      >
        <div className="max-w-3xl">
          {/* Stagger headline */}
          <h1 className="font-display text-[2.7rem] font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="sr-only">Solid Ground. Built to Last.</span>
            <span aria-hidden className="flex flex-wrap gap-x-4">
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.35 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={
                    w === "Ground." || w === "Last."
                      ? "text-brand-red-soft"
                      : ""
                  }
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-5 font-display text-xl font-semibold italic tracking-tight text-brand-red-soft sm:text-2xl"
          >
            &ldquo;{site.slogan}.&rdquo;
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-4 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl"
          >
            Professional land grading and septic system installation &amp;
            repair — done right the first time by people who treat your
            property like their own.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="/contact" size="lg" variant="primary">
              Get a Free Estimate
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href={site.phoneHref} size="lg" variant="outline">
              <Phone className="h-5 w-5" />
              {site.phone}
            </Button>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.25 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm text-white/70">
                Rated 4.9 by local homeowners
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <ShieldCheck className="h-5 w-5 text-brand-red-soft" />
              25+ years moving dirt the right way
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute inset-x-0 bottom-6 z-10 flex justify-center"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  );
}
