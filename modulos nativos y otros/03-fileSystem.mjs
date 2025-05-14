import fs from 'node:fs';

//Informacion del archivo
const stats = fs.statSync('./archivo.txt')
console.log(stats.isFile()) // si es un fichero
console.log(stats.isDirectory())    //si es un directorio
console.log(stats.isSymbolicLink()) //si es un enlace simbolico
console.log(stats.size) //tamaño en bytes

//Leer un fichero: de forma Sincrona
console.log('Leyendo el primer archivo... 😊')
const text = fs.readFileSync('./archivo.txt', 'utf-8');

console.log(text);

//Leer un fichero: de forma Asincrona
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('Leyendo el segundo archivo... 😊')
    console.log(text);
});


console.log("Este codigo se va ejecutar antes del archivo 2...")