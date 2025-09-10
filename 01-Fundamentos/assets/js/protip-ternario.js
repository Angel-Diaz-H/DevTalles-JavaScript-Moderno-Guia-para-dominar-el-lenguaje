// Se recomienda los paréntesis.
const elMayor = (a, b) => (a > b) ? a : b;
// Si es un booleano no es necesario los paréntesis.
const tieneMembresia = (miembro) => miembro ? '2 dólares' : '10 dólares';

console.log(elMayor(5, 10));
console.log(tieneMembresia(false));

const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    // Función anónima autoinvocada
    (() => 'Nick Fury')(),
    elMayor(10, 5)
];
console.log(amigosArr)

const nota = 82.5; // A+ A B+
const grado =   nota >= 95 ? 'A+' :
                nota >= 90 ? 'A' :
                nota >= 85 ? 'B+' :
                nota >= 80 ? 'B' :
                nota >= 75 ? 'C+' :
                nota >= 70 ? 'C' : 'F';

console.log({nota, grado});