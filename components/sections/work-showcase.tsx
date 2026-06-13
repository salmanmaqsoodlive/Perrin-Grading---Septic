"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { BeforeAfterSlider } from "@/components/before-after-slider";

export function WorkShowcase() {
  return (
    <section className="relative overflow-hidden bg-cream py-10 sm:py-14">
      <div className="container-px">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal direction="right">
            <BeforeAfterSlider
              before="/before.jpg"
              after="/after.jpg"
              beforeAlt="Before grading"
              afterAlt="After grading"
            />
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Real results"
              accent="blue"
              title="From Overgrown to Build-Ready"
              description="Drag the slider to see how raw, unusable land becomes a clean, properly graded site ready for a home, septic system, or driveway."
            />
            <ul className="mt-4 space-y-4">
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
