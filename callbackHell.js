require('dotenv').config();

function saludo(nombre, myCallback){
    setTimeout(function(){
        console.log('Hola, '+ nombre);
        myCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log('Bla bla bla bla...');
        callbackHablar();
    }, 1000);
}

function adios (nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios, '+ nombre);
        otroCallback();
    }, 1000);
};

// Función de recursividad, donde se manda a llamar la misma función pero con información ligeramente distinta.

function conversacion(nombre, veces, callback){
    if(veces > 0){
        hablar(function(){
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}

// --
console.log('Iniciando proceso...');

saludo(process.env.NOMBRE, function(nombre){
    conversacion(process.env.NOMBRE, 3, function(){
        console.log('Proceso terminado');
    });

});


/*
saludo(process.env.NOMBRE, function(nombre){
    hablar(function(){
        hablar(function(){
            hablar(function(){
                adios(nombre, function(){
                    console.log('Terminando proceso...');
                });
            });
        }) 
    });
});
*/
