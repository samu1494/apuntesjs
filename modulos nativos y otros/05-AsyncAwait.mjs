import {readFile} from 'node:fs/promises';

//Leer un fichero: de forma Asincrona
console.log('Leyendo el primer archivo... 😊')
const text = await readFile('./archivo.txt', 'utf-8')

console.log(text)

//Leer un fichero: de forma Asincrona
console.log('Leyendo el segundo archivo... 😊')
const secondText = await readFile('./archivo2.txt', 'utf-8')

console.log(secondText);


console.log("Este codigo se va ejecutar despues del archivo 1 y 2...")