import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import AudienceToggle from "../components/sections/AudienceToggle";
import { SectionHead, Reveal } from "../components/primitives";
import { Button } from "../components/ui/button";

const fractional = [
  { k: "A", h: "Fractional MEL / Data Expert", p: "Senior monitoring, evaluation and data leadership — embedded part-time to build your measurement backbone." },
  { k: "B", h: "Fractional Product Manager", p: "Digital-solutions product management that turns your vision into a working, adopted product." },
  { k: "C", h: "AI Capacity Building", p: "Hands-on enablement so your frontline teams use AI confidently and responsibly, every day." },
  { k: "D", h: "Research & Insights", p: "Independent research on Tech, Data and AI that positions you as a credible sector voice." },
];
const process = [
  { n: "01", h: "Listen & diagnose", p: "We start on the ground — with the people a programme is meant to serve — and frame the real problem worth solving." },
  { n: "02", h: "Co-design", p: "We prototype with stakeholders, not in isolation, so the solution fits the context and the constraints." },
  { n: "03", h: "Build & pilot", p: "Lean, low-cost builds tested early with real users — measuring what works before we scale." },
  { n: "04", h: "Hand over & scale", p: "We leave you with systems your team can actually run, plus the capability to keep improving them." },
];

export default function WhatWeDo() {
  return (
    <>
      <PageHero big eyebrow="What we do" title="One practice. Two tracks."
        lede="The social sector lags 30+ years behind the corporate world in adopting tech and data. We close that gap with low-cost, high-trust Tech, Data & AI — grounded in end-user realities, not boardroom assumptions." />

      <section className="sec bg-deep">
        <div className="wrap-wide">
          <SectionHead center dark eyebrow="Find the door that’s yours" title="How can we help?"
            lede="Services appear only when you choose your track." />
          <AudienceToggle />
        </div>
      </section>

      <section className="sec bg-paper">
        <div className="wrap-wide">
          <SectionHead eyebrow="Embedded expertise" title="Fractional experts, on tap."
            lede="When you need senior capability but not a full-time hire, we embed with your team." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {fractional.map((v, i) => (
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
          <SectionHead eyebrow="How an engagement runs" title="From real need to real adoption." />
          <div className="border-t border-[var(--line)]">
            {process.map((a) => (
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

      <section className="relative min-h-[60svh] flex items-center text-center bg-forest overflow-hidden">
        <div className="hero-grid-bg" /><div className="hero-glow" />
        <div className="wrap relative z-[2]">
          <Reveal><h2 className="h-xl text-white max-w-[22ch] mx-auto">Have a problem worth solving?</h2></Reveal>
          <Reveal delay={0.1}>
            <div className="flex gap-5 justify-center mt-9 flex-wrap items-center">
              <Button to="/contact" variant="mint" className="group">
                Collaborate with us <ArrowRight className="w-[1.05em] h-[1.05em] transition-transform duration-300 ease-smooth group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
