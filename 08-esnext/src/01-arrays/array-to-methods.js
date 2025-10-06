const heroes = ['Batman', 'Superman', 'Flash', 'Aquaman'];
// heroes.sort();
// const heroesCopy = heroes;
// const sortedHeroes = heroes.toSorted()

const deleteHeroes = heroes.toSpliced(0, 2, 'Green Lantern')

// heroes.reverse();
// heroes.toSorted();

// const reversedHeroes = heroes.toReversed();

console.table(heroes);
console.table({deleteHeroes});
console.log(typeof(deleteHeroes));
// console.table(reversedHeroes);