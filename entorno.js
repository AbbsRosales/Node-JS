require('dotenv').config();

let nombre = process.env.NOMBRE || 'Sin nombre';
let edad = process.env.AGE || 'Sin edad';

console.log('Hola ' + nombre);
console.log('Mi edad es ' + edad);
console.log('Estoy aprendiendo Node.js');
console.log('How are you!');