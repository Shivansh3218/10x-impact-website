import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import { SectionHead, Reveal, ArrowLink } from "../components/primitives";
import { Button } from "../components/ui/button";
import { HIRING } from "../data/site";

const why = [
  { k: "01", h: "Real ownership", p: "Lead products and programmes end-to-end, with partners who depend on what you ship." },
  { k: "02", h: "Proximity to impact", p: "Work alongside frontline organisations and the communities they serve — not from a distance." },
  { k: "03", h: "Craft & rigour", p: "Product thinking, data and lean methods applied to problems that genuinely matter." },
  { k: "04", h: "A team that co-designs", p: "Low ego, high trust. We build with people — each other included." },
];
const roles = [
  { n: "PM", h: "Product Managers", p: "From discovery to adoption — comfortable with ambiguity and grounded in user needs." },
  { n: "DS", h: "Product Designers", p: "Designers who can co-design with non-technical users and ship usable, low-cost solutions." },
  { n: "ML", h: "MEL & Data Specialists", p: "People who turn messy field data into decisions partners can trust." },
  { n: "AI", h: "AI & Engineering", p: "Builders who can stand up practical, affordable AI that works at the last mile." },
];

export default function Join() {
  return (
    <>
      <PageHero big eyebrow="Join us" title="Do the most useful work of your career."
        lede="We’re a small team with an outsized mission: enable 10,000 social impact organisations to thrive and scale by 2030. If you build with care, move with a jugaadu spirit, and want your work to reach the last mile — we should talk." />

      <section className="sec bg-paper">
        <div className="wrap-wide">
          <SectionHead eyebrow="Why 10x" title="What you’ll get here." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {why.map((v, i) => (
              <Reveal key={v.k} delay={(i % 4) * 0.06}>
                <div className="p-[30px] rounded-[16px] border border-[var(--line)] bg-white transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(10,26,16,.18)] hover:border-mint/40 h-full">
                  <span className="font-mono text-[0.78rem] text-mint mb-3.5 block">{v.k}</span>
                  <h4 className="text-[1.14rem] mb-2">{v.h}</h4>
                  <p className="text-stone text-[0.94rem] m-0">{v.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec bg-white">
        <div className="wrap">
          <SectionHead eyebrow="Who we look for" title="Roles we’re usually hiring for."
            lede="We grow with our partners’ needs. We’re most often looking for people across these crafts:" />
          <div className="border-t border-[var(--line)]">
            {roles.map((a) => (
              <Reveal key={a.n}>
                <div className="grid md:grid-cols-[90px_1fr_2fr] gap-6 py-[30px] border-b border-[var(--line)] items-start">
                  <span className="font-mono text-mint text-base">{a.n}</span>
                  <h4 className="text-[1.3rem]">{a.h}</h4>
                  <p className="m-0 text-stone">{a.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10">
              <Button href="mailto:careers@10ximpact.in?subject=Joining%2010x%20Impact%20Labs" variant="dark" className="group">
                Write to us at careers@10ximpact.in <ArrowRight className="w-[1.05em] h-[1.05em] transition-transform duration-300 ease-smooth group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec bg-paper">
        <div className="wrap">
          <SectionHead eyebrow="Our hiring process" title="Simple, transparent, people-first."
            lede="It's designed to help us get to know you — your skills, your values, and what excites you — and for you to learn about us too." />
          <div className="border-t border-[var(--line)]">
            {HIRING.map((a) => (
              <Reveal key={a.n}>
                <div className="grid md:grid-cols-[90px_1fr_2fr] gap-6 py-[30px] border-b border-[var(--line)] items-start">
                  <span className="font-mono text-mint text-base">{a.n}</span>
                  <h4 className="text-[1.3rem]">{a.h}</h4>
                  <p className="m-0 text-stone">{a.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[56svh] flex items-center text-center bg-forest overflow-hidden">
        <div className="hero-grid-bg" /><div className="hero-glow" />
        <div className="wrap relative z-[2]">
          <Reveal><h2 className="h-xl text-white max-w-[22ch] mx-auto">Don’t see your role? Tell us what you’d build.</h2></Reveal>
          <Reveal delay={0.1}>
            <div className="flex gap-8 justify-center mt-9 flex-wrap">
              <ArrowLink href="mailto:careers@10ximpact.in" dark>Email careers@10ximpact.in</ArrowLink>
              <ArrowLink href="https://www.linkedin.com/company/10ximpactlabs/" dark>Follow on LinkedIn</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
