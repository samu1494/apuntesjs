const express = require('express');
const ditto = require('./pokemon/ditto.json');
const app = express();

// --> quitar cabezeras para evitar problemas de seguridad
app.disable('x-powered-by');

const port = process.env.PORT ?? 1234;

app.get('/', (req, res) => {
  //--> Envio de un html
  res.status(200).send('<h1>Hello world</h1>');
  //--> envio de un JSON
  /*   
    res.json({
    name: 'samuel',
    saludo: 'hola',
  }); */
});

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto);
});

app.post('/pokemon', (req, res) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const data = JSON.parse(body);
    data.timestamp = Date.now();
    res.status(201).send(data);
  });
});

// --> Para todo tipo de accion q no existe ingresa aqui "use"
app.use((req, res) => {
  res.status(404).send('<h1>404 ERROR, pagina no encontrada</h1>');
});

app.listen(port, () => {
  console.log('Server listening on port http://localhost/', port);
});
