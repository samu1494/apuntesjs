const net = require('node:net');


// Probar si un puerto esta disponible
function findAvailablePort(desirePort){
    return new Promise((resolve, reject) => {
        const server = net.createServer();

        server.listen(desirePort, () => {
            const {port} = server.address();
            console.log(port);
            server.close(() => {
                resolve(port);
            })  
        })

        server.on('error', (err) => {
            if(err.code === 'EADDRINUSE'){
                findAvailablePort(0).then(port => resolve(port));
            }else{
                reject(err);
            }
        })
    })
}

module.exports = {
    findAvailablePort
}