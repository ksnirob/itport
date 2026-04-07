import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-white/90 dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 sm:px-10 lg:grid-cols-3 lg:px-16">
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
            <p>hello@itport.dev</p>
            <p>+1 (555) 402-1299</p>
            <p>Remote-first, serving global clients</p>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200 px-6 py-5 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        {new Date().getFullYear()} ITPort. All rights reserved.
      </div>
    </footer>
  );
}
