import { createController } from "remix/router";
import { routes } from "../routes.ts";
import { ProjectsPage, ProjectsFeed } from "../ui/pages/projects.tsx";

export default createController(routes.projects, {
  actions: {
    async index(context) {
      return context.render(<ProjectsPage />);
    },
    async feed(context) {
      let response = await fetch("https://admin.typable.studio/api/projects");
      let projects = await response.json();

      return context.render(<ProjectsFeed projects={projects.docs} />);
    },
    async show({ params }) {
      let article = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.slug}`,
      );
      let articleData = await article.json();

      return new Response(`Post ${articleData.title}`);
    },
  },
});
