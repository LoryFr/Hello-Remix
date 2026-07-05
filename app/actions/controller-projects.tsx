import { createController } from "remix/router";
import { routes } from "../routes.ts";
import { ProjectsPage, ProjectsFeed } from "../ui/pages/projects.tsx";

export default createController(routes.projects, {
  actions: {
    index(context) {
      return context.render(<ProjectsPage />);
    },
    async feed(context) {
      let response = await fetch("https://admin.typable.studio/api/projects");
      let projects = await response.json();

      return context.render(<ProjectsFeed projects={projects.docs} />);
    },
    show({ params }) {
      return new Response(`Post ${params.slug}`);
    },
  },
});
