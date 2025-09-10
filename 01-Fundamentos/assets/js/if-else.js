let a = 5;

if (a >= 10) { // Undefined, null, una asignación.
    console.log('Es mayor o igual a 10');
} else {
    console.log('Es menor a 10');
}

// console.log('Fin del programa.');

// new sirve para crear una instancia de un objecto
const hoy = new Date();
// 0: Domingo, 1: Lunes, ...
let dia = hoy.getDay();
console.log(dia);
// = es una asignación.
// == es una comparación.
// === es una comparación estricta.

// Aquí se genera una identación muy larga.
/* if (dia === '0') {
    console.log('Domingo');
} else {
    if (dia === '1') {
        console.log('Lunes');
    } else {
        console.log('No es domingo ni lunes');
    }
}; */

if (dia === 0) {
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
} else if (dia === 2) {
    console.log('Martes');
} else if (dia === 3) {
    console.log('Miércoles');
} else if (dia === 4) {
    console.log('Jueves');
} else if (dia === 5) {
    console.log('Viernes');
} else if (dia === 6) {
    console.log('Sábado');
} else {
    console.log('No es un día de la semana');
};

// Sin usar If Else, o Switch, únicamente objectos.
dia = 3;
// Día de la semana.
const diaLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado'
};

const diaLetras2 = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

console.log(diaLetras[dia] || 'No es un día de la semana');
console.log(diaLetras2[dia] || 'No es un día de la semana');