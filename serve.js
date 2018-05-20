const serveStatic = require('serve-static');
const connect = require('connect');
const http = require('http');

const port = 8081;
const dir = "./";

const serve = serveStatic(dir);
const app = connect();

app.use(serve);
http.createServer(app).listen(port);

console.log("serving localhost:"+ port);
