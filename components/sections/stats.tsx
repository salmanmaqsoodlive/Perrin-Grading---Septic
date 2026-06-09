"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Counter } from "@/components/ui/counter";
import { stats } from "@/data/site";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink py-10 text-white noise-overlay sm:py-14">
      {/* bg image */}
      <div className="absolute inset-0">
        <Image
          src="/gallery/work-15.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-brand-red/20 blur-[120px]" />

      <div className="container-px relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 max-w-2xl text-center font-display text-2xl font-bold tracking-tight sm:text-3xl"
        >
          A track record measured in finished jobs &amp; happy neighbors.
        </motion.p>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-4xl bg-white/[0.04] p-7 text-center ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:bg-white/[0.07]"
            >
              <div className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={(stat as { decimals?: number }).decimals ?? 0}
                  className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-white/55">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
