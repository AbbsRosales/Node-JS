require('dotenv').config();

function saludo(nombre){

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola, '+ nombre);
            resolve(nombre);
        }, 1000);
    });
}

function hablar(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Bla bla bla bla...');
            resolve(nombre);
        }, 1000);
    })
}

function adios (nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Adios, '+ nombre);
            resolve();
        }, 1000);
    });
};

// -----
console.log('Iniciando proceso...');

saludo(process.env.NOMBRE)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminando el proceso...');
    })
    .catch(error => {
        console.error('Ha habido un error:');
        console.error(error);
    });
