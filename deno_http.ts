import { serve } from "https://deno.land/std@0.61.0/http/server.ts";

const port = 3000;
const s = serve({ port });

console.log("deno_http listen on", port);
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
