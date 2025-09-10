const heroes = [
    'Batman',
    'Superman',
    'Mujer maravilla',
    'Aquaman'
];

console.warn('For tradicional');
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
};

// Es diferente variable i ya que ambos solo están 'vivos' dentro del bucle.
console.warn('For in');
for (let i in heroes) {
    console.log(heroes[i]);
};

// Se le pone el nombre singular del array u objecto que estemos barriendo.
console.warn('For of');
for (let heroe of heroes) {
    console.log(heroe);
};
