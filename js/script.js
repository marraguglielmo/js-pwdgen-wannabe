const name = prompt('Inserisci il nome');
console.log('"Il nome è" ' + name);

const lastName = prompt('Inserisci il cognome');
console.log('"Il cognome è" ' + lastName);

const color = prompt('Inserisci il tuo colore preferito');
console.log('"Il colore preferito è" ' + color);

const pass = name + lastName + color;

document.getElementById('output').innerHTML = pass + '24';
console.log('"La password generata è" ' + pass + '24g');

