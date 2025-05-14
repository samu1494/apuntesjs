/*
    Programa para listar todos los archivos y directorios
    de una carpeta usando: readdir del modulo fs
    usando promesas
*/
import {readdir} from 'node:fs/promises';

readdir('.')
.then((files) => {
    files.forEach((file) => {
        console.log(file)
    })
})
.catch((err)=> {
    console.error("Error al leer el directorio: ",err)
})

console.log("este codigo se va ejecutar primero")