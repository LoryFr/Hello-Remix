import type { Handle } from "remix/ui";
import { ButtonLink } from "./button-link.tsx";

export function Hero(handle: Handle) {
  return () => (
    <section class="flex flex-col justify-between min-h-80">
      <div class="flex justify-between gap-16 max-md:gap-8 max-md:flex-col-reverse">
        <hgroup class="flex flex-col gap-4">
          <h1 class="text-2xl font-semibold text-black-soft/75 dark:text-white-soft/75 max-w-236 text-pretty pr-2">
            <span class="text-black-soft dark:text-white-soft">
              A Digital Powerhouse
            </span>{" "}
            making Cool Things that&nbsp;
            <span class="text-purple-strong dark:text-lavender-light underline underline-offset-4">
              Just Work.
            </span>
          </h1>
          <div class="flex items-center gap-4">
            <p class="text-sm font-medium text-black-soft dark:text-white-soft">
              Creative Agency
            </p>
            <span class="text-sm font-medium text-black-soft/75 dark:text-white-soft/75">
              /
            </span>
            <p class="text-sm font-medium text-black-soft/75 dark:text-white-soft/75">
              Based in Milan, IT
            </p>
          </div>
        </hgroup>
        <a
          class="text-black-soft dark:text-white-soft text-sm font-medium underline underline-offset-4 max-md:hidden"
          href="mailto:hello@typable.studio"
        >
          hello@typable.studio
        </a>
      </div>
      <div class="flex">
        <ButtonLink
          variant="rounded"
          state="default"
          href="mailto:hello@typable.studio"
        >
          Let's Talk
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
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M17 7l-10 10"></path>
            <path d="M8 7l9 0l0 9"></path>
          </svg>
        </ButtonLink>
      </div>
    </section>
  );
}
