import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/cn";

// ---- Scroll reveal (fade + rise) ----
export function Reveal({ children, delay = 0, y = 26, className, as = "div" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const M = motion[as] || motion.div;
  return (
    <M
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] }}
      className={className}
    >
      {children}
    </M>
  );
}

// ---- Count-up number ----
export function CountUp({ to, prefix = "", suffix = "", className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.5,
      ease: [0.22, 0.61, 0.36, 1],
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

// ---- Eyebrow label ----
export function Eyebrow({ children, center, className, dark }) {
  return (
    <p
      className={cn(
        "eyebrow mb-5",
        center && "center justify-center",
        dark ? "text-white/55" : "text-stone",
        className
      )}
    >
      {children}
    </p>
  );
}

// ---- Section heading block ----
export function SectionHead({ eyebrow, title, lede, center, dark, className }) {
  return (
    <div className={cn("max-w-[760px] mb-[clamp(40px,5vw,68px)]", center && "mx-auto text-center", className)}>
      {eyebrow && <Reveal><Eyebrow center={center} dark={dark}>{eyebrow}</Eyebrow></Reveal>}
      {title && (
        <Reveal delay={0.05}>
          <h2 className={cn("h-xl", dark && "text-white")}>{title}</h2>
        </Reveal>
      )}
      {lede && (
        <Reveal delay={0.1}>
          <p className={cn("lede mt-4", dark ? "text-white/70" : "text-stone")}>{lede}</p>
        </Reveal>
      )}
    </div>
  );
}

// ---- Arrow text link ----
export function ArrowLink({ to, href, children, className, dark }) {
  const inner = (
    <span
      className={cn(
        "group inline-flex items-center gap-2 font-semibold border-b border-transparent pb-0.5 transition-colors hover:text-mint",
        dark ? "text-white" : "text-ink",
        className
      )}
    >
      {children}
      <ArrowRight className="w-[1.05em] h-[1.05em] transition-transform duration-300 ease-smooth group-hover:translate-x-1" />
    </span>
  );
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>;
  return <Link to={to}>{inner}</Link>;
}
