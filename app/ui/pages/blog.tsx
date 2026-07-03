import { Document } from "../document.tsx";
import { routes } from "../../routes.ts";

export function BlogPage() {
  return () => (
    <Document>
      <main>
        <div>
          <a href={routes.home.href()}>Home</a>
        </div>
      </main>
    </Document>
  );
}
