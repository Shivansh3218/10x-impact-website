import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Closing from "../components/sections/Closing";
import { Reveal } from "../components/primitives";
import { Button } from "../components/ui/button";
import { CASES } from "../data/site";

export default function CaseStudy() {
  const { slug } = useParams();
  const c = CASES.find((x) => x.slug === slug);
  if (!c) return <Navigate to="/work" replace />;

  const sections = [
    { h: "Challenge", p: c.challenge },
    { h: "Approach", p: c.approach },
    { h: "Solution", p: c.solution },
    { h: "Outcome", p: c.outcome },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[clamp(120px,16vh,180px)] pb-[clamp(48px,7vw,84px)] bg-forest overflow-hidden">
        <div className="hero-grid-bg" /><div className="hero-glow" />
        <div className="wrap relative z-[2]">
          <Reveal>
            <Link to="/work" className="inline-flex items-center gap-1.5 text-white/60 hover:text-mint transition-colors text-[0.9rem] mb-8">
              <ArrowLeft className="w-4 h-4" /> All case studies
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="font-mono text-[0.74rem] tracking-[0.16em] uppercase text-mint mb-5">{c.cat} · {c.client}</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h-xl text-white max-w-[20ch]">{c.title}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-white/70 text-[1.05rem] max-w-[60ch] mt-5">{c.desc}</p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="flex flex-wrap gap-2.5 mt-8">
              {c.services.map((s) => (
                <span key={s} className="px-3.5 py-2 rounded-full border border-white/15 bg-white/[0.04] text-white/80 text-[0.82rem]">{s}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-deep">
        <div className="wrap">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 border-x border-white/10">
            {c.stats.map((st, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-deep p-[clamp(24px,4vw,40px)]"
              >
                <div className="mono font-semibold text-mint text-[clamp(2rem,4vw,3rem)] leading-none tracking-tight">{st.v}</div>
                <div className="text-white/60 text-[0.9rem] mt-2.5">{st.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="sec bg-white">
        <div className="wrap">
          <div className="border-t border-[var(--line)]">
            {sections.map((s) => (
              <Reveal key={s.h}>
                <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-10 py-[clamp(28px,4vw,44px)] border-b border-[var(--line)]">
                  <h2 className="font-display font-bold text-[1.3rem] tracking-tight text-ink">
                    <span className="text-mint mr-2">·</span>{s.h}
                  </h2>
                  <p className="m-0 text-[1.05rem] leading-[1.7] text-ink/80 max-w-[64ch]">{s.p}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 p-[clamp(28px,4vw,48px)] rounded-[18px] bg-paper border border-[var(--line)] text-center">
              <h3 className="h-md mb-5">Have a problem like this one? Let’s talk.</h3>
              <Button to="/contact" variant="mint" className="group inline-flex">
                Start a conversation <ArrowRight className="w-[1.05em] h-[1.05em] transition-transform duration-300 ease-smooth group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Closing />
    </>
  );
}
