// Esta es una manera de declarar. No es muy común este tipo de declaración.

// const arr = new Array(10);
// console.log(arr);

// con1st arr = [];

let videojuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log(videojuegos);
console.log(videojuegos[0]);

let arregloCosas = [
    true,
    123,
    'ANGEL',
    1 + 2,
    123.456,
    function(){},
    ()=>{},
    {a: 1},
    [
        'X',
        'Megaman',
        'Zero',
        'Dr. Light',
        [
            'Dr. Willy',
            'Woodman'
        ]
    ]
];

// Indicar un elemento de un arreglo dentro de otro arreglo.
console.log(arregloCosas[8][4][1]);