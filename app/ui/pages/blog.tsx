import { Document } from "../document.tsx";
import { routes } from "../../routes.ts";

export function BlogPage() {
  return () => (
    <Document>
      <a href={routes.home.href()}>Home</a>
    </Document>
  );
}
