"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { SectionHeading } from "./section-heading";

type ServicesGridProps = {
  showHeading?: boolean;
};

export function ServicesGrid({ showHeading = true }: ServicesGridProps) {
  return (
    <section id="services" className="px-6 py-16 sm:px-10 lg:px-16">
      {showHeading ? (
        <SectionHeading
          eyebrow="What we do"
          title="End-to-end services for digital growth"
          description="From strategy to launch and beyond, we craft scalable products that perform in the real world."
        />
      ) : null}

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-xl shadow-zinc-900/8 backdrop-blur transition hover:-translate-y-1 hover:border-rose-600/70 dark:border-zinc-800 dark:bg-zinc-950/70 dark:shadow-black/20"
            >
              <div className="inline-flex rounded-lg border border-rose-500/40 bg-rose-500/10 p-3 text-rose-300">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-zinc-900 transition group-hover:text-rose-700 dark:text-white dark:group-hover:text-rose-300">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
