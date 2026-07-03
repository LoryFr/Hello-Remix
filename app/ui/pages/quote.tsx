import { Document } from "../document.tsx";
import { routes } from "../../routes.ts";
import { Quote } from "../components/quote.tsx";

export function QuotePage() {
  return () => (
    <Document>
      <Quote></Quote>
    </Document>
  );
}
