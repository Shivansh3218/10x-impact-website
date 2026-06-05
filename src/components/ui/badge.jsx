import { cn } from "../../lib/cn";

export function Badge({ className, children, tone = "default", ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-[0.7rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-full border",
        tone === "mint"
          ? "bg-[var(--mint-soft)] border-transparent text-mint"
          : "border-white/15 text-white/70 bg-white/[0.04]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
