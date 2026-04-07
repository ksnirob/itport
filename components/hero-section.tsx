"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    tag: "Introducing",
    title: "Professional Web Agency",
    description:
      "We design and develop clean, modern websites that convert visitors into customers through strategy-led design and engineering.",
    image: "/images/slider-2.svg",
    cta: "Build Your Website Now",
  },
  {
    tag: "Creative Studio",
    title: "We Design for Brands",
    description:
      "From startup launches to enterprise refreshes, we build powerful digital identities and high-performing product experiences.",
    image: "/images/slider-2.svg",
    cta: "What Our Clients Say",
  },
  {
    tag: "Growth Partner",
    title: "Web Experiences That Drive Results",
    description:
      "We combine storytelling, UI strategy, and robust development to create websites people remember and businesses scale with.",
    image: "/images/slider-3.svg",
    cta: "Start a Project",
  },
] as const;

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[activeSlide];

  const goPrev = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goNext = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section className="relative w-full overflow-hidden px-0">
      <div className="relative w-full bg-[#f3f3f5] py-10 dark:bg-zinc-950/80 sm:py-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.title}
            initial={{ opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -26 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mx-auto grid w-full max-w-[1400px] items-center gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:px-16"
          >
            <div className="order-1 w-full min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                {slide.tag}
              </p>
              <h1 className="mt-4 max-w-xl font-display text-5xl font-semibold uppercase leading-[1.05] text-zinc-900 dark:text-white sm:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-5 max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-300">
                {slide.description}
              </p>

              <div className="mt-8 flex items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-rose-600 to-red-500 px-7 text-sm font-semibold text-white shadow-lg shadow-rose-400/30 transition hover:-translate-y-0.5"
                >
                  {slide.cta}
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-2">
                {heroSlides.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    aria-label={`Go to hero slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 rounded-full transition ${
                      index === activeSlide ? "w-8 bg-rose-600" : "w-2.5 bg-zinc-300 dark:bg-zinc-700"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="relative order-2 w-full min-w-0">
              <div className="relative mx-auto h-[320px] w-full max-w-[520px] overflow-hidden rounded-[2.5rem] sm:h-[380px] lg:h-[430px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={activeSlide === 0}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />

                <div className="absolute -left-8 bottom-6 h-24 w-24 rounded-3xl bg-yellow-400/90" />
                <div className="absolute -right-6 top-6 h-20 w-20 rounded-3xl bg-lime-400/80" />
                <div className="absolute right-8 top-2 h-12 w-12 rounded-2xl bg-orange-400/90" />
                <div className="absolute left-6 top-1/2 h-10 w-10 -translate-y-1/2 rounded-2xl bg-blue-500/70" />

                <div className="absolute left-3 top-8 h-1 w-18 bg-black/85" />
                <div className="absolute left-9 top-11 h-1 w-14 bg-black/85" />
                <div className="absolute bottom-10 left-1/2 h-1 w-20 -translate-x-1/2 bg-black/90" />
                <div className="absolute bottom-8 left-1/2 h-1 w-4 -translate-x-[170%] rotate-45 bg-black/90" />
                <div className="absolute bottom-8 left-1/2 h-1 w-4 -translate-x-[80%] rotate-[-45deg] bg-black/90" />
                <div className="absolute bottom-8 left-1/2 h-1 w-4 translate-x-[5%] rotate-45 bg-black/90" />
                <div className="absolute bottom-8 left-1/2 h-1 w-4 translate-x-[95%] rotate-[-45deg] bg-black/90" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-8 right-8 hidden items-center gap-2 lg:flex">
          <button
            type="button"
            aria-label="Previous hero slide"
            onClick={goPrev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition hover:border-rose-400 hover:text-rose-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next hero slide"
            onClick={goNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition hover:border-rose-400 hover:text-rose-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
