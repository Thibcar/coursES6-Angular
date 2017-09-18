'use strict';

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration

console.log('***** Sur les Set*****');
let fruits = new Set();
fruits.add('Pommes')
    .add('Poires');

let fruitsIteratorEntries = fruits.entries();
console.log(fruitsIteratorEntries); // return un SetIterator qui contioent toutes les entrées

// la propriété next qui permet de parcourir l'nentrée suivante sur un SetIterator

console.log(fruitsIteratorEntries.next()); // return ensemble clé / valeur de la première ligne du SetIterator et done : false car il reste des lignes à parcourir
console.log(fruitsIteratorEntries.next()); // return ensemble clé / valeur de la première ligne du SetIterator et done : false car il reste des lignes à parcourir
console.log(fruitsIteratorEntries.next()); // return undefined et done : true car toutes les lignes ont été parcourues

console.log('***** Sur les Map*****');

let fruitsMap = new Map();

fruitsMap.set('fruit1', 'bananes');
fruitsMap.set('fruit2', 'oranges');

let fmIterator = fruitsMap.entries();
console.log(fmIterator); // return un MapIterator qui contient les ensembles clé/valeur dans deux attributs pour chaque entrée.

console.log(fmIterator.next()); // renvoie un objet avec une propriété done à false, 
// une propriété value qui contient un tableau avec un ensemble clé/valeur de la première ligne du MapIterator
console.log(fmIterator.next()); // renvoie un objet avec une propriété done à false, 
// une propriété value qui contient un tableau avec un ensemble clé/valeur de la seconde ligne du MapIterator
console.log(fmIterator.next()); // renvoie un objet avec la propriété done ) true et value à undefined

if (fmIterator.next().done = true) {
    console.log('itération terminée');
}
