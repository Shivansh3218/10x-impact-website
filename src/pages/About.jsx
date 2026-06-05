import PageHero from "../components/PageHero";
import Partners from "../components/sections/Partners";
import Closing from "../components/sections/Closing";
import { SectionHead, Reveal, CountUp } from "../components/primitives";
import { VALUES, BELIEFS, PRINCIPLES, INCUBATED, STATS, SDGS } from "../data/site";

export default function About() {
  return (
    <>
      <PageHero big eyebrow="About us" title="Bridging the Tech & Data gap, sustainably and at scale."
        lede="At 10x Impact Labs, we work toward bridging the Tech and Data gap in the social impact space through our collaborations, services, programs and products. The social sector lags 30+ years behind the corporate world in adopting tech and data. We’re here to change that." />

      {/* Mission + stats */}
      <section className="sec bg-paper">
        <div className="wrap">
          <SectionHead className="max-w-[900px]" eyebrow="Our mission"
            title={<>Enabling <span className="text-mint">10,000</span> Social Impact organisations to thrive and scale by <span className="text-mint">2030</span>.</>}
            lede="Everything we build is in service of that single bet." />
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

      {/* Core values */}
      <section className="sec bg-white">
        <div className="wrap-wide">
          <SectionHead eyebrow="Core values" title="How we show up." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {VALUES.map((v, i) => (
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

      {/* What we believe */}
      <section className="sec bg-paper">
        <div className="wrap-wide">
          <SectionHead eyebrow="What we believe" title="Six convictions that shape every build."
            lede="Not slogans — the operating rules we hold ourselves to on every engagement." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--line)] border border-[var(--line)] rounded-[16px] overflow-hidden">
            {BELIEFS.map((b) => (
              <Reveal key={b.h}>
                <div className="bg-white p-[30px] h-full transition-colors hover:bg-[#fbfdfb]">
                  <h4 className="text-[1.12rem] mb-2.5 text-ink">{b.h}</h4>
                  <p className="text-stone text-[0.94rem] m-0">{b.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="sec bg-white">
        <div className="wrap">
          <SectionHead eyebrow="How we work" title="Built with people, never just for them."
            lede="At the heart of our work lies a simple belief: the best solutions are built with people, not for them." />
          <div className="border-t border-[var(--line)]">
            {PRINCIPLES.map((a) => (
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

      {/* Incubated at */}
      <section className="sec-sm bg-paper">
        <div className="wrap text-center">
          <Reveal>
            <p className="eyebrow text-stone mb-6">Incubated at</p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {INCUBATED.map((x) => (
                <span key={x} className="font-display font-bold text-[clamp(1.2rem,2.2vw,1.7rem)] tracking-tight text-ink/80">{x}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SDGs */}
      <section className="sec bg-deep">
        <div className="wrap-wide">
          <SectionHead dark eyebrow="Aligned with the UN SDGs" title="Our work moves the needle on 9 Global Goals."
            lede="From education and gender equality to climate action and strong institutions — we partner where Tech, Data and AI can compound real-world outcomes." />
          <div className="flex flex-wrap gap-3">
            {SDGS.map((s) => (
              <Reveal key={s.n}>
                <div className="flex items-center gap-3 px-[18px] py-3.5 rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-mint/50 hover:bg-mint/[0.08]">
                  <span className="font-mono font-semibold text-mint text-[1.1rem]">{s.n}</span>
                  <span className="text-[0.9rem] text-white/80">{s.l}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Partners caption="Working with 50+ mission-led partners" />
      <Closing />
    </>
  );
}
