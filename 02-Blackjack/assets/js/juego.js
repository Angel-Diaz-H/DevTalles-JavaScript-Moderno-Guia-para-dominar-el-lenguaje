/**
    * 2C = Two of Clubs.
    * 2D = Two of Diamonds.
    * 2H = Two of Hearts.
    * 2S = Two of Spades.
*/

let deck         =  [];
const tipos      =  ['C', 'D', 'H', 'S'];
const especiales =  ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML.
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const puntosHTML = document.querySelectorAll('small');

const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for(let tipo of tipos) {
            deck.push(i + tipo);
        }
        // deck.push(i + 'C');
    }

    for(let tipo of tipos) {
        for(let esp of especiales) {
            deck.push(esp + tipo);
        }
    }

    console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
};

crearDeck();


// Pedir una carta.
const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    // La carta debe ser de la baraja.
    const carta = deck.pop();
    return carta;
};

// pedirCarta();
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    if (isNaN(valor)) {
        console.log('No es un número')
        return (valor === 'A') ? 11 : 10;
    } else {
        return parseInt(valor);
    }
};

valorCarta('2D');


// Eventos.
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;
    console.log(puntosJugador);
})