require('dotenv').config();

async function saludo(nombre){

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola, '+ nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function hablar(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Bla bla bla bla...');
            resolve(nombre);
        }, 1000);
    })
}

async function adios (nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Adios, '+ nombre);
            resolve();
        }, 1000);
    });
};

// -----
async function main(){
    await saludo(process.env.NOMBRE);
    await hablar();
    await hablar();
    await hablar();
    await adios(process.env.NOMBRE);
    console.log('Termina el proceso...');
}
console.log('Empezamos el proceso...');

main();

