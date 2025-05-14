const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log('request received');
    res.end('Hola Mundo');
})

// Usar puerto 0, me asigna un puerto disponible
server.listen(0, () => {
    console.log(`server listening in port ${server.address().port}`);
})