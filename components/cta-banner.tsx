import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 overflow-hidden rounded-[2rem] border border-zinc-800 bg-gradient-to-r from-zinc-950 via-zinc-900 to-rose-900 p-8 text-white shadow-2xl shadow-black/30 md:flex-row md:items-center md:justify-between md:p-12">
        <div className="pointer-events-none absolute -left-10 top-0 h-full w-1/3 skew-x-[-18deg] bg-rose-600/20" />
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-300">Ready to scale</p>
          <h3 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Let&apos;s build your next digital product with confidence.
          </h3>
          <p className="mt-4 text-zinc-200">
            Partner with ITPort to design, develop, and launch software that creates measurable growth.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center justify-center rounded-md bg-rose-600 px-6 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-rose-500"
        >
          Start a Project
        </Link>
      </div>
    </section>
  );
}
