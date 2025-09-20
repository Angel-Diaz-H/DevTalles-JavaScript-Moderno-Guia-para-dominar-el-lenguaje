// UpperCamelCase para clases.
class Persona {
    // Propiedades y métodos estáticos
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
console.log(ironman);

spiderman.miFrase();
ironman.miFrase();

spiderman.setComidaFavorita = 'El pay de cereza de la tía May';
console.log(spiderman);
console.log(spiderman.getComidaFavorita)