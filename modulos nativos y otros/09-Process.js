// recupera los argumento ingresados 
// Ej:  node 09-Process.js samuel roman guerra --node version
console.log(process.argv);

// Controlar eventos del Proceso
process.on('exit', () => {
    // limpiar los recursos
})

// Current working directory: directorio actual desde donde se corre el proceso
console.log(process.cwd());

// Platform: ejecuta variables de entorno: VAR_NOMBRE
// Ej: VAR_NOMBRE=hola node 09-Process.js
//console.log(process.env.VAR_NOMBRE);

// Controlar el proceso y su salida: Salida
process.exit(1);