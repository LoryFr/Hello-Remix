import type { Handle } from "remix/ui";
import { ButtonLink } from "./button-link.tsx";
import { Button } from "./button.tsx";

export function Header(handle: Handle) {
  return () => (
    <header class="flex items-center py-6 justify-between sticky top-0 bg-white dark:bg-black z-9">
      <hgroup class="flex items-center gap-12">
        <a
          href="/"
          class="text-2xl font-[820] font-cabinet-grotesk text-purple-strong dark:text-lavender-light"
          translate="no"
        >
          Typable<span class="text-purple-medium">.</span>
        </a>
      </hgroup>
      <div class="flex gap-4 items-center">
        <div class="max-md:hidden flex">
          <ButtonLink variant="rounded" state="default" href={"/quote"}>
            Get a Quote
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
              class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 7l-10 10" />
              <path d="M8 7l9 0l0 9" />
            </svg>
          </ButtonLink>
        </div>
        <Button
          variant="square"
          state="default"
          popovertarget={"sidebar"}
          popovertargetaction={"show"}
          aria-label={"open menu"}
        >
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
            class="icon icon-tabler icons-tabler-outline icon-tabler-menu-4"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 6h10" />
            <path d="M4 12h16" />
            <path d="M7 12h13" />
            <path d="M7 18h10" />
          </svg>
        </Button>
      </div>
    </header>
  );
}
