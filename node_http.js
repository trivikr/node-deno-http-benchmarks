const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

http.createServer((req, res) => {
  res.end("Hello World");
}).listen(port, hostname, () => {
  console.log("node listening on:", port);
});
