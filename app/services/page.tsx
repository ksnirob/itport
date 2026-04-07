import type { Metadata } from "next";
import { ServicesGrid } from "@/components/services-grid";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore ITPort service offerings including web development, software engineering, UI/UX design, and maintenance.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 pb-8 pt-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-zinc-200 bg-white/90 p-8 shadow-lg shadow-zinc-900/8 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/75 dark:shadow-black/25 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-300">Services</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-zinc-900 dark:text-white sm:text-5xl">
            Full-cycle engineering and design services for modern products.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-300">
            We partner with startups and enterprises across planning, design, development, and continuous optimization.
          </p>
        </div>
      </section>

      <ServicesGrid showHeading={false} />
    </>
  );
}
