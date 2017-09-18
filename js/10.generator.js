'use strict';

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/function*

function* misc() {
    let a = 10;
    let b = 15;
    console.log(a + b);
    yield; // arrête l'exécution de la fonction
    console.log('Atteint à la deuxième exécution');
    yield;
    console.log('Atteint à la troisième exécution');
}

// un générator retourne un générator.

let miscIterator = misc();
console.log(miscIterator);
// on peut utiliser la méthode next() sur les Iterator. 
miscIterator.next(); // affiche 25
miscIterator.next(); // affiche 'atteint à la deuxième exécution
miscIterator.next(); // affiche ' atteint à la troisième itération


// exemple avec un compte à rebours
console.log('Exemple avec un compte à rebours');

function* decoller() {
    yield '3';
    yield '2';
    yield '1';
    yield '0';
    yield 'Décollage';        
}

// réupérer l'Iterator dans une variable
let itr = decoller();

//setInterval pour appeler next() sur cet iterator toutes les secondes
let handle = setInterval(() => {
    var instruction = itr.next();
    if(instruction.done) {
        clearInterval(handle);

    }
    else {
        console.log(instruction);
    }
}, 1000);
