import type { Handle } from "remix/ui";
import { Heading } from "./heading.tsx";
import { Input } from "./input.tsx";
import { TextArea } from "./text-area.tsx";
import { Button } from "./button.tsx";
import { routes } from "../../routes.ts";

export function Quote(handle: Handle) {
  return () => (
    <>
      <Heading
        title="Get a Quote"
        subtitle="Tailored to your project, built around your needs."
      />
      <form
        method="POST"
        action={routes.quote.action.href()}
        class="grid grid-cols-2 gap-6 max-md:grid-cols-1"
      >
        <Input type="text" name="name" placeholder="Name" required>
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
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M9 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
          </svg>
        </Input>
        <Input type="email" name="email" placeholder="Email" required>
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
            <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
          </svg>
        </Input>
        <Input type="text" name="brand" placeholder="Company">
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
            <path d="M3 21l18 0" />
            <path d="M5 21v-14l8 -4v18" />
            <path d="M19 21v-10l-6 -4" />
            <path d="M9 9l0 .01" />
            <path d="M9 12l0 .01" />
            <path d="M9 15l0 .01" />
            <path d="M9 18l0 .01" />
          </svg>
        </Input>
        <Input type="text" name="role" placeholder="Role">
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
            <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
            <path d="M14.5 5.5l4 4" />
            <path d="M12 8l-5 -5l-4 4l5 5" />
            <path d="M7 8l-1.5 1.5" />
            <path d="M16 12l5 5l-4 4l-5 -5" />
            <path d="M16 17l-1.5 1.5" />
          </svg>
        </Input>
        <div class="flex col-span-2 max-md:col-span-1">
          <TextArea
            placeholder={"Something about your project"}
            name="content"
            required
          />
        </div>
        <div class="flex flex-col col-span-2 max-md:col-span-1">
          <Button variant="default" state="active">
            Get a Quote
          </Button>
        </div>
        <p class="mt-2 col-span-2 max-md:col-span-1 text-sm font-medium text-black-soft/75 dark:text-white-soft/75 w-fit m-auto">
          Your data is handled according to our{" "}
          <a
            href="/documents/privacy-policy"
            class="text-black-soft dark:text-white-soft underline underline-offset-4"
          >
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </>
  );
}
