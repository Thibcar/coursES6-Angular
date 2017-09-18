'use strict';

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateur_de_d%C3%A9composition


// ES5

var fruits = ['bananes', 'pommes']
var legumes = ['poireaux', 'courgettes'];

var food = [fruits, legumes];
// on obtient alors un tableau à 2 dimensions qui contient 
// nos deux tableaux fruits et legumes

console.log(food);

let food2 = [...fruits, ...legumes];
console.log(food2);

// combiner avec des strings

let food3 = [...fruits, ...legumes, "navets"];
console.log(food3);

// utiliser le sread operator dans une fonction

// ES5

var mixer = function (ing1, ing2) {

    console.log(ing1 + " avec " + ing2);
} 

mixer ("pomme", "abricot");

// ES6

let mixer2 = (ing1, ing2) => console.log(ing1 + " avec " + ing2);
    
mixer2 ("pomme", "abricot");

// avec un spread operator 

let ingredients = ['Cerises', 'Fraises', 'Framboises', 'poires'];

mixer2(...ingredients);

// utiliser spread operators en argument
let mixer3 =  (args) => console.log(args);
mixer3('Fraise', 'Orange'); // affiche Fraise

let mixer4 =  (...args) => console.log(args);
mixer4('Fraise', 'Orange'); // affiche un tableau 

let mixer5 =  (...args) => console.log(args.join(' - ')); // permet de joindre les lignes d'un tableau sur une seule ligne
mixer5('Fraise', 'Orange');

let mixer6 =  (...args) => console.log(...args); 
mixer6('Fraise', 'Orange');