import type { Metadata } from "next";
import { WhyChoose } from "@/components/why-choose";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about ITPort's mission, vision, and approach to digital product development.",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pb-8 pt-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-zinc-200 bg-white/90 p-8 shadow-lg shadow-zinc-900/8 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/75 dark:shadow-black/25 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-300">About ITPort</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-zinc-900 dark:text-white sm:text-5xl">
            We build software that balances speed, quality, and long-term value.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-300">
            ITPort is a software and web development agency helping ambitious teams launch and scale digital products. We focus on architecture, user experience, and delivery discipline to keep products maintainable and business outcomes measurable.
          </p>
        </div>
      </section>

      <section className="px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-md shadow-zinc-900/8 dark:border-zinc-800 dark:bg-zinc-950/70 dark:shadow-black/20">
            <h2 className="font-display text-2xl font-semibold text-zinc-900 dark:text-white">Our Mission</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              Empower organizations with scalable, secure, and intuitive digital solutions that accelerate innovation and growth.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-md shadow-zinc-900/8 dark:border-zinc-800 dark:bg-zinc-950/70 dark:shadow-black/20">
            <h2 className="font-display text-2xl font-semibold text-zinc-900 dark:text-white">Our Vision</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              Become a trusted global product partner known for technical excellence, thoughtful design, and lasting client impact.
            </p>
          </article>
        </div>
      </section>

      <section className="px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-zinc-200 bg-white/90 p-8 shadow-md shadow-zinc-900/8 dark:border-zinc-800 dark:bg-zinc-950/70 dark:shadow-black/20 md:p-10">
          <h2 className="font-display text-3xl font-semibold text-zinc-900 dark:text-white">Team</h2>
          <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-300">
            Our multidisciplinary team includes product strategists, UI/UX designers, frontend specialists, backend engineers, and QA collaborators united by a craftsmanship mindset.
          </p>
        </div>
      </section>

      <WhyChoose />
    </>
  );
}
