import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "../data/site";
import { cn } from "../lib/cn";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-[120] transition-all duration-300 ease-smooth bg-paper/85 backdrop-blur-md backdrop-saturate-150",
        scrolled
          ? "border-b border-[var(--line)] py-2.5 shadow-[0_10px_30px_-22px_rgba(11,18,26,.4)]"
          : "border-b border-transparent py-3.5"
      )}
    >
      <div className="wrap-wide flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none tracking-tight" aria-label="10x Impact Labs">
          <span className="font-display font-medium text-[0.95rem] text-mint">10x</span>
          <span className="font-display font-semibold text-[1.08rem] text-ink -mt-0.5">Impact Labs</span>
        </Link>

        {/* Pill nav */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-0.5 list-none m-0 p-1.5 rounded-full border border-[var(--line)] bg-white/70 backdrop-blur-sm shadow-[0_8px_24px_-16px_rgba(11,18,26,.25)]">
            {NAV_LINKS.map((n) => (
              <li key={n.to}>
                <NavLink
                  to={n.to}
                  end={n.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "px-3.5 py-2 rounded-full text-[0.88rem] font-medium transition-colors whitespace-nowrap",
                      isActive ? "text-mint bg-mint/10" : "text-ink/70 hover:text-ink hover:bg-ink/[0.04]"
                    )
                  }
                >
                  {n.t}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-[1.15rem] py-2.5 rounded-full bg-forest text-white font-semibold text-[0.9rem] transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-12px_rgba(11,18,26,.5)]"
          >
            Get in Touch <ArrowUpRight className="w-[1.05em] h-[1.05em]" />
          </Link>
          <button
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-ink border border-[var(--line)] bg-white/70"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-paper/97 backdrop-blur-md border-t border-[var(--line)]">
          <ul className="wrap flex flex-col py-3 list-none m-0">
            {NAV_LINKS.concat([{ to: "/contact", t: "Get in Touch" }]).map((n) => (
              <li key={n.to}>
                <NavLink
                  to={n.to}
                  end={n.to === "/"}
                  className={({ isActive }) =>
                    cn("block px-2 py-3 rounded-lg text-base", isActive ? "text-mint" : "text-ink/80")
                  }
                >
                  {n.t}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
