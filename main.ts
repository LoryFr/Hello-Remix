import { createRequestListener } from "remix/node-fetch-server";
import { router } from "./app/router.ts";

const handler = createRequestListener(async (request) => {
  try {
    return await router.fetch(request);
  } catch (error) {
    if (!(request.signal.aborted && error === request.signal.reason)) {
      console.error(error);
    }
    return new Response("Internal Server Error", { status: 500 });
  }
});

export default handler;
