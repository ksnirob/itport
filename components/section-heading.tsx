type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 border-l-4 border-rose-500 pl-5 sm:pl-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-600 dark:text-rose-300">{eyebrow}</p>
      <h2 className="max-w-3xl font-display text-3xl font-semibold text-zinc-900 dark:text-white sm:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">{description}</p> : null}
    </div>
  );
}
