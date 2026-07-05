import type { Handle, RemixNode, FrameHandle } from "remix/ui";
import { Header } from "./components/header.tsx";
import { Footer } from "./components/footer.tsx";
import { routes } from "../routes.ts";

export interface Props {
  children?: RemixNode;
  head?: RemixNode;
  title?: string;
}

export function Document(handle: Handle<Props>) {
  return () => {
    let { children, head, title } = handle.props;
    let isNavigating = false;

    return (
      <html lang="en" class="scrollbar-none">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link href="/style.css" rel="stylesheet" />
          <title>{title}</title>
          {head}
        </head>
        <body class="bg-white dark:bg-black text-black-soft dark:text-white-soft px-8 md:px-16 pb-8 font-geist antialiased scrollbar-none flex flex-col gap-16 m-auto max-w-7xl min-h-screen">
          <Header />
          <main class="contents">{children}</main>
          <Footer />
          <script
            type="module"
            src={routes.assets.href({ path: "app/assets/entry.ts" })}
          ></script>
        </body>
      </html>
    );
  };
}
