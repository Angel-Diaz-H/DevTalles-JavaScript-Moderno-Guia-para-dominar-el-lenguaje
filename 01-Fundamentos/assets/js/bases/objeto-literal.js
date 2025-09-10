// Aunque sea una constante, sí permite agregar más propiedades.
const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }, // Se recomienda usar apóstrofes de requerir espacios en la propiedad.
    'ultima-pelicula': 'Infinity War'
};

// Propiedades del objeto con personaje.
// Se imprimen alfabéticamente.
console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);

console.log('Coors', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('No. trajes:', personaje.trajes.length);

console.log('Número de trajes:', personaje.trajes.length);

console.log('Último traje:',personaje.trajes[personaje.trajes.length - 1]);

console.log('Último traje:', personaje.trajes);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Última película:', personaje['ultima-pelicula']);


// Más detalles.
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

// Convertir de objectos a listas.
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Método de todos los objectos.
Object.freeze(personaje);

// Freeze congela solo las asignaciones directas, pero no los valores que están dentro de ese objecto.
personaje.dinero = 10000000000000;
personaje.casado = false;

personaje.direccion.ubicacion = 'Costa Rica';

console.log(personaje);

// Obtener las propiedades y valores de un objecto.
const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);

console.log(propiedades);
console.log(valores);