import { createRouter, type MiddlewareContext } from "remix/router";
import { staticFiles } from "remix/middleware/static";
import { formData } from "remix/middleware/form-data";
import controller from "./actions/controller.tsx";
import Articles from "./actions/controller-articles.tsx";
import controllerQuote from "./actions/controller-quote.tsx";
import controllerProjects from "./actions/controller-projects.tsx";
import { render } from "./middleware/render.tsx";
import { routes } from "./routes.ts";

type AppContext = MiddlewareContext<[ReturnType<typeof render>]>;

declare module "remix/router" {
  interface RouterTypes {
    context: AppContext;
  }
}

export const router = createRouter<AppContext>({
  middleware: [staticFiles("./public", { index: false }), formData(), render()],
});

router.map(routes, controller);
router.map(routes.articles, Articles);
router.map(routes.quote, controllerQuote);
router.map(routes.projects, controllerProjects);
