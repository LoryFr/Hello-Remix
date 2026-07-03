import { get, route, form } from "remix/routes";

export const routes = route({
  assets: get("/assets/*path"),
  home: "/",
  articles: {
    index: "/articles",
    show: "/articles/:slug",
  },
  projects: {
    index: "/projects",
    show: "/projects/:slug",
  },
  services: "/services",
  team: "/team",
  quote: form("/quote"),
});
