import { Document } from "../document.tsx";
import { routes, frames } from "../../routes.ts";
import { Hero } from "../components/hero.tsx";
import { Frame } from "remix/ui";

export function HomePage() {
  return () => (
    <Document>
      <Hero />
      {/*<Frame
        name={frames.homeProjects}
        src={routes.projects.feed.href()}
        fallback={<div>Caricamento progetti...</div>}
      />*/}
    </Document>
  );
}
