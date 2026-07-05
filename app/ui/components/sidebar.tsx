import type { Handle } from "remix/ui";
import { routes } from "../../routes.ts";

export function Sidebar(handle: Handle) {
  return () => (
    <aside
      popover="auto"
      id="sidebar"
      class="h-full w-80 bg-white-soft dark:bg-black-soft left-auto backdrop:bg-black/50 border-l dark:border-white-soft/10 border-black-soft/10 p-6 place-content-center transition-discrete transition ease-fluid opacity-0 translate-x-full open:opacity-100 open:translate-x-0 open:starting:opacity-0 open:starting:translate-x-full"
    >
      <div class="flex flex-col gap-8">
        <nav class="flex flex-col gap-6 w-full">
          <h3 class="text-black-soft/75 dark:text-white-soft/75 font-semibold">
            Resources
          </h3>
          <div class="flex flex-col gap-4">
            <a
              href={routes.projects.index.href()}
              class="text-black-soft dark:text-white-soft font-semibold flex items-center gap-4"
            >
              Projects
            </a>
            <a
              href="/articles"
              class="text-black-soft dark:text-white-soft font-semibold flex items-center gap-4"
            >
              Articoli
            </a>
            <a
              href="/services"
              class="text-black-soft dark:text-white-soft font-semibold flex items-center gap-4"
            >
              Servizi
            </a>
            <a
              href="/team"
              class="text-black-soft dark:text-white-soft font-semibold flex items-center gap-4"
            >
              Team
            </a>
            <a
              href="/documents/privacy-policy"
              class="text-black-soft dark:text-white-soft font-semibold flex items-center gap-4"
            >
              Privacy
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
}
