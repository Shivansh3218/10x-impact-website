import PageHero from "../components/PageHero";
import Closing from "../components/sections/Closing";
import { SectionHead, Reveal, ArrowLink } from "../components/primitives";
import { INITIATIVES } from "../data/site";

export default function Initiatives() {
  return (
    <>
      <PageHero big eyebrow="Programs & initiatives" title="Programs we run for the ecosystem."
        lede="Beyond client work, we build shared infrastructure for the social sector — fellowships, products and open resources." />

      <section className="sec bg-paper">
        <div className="wrap-wide">
          <SectionHead eyebrow="Our initiatives" title="Built for the whole sector, not one partner." />
          <div className="grid md:grid-cols-3 gap-[18px]">
            {INITIATIVES.map((it, i) => (
              <Reveal key={it.n} delay={(i % 3) * 0.08}>
                <div className="h-full p-[clamp(26px,3vw,34px)] rounded-[18px] border border-[var(--line)] bg-white flex flex-col transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(10,26,16,.2)] hover:border-mint/40">
                  <span className="mono font-semibold text-mint text-[1.4rem] mb-5">{it.n}</span>
                  <h3 className="font-display font-bold text-[1.3rem] tracking-tight mb-3">{it.h}</h3>
                  <p className="text-stone text-[0.96rem] leading-relaxed m-0 mb-7">{it.p}</p>
                  <div className="mt-auto"><ArrowLink to="/contact">Learn more</ArrowLink></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Closing />
    </>
  );
}
