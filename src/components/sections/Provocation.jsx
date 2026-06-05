import { Reveal, Eyebrow } from "../primitives";

export default function Provocation() {
  return (
    <section className="bg-white py-[clamp(80px,12vw,170px)]">
      <div className="wrap">
        <Reveal><Eyebrow>A point of view</Eyebrow></Reveal>
        <Reveal delay={0.05}>
          <p className="font-display font-extrabold text-[clamp(1.8rem,4.2vw,3.3rem)] leading-[1.16] tracking-tight max-w-[18ch]">
            <span className="text-mint">9 out of 10</span> tech investments in India’s social sector fail. Not because
            NGOs don’t care — because the systems were built for boardrooms, not for the last mile. We built 10x to
            change that. One practical solution at a time.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-9 flex items-center gap-3.5 text-[0.95rem]">
            <span className="w-[42px] h-px bg-ink/30" />
            <b className="font-semibold">Vaibhav Mishra &amp; Tony D’Souza</b>
            <span className="text-stone">Co-founders, 10x Impact Labs</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
