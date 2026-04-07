import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { works } from "@/lib/data";

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);

  if (!work) return notFound();

  const moreWorks = works.filter((item) => item.slug !== slug).slice(0, 4);

  return (
    <section className="py-16 sm:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow={work.category}
          title={work.title}
          description={work.description}
        />

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black video-shadow">
          {work.youtubeEmbed ? (
            <iframe
              src={work.youtubeEmbed}
              title={work.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="aspect-video w-full"
            />
          ) : (
            <video controls className="aspect-video w-full object-cover" poster={work.poster}>
              <source src={work.heroVideo} type="video/mp4" />
            </video>
          )}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-card rounded-[1.75rem] p-6 sm:p-8">
            <h3 className="mb-4 text-xl font-medium text-white">About this project</h3>
            <p className="text-sm leading-7 text-zinc-300 sm:text-base">{work.description}</p>
          </div>

          <div className="glass-card rounded-[1.75rem] p-6 sm:p-8">
            <h3 className="mb-4 text-xl font-medium text-white">Project details</h3>
            <div className="space-y-4 text-sm text-zinc-300">
              <div className="flex items-center justify-between border-b border-white/10 pb-3"><span>Client</span><span>{work.client ?? "MMBARKSTUDIO"}</span></div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3"><span>Category</span><span>{work.category}</span></div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3"><span>Year</span><span>{work.date}</span></div>
            </div>
          </div>
        </div>

        <div className="space-y-6 pt-6">
          <h3 className="text-2xl font-medium text-white sm:text-3xl">More works</h3>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {moreWorks.map((item) => (
              <Link key={item.slug} href={`/about/${item.slug}`} className="group overflow-hidden rounded-[1.5rem] border border-white/8 bg-white/[0.03]">
                <img src={item.poster} alt={item.title} className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-4">
                  <div className="text-base font-medium text-white">{item.title}</div>
                  <div className="mt-2 text-sm text-zinc-400">{item.category}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}