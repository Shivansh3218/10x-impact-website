import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/PageHero";
import Closing from "../components/sections/Closing";
import { SectionHead, Reveal, CountUp } from "../components/primitives";
import { CASES, STATS, CASE_CATEGORIES } from "../data/site";
import { cn } from "../lib/cn";

export default function Work() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? CASES : CASES.filter((c) => c.cat === cat);

  return (
    <>
      <PageHero big eyebrow="Case studies" title="Partnerships still running today."
        lede="Every figure below ties back to a programme still live, a team still using the system, a partner we still meet each quarter. This is what bridging the tech & data gap looks like in practice." />

      <section className="sec-sm bg-paper">
        <div className="wrap">
          <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--line)] border border-[var(--line)] rounded-[16px] overflow-hidden">
              {STATS.map((x) => (
                <div key={x.l} className="bg-white p-8">
                  <div className="mono font-semibold text-[clamp(2rem,3.4vw,2.8rem)] tracking-tight text-ink leading-none">
                    <CountUp to={x.n} suffix={x.s} />
                  </div>
                  <div className="mt-2.5 text-[0.9rem] text-stone">{x.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec bg-white">
        <div className="wrap-wide">
          <SectionHead eyebrow="All work" title="Ten case studies. No placeholders." />

          {/* Category filter */}
          <Reveal>
            <div className="flex flex-wrap gap-2.5 mb-10">
              {CASE_CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={cn(
                    "px-4 py-2 rounded-full text-[0.85rem] font-medium border transition-all duration-300 ease-smooth",
                    cat === c
                      ? "bg-forest text-white border-forest"
                      : "bg-white text-ink/70 border-[var(--line)] hover:border-mint hover:text-mint"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <div>
            <AnimatePresence mode="popLayout">
              {list.map((c) => (
                <motion.div
                  key={c.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <Link
                    id={c.slug}
                    to={`/work/${c.slug}`}
                    className="group grid md:grid-cols-[200px_1fr_auto] gap-[30px] items-center py-7 border-b border-[var(--line)] transition-all duration-300 ease-smooth hover:px-[18px] hover:bg-paper hover:rounded-[14px] hover:border-b-transparent scroll-mt-28"
                  >
                    <div className="h-[130px] rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${c.img})` }} />
                    <div>
                      <div className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-mint mb-2">{c.cat} · {c.client}</div>
                      <div className="font-display font-bold text-[1.18rem] leading-snug tracking-tight mb-1.5">{c.title}</div>
                      <p className="text-stone text-[0.94rem] m-0 max-w-[62ch]">{c.desc}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-[0.84rem] font-semibold text-ink group-hover:text-mint transition-colors">
                        Read the story <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-smooth group-hover:translate-x-1" />
                      </span>
                    </div>
                    <div className="mono font-semibold text-[1.5rem] text-ink whitespace-nowrap">{c.stats[0].v}</div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Closing />
    </>
  );
}
