/*
    Programa para listar todos los archivos y directorios
    de una carpeta usando: readdir del modulo fs
*/
import {readdir} from 'node:fs';

readdir('.', (err, files)=>{
    if(err){
        console.error("Error al leer el directorio: ",err);
        return;
    }
    files.forEach(file => console.log(file));
})

