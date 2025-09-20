class Persona {
    // Crear instancias con objectos o de otras formas.
    static porObjecto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(`Info: ${this.nombre} ${this.apellido}, ${this.pais}`)
    }
};

const nombre1 = 'Melissa',
    apellido1 = 'Flores',
    pais1 = 'Honduras';

const fher = {
    nombre:  'Fernando',
    apellido:'Herrera',
    pais:    'México'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjecto(fher);

persona1.getInfo();
persona2.getInfo();