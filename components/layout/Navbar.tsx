"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

const links = [
  { href: "/restaurant", label: "Restaurant Reservations" },
  { href: "/doctor", label: "Doctor Appointments" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-slate-50/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-700 text-sm font-bold text-white shadow-sm">
            BK
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-900">
              Dual Booking
            </span>
            <span className="text-xs text-slate-500">Restaurant & Doctor</span>
          </div>
        </Link>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/60 text-slate-700 shadow-xs transition hover:bg-white sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-4 rounded-full bg-slate-900" />
            <span className="block h-0.5 w-3 rounded-full bg-slate-900" />
          </span>
        </button>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "relative px-1 py-1 transition",
                pathname.startsWith(link.href)
                  ? "text-slate-900"
                  : "hover:text-slate-900",
              )}
            >
              <span>{link.label}</span>
              {pathname.startsWith(link.href) && (
                <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-blue-600" />
              )}
            </Link>
          ))}
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200/70 bg-slate-50/95 px-4 pb-3 pt-2 shadow-sm sm:hidden">
          <div className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "rounded-xl bg-white/80 px-3 py-2 shadow-xs backdrop-blur-sm transition hover:bg-white",
                  pathname.startsWith(link.href) &&
                    "ring-1 ring-blue-200 text-blue-900",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

