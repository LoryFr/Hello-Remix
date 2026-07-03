import type { Handle, RemixNode } from "remix/ui";
import type { ElementProps } from "@remix-run/ui";

interface Props extends ElementProps {
  children?: RemixNode;
}

export function TextArea(handle: Handle<Props>) {
  return () => {
    let { children, ...props } = handle.props;
    return (
      <label for={props.name} class="flex w-full">
        <textarea
          class="h-60 resize-none flex bg-white-soft dark:bg-black-soft border border-black-soft/10 dark:border-white-soft/10 text-black-soft dark:text-white-soft font-geist font-medium text-sm rounded-xl pl-6 pt-4 pr-15 min-w-0 w-full placeholder:text-black-soft/80 dark:placeholder:text-white-soft/80"
          {...props}
        ></textarea>
      </label>
    );
  };
}
