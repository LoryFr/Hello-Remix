import { Document } from "../document.tsx";
import { routes, frames } from "../../routes.ts";
import { Frame } from "remix/ui";
import type { Handle } from "remix/ui";

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
    return (
      <div>
        {articles.map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
          </div>
        ))}
      </div>
    );
  };
}
