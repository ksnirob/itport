export default function Loading() {
  return (
    <div className="px-6 py-12 sm:px-10 lg:px-16" role="status" aria-live="polite" aria-label="Loading content">
      <div className="mx-auto max-w-6xl animate-pulse space-y-6">
        <div className="h-12 w-2/3 rounded-xl bg-slate-200 dark:bg-slate-800" />
        <div className="h-6 w-1/2 rounded-xl bg-slate-200 dark:bg-slate-800" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="h-40 rounded-2xl bg-slate-200 dark:bg-slate-800" />
          ))}
        </div>
      </div>
    </div>
  );
}
