import { IMG } from "../../data/site";
import { Reveal, Eyebrow, ArrowLink } from "../primitives";

const photos = [
  { src: IMG.womenMP, cls: "row-span-2", alt: "Village women, Madhya Pradesh" },
  { src: IMG.classroom, cls: "", alt: "Classroom in India" },
  { src: IMG.potter, cls: "", alt: "Artisan at work" },
  { src: IMG.womenColor, cls: "col-span-2", alt: "Community gathering" },
  { src: IMG.villageGirl, cls: "", alt: "Student in a government school" },
  { src: IMG.teaching, cls: "", alt: "Mentor and learner" },
];

export default function People() {
  return (
    <section className="sec bg-paper">
      <div className="wrap-wide">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-[clamp(32px,5vw,60px)] items-center">
          <Reveal>
            <div className="grid grid-cols-3 auto-rows-[120px] gap-3">
              {photos.map((p, i) => (
                <figure key={i} className={`m-0 rounded-xl overflow-hidden relative group ${p.cls}`}>
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[800ms] ease-smooth group-hover:scale-[1.07]"
                  />
                </figure>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <Eyebrow>Built with people</Eyebrow>
            <p className="font-display font-semibold text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.3] tracking-tight">
              The best solutions are built <span className="text-mint">with</span> people, not{" "}
              <span className="text-mint">for</span> them. We combine proven frameworks with on-ground realities — so
              what we ship actually gets used.
            </p>
            <div className="flex items-center gap-3.5 mt-7">
              <div className="w-[52px] h-[52px] rounded-full bg-[var(--mint-soft)] flex items-center justify-center font-display font-extrabold text-deep text-[1.1rem] shrink-0">
                10x
              </div>
              <div>
                <div className="font-semibold">The 10x Impact Labs team</div>
                <div className="text-[0.86rem] text-stone">…and 50+ organisations who’ve worked with us.</div>
              </div>
            </div>
            <div className="mt-7">
              <ArrowLink to="/about">Meet the team</ArrowLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
