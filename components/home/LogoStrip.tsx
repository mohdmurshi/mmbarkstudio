import Container from "@/components/common/Container";
import { siteConfig } from "@/lib/data";

export default function LogoStrip() {
  return (
    <section className="py-10 sm:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-5 border-y border-white/5 py-8 text-center sm:grid-cols-3 lg:grid-cols-4">
          {siteConfig.partners.map((partner) => (
            <div key={partner} className="text-lg font-semibold tracking-wide text-zinc-100 sm:text-xl">
              {partner}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}