// function crearPersona(nombre, apellido) {
//     return {nombre, apellido}
// }

const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona('Angel', 'Díaz');

console.log(persona);

// Solo se puede retornar los argumentos recibidos con funciones tradicionales.
function imprimeArgumentos() {
    console.log(arguments);
}

// Así se puede crear como argumento.
// No puede ir más argumentos.

const imprimeArgumentos2 = (...args) => {
    // console.log(args);
    return args;
};

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Angel', 'Hola');
console.log({casado, vivo, nombre, saludo});

const {apellido: nuevoApellido} = crearPersona('Angel', 'Díaz');
console.log({nuevoApellido});

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log({nombre})
    console.log({codeName})
    console.log({vivo})
    console.log({edad})
    console.log({trajes})
};

console.log(imprimePropiedades(tony));