import { techStack } from "@/lib/data";

export function TechStack() {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl rounded-3xl border border-zinc-200 bg-white/90 p-8 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/75 md:p-10">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Trusted technologies we work with
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {techStack.map((item) => (
            <div
              key={item}
              className="rounded-md border border-zinc-200 bg-zinc-50 px-4 py-3 text-center text-sm font-semibold text-zinc-700 transition hover:-translate-y-0.5 hover:border-rose-500/50 hover:text-rose-700 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:text-rose-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
