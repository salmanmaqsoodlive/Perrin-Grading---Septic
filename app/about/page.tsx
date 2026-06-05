import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, StaggerGroup, staggerItem } from "@/components/ui/reveal";
import { CTABanner } from "@/components/sections/cta-banner";
import { Counter } from "@/components/ui/counter";
import { timeline, stats, site } from "@/data/site";
import { Target, Heart, Compass, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Perrin's Grading & Septic LLC is an owner-operated grading and septic contractor built on honest work, skilled people, and decades of dirt-moving experience.",
};

const values = [
  {
    icon: Heart,
    title: "People First",
    text: "We treat customers, crew, and community with the same respect — that's the whole company in one sentence.",
    accent: "text-brand-red",
    bg: "from-brand-red/15 to-brand-red/5",
  },
  {
    icon: Compass,
    title: "Do It Right",
    text: "Proper grade, real drainage, code-compliant septic. We build it to last, not just to pass.",
    accent: "text-brand-red",
    bg: "from-brand-red/15 to-brand-red/5",
  },
  {
    icon: Target,
    title: "Show Up",
    text: "On time, every day, until the job is done. Reliability is the foundation everything else sits on.",
    accent: "text-brand-red",
    bg: "from-brand-red/15 to-brand-red/5",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Our Story"
        title="Built by good people who love hard, honest work"
        description="Perrin's Grading & Septic is a family of operators who'd rather earn your trust than chase your money."
        image="/gallery/work-30.jpg"
      />

      {/* Story */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-px grid items-center gap-16 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-5xl shadow-card ring-1 ring-black/5">
                <Image
                  src="/gallery/work-45.jpeg"
                  alt="Perrin's equipment and crew on a project"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 w-52 rounded-4xl bg-white/70 p-5 shadow-card backdrop-blur-xl ring-1 ring-white/60 sm:-right-8">
                <p className="font-display text-3xl font-extrabold text-ink">
                  1,200+
                </p>
                <p className="mt-1 text-sm text-ink/60">
                  jobs finished and stood behind
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Who we are"
              accent="red"
              title="A contractor you'd be glad to have as a neighbor"
              description="Perrin's started with one truck and a simple idea — that grading and septic work could be done honestly, skillfully, and without the runaround."
            />
            <div className="mt-6 space-y-4 text-ink/70 leading-relaxed">
              <Reveal delay={0.05}>
                <p>
                  Over the years we&apos;ve grown from a single dump truck into a
                  full fleet of excavators, dozers, and trucks — but the way we
                  work hasn&apos;t changed. We still answer the phone, still walk
                  every site ourselves, and still treat your property like our
                  own.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p>
                  Whether it&apos;s grading a tricky lot, installing a complete
                  septic system, or repairing a failing drain field, we bring the
                  same standard to every job: do it right, leave it clean, and
                  stand behind it.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Slogan highlight */}
      <section className="relative overflow-hidden bg-ink py-28 text-center noise-overlay">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/15 blur-[140px]" />
        <div className="container-px relative z-10">
          <Reveal>
            <Sparkles className="mx-auto mb-6 h-8 w-8 text-brand-red-soft" />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto max-w-4xl font-display text-3xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
              “Great People,{" "}
              <span className="text-brand-red-soft">Great Company.</span>
              ”
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              It&apos;s not just our slogan — it&apos;s the standard we hire by,
              work by, and answer to. Good people doing good work is the entire
              business.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="container-px">
          <SectionHeading
            eyebrow="What we stand for"
            accent="green"
            title="The values behind every job"
          />
          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title}>
                  <div className="group h-full rounded-4xl bg-white p-8 shadow-soft ring-1 ring-black/[0.05] transition-all hover:-translate-y-2 hover:shadow-card">
                    <div
                      className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${v.bg} ${v.accent}`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-ink/60">{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our journey"
            accent="blue"
            title="From one truck to a trusted name"
            description="The same hands-on values, scaled up one honest job at a time."
          />

          <div className="relative mx-auto mt-16 max-w-3xl">
            {/* vertical line */}
            <div className="absolute left-[19px] top-2 h-full w-px bg-brand-red/40 sm:left-1/2 sm:-translate-x-px" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.05}>
                  <div
                    className={`relative flex items-start gap-6 sm:w-1/2 ${
                      i % 2 === 0
                        ? "sm:ml-0 sm:pr-12 sm:text-right"
                        : "sm:ml-auto sm:pl-12"
                    }`}
                  >
                    <span
                      className={`relative z-10 mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white font-display text-sm font-bold text-ink shadow-soft ring-4 ring-cream ${
                        i % 2 === 0 ? "sm:order-2 sm:-mr-[60px]" : "sm:-ml-[60px]"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div className="rounded-4xl bg-cream/70 p-6 shadow-soft ring-1 ring-black/[0.04]">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-red">
                        {item.year}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-bold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/60">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mini stats */}
      <section className="bg-cream pb-8">
        <div className="container-px grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="rounded-4xl bg-white p-7 text-center shadow-soft ring-1 ring-black/[0.05]">
                <div className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
                  <Counter
                    value={s.value}
                    suffix={s.suffix}
                    decimals={(s as { decimals?: number }).decimals ?? 0}
                  />
                </div>
                <p className="mt-2 text-sm text-ink/55">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner image="/gallery/work-08.jpg" />
    </>
  );
}
