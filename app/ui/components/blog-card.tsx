import type { Handle } from "remix/ui";
import type { ElementProps } from "@remix-run/ui";

interface Props extends ElementProps {
  href: string;
  date: Date;
  title: string;
  description: string;
  author: {
    picture: string;
    name: string;
    role: string;
  };
}

export function BlogCard(handle: Handle<Props>) {
  return () => {
    const { href, title, date, description, author } = handle.props;
    const formattedDate = date.toLocaleDateString("en-CA", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    return (
      <article class="flex max-w-xl flex-col items-start justify-between">
        <div class="flex items-center gap-x-4 text-xs">
          <time
            datetime="2020-03-16"
            class="text-black-soft/75 dark:text-white-soft/75 py-1.5"
          >
            {formattedDate}
          </time>
        </div>
        <div class="group relative grow">
          <h3 class="mt-3 text-lg/6 font-semibold text-black-soft dark:text-white-soft dark:group-hover:text-lavender-light group-hover:text-purple-strong">
            <a href={href}>
              <span class="absolute inset-0"></span>
              {title}
            </a>
          </h3>
          <p class="mt-5 line-clamp-2 text-sm/6 text-black-soft/75 dark:text-white-soft/75">
            {description}
          </p>
        </div>
        <div class="relative mt-8 flex items-center gap-x-4 justify-self-end">
          <img
            src={author.picture}
            alt="avatar"
            class="size-10 rounded-full shadow-2xl dark:shadow-none"
          />
          <div class="text-sm/6">
            <p class="font-semibold text-black-soft dark:text-white-soft">
              <a href="#">
                <span class="absolute inset-0"></span>
                {author.name}
              </a>
            </p>
            <p class="text-black-soft/75 dark:text-white-soft/75">
              {author.role}
            </p>
          </div>
        </div>
      </article>
    );
  };
}
