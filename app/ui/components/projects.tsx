import type { Handle } from "remix/ui";
import { ProjectCard } from "./project-card.tsx";
import { routes } from "../../routes.ts";

interface Props {
  projects: any[];
}

export function Projects(handle: Handle<Props>) {
  return () => {
    const { projects } = handle.props;
    return (
      <section class="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full py-8">
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            image={`https://admin.typable.studio/${project.image.url}`}
            href={routes.projects.show.href({ slug: project.slug })}
          />
        ))}
      </section>
    );
  };
}
