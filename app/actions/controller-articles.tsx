import { createController } from "remix/router";
import { routes } from "../routes.ts";
import { BlogPage, BlogFeed } from "../ui/pages/blog.tsx";

export default createController(routes.articles, {
  actions: {
    index(context) {
      return context.render(<BlogPage />);
    },
    async feed(context) {
      let response = await fetch("https://admin.typable.studio/api/articles");
      let articles = await response.json();

      return context.render(<BlogFeed articles={articles.docs} />);
    },
    show({ params }) {
      return new Response(`Post ${params.slug}`);
    },
  },
});
