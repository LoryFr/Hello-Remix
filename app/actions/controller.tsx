import { createController } from "remix/router";

import { assetServer } from "../assets.ts";
import { routes } from "../routes.ts";
import { HomePage } from "../ui/pages/home.tsx";
import { BlogPage } from "../ui/pages/blog.tsx";

export default createController(routes, {
  actions: {
    async assets(context) {
      return (
        (await assetServer.fetch(context.request)) ??
        new Response("Not Found", { status: 404 })
      );
    },
    home(context) {
      return context.render(<HomePage />);
    },
    blog(context) {
      return context.render(<BlogPage />);
    },
  },
});
