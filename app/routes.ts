import { get, route, form } from "remix/routes";

export const frames = {
  homeProjects: "home-projects",
  projectsFeed: "projects-feed",
  articlesFeed: "articles-feed",
} as const;

export const routes = route({
  assets: get("/assets/*path"),
  home: "/",
  articles: {
    index: "/articles",
    feed: "/articles/_feed",
    show: "/articles/:slug",
  },
  projects: {
    index: "/projects",
    feed: "/projects/_feed",
    show: "/projects/:slug",
  },
  services: "/services",
  team: "/team",
  quote: form("/quote"),
});
