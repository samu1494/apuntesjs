const path = require('node:path');

// que barra separa las de carpetas segun el sistema operativo
console.log(path.sep);

// unir rutas
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);  // content\subfolder\test.txt

const base = path.join('tmp/samuDev', 'secret-project/index.html');
console.log(base) // tmp\samuDev\secret-project\index.html

// obtener el nombre del fichero con su extension
const fileNamePath = path.basename(filePath);
console.log(fileNamePath) // test.txt

// obtener el nombre del fichero con sin su extension
const fileNameBase = path.basename(base, '.html');
console.log(fileNameBase);  // index

// Obtener el nombre de la extencion del archivo
const extensionFileBase = path.extname(base);
console.log(extensionFileBase); //.html

const extensionImage = path.extname('myimages/music/violin.big.png');
console.log(extensionImage); //.png


