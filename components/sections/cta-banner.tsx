"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function CTABanner({
  image = "/gallery/work-33.jpg",
}: {
  image?: string;
}) {
  return (
    <section className="container-px py-10 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-5xl bg-ink px-7 py-16 text-center shadow-card sm:px-12 sm:py-20"
      >
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/90 via-ink/80 to-ink/95" />
        </div>
        <div className="pointer-events-none absolute -left-10 -top-10 h-60 w-60 rounded-full bg-brand-red/30 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-60 w-60 rounded-full bg-brand-green/30 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="eyebrow text-brand-red-soft">
            <span className="h-px w-7 bg-brand-red-soft" />
            Ready when you are
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            Let&apos;s get your project on solid ground.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Free, no-pressure estimates. Tell us about your land, grading, or
            septic needs and we&apos;ll give you a straight answer.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg" variant="primary">
              Get a Free Estimate
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href={site.phoneHref} size="lg" variant="outline">
              <Phone className="h-5 w-5" />
              {site.phone}
            </Button>
          </div>
          <p className="mt-6 font-display text-sm font-medium text-white/50">
            “{site.slogan}”
          </p>
        </div>
      </motion.div>
    </section>
  );
}
