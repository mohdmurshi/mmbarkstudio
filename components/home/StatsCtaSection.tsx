import Link from "next/link";
import Container from "@/components/common/Container";
import { siteConfig } from "@/lib/data";

export default function StatsCtaSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black video-shadow">
          <video autoPlay muted loop playsInline className="aspect-[16/8] w-full object-cover opacity-45">
            <source src="/videos/stats-loop.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-300">Let’s Chat</p>
            <div className="mb-8 grid gap-6 sm:grid-cols-3">
              {siteConfig.stats.map((item) => (
                <div key={item.label} className="min-w-[110px]">
                  <div className="text-2xl font-semibold text-white sm:text-4xl">{item.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.24em] text-zinc-300">{item.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="rounded-xl bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:scale-[1.03]"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}