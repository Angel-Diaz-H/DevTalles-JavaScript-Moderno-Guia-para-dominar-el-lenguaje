const carros = [
    'Ford',
    'Mazda',
    'Honda',
    'Toyota'
];

let i = 0;

// while (i < carros.length) {
//     console.log(carros[i]);
//     i++; // i = i + 1;
// };

/** Falsos:
* undefined.
* null.
* false.
*/

while (carros[i]) {
    if (i === 1) {
        i++;
        continue; // Omite lo que sigue y continúa.
    }

    console.log(carros[i]);
    i++;
};

console.warn('Do While');
j = 0;
// do while siempre ejecuta al menos una vez el bucle.
do {
    console.log(carros[j]);
    j++;
} while (carros[j]);