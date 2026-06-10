"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  ArrowUpRight,
  Star,
} from "lucide-react";
import { nav, services, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white noise-overlay">
      {/* glow accents */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-red/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-blue/20 blur-[120px]" />

      <div className="container-px relative z-10 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-28 w-28 place-items-center">
                <Image
                  src="/logo.png"
                  alt={site.legalName}
                  width={112}
                  height={112}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold uppercase tracking-[0.3em]">
                  Perrin&apos;s
                </span>
                <span className="text-xs text-white/55">
                  Grading &amp; Septic LLC
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {site.shortDesc}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-xs font-medium text-white/70">
                Trusted by hundreds of neighbors
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 -translate-y-px opacity-0 transition-all group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Get in touch
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-3 text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 text-brand-red-soft" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-start gap-3 text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 text-brand-red-soft" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-red-soft" />
                {site.address}
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Clock className="mt-0.5 h-4 w-4 text-brand-red-soft" />
                {site.hours}
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Facebook, href: site.social.facebook },
                { Icon: Instagram, href: site.social.instagram },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ y: -3 }}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="font-display text-sm font-medium text-white/70">
            “{site.slogan}”
          </p>
          <p className="text-xs text-white/45">
            Licensed &amp; Insured · Built with care
          </p>
        </div>
      </div>
    </footer>
  );
}
