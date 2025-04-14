// importo funzioni da names.js e hobbies.js

const names = require('./names.js') 
const hobbies = require('./hobbies.js')

// creo funzione vuota che mi restituisce un oggetto con le funzioni importate

const userInfo = () => {

    // dichiaro i dati qui
    const firstName = 'Erika';
    const lastName = 'Arci';

    const hobbyOne = 'gaming';
    const hobbyTwo = 'shopping';
    const hobbyThree = 'travel';

    // uso le funzioni importate
    const fullName = names(firstName, lastName);
    const fullHobbies = hobbies(hobbyOne, hobbyTwo, hobbyThree);

    return {
        fullName,
        fullHobbies
    };
};

// eseguo la funzione e stampo il risultato
console.log(userInfo());