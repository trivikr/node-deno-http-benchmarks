# node-deno-http-benchmarks

Steps to benchmark Deno

- Install Deno
- Run deno server
  `deno run --allow-net deno_http.ts &`
- Run benchmarks, using autocannon for example
  `autocannon localhost:3000`
- Kill the server running in the background
  `lsof -ti tcp:3000 | xargs kill`
