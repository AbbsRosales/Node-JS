// Ejemplo de como ejecutar modulos nativos C++ dentro de Node.js

const miAddon = require('./build/Release/addon.node');

console.log(miAddon.hello());