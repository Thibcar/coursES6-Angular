'use strict';

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Set

let brand = new Set();

brand.add('Honda')
    .add('Ducati')
    .add('Triomph')
    .add('Honda')
    .add('Kawazaki');

console.log(brand);
// Honda n'apparaît qu'une fois !

// Utiliser un set pour créer un tableau à partir d'un autre tableau
// sans les doublons

let brandArray = ['Honda', 'Ducati', 'Triomph', 'Honda', 'Kawasaki'];
let brands2 = new Set(brandArray);
console.log(brandArray);
console.log(brands2);

// la méthode has() permet de tester si un set contient une valeur
console.log('Test de la méthode has()');
console.log(brands2.has('Honda')); // true
console.log(brands2.has('honda')); // false

// la méthode delete() permet de supprimeer un élément du set

console.log('Test de la méthode delete()');
console.log(brands2.delete('Kawasaki')); // true
console.log(brands2.delete('honda')); // false
console.log(brands2); // Kawazaki est supprimé

// la méthode clear() pour vider un set
// console.log('Test de la méthode clear()');
// console.log(brands2.clear()); // affiche undefined
// console.log(brands2); // le set existe toujours mais est vide

console.log('Test de la méthode forEach() avec un seul paramètre');
// méthode forEach pour parcourir un set
brand.forEach(function(val) {
    console.log(val);
});

// un set n'a pas de clé. On ne peut pas afficher la valeur d'un set
// à partir de ses clés. Si on tente d'afficher la paire clé/valeur,
// le set nous renvoie des noms de clés identiques à ses valeurs
console.log('Test de la méthode forEach() avec deux paramètres');
brand.forEach(function(val, val2) {
    console.log(val);
    console.log(val2);
});
// ici val2 renvoie de snoms de clé identiques aux valeurs

console.log('Test de la méthode forEach() avec trois paramètres');
// un forEach sur un set avec 3 paramètres renvoie dans le 3e le Set lui même
brand.forEach(function(val, val2, val3) {
    console.log(val);
    console.log(val2);
    console.log(val3);
});

let brand3 = new Set();

brand3.add('Honda')
    .add('Ducati')
    .add('Triomph')
    .add('Honda')
    .add('Kawazaki');

// méthode values() pour lister les valeurs
console.log('Test de la méthode values()');
console.log(brands2.values());
console.log(brand3.values());

// méthode entries() pour lister toutes les entrées
console.log('Test de la méthode entries()');
console.log(brand3.entries());


