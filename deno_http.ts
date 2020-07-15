import { serve } from "https://deno.land/std@0.61.0/http/server.ts";

const port = 3000;
const s = serve({ port });
const body = new TextEncoder().encode("Hello World");

console.log("deno_http listen on", port);
for await (const req of s) {
  const res = {
    body,
    headers: new Headers(),
  };
  res.headers.set("Date", new Date().toUTCString());
  res.headers.set("Connection", "keep-alive");
  req.respond(res).catch(() => {});
}
