import { useEffect, useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const ease = [0.22, 0.61, 0.36, 1];
// Heading words for the staggered reveal. `true` = accent (sky-blue).
const HEAD = [
  { w: "Re-imagining" }, { w: "Tech," }, { w: "Data" }, { w: "and" }, { w: "AI" },
  { w: "to", break: true }, { w: "Scale", accent: true }, { w: "Impact.", accent: true },
];
const AUDIENCES = ["Non-profits", "Philanthropies", "Social Enterprises", "Governments"];

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % AUDIENCES.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-grid align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: "0.7em", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-0.7em", opacity: 0 }}
          transition={{ duration: 0.5, ease }}
          className="col-start-1 row-start-1 text-mint font-semibold whitespace-nowrap"
        >
          {AUDIENCES[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-forest text-white overflow-hidden pt-[120px] pb-[60px]">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="wrap relative z-[2] text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="font-mono text-[0.78rem] tracking-[0.28em] uppercase text-white/55 mb-7"
        >
          Tech · Data · AI · MEL · Design
        </motion.p>

        <h1 className="display mx-auto max-w-[18ch]">
          {HEAD.map((t, i) => (
            <Fragment key={i}>
              {t.break && <br className="hidden sm:block" />}
              <span className="inline-block overflow-hidden align-top">
                <motion.span
                  className={`inline-block ${t.accent ? "text-mint" : ""}`}
                  initial={{ y: "110%" }} animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.05 + i * 0.07, ease }}
                >
                  {t.w}&nbsp;
                </motion.span>
              </span>
            </Fragment>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-[58ch] mx-auto mt-7 mb-9 text-[clamp(1.05rem,1.6vw,1.34rem)] text-white/75 leading-snug"
        >
          We enable <RotatingWord /> to leverage Tech, Data &amp; MEL where it matters most.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-wrap gap-3.5 justify-center"
        >
          <Button to="/contact" variant="mint" className="group">
            Collaborate with us <ArrowRight className="w-[1.05em] h-[1.05em] transition-transform duration-300 ease-smooth group-hover:translate-x-1" />
          </Button>
          <Button to="/work" variant="ghost">See our work</Button>
        </motion.div>
      </div>

      {/* ticker */}
      <div className="absolute bottom-0 inset-x-0 border-t border-b border-white/10 bg-white/[0.02] overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...TICKER, ...TICKER].map(([n, l], i) => (
            <span key={i} className="flex items-center gap-2.5 px-[34px] py-[18px] whitespace-nowrap font-mono text-[0.85rem] tracking-wide text-white/80">
              <b className="text-mint font-semibold">{n}</b> {l}
              <span className="w-[5px] h-[5px] rounded-full bg-mint/70 ml-2" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const TICKER = [
  ["50+", "partner organisations"],
  ["1,200+", "non-profits trained"],
  ["75+", "solutions delivered"],
  ["8+", "countries reached"],
  ["100,000+", "persons with disabilities reached"],
  ["200+", "NGOs on one MEL platform"],
  ["10,000+", "learners reached"],
  ["8", "case studies"],
];
