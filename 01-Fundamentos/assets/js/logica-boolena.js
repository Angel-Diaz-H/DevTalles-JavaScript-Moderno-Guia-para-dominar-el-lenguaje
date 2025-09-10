const regresaTrue = () => {
    console.log('Regresa true');
    return true;
};

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
};

console.warn('Not o la negación');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(regresaFalse());


console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && !false); // true

console.log('=============');
// Solo imprime la primera función porque retorna falso y ya no evalúa las demás funciones.
console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());

console.log('====== && =======');
regresaFalse && regresaTrue();
console.log('4 condiciones', true && true && true && false); // false

console.warn('OR'); // Para regresar true por lo menos debe cumplir una condición.
console.log(true || false); // true
// No ejecutó el de false porque el primer valor ya dio verdadero.
console.log(regresaTrue() || regresaFalse());
console.log('4 condiciones', true || true || true || false); // true
