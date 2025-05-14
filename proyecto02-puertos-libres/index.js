const http = require('http');
const {findAvailablePort} = require('./free-ports.js');

const desiredPort = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log('request received');
    res.end('Hola Mundo');
})

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`server listening in port: http://localhost:${port}/`);
    })
})

// Ejcutar powershell: $env:PORT=1234; node index.js