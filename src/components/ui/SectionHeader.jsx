import { cn } from "../../lib/utils";

function SectionHeader({ eyebrow, title, intro, align = "left", className }) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-sm font-medium text-[var(--color-gold)]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="font-display text-[2.25rem] font-normal leading-[1.08] text-[var(--color-ink)] sm:text-[2.75rem] lg:text-[3.25rem]">
        {title}
      </h2>

      {intro ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeader;
