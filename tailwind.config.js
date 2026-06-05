/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Matched to the live 10x Impact Labs theme (light + navy + sky-blue)
        forest: "#0B121A",   // dark sections / hero / nav-on-dark (navy-black)
        deep: "#192532",     // feature section navy
        paper: "#FBFAF8",    // warm near-white base
        mint: "#179FD4",     // accent (sky-blue) — name kept for compatibility
        ink: "#0B121A",      // body text
        stone: "#51565B",    // secondary text
      },
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: { wrap: "1200px", wide: "1360px" },
      borderRadius: { xl2: "14px" },
      transitionTimingFunction: { smooth: "cubic-bezier(.22,.61,.36,1)" },
      keyframes: {
        marquee: { to: { transform: "translateX(-50%)" } },
        pulse2: {
          "0%": { transform: "scale(.6)", opacity: ".55" },
          "70%": { transform: "scale(3)", opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 46s linear infinite",
        "marquee-fast": "marquee 32s linear infinite",
        pulse2: "pulse2 2.6s ease-out infinite",
      },
    },
  },
  plugins: [],
};
