"use client";

import { StaggerGroup } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/site";
import { ArrowRight } from "lucide-react";

export function ServicesOverview() {
  return (
    <section className="relative overflow-hidden bg-cream py-10 sm:py-14">
      <div className="container-px">
        <SectionHeading
          eyebrow="What we do"
          accent="green"
          title={
            <>
              Full-Service Grading, Septic
              <br className="hidden sm:block" /> &amp; Earthwork
            </>
          }
          description="From the first cut of dirt to a finished, draining lot — we handle the heavy lifting so your project starts on solid ground."
        />

        <StaggerGroup className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </StaggerGroup>

        <Reveal className="mt-6 flex justify-center" delay={0.1}>
          <Button href="/services" size="lg" variant="dark">
            Explore all services
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
