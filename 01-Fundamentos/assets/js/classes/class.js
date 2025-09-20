// UpperCamelCase para clases.
class Persona {

    // Propiedades y métodos estáticos.
    // Se pueden usar sin realizar instancias.
    // Se pueden hacer referencia a las propiedades normales, pero no tendrán valor.
    // Se pueden crear propiedades estáticas fuera de la clase.
    // No se recomienda, pero es posible.
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }
    static mensaje() {
        console.log(this.nombre);
        console.log('Hola soy un método estático');
    }

    // Propiedades y métodos.
    // Son opcionales declararlas aquí.
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    // Constructor es un método que se va a ejecutar cuando se crea una instancia
    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;
    };

    // set
    // Es para asignar un valor.
    // Se suele recibir solo un parámetro.
    // No pueden tener el mismo nombre que la propiedad.
    // La gente suele declararlas así _comida.
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    // get
    // Es para obtener un valor.
    // Se suele recibir solo un parámetro.
    // No pueden tener el mismo nombre que la propiedad.
    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es: ${this.comida}`;
    }

    // Métodos.
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

// console.log(ironman);

spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pay de cereza de la tía May';

// console.log(spiderman);

// console.log(spiderman.getComidaFavorita)

// Persona._conteo = 2;
console.log('Conteo estático', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

// No se recomienda hacer esto.
Persona.propiedadExterna = 'Hola mundo';
console.log(Persona.propiedadExterna);

console.log(Persona);