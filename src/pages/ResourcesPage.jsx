import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import { ResourceFeature, ResourceCards } from "../components/sections/Resources";
import { RESOURCES } from "../data/site";
import { SectionHead, Reveal } from "../components/primitives";
import { Button } from "../components/ui/button";

export default function ResourcesPage() {
  return (
    <>
      <PageHero big eyebrow="Our resources" title="Tools & stories, built in the open."
        lede="Free and open source. Because the sector needs it — not because it sells. Use them, fork them, share them." />

      <section className="sec bg-deep">
        <div className="wrap-wide">
          <SectionHead dark eyebrow="Featured toolkit" title="Start here." />
          <ResourceFeature />
          <div className="mt-16">
            <SectionHead dark eyebrow="Toolkits" title="Build with our playbooks." />
            <ResourceCards items={RESOURCES.toolkits} />
          </div>
          <div className="mt-16">
            <SectionHead dark eyebrow="Articles" title="Field notes & points of view." />
            <ResourceCards items={RESOURCES.articles} />
          </div>
        </div>
      </section>

      <section className="relative min-h-[56svh] flex items-center text-center bg-forest overflow-hidden">
        <div className="hero-grid-bg" /><div className="hero-glow" />
        <div className="wrap relative z-[2]">
          <Reveal><h2 className="h-xl text-white max-w-[24ch] mx-auto">Want a toolkit tailored to your programme?</h2></Reveal>
          <Reveal delay={0.1}>
            <div className="flex justify-center mt-9">
              <Button to="/contact" variant="mint" className="group">
                Talk to us <ArrowRight className="w-[1.05em] h-[1.05em] transition-transform duration-300 ease-smooth group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
