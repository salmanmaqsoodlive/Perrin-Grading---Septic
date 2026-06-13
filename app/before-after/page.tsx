import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CTABanner } from "@/components/sections/cta-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { BeforeAfterSlider } from "@/components/before-after-slider";

export const metadata: Metadata = {
  title: "Before & After",
  description:
    "Drag the slider to see raw, overgrown land transformed into clean, build-ready sites by Perrin's Grading & Septic LLC — land clearing, grading, and site prep.",
};

const pairs = [
  {
    before: "/before-after/before-1.jpg",
    after: "/before-after/after-1.jpg",
    beforeAlt: "Raw, freshly excavated basin before the pond was filled",
    afterAlt: "Finished pond holding water with shaped, graded banks",
    eyebrow: "Pond building",
    title: "From Bare Basin to Finished Pond",
    description:
      "Drag the slider to see a freshly excavated and shaped basin transformed into a sealed pond that holds its level.",
    points: [
      "Excavated &amp; shaped to hold water",
      "Banks graded and sealed",
      "Clean, finished water feature",
    ],
  },
  {
    before: "/before-after/before-2.webp",
    after: "/before-after/after-2.webp",
    beforeAlt: "Overgrown brush and undergrowth before clearing",
    afterAlt: "Same area cleared and mowed down to clean ground",
    objectPosition: "center bottom",
    eyebrow: "Land clearing",
    title: "From Overgrown to Wide Open",
    description:
      "Drag the slider to see thick brush and undergrowth cut down and cleared, opening the property back up.",
    points: [
      "Brush &amp; undergrowth removed",
      "Debris cleared away",
      "Open, usable ground",
    ],
  },
  {
    before: "/before-after/before-3.jpg",
    after: "/before-after/after-3.jpg",
    beforeAlt: "Overgrown brush along the roadside before clearing",
    afterAlt: "Clean, cleared roadside after land clearing",
    eyebrow: "Land clearing",
    title: "From Roadside Tangle to Clean Lines",
    description:
      "Drag the slider to see a tangled roadside strip cleared and hauled off, leaving clean lines ready for the next phase.",
    points: [
      "Heavy brush removed",
      "Debris fully hauled away",
      "Clean lines along the road",
    ],
  },
  {
    before: "/before-after/before-4.webp",
    after: "/before-after/after-4.webp",
    beforeAlt: "Dirt pile and excavator beside a concrete pad before grading",
    afterAlt: "Site graded flat and smooth next to the concrete pad",
    eyebrow: "Site grading",
    title: "From Rough Dirt to Proper Grade",
    description:
      "Drag the slider to see rough, piled dirt shaped into a clean, compacted site with proper slope and positive drainage.",
    points: [
      "Proper slope &amp; positive drainage",
      "Compacted, build-ready surface",
      "Clean lines and tidy finish",
    ],
  },
];

export default function BeforeAfterPage() {
  return (
    <>
      <PageHero
        crumb="Before & After"
        eyebrow="The transformation"
        title="Drag to See the Difference"
        description="Slide each photo to compare the raw site with the finished result. Every project is real work from our own crew."
        image="/after.jpg"
      />

      <section className="relative overflow-hidden bg-cream py-10 sm:py-14">
        <div className="container-px">
          <div className="flex flex-col gap-14 sm:gap-20">
            {pairs.map((p, i) => {
              const flip = i % 2 === 1;
              return (
                <div
                  key={i}
                  className={`grid items-center gap-8 ${
                    flip
                      ? "lg:grid-cols-[1fr_1.7fr]"
                      : "lg:grid-cols-[1.7fr_1fr]"
                  }`}
                >
                  <Reveal
                    direction={flip ? "left" : "right"}
                    className={flip ? "lg:order-2" : ""}
                  >
                    <BeforeAfterSlider
                      before={p.before}
                      after={p.after}
                      beforeAlt={p.beforeAlt}
                      afterAlt={p.afterAlt}
                      aspectClass="aspect-[4/3]"
                      sizes="(max-width:1024px) 100vw, 60rem"
                      objectPosition={p.objectPosition}
                    />
                  </Reveal>

                  <div className={flip ? "lg:order-1" : ""}>
                    <SectionHeading
                      align="left"
                      eyebrow={p.eyebrow}
                      accent="blue"
                      title={p.title}
                      description={p.description}
                    />
                    <ul className="mt-4 space-y-4">
                      {p.points.map((t, j) => (
                        <Reveal key={j} delay={0.1 + j * 0.08}>
                          <li className="flex items-center gap-3 text-ink/75">
                            <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-red/10 text-brand-red">
                              <ArrowUpRight className="h-4 w-4" />
                            </span>
                            <span dangerouslySetInnerHTML={{ __html: t }} />
                          </li>
                        </Reveal>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner image="/gallery/421.webp" />
    </>
  );
}
