import { cn } from "../../lib/utils";

function Container({ as: Component = "div", className, children, ...props }) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[96rem] px-5 sm:px-8 lg:px-12 2xl:px-14",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Container;
