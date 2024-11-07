const {exec, spawn} = require('child_process');

// Command exec - Permite ejecutar comandos en la terminal, recibe como parametros el comando a ejecutar y un callback 
//con los parametros error, stdout y stderr

/*
exec('node modulos/consolas.js', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return false;
    }

    console.log(stdout);
});
*/



// Command spawn - Permite ejecutar procesos en la terminal
// Recibe como parametros el comando a ejecutar y un arreglo con los argumentos
// Devuelve un objeto con informacion del proceso

let proceso = spawn('ls', ['-la']);

console.log(proceso);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato){
    console.log('¿Está muerto?');
    console.log(proceso.killed);
    console.log(dato.toString());
});

proceso.on('exit', function(){
    console.log('El proceso terminó');
    console.log(proceso.killed);
});