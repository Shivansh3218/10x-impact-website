import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CASES } from "../../data/site";
import { Reveal } from "../primitives";

export function WorkCard({ c, i = 0 }) {
  return (
    <Reveal delay={(i % 3) * 0.08}>
      <Link
        to={`/work/${c.slug}`}
        className="group relative block rounded-[16px] overflow-hidden bg-forest min-h-[440px] flex flex-col justify-end isolate"
      >
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.06]"
          style={{ backgroundImage: `url(${c.img})` }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,26,16,.1)_0%,rgba(10,26,16,.55)_55%,rgba(10,26,16,.92)_100%)]" />
        <div className="p-[26px] text-white">
          <div className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-white/65 mb-3.5">{c.client}</div>
          <div className="mono font-semibold text-[clamp(1.9rem,3vw,2.5rem)] text-mint leading-none tracking-tight mb-3">{c.stats[0].v}</div>
          <div className="font-display font-bold text-[1.12rem] leading-snug tracking-tight mb-4">{c.title}</div>
          <span className="text-[0.86rem] font-semibold text-mint inline-flex gap-1.5 items-center">
            Read the story <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-smooth group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function WorkGrid({ count = 3 }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[26px]">
      {CASES.slice(0, count).map((c, i) => (
        <WorkCard key={c.slug} c={c} i={i} />
      ))}
    </div>
  );
}
