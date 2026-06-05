"use client";

import { StaggerGroup } from "@/components/ui/reveal";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/site";

export function ServicesList({ detailed = false }: { detailed?: boolean }) {
  return (
    <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} detailed={detailed} />
      ))}
    </StaggerGroup>
  );
}
