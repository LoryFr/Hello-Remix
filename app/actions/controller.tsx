import { createController } from "remix/router";
import { assetServer } from "../assets.ts";
import { routes } from "../routes.ts";
import { HomePage } from "../ui/pages/home.tsx";

export default createController(routes, {
  actions: {
    async assets(context) {
      return (
        (await assetServer.fetch(context.request)) ??
        new Response("Not Found", { status: 404 })
      );
    },
    services(context) {
      return context.render(<></>);
    },
    team(context) {
      return context.render(<></>);
    },
    home(context) {
      return context.render(<HomePage />);
    },
  },
});
