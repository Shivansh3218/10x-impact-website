import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import INDIA from "../../data/india.json";
import { MAP_STATES } from "../../data/site";
import { Reveal, CountUp, Eyebrow } from "../primitives";
import { cn } from "../../lib/cn";

export default function IndiaMap() {
  const svgRef = useRef(null);
  const stageRef = useRef(null);
  const [markers, setMarkers] = useState([]);
  const [tip, setTip] = useState(null); // {id, x, y}
  const [sel, setSel] = useState(null);

  // compute centroids of active states once the svg paths are in the DOM
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const pts = [];
    Object.keys(MAP_STATES).forEach((id) => {
      const p = svg.querySelector(`path[data-id="${id}"]`);
      if (!p) return;
      try {
        const b = p.getBBox();
        pts.push({ id, cx: b.x + b.width / 2, cy: b.y + b.height / 2 });
      } catch (e) { /* layout not ready */ }
    });
    setMarkers(pts);
  }, []);

  function onMove(id, e) {
    const r = stageRef.current.getBoundingClientRect();
    setTip({ id, x: e.clientX - r.left, y: e.clientY - r.top });
    setSel(id);
  }
  function onLeave() { setTip(null); setSel(null); }

  const d = tip ? MAP_STATES[tip.id] : null;
  // keep tooltip inside the stage
  const tipStyle = tip
    ? { left: Math.min(Math.max(tip.x + 14, 6), (stageRef.current?.clientWidth || 560) - 256), top: Math.max(tip.y - 90, 6) }
    : {};

  return (
    <section className="bg-forest overflow-hidden py-[clamp(72px,9vw,130px)]">
      <div className="wrap-wide">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-[clamp(30px,5vw,64px)] items-center">
          {/* MAP */}
          <Reveal className="relative w-full max-w-[560px] mx-auto" >
            <div ref={stageRef} className="relative">
              <svg
                id="indiaMap"
                ref={svgRef}
                viewBox={INDIA.viewBox}
                className="w-full h-auto block overflow-visible"
                role="img"
                aria-label="Map of India showing 10x Impact Labs' active states"
              >
                {INDIA.locations.map((loc) => {
                  const active = !!MAP_STATES[loc.id];
                  return (
                    <path
                      key={loc.id}
                      data-id={loc.id}
                      d={loc.path}
                      className={cn(active && "active", sel === loc.id && "sel")}
                      onMouseMove={active ? (e) => onMove(loc.id, e) : undefined}
                      onMouseLeave={active ? onLeave : undefined}
                      onClick={active ? (e) => onMove(loc.id, e) : undefined}
                    />
                  );
                })}
                {markers.map((m) => (
                  <g key={m.id} style={{ pointerEvents: "none" }}>
                    <circle cx={m.cx} cy={m.cy} r="4" className="animate-pulse2"
                      style={{ fill: "#179FD4", opacity: 0.5, transformBox: "fill-box", transformOrigin: "center" }} />
                    <circle cx={m.cx} cy={m.cy} r="2.6" style={{ fill: "#179FD4", stroke: "#0B121A", strokeWidth: 1.4 }} />
                  </g>
                ))}
              </svg>

              {d && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute z-10 pointer-events-none max-w-[250px] rounded-xl px-[15px] py-[13px] bg-[#0b121af2] border border-mint/40 backdrop-blur-sm shadow-[0_30px_70px_-30px_rgba(0,0,0,.7)]"
                  style={tipStyle}
                >
                  <div className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-mint mb-1.5">{d.state}</div>
                  <div className="text-[0.92rem] font-semibold text-white leading-snug mb-1">{d.proj}</div>
                  <div className="text-[0.82rem] text-white/60">{d.stat}</div>
                </motion.div>
              )}
            </div>
          </Reveal>

          {/* COPY */}
          <Reveal delay={0.12}>
            <Eyebrow dark>Across India. Across contexts.</Eyebrow>
            <h2 className="h-xl text-white">Impact you can point to on a map.</h2>
            <p className="lede mt-4 text-white/70">
              From the banks of the Ganga to the last mile in the South, our work runs in real districts with real
              partners. Hover a glowing state to see what’s live there.
            </p>
            <div className="flex gap-[18px] flex-wrap mt-7">
              {[
                { n: 15, s: "+", l: "States & UTs active" },
                { n: 8, s: "+", l: "Countries reached" },
                { n: 200, s: "+", l: "Projects supported" },
              ].map((x) => (
                <div key={x.l} className="flex-1 min-w-[120px]">
                  <div className="mono font-semibold text-[clamp(1.7rem,3vw,2.3rem)] text-mint leading-none">
                    <CountUp to={x.n} suffix={x.s} />
                  </div>
                  <div className="text-[0.84rem] text-white/60 mt-1.5">{x.l}</div>
                </div>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 mt-7 text-[0.82rem] text-white/60">
              <i className="w-[11px] h-[11px] rounded-[3px] bg-mint inline-block" />
              Glowing states have live 10x programmes
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
