import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/lib/data";
import { SectionHeading } from "./section-heading";

type ProjectGridProps = {
  limit?: number;
  showHeading?: boolean;
};

export function ProjectGrid({ limit, showHeading = true }: ProjectGridProps) {
  const projects = typeof limit === "number" ? featuredProjects.slice(0, limit) : featuredProjects;

  return (
    <section id="work" className="px-6 py-16 sm:px-10 lg:px-16">
      {showHeading ? (
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected projects that solved real business problems"
          description="A glimpse into our recent engineering and product design engagements."
        />
      ) : null}

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white/90 shadow-lg shadow-zinc-900/8 transition hover:-translate-y-1 hover:border-rose-600/70 dark:border-zinc-800 dark:bg-zinc-950/70 dark:shadow-black/25"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl font-semibold text-zinc-900 transition group-hover:text-rose-700 dark:text-white dark:group-hover:text-rose-300">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{project.description}</p>
              {"liveUrl" in project ? (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold text-rose-700 transition hover:text-rose-800 dark:text-rose-300 dark:hover:text-rose-200"
                >
                  Visit Website
                </Link>
              ) : null}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-rose-400/60 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
