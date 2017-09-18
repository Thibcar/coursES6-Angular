'use strict';

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Litt%C3%A9raux_gabarits

// Template String

let speech = `
Madame,

Mon numéro de téléphone est le 06 17 94 35 87 ;
Pour me joindre vous pouvez aussi utiliser les médias suivants :
     - email
     - skype

Au plaisir de vous la mettre
Thib
`;

// console.log(speech);
// document.write(speech);
// alert(speech);

// des variables dans un templete string

let nom = "Kojak";
let speech2 = `
Madame ${nom},

Mon numéro de téléphone est le 06 17 94 35 87 ;
Pour me joindre vous pouvez aussi utiliser les médias suivants :
     - email
     - skype

Au plaisir de vous la mettre
Thib
`;

// console.log(speech2);
// document.write(speech2);
// alert(speech2);

let processTemplate = (param1, param2) => {
    console.log('param1 = ', param1);
    console.log('param2 = ', param2);

}

let speech3 = processTemplate `Madame ${nom}
Mon numéro de téléphone est le 06 17 94 35 87 ;
Pour me joindre vous pouvez aussi utiliser les médias suivants :
     - email
     - skype

Au plaisir de vous la mettre
Thib
`;