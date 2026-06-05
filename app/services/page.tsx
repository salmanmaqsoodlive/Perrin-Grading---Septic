import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, Reveal } from "@/components/ui/reveal";
import { ServicesList } from "@/components/services-list";
import { CTABanner } from "@/components/sections/cta-banner";
import {
  Phone,
  ClipboardList,
  Hammer,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Land grading, septic system installation, septic repair, excavation, land clearing, and hauling — full-service earthwork from Perrin's Grading & Septic LLC.",
};

const process = [
  {
    icon: Phone,
    title: "Reach Out",
    text: "Call or send a message describing your land, grading, or septic needs.",
  },
  {
    icon: ClipboardList,
    title: "On-Site Estimate",
    text: "We walk the site, assess the work, and give you a clear, honest quote.",
  },
  {
    icon: Hammer,
    title: "We Get to Work",
    text: "Our crew and fleet handle the job efficiently, safely, and cleanly.",
  },
  {
    icon: CheckCircle2,
    title: "Done Right",
    text: "We finish, walk it with you, and stand behind every bit of it.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="What we do"
        title="Grading, septic & earthwork done the right way"
        description="One trusted crew for everything from the first cut of dirt to a finished, draining, build-ready site."
        image="/gallery/work-12.jpg"
      />

      {/* Services grid */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our services"
            accent="red"
            title="Everything your site needs"
            description="Each job is handled by experienced operators with the right equipment — no subcontracting your project out to strangers."
          />
          <div className="mt-16">
            <ServicesList detailed />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-ink py-24 text-white noise-overlay sm:py-32">
        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-brand-green/20 blur-[120px]" />
        <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-brand-blue/20 blur-[120px]" />
        <div className="container-px relative z-10">
          <SectionHeading
            eyebrow="How it works"
            accent="green"
            light
            title={<span className="text-white">Simple, straightforward, no surprises</span>}
            description="From first call to final walkthrough, here's exactly what working with us looks like."
          />
          <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={i * 0.08}>
                  <div className="group relative h-full rounded-4xl bg-white/[0.04] p-7 ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:bg-white/[0.07]">
                    <span className="absolute right-6 top-6 font-display text-5xl font-extrabold text-white/[0.06]">
                      0{i + 1}
                    </span>
                    <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-brand-red text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <CTABanner image="/gallery/work-24.jpg" />
    </>
  );
}
