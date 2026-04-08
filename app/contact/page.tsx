import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
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
            <p className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-rose-500" aria-hidden="true" />
              <span>
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:info@itport.com.bd" className="transition hover:text-rose-700 dark:hover:text-rose-300">
                  info@itport.com.bd
                </a>
              </span>
            </p>
            <p className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-rose-500" aria-hidden="true" />
              <span>
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+8801857901880" className="transition hover:text-rose-700 dark:hover:text-rose-300">
                  +8801857901880
                </a>
                {", "}
                <a href="tel:+8801830681074" className="transition hover:text-rose-700 dark:hover:text-rose-300">
                  +8801830681074
                </a>
              </span>
            </p>
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-rose-500" aria-hidden="true" />
              <span>
                <span className="font-semibold">Location:</span> Confidence Center 6A, Kha-9, Progoti Sharani, Shahjadpur, Gulshan, Building No: 1, Dhaka-1212
              </span>
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800" aria-label="Map placeholder showing service coverage">
            <iframe
              title="ITPort location map"
              src="https://maps.google.com/maps?q=Confidence%20Center%206A%2C%20Kha-9%2C%20Progoti%20Sharani%2C%20Shahjadpur%2C%20Gulshan%2C%20Dhaka-1212&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
