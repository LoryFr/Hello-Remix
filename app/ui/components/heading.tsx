import type { Handle } from "remix/ui";

interface Props {
  title: string;
  subtitle: string;
}

export function Heading(handle: Handle<Props>) {
  return () => {
    let { title, subtitle } = handle.props;
    return (
      <hgroup class="flex items-center gap-x-3 gap-y-1 flex-wrap">
        <h2 class="font-semibold text-black-soft dark:text-white-soft">
          {title}
        </h2>
        <span class="font-semibold text-black-soft/75 dark:text-white-soft/75">
          —
        </span>
        <p class="font-medium text-black-soft/75 dark:text-white-soft/75">
          {subtitle}
        </p>
      </hgroup>
    );
  };
}
