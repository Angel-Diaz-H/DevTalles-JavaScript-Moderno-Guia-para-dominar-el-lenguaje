// UpperCamelCase para clases.
class Persona {
    // Por defecto se usa Use strict.

    nombre = '';
    codigo = '';
    frase = '';

    // Constructor es un método que se va a ejecutar cuando se crea una instancia
    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    };
};

const spiderman = new Persona('Peter Parker', 'Spiderman', 'I am SpiderMan');
const ironman = new Persona('Tony Stark', 'Ironman', 'I am IronMan');
console.log(spiderman);
console.log(ironman);