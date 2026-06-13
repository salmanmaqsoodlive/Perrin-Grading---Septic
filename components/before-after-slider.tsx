"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfterSlider({
  before,
  after,
  beforeAlt = "Before",
  afterAlt = "After",
  sizes = "(max-width:1024px) 100vw, 60vw",
  aspectClass = "aspect-[16/10]",
  objectPosition = "center",
}: {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  sizes?: string;
  aspectClass?: string;
  objectPosition?: string;
}) {
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
      className={`group relative ${aspectClass} w-full cursor-ew-resize select-none overflow-hidden rounded-5xl shadow-card ring-1 ring-black/5`}
    >
      {/* After (full) */}
      <Image
        src={after}
        alt={afterAlt}
        fill
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition }}
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
          src={before}
          alt={beforeAlt}
          fill
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition }}
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
