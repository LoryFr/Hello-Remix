import { createController } from "remix/router";
import { routes } from "../routes.ts";
import { QuotePage } from "../ui/pages/quote.tsx";

export default createController(routes.quote, {
  actions: {
    index(context) {
      return context.render(<QuotePage />);
    },
    action({ get, render }) {
      let formData = get(FormData);
      let message = formData?.get("message") as string;
      console.log(message);

      return render(<QuotePage />);
    },
  },
});
