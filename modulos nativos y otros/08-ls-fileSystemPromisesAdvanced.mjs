/*
    Programa para listar todos los archivos y directorios
    de una carpeta usando: readdir del modulo fs
    usando promesas
*/
import {readdir, stat} from 'node:fs/promises';
import {join} from 'node:path';

// -> process.argv[2] : es el directorio actual del archivo.
// EJECUTAR: node 08-ls-fileSystemPromisesAdvanced.mjs './cjs'
const folder = process.argv[2] ?? '.';

async function ls(folder){
    let files;
    try{
        files = await readdir(folder)
    }catch{
        console.error(`No se pudo leer el directorio ${folder}`);
        process.exit(1);
    }   

    const filePromises = files.map(async file => {
        const filePath = join(folder, file);
        let stats;
        try{
            stats = await stat(filePath);
        }catch{
            console.error(`No se pudo leer el archivo ${filePath}`);
            process.exit(1);  
        }

        const isDirectory = stats.isDirectory();
        const fileType = isDirectory? 'd' : 'f';
        const fileseSize = stats.size;
        const fileModified = stats.mtime.toLocaleString();

        return `${fileType} ${file.padEnd(40)} ${fileseSize.toString().padStart(10)} ${fileModified}`;
    })

    const filesInfo = await Promise.all(filePromises);
    filesInfo.forEach(fileInfo => console.log(fileInfo));
}

ls(folder);