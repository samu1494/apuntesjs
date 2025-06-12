// Middlewares - herramienta que procesa una peticion antes de ejecutarla
const express = require('express');
const ditto = require('./pokemon/ditto.json');
const app = express();

// --> quitar cabezeras para evitar problemas de seguridad
app.disable('x-powered-by');
const port = process.env.PORT ?? 1234;

// --> Middleware
// express.json(): es un middleware que convierte el body a JSON de una peticion
app.use(express.json()); // -> Aplica ese middleware a todas las rutas del servidor

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
