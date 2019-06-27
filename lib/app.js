const { createServer } = require('http');
const { parse } = require('url');
const { readFile } = require('./read-file');

const app = createServer((req, res) => {
  res.statusCode = 200;
  const { pathname } = parse(req.url);
  res.setHeader('Content-Type', 'text/html');
  if(pathname === '/index.html') {
    readFile('./public/index.html', (err, content) => {
      if(err && err.code === 'ENOENT');
      res.end(content);
    });
  }
});

module.exports = {
  app
};
