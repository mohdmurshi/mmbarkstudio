import Link from "next/link";
import { CircleFadingPlus, Mail, Video } from "lucide-react";
import Container from "@/components/common/Container";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-zinc-950/80">
      <Container className="space-y-10 py-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <div className="text-3xl font-semibold italic">{siteConfig.brand}</div>
            <div className="flex flex-col gap-3 text-sm text-zinc-300 sm:flex-row sm:items-center sm:gap-6">
              <div className="inline-flex items-center gap-2"><Mail size={15} /> {siteConfig.email}</div>
              <div>{siteConfig.location}</div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.22em] text-zinc-300">
            <Link href="/">Home</Link>
            <Link href="/work">Work</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="glass-card grid gap-8 rounded-3xl p-6 sm:p-8 lg:grid-cols-3 lg:items-center">
          <div className="text-sm text-zinc-300">Copyright © 2025 {siteConfig.personName}.</div>
          <div className="text-center text-xs uppercase tracking-[0.2em] text-zinc-300">Privacy</div>
          <div className="flex items-center justify-start gap-4 lg:justify-end">
            <a href={siteConfig.instagram} target="_blank" className="rounded-full border border-white/10 p-2"><CircleFadingPlus size={18} /></a>
            <a href={siteConfig.youtube} target="_blank" className="rounded-full border border-white/10 p-2"><Video size={18} /></a>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Powered by MMBARKSTUDIO.</p>
          <p>{siteConfig.title}</p>
        </div>
      </Container>
    </footer>
  );
}