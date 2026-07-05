import type { Handle } from "remix/ui";
import { BlogCard } from "./blog-card.tsx";
import { routes } from "../../routes.ts";

interface Props {
  articles: any[];
}

export function Blog(handle: Handle<Props>) {
  return () => {
    const { articles } = handle.props;
    console.log(articles);
    return (
      <section class="gap-x-8 gap-y-16 w-full py-8 flex flex-col">
        {articles
          .sort(
            (a, b) =>
              new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
          )
          .map((article) => (
            <BlogCard
              date={article.updatedAt}
              title={article.title}
              description={article.description}
              author={{
                picture: article.author.image.url,
                name: article.author.name,
                role: article.author.role,
              }}
              href={routes.articles.show.href({ slug: article.slug })}
            />
          ))}
      </section>
    );
  };
}
