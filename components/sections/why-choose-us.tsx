"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Handshake,
  Hammer,
  BadgeDollarSign,
  Truck,
  MapPin,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, staggerItem, Reveal } from "@/components/ui/reveal";
import { whyChooseUs } from "@/data/site";
import { cn } from "@/lib/utils";

const icons = [Handshake, ShieldCheck, Hammer, BadgeDollarSign, Truck, MapPin];

const accent = {
  red: "from-brand-red/15 to-brand-red/5 text-brand-red",
  green: "from-brand-red/15 to-brand-red/5 text-brand-red",
  blue: "from-brand-red/15 to-brand-red/5 text-brand-red",
};

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-14">
      <div className="container-px">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left: image collage */}
          <Reveal direction="right">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-5xl shadow-card ring-1 ring-black/5">
                <Image
                  src="/dirt.jpg"
                  alt="Perrin's crew operating equipment on a job site"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
              </div>

              {/* Floating glass stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -bottom-6 -left-4 w-56 rounded-4xl bg-white/70 p-5 shadow-card backdrop-blur-xl ring-1 ring-white/60 sm:-left-8"
              >
                <p className="font-display text-3xl font-extrabold text-ink">
                  10+ Years
                </p>
                <p className="mt-1 text-sm text-ink/60">
                  of honest dirt work in this community
                </p>
              </motion.div>

              <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-brand-green/20 blur-3xl" />
            </div>
          </Reveal>

          {/* Right: reasons */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why choose us"
              accent="red"
              title="The Contractor Neighbors Actually Recommend"
              description="We're not the biggest outfit in town — we're the one that shows up, does it right, and stands behind it."
            />

            <StaggerGroup className="mt-6 grid gap-4 sm:grid-cols-2">
              {whyChooseUs.map((item, i) => {
                const Icon = icons[i];
                return (
                  <motion.div
                    key={item.title}
                    variants={staggerItem}
                    whileHover={{ y: -4 }}
                    className="group rounded-4xl border border-black/[0.06] bg-white p-5 transition-shadow hover:shadow-soft"
                  >
                    <div
                      className={cn(
                        "mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br",
                        accent[item.accent]
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
