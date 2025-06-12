// Middlewares - herramienta que procesa una peticion antes de ejecutarla
const express = require('express');
const ditto = require('./pokemon/ditto.json');
const app = express();

// --> quitar cabezeras para evitar problemas de seguridad
app.disable('x-powered-by');
const port = process.env.PORT ?? 1234;

// --> Middleware, creacion
// --> next() : para que siga con la ejecucion del codigo,sino
//              contiene next() la peticion queda en espera
app.use((req, res, next) => {
  if (req.method !== 'POST') return next();
  if (req.headers['content-type'] !== 'application/json') return next();

  // -> aqui solo llegan request que son POST y tienen el content-type: application/JSON

  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const data = JSON.parse(body);
    data.timestamp = Date.now();
    // mutar la request y meter la informacion en el req.body
    req.body = data;
    next();
  });
});

// --> RUTAS aquí:

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto);
});

app.post('/pokemon', (req, res) => {
  // --> req.body se debe almacenar en la BD
  res.status(201).json(req.body);
});

// --> Para todo tipo de accion q no existe ingresa aqui "use"
app.use((req, res) => {
  res.status(404).send('<h1>404 ERROR, pagina no encontrada</h1>');
});

app.listen(port, () => {
  console.log('Server listening on port http://localhost/', port);
});
