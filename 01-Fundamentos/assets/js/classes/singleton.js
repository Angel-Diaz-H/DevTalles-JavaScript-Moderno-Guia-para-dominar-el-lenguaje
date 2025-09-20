class Singleton {
    static instancia;
    nombre = '';

    constructor(nombre = '') {
        if(!!Singleton.instancia){
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    };
};

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Black Panther');

console.log(instancia1);
console.log(instancia2);
console.log(instancia3);