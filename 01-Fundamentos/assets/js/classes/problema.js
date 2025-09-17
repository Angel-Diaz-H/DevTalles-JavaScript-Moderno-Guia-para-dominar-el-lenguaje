/* const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const melissa = {
    nombre: 'Melissa',
    edad: 35,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
} */

// fher.imprimir();

// UpperCamelCase.
// Función para crear instancias.
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    };
};

// new es para crear una nueva instancia.
const maria = new Persona('María', 18);
const melissa = new Persona('Melissa', 35);
console.log(maria);
maria.imprimir();
melissa.imprimir();

