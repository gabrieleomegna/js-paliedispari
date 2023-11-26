// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
// Dichiariamo chi ha vinto.

const userName = prompt ('Write your name');
const userOddOrEven = prompt ('Choose odd or even');
const userNumber = parseInt(prompt('Write a number between 1 and 5'));
const computerNumber = numberGenerator(1,5);


console.log (`The number chosen by player ${userName} is:`, userNumber, ',', userOddOrEven);
console.log ('Number of computer is:', computerNumber);

const som = userNumber + computerNumber;

if (userOddOrEven === 'odd') {
    if (oddOrEven(som) === 'odd') {
        console.log (`Odd, player ${userName} wins`);
    } else if (oddOrEven(som) === 'even') {
        console.log ('Even, computer wins');
    }
} else if (userOddOrEven === 'even') {
    if (oddOrEven(som) === 'odd') {
        console.log (`Odd, computer wins`);
    } else if (oddOrEven(som) === 'even') {
        console.log ('Even, player ${userName} wins');
    }
}




// ! =========== Functions =================
function numberGenerator(numeroMassimo, numeroMinimo) {
    return Math.floor(Math.random() * (numeroMassimo - numeroMinimo + 1) + numeroMinimo);
};
function oddOrEven (x) {
    if (x % 2 === 0) {
        return 'odd';
    } else {
        return 'even';
    }
}