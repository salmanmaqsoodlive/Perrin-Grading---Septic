"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { type Service } from "@/data/site";
import { staggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const accent = {
  red: {
    chip: "bg-brand-red/10 text-brand-red",
    glow: "group-hover:shadow-[0_30px_60px_-25px_rgba(138,106,74,0.5)]",
    ring: "group-hover:ring-brand-red/30",
    icon: "from-brand-red to-brand-red-soft",
    dot: "text-brand-red",
  },
  green: {
    chip: "bg-brand-red/10 text-brand-red",
    glow: "group-hover:shadow-[0_30px_60px_-25px_rgba(138,106,74,0.5)]",
    ring: "group-hover:ring-brand-red/30",
    icon: "from-brand-red to-brand-red-soft",
    dot: "text-brand-red",
  },
  blue: {
    chip: "bg-brand-red/10 text-brand-red",
    glow: "group-hover:shadow-[0_30px_60px_-25px_rgba(138,106,74,0.5)]",
    ring: "group-hover:ring-brand-red/30",
    icon: "from-brand-red to-brand-red-soft",
    dot: "text-brand-red",
  },
};

export function ServiceCard({
  service,
  detailed = false,
}: {
  service: Service;
  detailed?: boolean;
}) {
  const a = accent[service.accent];
  const Icon = service.icon;

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-4xl bg-white ring-1 ring-black/[0.06] shadow-soft transition-shadow duration-500",
        a.glow,
        a.ring
      )}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        <div
          className={cn(
            "absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg ring-1 ring-white/20 backdrop-blur",
            a.icon
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-7">
        <span
          className={cn(
            "mb-3 inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider",
            a.chip
          )}
        >
          {service.tagline}
        </span>
        <h3 className="font-display text-xl font-bold tracking-tight text-ink">
          {service.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-ink/60">
          {service.description}
        </p>

        {detailed && (
          <ul className="mt-5 grid gap-2.5">
            {service.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2.5 text-sm text-ink/75"
              >
                <span className={cn("grid h-5 w-5 place-items-center rounded-full bg-black/[0.04]", a.dot)}>
                  <Check className="h-3 w-3" />
                </span>
                {f}
              </li>
            ))}
          </ul>
        )}

        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-brand-red"
        >
          Request this service
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}
