import { createController } from "remix/router";
import { routes } from "../routes.ts";
import { BlogPage } from "../ui/pages/blog.tsx";

export default createController(routes.articles, {
  actions: {
    index(context) {
      return context.render(<BlogPage />);
    },
    show({ params }) {
      return new Response(`Post ${params.slug}`);
    },
  },
});
