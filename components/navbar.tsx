"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/data";
import darkLogo from "@/images/itport-logo-dark-mode.png";
import logo from "@/images/itport-logo.png";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-2xl dark:border-zinc-800/70 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <Link href="/" className="group flex items-center">
          <Image src={logo} alt="ITPort logo" priority className="h-11 w-auto dark:hidden" />
          <Image src={darkLogo} alt="ITPort logo" priority className="hidden h-11 w-auto dark:block" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-gradient-to-r from-rose-600 to-red-500 text-white shadow-md shadow-red-600/25"
                    : "text-zinc-700 hover:bg-rose-50 hover:text-rose-700 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-rose-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 md:hidden dark:border-zinc-700 dark:text-zinc-200"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-zinc-200 bg-white/95 px-6 py-4 md:hidden dark:border-zinc-800 dark:bg-zinc-950/95">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-gradient-to-r from-rose-600 to-red-500 text-white"
                      : "text-zinc-700 hover:bg-rose-50 hover:text-rose-700 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-rose-300"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
