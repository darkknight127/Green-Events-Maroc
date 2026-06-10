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
        <p className="mb-4 text-sm font-medium text-[#C8A45D]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="font-display text-4xl font-normal leading-tight text-[#F7F1E7] sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {intro ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#D8C3A5] sm:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeader;
