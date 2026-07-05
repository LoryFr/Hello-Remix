import { Document } from "../document.tsx";
import type { Handle } from "remix/ui";
import { Frame } from "remix/ui";
import { Projects } from "../components/projects.tsx";
import { routes, frames } from "../../routes.ts";

interface Props {
  projects: any[];
}

export function ProjectsPage(handle: Handle) {
  return () => {
    return (
      <Document>
        <Frame
          name={frames.projectsFeed}
          src={routes.projects.feed.href()}
          fallback={<div>Caricamento progetti...</div>}
        />
      </Document>
    );
  };
}

export function ProjectsFeed(handle: Handle<Props>) {
  return () => {
    let { projects } = handle.props;
    return <Projects projects={projects} />;
  };
}
