"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Container from "@/components/common/Container";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="font-heading text-3xl font-semibold tracking-tight text-white">
          <span>{siteConfig.brand}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] text-zinc-200 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-xl border border-white/10 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-[1.03] md:inline-flex"
        >
          Contact
        </Link>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex rounded-lg border border-white/10 bg-white/5 p-2 text-white md:hidden"
          aria-label="Open menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-black/95 md:hidden">
          <Container className="flex flex-col gap-4 py-5">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-[0.2em] text-zinc-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}