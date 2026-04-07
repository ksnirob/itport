import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with ITPort to discuss your web or software development project.",
};

export default function ContactPage() {
  return (
    <section className="px-6 pb-16 pt-16 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white/90 p-8 shadow-lg shadow-zinc-900/8 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/75 dark:shadow-black/25 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-300">Contact ITPort</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-zinc-900 dark:text-white">Let&apos;s discuss your project</h1>
          <p className="mt-5 text-base leading-8 text-zinc-600 dark:text-zinc-300">
            Tell us what you are building and where you need support. We usually respond within one business day.
          </p>

          <div className="mt-8 space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
            <p>
              <span className="font-semibold">Email:</span> hello@itport.dev
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +1 (555) 402-1299
            </p>
            <p>
              <span className="font-semibold">Location:</span> Remote-first, global delivery
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800" aria-label="Map placeholder showing service coverage">
            <iframe
              title="ITPort location map"
              src="https://maps.google.com/maps?q=Dhaka&t=&z=10&ie=UTF8&iwloc=&output=embed"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
