// UpperCamelCase para clases.
class Persona {
    nombre = '';
    codigo = '';
    frase = '';

    // Constructor es un método que se va a ejecutar cuando se crea una instancia
    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    };

    quienSoy(){
        console.log(`Soy ${this.nombre} - ${this.codigo} - ${this.frase}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`La frase de ${this.nombre} es: ${this.frase}`);
    }
};

const spiderman = new Persona('Peter Parker', 'Spiderman', 'I am SpiderMan');
const ironman = new Persona('Tony Stark', 'Ironman', 'I am Ironman');
console.log(spiderman);
console.log(ironman);

spiderman.miFrase();
ironman.miFrase();