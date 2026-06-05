import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, lede, big }) {
  const ease = [0.22, 0.61, 0.36, 1];
  return (
    <section className="relative bg-forest text-white overflow-hidden pt-[clamp(150px,18vw,220px)] pb-[clamp(60px,8vw,100px)]">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="wrap relative z-[2]">
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="eyebrow text-white/55 mb-5">
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.06, ease }}
          className={`${big ? "display" : "h-xl"} max-w-[18ch]`}
        >
          {title}
        </motion.h1>
        {lede && (
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.14, ease }}
            className="lede mt-6 text-white/70 max-w-[58ch]"
          >
            {lede}
          </motion.p>
        )}
      </div>
    </section>
  );
}
