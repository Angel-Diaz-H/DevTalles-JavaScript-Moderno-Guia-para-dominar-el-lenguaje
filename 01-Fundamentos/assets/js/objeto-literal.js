let personaje = {
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
    }, // Se recomienda usar apóstrofes de requerir espacios.
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