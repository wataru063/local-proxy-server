const http = require("http");

http
  .createServer((req, res) => {
    res.write("Hello Proxy");
    res.end();
  })
  .listen(9000);
