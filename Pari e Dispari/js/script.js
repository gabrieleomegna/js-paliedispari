// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
// Dichiariamo chi ha vinto.


// const userNumber = parseInt(prompt('Write a number between 1 and 5'));



let number



// ! =========== Functions =================
function numberGenerator(x) {
    x = Math.floor(Math.random() * 5 + 1);
    return x
}