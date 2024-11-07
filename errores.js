// Ejemplo de manejo de errores en JavaScript - Sincrona
function otraFuncion(){
    seRompe();
}

function seRompe(){
    return 3 + z;
} 

//Ejemplo de manejo de errores en JavaScript - Asincrona

function seRompeAsincrona(){
    setTimeout(function(){
        try {
            return 3 + z;
        } catch (error) {
            console.error('Error en la función seRompeAsincrona: ' + error.message);
            console.log('Tipo de error: ' + error.name);
        }
    }, 1000);
}

try {

    //otraFuncion();
    seRompeAsincrona();
    
} catch (error) {
    console.error('Error en la función: ' + error.message);
    console.log('Tipo de error: ' + error.name);
}

console.log('Fin del programa');