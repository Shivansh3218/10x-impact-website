import { Reveal, ArrowLink } from "../primitives";

export default function Closing() {
  return (
    <section className="relative min-h-[88svh] flex items-center text-center bg-forest overflow-hidden">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="wrap relative z-[2]">
        <Reveal>
          <h2 className="display mx-auto text-white">
            10,000 organisations.<br />
            <span className="text-mint">2030.</span><br />
            We’re building toward it.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex gap-8 justify-center mt-10 flex-wrap">
            <ArrowLink to="/contact" dark>Start a conversation</ArrowLink>
            <ArrowLink to="/work" dark>See the work</ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
