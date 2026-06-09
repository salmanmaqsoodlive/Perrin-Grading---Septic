"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, staggerItem } from "@/components/ui/reveal";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-14">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-brand-red/[0.06] blur-3xl" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Kind words"
          accent="red"
          title="People trust us with their property"
          description="Don't take our word for it — here's what homeowners and builders say after we've finished the job."
        />

        <StaggerGroup className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="relative flex flex-col rounded-4xl border border-black/[0.06] bg-white/70 p-8 shadow-soft backdrop-blur-sm transition-shadow hover:shadow-card"
            >
              <Quote className="h-9 w-9 text-brand-red/20" />
              <div className="mt-3 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/75">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-black/[0.06] pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-red font-display text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-sm text-ink/50">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
