type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 text-center">
      <p className="inline-flex items-center rounded-full border border-rose-500/30 bg-rose-500/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-rose-700 dark:text-rose-300">
        {eyebrow}
      </p>
      <h2 className="max-w-3xl text-balance font-display text-3xl font-semibold leading-tight text-zinc-900 dark:text-white sm:text-4xl sm:leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300">{description}</p>
      ) : null}
      <span className="h-px w-24 bg-gradient-to-r from-transparent via-rose-500/70 to-transparent" />
    </div>
  );
}
