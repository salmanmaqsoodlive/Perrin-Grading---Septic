"use client";

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-red/60 disabled:pointer-events-none disabled:opacity-50 will-change-transform active:scale-[0.97]",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-br from-brand-red to-brand-red-soft text-white shadow-[0_12px_30px_-10px_rgba(192,56,43,0.6)] hover:shadow-[0_18px_44px_-10px_rgba(192,56,43,0.7)] hover:-translate-y-0.5",
        dark: "bg-ink text-white shadow-soft hover:bg-ink-soft hover:-translate-y-0.5",
        light:
          "bg-white text-ink shadow-soft hover:-translate-y-0.5 hover:shadow-card border border-black/5",
        outline:
          "border border-white/30 bg-white/5 text-white backdrop-blur-md hover:bg-white/15 hover:-translate-y-0.5",
        ghost: "text-ink hover:bg-black/5",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-[15px]",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  shine?: boolean;
}

const Inner = ({
  children,
  shine,
}: {
  children: React.ReactNode;
  shine?: boolean;
}) => (
  <>
    {shine !== false && (
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
    )}
    <span className="relative z-10 inline-flex items-center gap-2">
      {children}
    </span>
  </>
);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, shine, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className);
    if (href) {
      const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
      if (external) {
        return (
          <a href={href} className={classes}>
            <Inner shine={shine}>{children}</Inner>
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          <Inner shine={shine}>{children}</Inner>
        </Link>
      );
    }
    return (
      <button ref={ref} className={classes} {...props}>
        <Inner shine={shine}>{children}</Inner>
      </button>
    );
  }
);
Button.displayName = "Button";
