import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { CTABanner } from "@/components/sections/cta-banner";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse real land grading, septic installation, excavation, and land clearing projects completed by Perrin's Grading & Septic LLC.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        eyebrow="Our work"
        title="Real projects, real dirt, real results"
        description={`A look at ${galleryItems.length}+ completed grading, septic, and earthwork jobs. Every photo is work from our own crew.`}
        image="/gallery/368.jpeg"
      />

      <section className="bg-cream py-10 sm:py-14">
        <div className="container-px">
          <GalleryGrid />
        </div>
      </section>

      <CTABanner image="/gallery/421.webp" />
    </>
  );
}
