import type { Handle, RemixNode } from "remix/ui";
import type { ElementProps } from "@remix-run/ui";

interface Props extends ElementProps {
  variant: "square" | "circle" | "default" | "rounded";
  state: "default" | "active";
  children?: RemixNode;
}

export function Button(handle: Handle<Props>) {
  const variants = {
    square: "rounded-xl w-12",
    circle: "rounded-full w-12",
    default: "rounded-xl pl-6 pr-5",
    rounded: "rounded-full pl-6 pr-5",
  };

  const states = {
    default:
      "bg-white-soft dark:bg-black-soft hover:bg-purple-strong dark:hover:bg-lavender-light border-black-soft/10 dark:border-white-soft/10 text-black-soft dark:text-white-soft hover:text-white-soft dark:hover:text-black-soft",
    active:
      "bg-black-soft dark:bg-white-soft hover:bg-white-soft dark:hover:bg-black-soft border-transparent dark:border-transparent hover:border-black-soft/10 dark:hover:border-white-soft/10 text-white-soft dark:text-black-soft hover:text-black-soft dark:hover:text-white-soft",
  };

  return () => {
    let { children, variant, state, ...props } = handle.props;
    return (
      <button
        class={`h-12 flex items-center gap-2 justify-center border font-geist font-medium text-sm cursor-pointer transition ease-fluid ${variants[variant]} ${states[state]}`}
        {...props}
      >
        {children}
      </button>
    );
  };
}
