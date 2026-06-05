import { ArrowRight } from "lucide-react";
import { RESOURCES } from "../../data/site";
import { Reveal } from "../primitives";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function ResourceFeature() {
  const r = RESOURCES.featured;
  return (
    <Reveal>
      <div className="grid lg:grid-cols-[1.1fr_1fr] rounded-[16px] overflow-hidden border border-white/10 bg-white/[0.03]">
        <div className="relative min-h-[220px] lg:min-h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${r.img})` }}>
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(10,26,16,.1),rgba(10,26,16,.5))]" />
        </div>
        <div className="p-[clamp(28px,4vw,48px)] flex flex-col justify-center">
          <Badge tone="mint" className="self-start">{r.type}</Badge>
          <h3 className="h-md text-white mt-[18px] mb-3">{r.title}</h3>
          <p className="text-white/65 mb-6">{r.desc}</p>
          <Button href={r.url} variant="mint" className="self-start group">
            Open the toolkit <ArrowRight className="w-[1.05em] h-[1.05em] transition-transform duration-300 ease-smooth group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </Reveal>
  );
}

export function ResourceCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
      {RESOURCES.cards.map((c, i) => (
        <Reveal key={i} delay={(i % 3) * 0.08}>
          <a
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col p-6 rounded-[16px] border border-white/10 bg-white/[0.03] min-h-[200px] transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-mint/40 hover:bg-white/[0.05]"
          >
            <span className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-mint mb-auto">{c.type}</span>
            <h4 className="text-[1.06rem] leading-snug mt-[18px] mb-2.5 text-white">{c.title}</h4>
            <span className="text-[0.84rem] text-white/55">{c.author}</span>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
