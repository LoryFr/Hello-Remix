import type { Handle } from "remix/ui";
import { BlogCard } from "./blog-card.tsx";
import { routes } from "../../routes.ts";

interface Props {
  articles: any[];
}

export function Projects(handle: Handle<Props>) {
  return () => {
    const { articles } = handle.props;
    return (
      <section class="gap-x-8 gap-y-16 w-full py-8 flex flex-col">
        {articles
          .sort(
            (a, b) =>
              new Date(b.data.pubDate).getTime() -
              new Date(a.data.pubDate).getTime(),
          )
          .map((article) => (
            <BlogCard
              date={article.data.pubDate}
              title={article.data.title}
              description={article.data.description}
              author={{
                picture: article.author?.image.src!,
                name: article.author?.name!,
                role: article.author?.role!,
              }}
              href={routes.articles.show.href({ slug: article.slug })}
            />
          ))}
      </section>
    );
  };
}
