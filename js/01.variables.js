'use strict';

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/let
console.log(test);
var test = "machin";
console.log(test);

if(true) {
    var test2 = "machine";
    let test3 = "machineLet";
}
console.log (test2); // existe car remontée de variable
// console.log (test3); 
// let = comportement de portée des variables en java

const MAN_ON_MOON = 1969;

console.log(MAN_ON_MOON);
