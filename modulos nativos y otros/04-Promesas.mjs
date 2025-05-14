import fs from 'node:fs/promises';

//Leer un fichero: de forma Asincrona
fs.readFile('./archivo.txt', 'utf-8')
.then((text) =>{
        console.log('Leyendo el primer archivo... 😊')
        console.log(text)
    })

//Leer un fichero: de forma Asincrona
fs.readFile('./archivo2.txt', 'utf-8')
.then(text =>{
        console.log('Leyendo el segundo archivo... 😊')
        console.log(text)
    })

console.log("Este codigo se va ejecutar antes del archivo 1 y 2...")