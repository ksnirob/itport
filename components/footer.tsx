import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-white/90 dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 py-12 lg:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center" aria-label="ITPort home">
              <Image
                src="/images/itport-logo.png"
                alt="ITPort"
                width={150}
                height={44}
                className="block h-11 w-auto dark:hidden"
                priority
              />
              <Image
                src="/images/itport-logo-dark-mode.png"
                alt="ITPort"
                width={150}
                height={44}
                className="hidden h-11 w-auto dark:block"
                priority
              />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-zinc-600 dark:text-zinc-300">
              Building scalable digital solutions through modern web and software engineering.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Quick Links</p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link href="/services" className="text-zinc-700 transition hover:text-rose-700 dark:text-zinc-200 dark:hover:text-rose-300">
                Services
              </Link>
              <Link href="/portfolio" className="text-zinc-700 transition hover:text-rose-700 dark:text-zinc-200 dark:hover:text-rose-300">
                Portfolio
              </Link>
              <Link href="/contact" className="text-zinc-700 transition hover:text-rose-700 dark:text-zinc-200 dark:hover:text-rose-300">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Contact</p>
            <div className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
              <p className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-rose-500" aria-hidden="true" />
                <a href="mailto:info@itport.com.bd" className="transition hover:text-rose-700 dark:hover:text-rose-300">
                  info@itport.com.bd
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-rose-500" aria-hidden="true" />
                <span>
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
                <span>Confidence Center 6A, Kha-9, Progoti Sharani, Shahjadpur, Gulshan, Building No: 1, Dhaka-1212</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200 px-6 sm:px-10 lg:px-16 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl py-5 text-center text-xs text-zinc-500 dark:text-zinc-400">
          {new Date().getFullYear()} ITPort. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
