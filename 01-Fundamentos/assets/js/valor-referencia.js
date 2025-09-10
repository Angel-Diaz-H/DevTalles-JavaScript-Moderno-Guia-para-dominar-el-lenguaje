let a = 10;
let b = a;

a = 30;

console.log(a, b);

let juan = { nombre: 'Juan' };
// let ana = juan;
let ana = {...juan}; // Aquí sí cambia el nombre a la variable indicada. Utiliza el parámetro spread, separa los elementos y la referencia que hay en JavaScript.
ana.nombre = 'Ana'; // Aquí, se cambió el valor de nombre en los dos objectos; ambos dirán 'Ana'.

console.log(juan, ana);

// ------------

const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
};

let peter = {nombre: 'Petter'};
let tony = cambiaNombre(peter);

console.log({peter, tony});

// Con arreglos. Ambas maneras
const frutas = ['Manzana', 'Pera', 'Piña'];
// const otrasFrutas = [...frutas]; // Operador spread para romper relación con el otro arreglo.

console.time('spread');
const otrasFrutas2 = [...frutas]; // Spread.
console.timeEnd('spread');

console.time('slice');
const otrasFrutas = frutas.slice(); // Slices es un método de los arreglos para cortar elementos.
console.timeEnd('slice');

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});