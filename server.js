const http = require('http');

const hostname = '127.0.0.1';
// const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello, World!\n')
  res.write('\n')
  res.end(`Page running on Node.js ${process.version}`);
});

server.listen(port, hostname, () => {
  console.log(`Node.js version: ${process.version}`);
  console.log(`Server running at http://${hostname}:${port}/`);
});
