// No se recomienda que se haga así.
function saludar (nombre) {
    console.log(arguments); // En la versión más reciente ya no lo incluye
    console.log('Hola,', nombre);
};

// Función anónima.
// Al asignarse a una constante no puede ser modificada.
const saludar2 = function (nombre) {
    console.log('Hola,', nombre);
};

// Lambda functions
const saludarFlecha = () =>{
    console.log('Hola, flecha');
};

// Cuando solo es un argumento se puede omitir los paréntesis, pero es buena práctica.
const saludarFlecha2 = (nombre) =>{
    console.log('Hola,', nombre);
};

saludar('Angel', 40, true, 'Costa Rica');
saludar2('Angel');
saludarFlecha();
saludarFlecha2('Ubuntu');