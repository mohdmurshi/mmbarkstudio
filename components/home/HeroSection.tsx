"use client";

import { Play, MapPin, Mail } from "lucide-react";
import { useMemo, useState } from "react";
import Container from "@/components/common/Container";
import VideoLightbox from "@/components/ui/VideoLightbox";
import { siteConfig } from "@/lib/data";

export default function HeroSection() {
  const [open, setOpen] = useState(false);

  const heroLines = useMemo(
    () => [
      "Murshid is a filmmaker and editor",
      "building cinematic stories",
      `from ${siteConfig.location}.`,
    ],
    []
  );

  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <Container className="space-y-10">
          <div className="max-w-5xl space-y-8">
            <div className="space-y-2 sm:space-y-3">
              {heroLines.map((line, index) => (
                <div key={index} className="overflow-hidden">
                  <h1
                    className="hero-line text-4xl font-medium leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
                    style={{ animationDelay: `${index * 0.35}s` }}
                  >
                    {line}
                  </h1>
                </div>
              ))}
            </div>

            <div className="hero-fade flex flex-col gap-4 text-sm text-zinc-300 sm:flex-row sm:items-center sm:gap-8">
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} /> {siteConfig.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail size={15} /> {siteConfig.email}
              </span>
            </div>
          </div>

          <div className="hero-fade relative overflow-hidden rounded-[2rem] border border-white/10 bg-black video-shadow">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="aspect-[16/9] w-full object-cover opacity-85"
              poster="/videos/works/work-1-poster.jpg"
            >
              <source src="/videos/hero-reel.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <button
                onClick={() => setOpen(true)}
                className="group flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-sky-200/80 text-black shadow-2xl transition hover:scale-105"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-black/10">
                  <Play className="ml-1" size={26} fill="currentColor" />
                </div>
              </button>
            </div>
          </div>
        </Container>
      </section>

      <VideoLightbox
        open={open}
        onClose={() => setOpen(false)}
        youtubeEmbed="https://www.youtube-nocookie.com/embed/Qhwafoo7Pnc?si=5RLEsiNf6fu9IUQY?autoplay=1&rel=0"
      />
    </>
  );
}