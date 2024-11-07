// Evento que se dispara antes de que el proceso termine
process.on('beforeExit', function() {
    console.log('El proceso ha terminado - beforeExit');
});

// Evento que se dispara cuando el proceso termina
process.on('exit', function() {
    console.log('El proceso ha terminado');
    setTimeout(function() {
        console.log('Esto no se va a ver nunca');
    }, 0);
});

// Evento que se dispara cuando hay un error 
process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error');
    console.error(err);
});

// Descomentar para generar un error no capturado
//functionQueNoExiste();

console.log('Esto si el error no se recoge no sale');