import { Reveal } from "../primitives";
import { IMG } from "../../data/site";

export default function Provocation() {
  return (
    <section className="sec bg-paper">
      <div className="wrap-wide">
        <div className="grid lg:grid-cols-2 gap-5 items-stretch">
          {/* Quote card */}
          <Reveal>
            <div className="h-full rounded-[22px] bg-forest text-white p-[clamp(28px,4vw,52px)] flex flex-col justify-center relative overflow-hidden">
              <div className="hero-glow" style={{ width: 460, height: 460, top: "auto", bottom: -180, left: -120, transform: "none", opacity: 0.5 }} />
              <span className="relative z-[2] font-mono text-[0.72rem] tracking-[0.22em] uppercase text-mint mb-6">A point of view</span>
              <p className="relative z-[2] font-display font-semibold text-[clamp(1.5rem,2.8vw,2.4rem)] leading-[1.18] tracking-tight m-0">
                <span className="text-mint">9 out of 10</span> tech investments in India’s social sector fail. Not because
                NGOs don’t care — because the systems were built for boardrooms, not for the last mile. We built 10x to
                change that. One practical solution at a time.
              </p>
              <div className="relative z-[2] mt-8 flex items-center gap-3.5 text-[0.95rem]">
                <span className="w-[42px] h-px bg-white/30" />
                <b className="font-semibold text-white">Vaibhav Mishra &amp; Tony D’Souza</b>
                <span className="text-white/55">Co-founders, 10x Impact Labs</span>
              </div>
            </div>
          </Reveal>

          {/* Image card */}
          <Reveal delay={0.12}>
            <div className="h-full min-h-[360px] rounded-[22px] overflow-hidden relative group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.05]"
                style={{ backgroundImage: `url(${IMG.community})` }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,26,0)_45%,rgba(11,18,26,.72)_100%)]" />
              <div className="absolute bottom-0 left-0 p-[clamp(22px,3vw,34px)]">
                <div className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-white/70 mb-1.5">Built for the last mile</div>
                <div className="font-display font-semibold text-[1.15rem] text-white leading-snug">Solutions grounded in real community realities — not boardroom assumptions.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
