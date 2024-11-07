//os viene del significado "sistema operativo"
const os = require('os');

// Info de la CPU - Exampple 32, 64, 86
//console.log(os.arch());

// Info de la plataforma sobre la que se esta corriendo en codigo
//console.log(os.platform());

// Info de los nucleos de la CPU
//console.log(os.cpus());

console.log(os.cpus().length);

// Errores y señales del sistema
//console.log(os.constants);

// Memoria libre del sistema
const SIZE = 1024;

function kb(bytes) { return bytes / SIZE; }
function mb(bytes) { return kb(bytes) / SIZE; }
function gb(bytes) { return mb(bytes) / SIZE; }

console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.totalmem()));
console.log(gb(os.totalmem()));

// Memoria total del sistema
//console.log(os.totalmem());

// Directorio raiz del usuario
//console.log(os.homedir());

// Directorio temporal del sistema
//console.log(os.tmpdir());

// Nombre del host de la maquina
//console.log(os.hostname());

// Interfaces de red
//console.log(os.networkInterfaces());