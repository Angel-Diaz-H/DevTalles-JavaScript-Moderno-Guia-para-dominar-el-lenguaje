/**
* Días de semana abrimos a las 11,
* pero los fines de semana abrimos a las 9
*/

// Entra a un sitio web, para consultar si está abierto hoy...
const dia = 1;
const hora = 1;

let horaApertura;
let mensaje; // Está abierto, Está cerrado, abrimos a las XX.

// Evalúa un arreglo que tenga un día válido.
/* if ([0, 6].includes(dia)) {
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Día de semana');
    horaApertura = 11;
} */

// Operador condicional ternario.
// Evalúa un arreglo que tenga un día válido.
// Evalúa si es fin de semana, si es verdadero,
// asigna 9, sino 11.
horaApertura = ([0, 6].includes(dia)) ? 9 : 11;

/* if (hora >= horaApertura) {
    mensaje = 'Está abierto';
} else {
    mensaje = `Está cerrado, abrimos a las ${horaApertura}`;
} */

mensaje = (hora >= horaApertura) ? 'Está abierto' : `Está cerrado, abrimos a las ${horaApertura}`;

console.log(horaApertura, mensaje);