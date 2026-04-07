import { trustPoints } from "@/lib/data";

export function WhyChoose() {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold text-zinc-900 dark:text-white sm:text-4xl">Why choose ITPort</h2>
        <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-300">
          We blend strategic thinking, thoughtful design, and engineering excellence to create products that move businesses forward.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <article
                key={point.title}
                className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-md shadow-zinc-900/8 dark:border-zinc-800 dark:bg-zinc-950/70 dark:shadow-black/20"
              >
                <div className="inline-flex rounded-xl border border-rose-500/40 bg-rose-500/10 p-2.5 text-rose-300">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-zinc-900 dark:text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{point.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
