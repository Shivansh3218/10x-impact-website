import { useState } from "react";
import { ArrowRight, Check, Target, Users, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/PageHero";
import Closing from "../components/sections/Closing";
import { SectionHead, Reveal } from "../components/primitives";
import { SERVICE_DETAILS } from "../data/site";
import { Button } from "../components/ui/button";
import { cn } from "../lib/cn";

function DetailBlock({ icon: Icon, title, children }) {
  return (
    <div>
      <div className="flex items-center gap-2.5 mb-4">
        <span className="w-8 h-8 rounded-lg bg-mint/10 text-mint flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4" />
        </span>
        <h4 className="text-[1.05rem] font-display font-semibold tracking-tight m-0">{title}</h4>
      </div>
      {children}
    </div>
  );
}

function Bullets({ items, check }) {
  return (
    <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
      {items.map((t, i) => (
        <li key={i} className="flex gap-2.5 text-[0.95rem] text-ink/80 leading-snug">
          {check
            ? <Check className="w-[18px] h-[18px] text-mint shrink-0 mt-0.5" />
            : <span className="w-1.5 h-1.5 rounded-full bg-stone/50 shrink-0 mt-2" />}
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function WhatWeDo() {
  const [track, setTrack] = useState(0);
  const [svc, setSvc] = useState(0);
  const t = SERVICE_DETAILS.tracks[track];
  const s = t.services[svc];

  const selectTrack = (i) => { setTrack(i); setSvc(0); };

  return (
    <>
      <PageHero big eyebrow="What we do" title="Practical Tech, Data & AI systems grounded in real-world needs."
        lede={SERVICE_DETAILS.intro} />

      <section className="sec bg-paper">
        <div className="wrap-wide">
          {/* Track toggle */}
          <Reveal>
            <div className="flex flex-wrap gap-2.5 mb-9">
              {SERVICE_DETAILS.tracks.map((tr, i) => (
                <button
                  key={tr.key}
                  onClick={() => selectTrack(i)}
                  className={cn(
                    "px-5 py-3 rounded-full text-[0.92rem] font-semibold border transition-all duration-300 ease-smooth",
                    track === i ? "bg-forest text-white border-forest" : "bg-white text-ink/70 border-[var(--line)] hover:border-mint hover:text-mint"
                  )}
                >
                  {tr.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[320px_1fr] gap-[clamp(20px,3vw,40px)] items-start">
            {/* Service list */}
            <Reveal>
              <div className="flex flex-col gap-2 lg:sticky lg:top-28">
                {t.services.map((x, i) => (
                  <button
                    key={x.h}
                    onClick={() => setSvc(i)}
                    className={cn(
                      "text-left px-5 py-4 rounded-[14px] border transition-all duration-300 ease-smooth",
                      svc === i
                        ? "bg-white border-mint/50 shadow-[0_12px_30px_-16px_rgba(11,18,26,.22)]"
                        : "bg-white/50 border-[var(--line)] hover:border-mint/40 hover:bg-white"
                    )}
                  >
                    <span className={cn("font-mono text-[0.72rem] mr-2", svc === i ? "text-mint" : "text-stone")}>0{i + 1}</span>
                    <span className={cn("font-display font-semibold text-[0.98rem] leading-snug tracking-tight", svc === i ? "text-ink" : "text-ink/70")}>{x.h}</span>
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Selected service detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={track + "-" + svc}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="rounded-[20px] border border-[var(--line)] bg-white p-[clamp(24px,3.5vw,44px)]"
              >
                <h3 className="h-md mb-7">{s.h}</h3>

                {/* Offering callout */}
                <div className="rounded-[14px] bg-forest text-white p-[clamp(20px,2.5vw,30px)] mb-9">
                  <span className="font-mono text-[0.7rem] tracking-[0.16em] uppercase text-mint">Our simple offering</span>
                  <p className="mt-3 mb-0 text-[1.02rem] leading-relaxed text-white/85">{s.offering}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-9">
                  <DetailBlock icon={Target} title="The problem">
                    <Bullets items={s.problem} />
                  </DetailBlock>
                  <DetailBlock icon={Users} title="Who's this for?">
                    <Bullets items={s.who} />
                  </DetailBlock>
                  <DetailBlock icon={Check} title="What we can help you with">
                    <Bullets items={s.help} check />
                  </DetailBlock>
                  <DetailBlock icon={Sparkles} title="Why it works">
                    <Bullets items={s.why} check />
                  </DetailBlock>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="relative min-h-[60svh] flex items-center text-center bg-forest overflow-hidden">
        <div className="hero-grid-bg" /><div className="hero-glow" />
        <div className="wrap relative z-[2]">
          <Reveal><h2 className="h-xl text-white max-w-[22ch] mx-auto">Have a problem worth solving?</h2></Reveal>
          <Reveal delay={0.1}>
            <div className="flex gap-4 justify-center mt-9 flex-wrap items-center">
              <Button to="/contact" variant="mint" className="group">
                Collaborate with us <ArrowRight className="w-[1.05em] h-[1.05em] transition-transform duration-300 ease-smooth group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Closing />
    </>
  );
}
