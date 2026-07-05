import { Document } from "../document.tsx";
import { routes, frames } from "../../routes.ts";
import { Frame } from "remix/ui";
import type { Handle } from "remix/ui";
import { Blog } from "../components/blog.tsx";

interface Props {
  articles: any[];
}

export function BlogPage(handle: Handle) {
  return () => (
    <Document>
      <Frame
        name={frames.articlesFeed}
        src={routes.articles.feed.href()}
        fallback={<div>Caricamento articoli...</div>}
      />
    </Document>
  );
}

export function BlogFeed(handle: Handle<Props>) {
  return () => {
    let { articles } = handle.props;
    return <Blog articles={articles}></Blog>;
  };
}
