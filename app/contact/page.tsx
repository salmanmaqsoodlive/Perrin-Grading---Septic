import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal, StaggerGroup, staggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/data/site";
import { Phone, Mail, Clock, MapPin, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free estimate from Perrin's Grading & Septic LLC. Call, email, or send a message about your land grading, septic, or excavation project.",
};

const contactCards = [
  {
    icon: Phone,
    label: "Call us",
    value: site.phone,
    href: site.phoneHref,
    accent: "from-brand-red/15 to-brand-red/5 text-brand-red",
  },
  {
    icon: Mail,
    label: "Email us",
    value: site.email,
    href: site.emailHref,
    accent: "from-brand-red/15 to-brand-red/5 text-brand-red",
  },
  {
    icon: Clock,
    label: "Hours",
    value: site.hours,
    accent: "from-brand-red/15 to-brand-red/5 text-brand-red",
  },
  {
    icon: MapPin,
    label: "Service area",
    value: site.address,
    accent: "from-brand-red/15 to-brand-red/5 text-brand-red",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title="Let's talk about your project"
        description="Free estimates, honest advice, and a crew that actually answers the phone. Reach out and let's get started."
        image="/gallery/work-15.jpg"
      />

      <section className="bg-white py-10 sm:py-14">
        <div className="container-px">
          {/* Contact cards */}
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((c) => {
              const Icon = c.icon;
              const inner = (
                <div className="group h-full rounded-4xl bg-cream/70 p-6 ring-1 ring-black/[0.05] transition-all hover:-translate-y-1.5 hover:bg-white hover:shadow-card">
                  <div
                    className={`mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${c.accent}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink/40">
                    {c.label}
                  </p>
                  <p className="mt-1 font-semibold text-ink">{c.value}</p>
                </div>
              );
              return (
                <Reveal key={c.label}>
                  {c.href ? (
                    <a href={c.href} className="block h-full">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </Reveal>
              );
            })}
          </StaggerGroup>

          {/* Form + info */}
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <Reveal direction="right">
              <ContactForm />
            </Reveal>

            <div className="flex flex-col gap-6">
              {/* Map placeholder */}
              <Reveal>
                <div className="relative overflow-hidden rounded-5xl bg-ink shadow-card ring-1 ring-black/5">
                  <div
                    className="h-72 w-full bg-cover bg-center opacity-90"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, rgba(11,12,14,0.4), rgba(11,12,14,0.7)), url('/gallery/work-02.jpg')",
                    }}
                  />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="flex flex-col items-center text-center text-white">
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/20">
                        <Navigation className="h-6 w-6" />
                      </span>
                      <p className="mt-3 font-display text-lg font-bold">
                        Serving the local region
                      </p>
                      <p className="mt-1 text-sm text-white/70">
                        {site.address}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-brand-red" />
                </div>
              </Reveal>

              {/* Service area list */}
              <Reveal delay={0.1}>
                <div className="rounded-5xl bg-cream/70 p-8 ring-1 ring-black/[0.05]">
                  <SectionHeading
                    align="left"
                    eyebrow="Where we work"
                    accent="green"
                    title={
                      <span className="text-2xl">Sites we take on</span>
                    }
                  />
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {site.serviceArea.map((area) => (
                      <ServiceTag key={area} label={area} />
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-ink/55">
                    Not sure if you&apos;re in our area? Just ask — we travel for
                    the right project and we&apos;ll always give you a straight
                    answer.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceTag({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink/70 shadow-soft ring-1 ring-black/[0.05]">
      {label}
    </span>
  );
}
