import Link from "next/link";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { works } from "@/lib/data";

export default function WorkPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Work"
          title="Portfolio"
          description="From cinematic filmmaking to advanced post-production and AI-powered visuals, these projects reflect the visual language of MMBARKSTUDIO."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {works.map((work) => (
            <Link key={work.slug} href={`/about/${work.slug}`}>
              <article className="hover-lift overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/[0.03]">
                <div className="aspect-[16/10] overflow-hidden">
                  <video
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="h-full w-full object-cover"
                    poster={work.poster}
                  >
                    <source src={work.hoverVideo} type="video/mp4" />
                  </video>
                </div>
                <div className="space-y-3 px-4 py-5 sm:px-5">
                  <h3 className="text-lg font-medium text-white sm:text-xl">{work.title}</h3>
                  <div className="border-t border-white/10 pt-3 text-sm text-zinc-300">{work.category}</div>
                  <div className="border-t border-white/10 pt-3 text-sm text-zinc-400">{work.date}</div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}