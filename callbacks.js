require('dotenv').config();


// #region function soyAsyncrona(myCallback)
/*
function soyAsyncrona(myCallback) {

    setTimeout(function() {
        console.log('Estoy siendo asíncrona');
        myCallback();
    }, 1000);

};

console.log('Iniciando proceso...');

soyAsyncrona(function() {
    console.log('Terminando proceso...');
});
*/
// #endregion

function saludo(nombre, myCallback){
    setTimeout(function(){
        console.log('Hola, '+ nombre);
        myCallback(nombre);
    }, 1000);
}

function adios (nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios, '+ nombre);
        otroCallback();
    }, 1000);
}
console.log('Iniciando proceso...');

saludo(process.env.NOMBRE, function(nombre){
    adios(nombre, function(){
        console.log('Terminando proceso...');
    });
});