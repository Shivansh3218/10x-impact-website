import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PARTNERS } from "../../data/site";

function Marquee({ items, reverse = false, duration = "46s" }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
      <div
        className="flex items-center gap-[clamp(40px,6vw,84px)] w-max animate-marquee hover:[animation-play-state:paused]"
        style={{ animationDuration: duration, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {row.map((p, i) => (
          <img
            key={i}
            src={p.f}
            alt={p.n}
            title={p.n}
            loading="lazy"
            onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
            className="h-[clamp(34px,3.4vw,46px)] w-auto object-contain grayscale opacity-55 transition-all duration-300 ease-smooth hover:grayscale-0 hover:opacity-100"
          />
        ))}
      </div>
    </div>
  );
}

export default function Partners({ caption = "Working with 50+ mission-led partners", showLink = true }) {
  const half = Math.ceil(PARTNERS.length / 2);
  const rowA = PARTNERS.slice(0, half);
  const rowB = PARTNERS.slice(half);
  return (
    <section className="bg-paper">
      <div className="wrap-wide py-[clamp(48px,6vw,80px)] border-t border-[var(--line)]">
        <div className="flex items-baseline justify-between gap-6 mb-[clamp(28px,4vw,44px)]">
          <p className="font-mono text-[0.74rem] tracking-[0.18em] uppercase text-stone m-0">{caption}</p>
          {showLink && (
            <Link to="/about" className="group hidden sm:inline-flex items-center gap-1.5 text-[0.86rem] font-semibold text-ink hover:text-mint transition-colors whitespace-nowrap">
              See all partners
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-smooth group-hover:translate-x-1" />
            </Link>
          )}
        </div>
        <div className="flex flex-col gap-[clamp(28px,4vw,48px)]">
          <Marquee items={rowA} duration="52s" />
          <Marquee items={rowB} reverse duration="46s" />
        </div>
      </div>
    </section>
  );
}
