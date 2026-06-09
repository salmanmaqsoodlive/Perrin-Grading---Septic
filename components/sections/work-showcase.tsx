"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveHorizontal, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => dragging.current && move(e.clientX)}
      onMouseDown={(e) => {
        dragging.current = true;
        move(e.clientX);
      }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
      className="group relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-5xl shadow-card ring-1 ring-black/5"
    >
      {/* After (full) */}
      <Image
        src="/after.jpg"
        alt="After grading"
        fill
        sizes="(max-width:1024px) 100vw, 60vw"
        className="object-cover"
        draggable={false}
      />
      <span className="absolute right-5 top-5 rounded-full bg-brand-red px-3 py-1 text-xs font-semibold text-white shadow-lg">
        After
      </span>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src="/before.jpg"
          alt="Before grading"
          fill
          sizes="(max-width:1024px) 100vw, 60vw"
          className="object-cover"
          draggable={false}
        />
        <span className="absolute left-5 top-5 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-white shadow-lg backdrop-blur">
          Before
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_20px_rgba(0,0,0,0.4)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-card ring-1 ring-black/5 transition-transform group-hover:scale-110">
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

export function WorkShowcase() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="container-px">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
          <Reveal direction="right">
            <BeforeAfter />
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Real results"
              accent="blue"
              title="From overgrown to build-ready"
              description="Drag the slider to see how raw, unusable land becomes a clean, properly graded site ready for a home, septic system, or driveway."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Proper slope &amp; positive drainage every time",
                "Compacted, build-ready surfaces",
                "Clean lines and tidy finished sites",
              ].map((t, i) => (
                <Reveal key={i} delay={0.1 + i * 0.08}>
                  <li className="flex items-center gap-3 text-ink/75">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-red/10 text-brand-red">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: t }} />
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.3}>
              <Link
                href="/gallery"
                className="mt-9 inline-flex items-center gap-1.5 font-semibold text-ink transition-colors hover:text-brand-red"
              >
                See the full project gallery
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
