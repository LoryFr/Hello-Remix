import { Document } from "../document.tsx";
import { routes } from "../../routes.ts";
import { Hero } from "../components/hero.tsx";
import { Frame } from "remix/ui";

export function HomePage() {
  return () => (
    <Document>
      <Hero />
      <Frame
        src={routes.projects.feed.href()}
        fallback={<div>Caricamento progetti...</div>}
      />
    </Document>
  );
}
