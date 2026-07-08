import * as http from "node:http";
import { createRequestListener } from "remix/node-fetch-server";
import { router } from "./app/router.ts";
const PORT = 3000;

const server = http.createServer(
  createRequestListener(async (request) => {
    try {
      return await router.fetch(request);
    } catch (error) {
      if (!(request.signal.aborted && error === request.signal.reason)) {
        console.error(error);
      }
      return new Response("Internal Server Error", { status: 500 });
    }
  }),
);

export default server;

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

let shuttingDown = false;

function shutdown() {
  if (shuttingDown) {
    return;
  }
  shuttingDown = true;
  server.close(() => process.exit(0));
  server.closeAllConnections();
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
