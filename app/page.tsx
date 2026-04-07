import Link from "next/link";
import { CircleFadingPlus, Video } from "lucide-react";
import Container from "@/components/common/Container";
import HeroSection from "@/components/home/HeroSection";
import LogoStrip from "@/components/home/LogoStrip";
import PortfolioGrid from "@/components/home/PortfolioGrid";
import StatsCtaSection from "@/components/home/StatsCtaSection";
import { siteConfig } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoStrip />
      <PortfolioGrid />
      <StatsCtaSection />

      <section className="pb-8 pt-4 sm:pb-14">
        <Container>
          <div className="flex items-center justify-center gap-8 text-sm text-zinc-200">
            <a href={siteConfig.instagram} target="_blank" className="inline-flex items-center gap-2 hover:text-white">
              <CircleFadingPlus size={18} /> Instagram
            </a>
            <a href={siteConfig.youtube} target="_blank" className="inline-flex items-center gap-2 hover:text-white">
              <Video size={18} /> YouTube
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}