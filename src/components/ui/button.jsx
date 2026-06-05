import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full border border-transparent transition-all duration-300 ease-smooth tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/50 disabled:opacity-50",
  {
    variants: {
      variant: {
        mint: "bg-mint text-white hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-12px_rgba(23,159,212,.55)]",
        dark: "bg-forest text-white hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgba(11,18,26,.45)]",
        ghost: "bg-transparent text-white border-white/15 hover:border-mint hover:text-mint",
        outline: "bg-transparent text-ink border-[var(--line)] hover:border-mint hover:text-mint",
      },
      size: {
        default: "px-6 py-[0.92em] text-[0.98rem]",
        sm: "px-4 py-2 text-sm",
        lg: "px-7 py-4 text-base",
      },
    },
    defaultVariants: { variant: "mint", size: "default" },
  }
);

export function Button({ className, variant, size, to, href, children, ...props }) {
  const cls = cn(buttonVariants({ variant, size }), className);
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...props}>{children}</a>;
  return <button className={cls} {...props}>{children}</button>;
}
