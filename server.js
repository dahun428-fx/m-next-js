// server.js

const http = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = 3000;

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
});
const agentOptions = {
host: 'local.misumi-ec.com'
, port: '3001'
, path: '/'
, rejectUnauthorized: false
};
const https = require("https");
https.Agent(agentOptions);
const fs = require("fs");
const options = {
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./cert.pem"),
};
https
  .createServer(options, function (req, res) {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  })
  .listen(PORT + 1, (err) => {
    if (err) throw err;
    console.log(`> Ready on https://local.misumi-ec.com:${PORT + 1}`);
  });