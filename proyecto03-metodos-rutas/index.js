const http = require('node:http')

const processRequest = (req, res) => {

}

const server = http.createServer(processRequest)

const port = 1234

server.listen(port, () => {
    console.log(`Server listening on port http://localhost/${port}`);
})

