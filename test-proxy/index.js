const http = require('http')
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  if (!req.url) throw new Error('URLが指定されていません。');
  const urlObj = new URL(req.url);
  proxy.web(req, res, { target: urlObj.origin });
});

server.listen(8080)
