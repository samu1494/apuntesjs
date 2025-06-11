const http = require('node:http');
const dittoJSON = require('./pokemon/ditto.json');

const processRequest = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          return res.end(JSON.stringify(dittoJSON));
        default:
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          return res.end('404 Not Found');
      }
    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = '';
          // escuchar el evento data, cuando haya datos por recibir
          req.on('data', (chunk) => {
            body += chunk.toString();
          });
          // escuchar cuando termine el proceso de recepcion de datos
          req.on('end', () => {
            const data = JSON.parse(body);
            data.time;
            //llamar a una BD para guardar la info
            res.writeHead(201, {
              'Content-Type': 'application/json; charset=utf-8',
            });
            data.timestamp = Date.now();
            res.end(JSON.stringify(data));
          });
          break;
        }
        default:
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          return res.end('404 Not Found');
      }
  }
};

const server = http.createServer(processRequest);

const port = 1234;

server.listen(port, () => {
  console.log(`Server listening on port http://localhost/${port}`);
});
