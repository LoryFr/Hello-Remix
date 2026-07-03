import { Document } from "../document.tsx";
import { routes } from "../../routes.ts";

export function HomePage() {
  return () => (
    <Document>
      <main>
        <div>
          <a href={routes.blog.href()}>Blog</a>
        </div>
      </main>
    </Document>
  );
}
