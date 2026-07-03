import type { Handle } from "remix/ui";

export function Footer(handle: Handle) {
  return () => (
    <footer class="py-8 flex justify-between gap-4 max-md:flex-col max-md:text-center mt-auto">
      <p class="text-sm font-medium text-black-soft/75 dark:text-white-soft/75">
        © {new Date().getFullYear()}{" "}
        <a
          href="/"
          class="text-black-soft dark:text-white-soft underline underline-offset-4"
        >
          Typable Studio
        </a>
        . All rights reserved.
      </p>
      <p class="text-sm font-mediumtext-black-soft/75 dark:text-white-soft/75">
        P.IVA 14481360965
      </p>
    </footer>
  );
}
