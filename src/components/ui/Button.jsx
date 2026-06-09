import { cn } from "../../lib/utils";

const variants = {
  gold:
    "border-[#C8A45D] bg-[#C8A45D] text-[#070605] hover:bg-[#F7F1E7] hover:border-[#F7F1E7]",
  outline:
    "border-[#F7F1E7]/35 bg-transparent text-[#F7F1E7] hover:border-[#C8A45D] hover:text-[#C8A45D]",
  ivory:
    "border-[#F7F1E7] bg-[#F7F1E7] text-[#070605] hover:border-[#C8A45D] hover:bg-[#C8A45D]",
  quiet:
    "border-transparent bg-transparent text-[#F7F1E7] hover:text-[#C8A45D]",
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
    "inline-flex min-h-12 items-center justify-center gap-2 border px-6 py-3 text-sm font-medium transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8A45D]",
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
