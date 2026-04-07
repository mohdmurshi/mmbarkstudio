import { CircleFadingPlus, Mail, MapPin, MessageCircle, Video } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { siteConfig } from "@/lib/data";

const contactItems = [
  {
    label: "Instagram",
    href: siteConfig.instagram,
    icon: CircleFadingPlus,
  },
  {
    label: "WhatsApp",
    href: siteConfig.whatsapp,
    icon: MessageCircle,
  },
  {
    label: "Gmail",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "YouTube",
    href: siteConfig.youtube,
    icon: Video,
  },
];

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.26em] text-zinc-400">Contact</p>
          <SectionHeading title="What’s up?" description="Let’s talk about films, edits, content, campaigns, and creative collaborations." />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-card rounded-[2rem] p-6 sm:p-8">
            <h3 className="mb-6 text-xl font-medium text-white">Connect with MMBARKSTUDIO</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-sky-200/40 hover:bg-white/[0.06]"
                  >
                    <div className="mb-4 inline-flex rounded-xl border border-white/10 p-3 text-sky-200">
                      <Icon size={20} />
                    </div>
                    <div className="text-lg font-medium text-white">{item.label}</div>
                    <div className="mt-1 text-sm text-zinc-400">Open {item.label}</div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="glass-card rounded-[2rem] p-6 sm:p-8">
            <h3 className="mb-6 text-xl font-medium text-white">Address</h3>
            <div className="space-y-6 text-sm leading-7 text-zinc-300">
              <div className="inline-flex items-center gap-3"><MapPin size={18} /> {siteConfig.contact}</div>
              <p>{siteConfig.address.join(", ")}</p>
              <div className="border-t border-white/10 pt-6">
                <div className="text-sm text-zinc-400">Email</div>
                <a href={`mailto:${siteConfig.email}`} className="mt-2 inline-block text-lg text-white">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}