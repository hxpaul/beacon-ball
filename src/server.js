'use strict';
var React = require('react');
var http = require('http');
const App = require('./app');
const hostname = '127.0.0.1';
const port = 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const content = React.renderToString(React.createFactory(App));
  res.end(content);
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
