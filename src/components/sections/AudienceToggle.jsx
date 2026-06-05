import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SERVICES } from "../../data/site";
import { cn } from "../../lib/cn";

const KEYS = ["ngo", "gov"];

export default function AudienceToggle() {
  const [active, setActive] = useState("ngo");
  const s = SERVICES[active];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[760px] mx-auto mb-[clamp(36px,4vw,52px)]">
        {KEYS.map((k, i) => {
          const on = active === k;
          return (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={cn(
                "relative text-left p-[30px] rounded-[16px] border transition-all duration-300 ease-smooth overflow-hidden",
                on
                  ? "bg-mint text-forest border-mint"
                  : "bg-white/[0.03] text-white border-white/10 hover:border-mint/50 hover:-translate-y-0.5"
              )}
            >
              <span className={cn("font-mono text-[0.72rem] tracking-[0.12em] uppercase block mb-2.5", on ? "text-forest/60" : "text-white/50")}>
                Audience 0{i + 1}
              </span>
              <span className="font-display font-bold text-[clamp(1.3rem,2.4vw,1.75rem)] tracking-tight">{SERVICES[k].key}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p className="eyebrow text-white/55 mb-[18px]">{s.label}</p>
          <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[16px] overflow-hidden">
            {s.items.map((it, j) => (
              <div key={j} className="bg-deep p-[30px] transition-colors hover:bg-[#1f2c3a]">
                <span className="font-mono text-[0.8rem] text-mint mb-3.5 block">0{j + 1}</span>
                <h4 className="text-[1.16rem] mb-2 text-white">{it.h}</h4>
                <p className="text-white/65 text-[0.95rem] m-0">{it.p}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
