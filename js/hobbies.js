// dichiaro variabili
const hobbyOne = 'gaming';
const hobbyTwo = 'shopping';
const hobbyThree = 'travel';

// creo funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree"
const hobbies = (hobbyOne, hobbyTwo, hobbyThree) => {
    return hobbyOne + ' ' + hobbyTwo + ' ' + hobbyThree;
}

// esporto la funzione
module.exports = hobbies;