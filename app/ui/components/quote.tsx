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
        <Input type="text" name="name" placeholder="Name" required></Input>
        <Input type="email" name="email" placeholder="Email" required></Input>
        <Input type="text" name="brand" placeholder="Company"></Input>
        <Input type="text" name="role" placeholder="Role"></Input>
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
