const { createServer } = require('http');

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('hi');
  console.log('request was made');
});

module.exports = {
  app
};
