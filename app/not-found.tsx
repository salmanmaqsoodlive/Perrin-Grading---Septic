import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden bg-ink text-center noise-overlay">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/15 blur-[140px]" />
      <div className="container-px relative z-10">
        <p className="font-display text-[7rem] font-extrabold leading-none text-white/90 sm:text-[10rem]">
          404
        </p>
        <h1 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
          This ground hasn&apos;t been graded yet.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-white/60">
          The page you&apos;re looking for moved or never existed. Let&apos;s get
          you back on solid footing.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg" variant="primary">
            <Home className="h-5 w-5" /> Back home
          </Button>
          <Button href="/contact" size="lg" variant="outline">
            <ArrowLeft className="h-5 w-5" /> Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
