"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16">
      <SectionHeading
        eyebrow="Client trust"
        title="Teams choose ITPort for clarity, speed, and execution"
      />

      <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-zinc-200 bg-white/90 p-8 shadow-xl shadow-zinc-900/8 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/75 dark:shadow-black/30 sm:p-12">
        <AnimatePresence mode="wait">
          <motion.figure
            key={current.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <blockquote className="border-l-4 border-rose-500 pl-5 text-xl leading-9 text-zinc-800 dark:text-zinc-100 sm:text-2xl">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-semibold text-zinc-900 dark:text-white">{current.name}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{current.role}</p>
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((entry, dotIndex) => (
            <button
              key={entry.name}
              aria-label={`Go to testimonial ${dotIndex + 1}`}
              onClick={() => setIndex(dotIndex)}
              className={`h-2.5 rounded-full transition ${
                dotIndex === index ? "w-8 bg-rose-500" : "w-2.5 bg-slate-300 dark:bg-slate-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
