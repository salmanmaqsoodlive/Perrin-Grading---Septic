"use client";

import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const accentMap = {
  red: "text-brand-red",
  green: "text-brand-red",
  blue: "text-brand-red",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  accent = "red",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  accent?: "red" | "green" | "blue";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "eyebrow",
              accentMap[accent]
            )}
          >
            <span className="h-px w-7 bg-brand-red" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "font-display text-3xl font-bold leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]",
            light ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-base leading-relaxed sm:text-lg",
              light ? "text-white/70" : "text-ink/60",
              align === "center" ? "mx-auto" : ""
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
