import { platform, release, arch, totalmem, freemem, uptime } from 'node:os';

console.log('Sistema Operativo');
console.log('--------------------');

console.log('Nombre del Sistema Operativo: ', platform());
console.log('Version del Sistema Operativo: ', release());
console.log('Arquitectura: ', arch());
// console.log('CPUs: ', os.cpus());
console.log('Memoria Libre: ', arch());
console.log('Memoria Total: ', totalmem() / 1024 / 1024);
console.log('Memoria Libre: ', freemem()  / 1024 / 1024);
console.log('uptime: ', uptime() / 60 / 60);
