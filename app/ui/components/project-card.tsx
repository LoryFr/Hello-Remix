import type { Handle } from "remix/ui";
import type { ElementProps } from "@remix-run/ui";
import { Button } from "./button.tsx";

interface Props extends ElementProps {
  title: string;
  image: string;
}

export function ProjectCard(handle: Handle<Props>) {
  return () => {
    const { title, image, ...props } = handle.props;
    return (
      <a
        class="bg-white-soft dark:bg-black-soft p-1 w-full rounded-xl flex border border-black-soft/15 dark:border-white-soft/15 break-inside-avoid aspect-4/5 group"
        {...props}
        aria-label={title}
      >
        <figure class="rounded-lg border border-black-soft/25 dark:border-white-soft/25 size-full relative overflow-clip">
          <img
            src={image}
            alt=""
            class="size-full object-cover"
            width={1080}
            height={1350}
          />
          <div class="absolute m-auto inset-0 flex items-center justify-center pointer-events-none opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition ease-in-out">
            <Button variant="circle" state="default" aria-hidden disabled>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 7l-10 10" />
                <path d="M8 7l9 0l0 9" />
              </svg>
            </Button>
          </div>
        </figure>
      </a>
    );
  };
}
