import { cn } from "../../lib/utils";

const variants = {
  gold:
    "border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-surface)] hover:border-[var(--color-olive)] hover:bg-[var(--color-olive)]",
  outline:
    "border-[rgb(33_29_22_/_0.28)] bg-transparent text-[var(--color-ink)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]",
  ivory:
    "border-[var(--color-surface)] bg-[var(--color-surface)] text-[var(--color-ink)] hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-surface)]",
  quiet:
    "border-transparent bg-transparent text-[var(--color-ink)] hover:text-[var(--color-gold)]",
};

function Button({
  href,
  variant = "gold",
  className,
  children,
  target,
  rel,
  type = "button",
  ...props
}) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 border px-6 py-3 text-sm font-medium transition duration-300 ease-out active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <a className={classes} href={href} rel={rel} target={target} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}

export default Button;
