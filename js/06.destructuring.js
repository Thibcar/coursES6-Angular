'use strict';

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Affecter_par_d%C3%A9composition

// ES5
console.log("___________________________ES5_____________________________");
var fruits = ['pommes', 'bananes', 'poires', 'fraises'];

console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log("___________________________ES6_____________________________");

// ES6

let [apples,,,strawberries] = ['pommes', 'bananes', 'poires', 'fraises'];
console.log(apples);
console.log(strawberries);
// on récupère des variables en fonction de leur position dans le tableau
// en mettant des virgules pour sauter des lignes
// il faut utiliser les [] car on souhaite récupérer les lignes d'un tableau


// Sur un objet
// ES5
console.log("####Sur un objet####");
console.log("___________________________ES5_____________________________");
var dog = {
    name: 'le chien',
    age: 1,
    color: 'noir'
}

console.log(dog.name);
console.log(dog.color);

console.log("___________________________ES6_____________________________");
let {name, color} = {
    name: 'le chien',
    age: 1,
    color: 'noir'
}

console.log(name);
console.log(color);

// On utilise les {} pour extraire des variables à partir des attributes de l'objet
// Ce n'est pas la position qui compte mais le nom d'un attribut d'objet.
