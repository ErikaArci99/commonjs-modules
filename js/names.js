// dichiaro variabili 
const firstName = 'Erika';
const lastName = 'Arci';

// creo funzione che accetta due parametri: firstName, lastName
const names = (firstName, lastName) => {
    return firstName + ' ' + lastName;
}


// esporto la funzione
module.exports = names;