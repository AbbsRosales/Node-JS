function saludar() {
    console.log('Hola desde el módulo');
}

//exportar función de nuestro modulo

module.exports ={ 
    saludar,
    propiedad1: 'Hola soy la propiedad 1',
}