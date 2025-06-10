const http = require('node:http');
const fs = require('node:fs');
const desiredPort = process.env.PORT || 1234;

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8'); 

    console.log(`request received: ${req.url}`);
    if(req.url === '/'){
        res.end('<h1>Bievenido a mi página de inicio 😁</h1>');
    }else if(req.url === '/imagen-super-bonita.png'){
        fs.readFile('./image.png', (err, data) => {
            if(err){
                res.statusCode = 500;
                res.end('<h1>500 - Error internal server</h1>');
            }else{
                res.setHeader('Content-Type', 'image/png');
                res.end(data);
            }
        });
    }else if(req.url === '/contacto'){
        res.end('<h1>Contacto</h1>');
    }else{
        res.statusCode = 404; //Not Found
        res.end('<h1>404 - Not Found</h1>');
    }
}

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
    console.log(`server listening in port: http://localhost:${desiredPort}/`);
})

// Primera forma de ejecutar un servidor sin cortes:
// correr un servidor nodejs sin cortar el servicio: node --watch index.js

// Segunda Forma: nodemon
// npm install nodemon -D
/*
"scripts": {
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  CORRER: npm run dev
*/

