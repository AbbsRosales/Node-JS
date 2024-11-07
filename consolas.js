let tabla = [
    {
        nombre: 'Abigail',
        apellido: 'Rosales'
    },
    {
        nombre: 'Rayas',
        apellido: 'Perez'
    },
    {
        nombre: 'Kiki',
        apellido: 'Perez'
    }
]

console.log('Consola log');

console.error('Consola error');

console.warn('Consola warn');

console.info('Consola info');

console.table(tabla);

console.group('Grupo - Mensajes');
console.log('Mensaje 1');
console.log('Mensaje 2');
console.groupEnd();

console.time('Tiempo');