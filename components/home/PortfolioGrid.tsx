"use client";

import Link from "next/link";
import { useRef } from "react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { works } from "@/lib/data";

function WorkCard({
  title,
  category,
  date,
  slug,
  poster,
  hoverVideo,
}: {
  title: string;
  category: string;
  date: string;
  slug: string;
  poster: string;
  hoverVideo: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleEnter = async () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    try {
      await videoRef.current.play();
      setTimeout(() => {
        videoRef.current?.pause();
        if (videoRef.current) videoRef.current.currentTime = 0;
      }, 2000);
    } catch {}
  };

  const handleLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <Link href={`/about/${slug}`} className="group block">
      <article
        className="hover-lift overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/[0.03]"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img src={poster} alt={title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-300 group-hover:opacity-100"
            poster={poster}
          >
            <source src={hoverVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="space-y-3 px-4 py-5 sm:px-5">
          <h3 className="text-lg font-medium text-white sm:text-xl">{title}</h3>
          <div className="border-t border-white/10 pt-3 text-sm text-zinc-300">{category}</div>
          <div className="border-t border-white/10 pt-3 text-sm text-zinc-400">{date}</div>
        </div>
      </article>
    </Link>
  );
}

export default function PortfolioGrid() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected works and signature visual stories"
          description="From cinematic productions to editing-led campaigns and AI-powered advertisements, each piece is crafted to feel sharp, emotional, and modern."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {works.map((work) => (
            <WorkCard key={work.slug} {...work} />
          ))}
        </div>
      </Container>
    </section>
  );
}