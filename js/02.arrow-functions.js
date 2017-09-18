'use strict';

// ES5

var greetings = function() {
    console.log("salut en ES5");
}

greetings(); // appel de la fonction

// ES6

let arrowf = () => {
    console.log("Salut en ES6");
}

arrowf();

let arrowf2 = () =>  console.log("Salut 2 en ES6");

arrowf2();

// fonctions avec paramètres

// ES5

var fParam = function(firstname) { // un argument et toujours local
    console.log("salut " + firstname);
}

fParam("BeutaiBeut");

// ES6

let arrowFEs6 = (firstname) => console.log("salut " + firstname);

arrowFEs6("Beuati en ES6");


// ARROW FUNCTION WITH OBJECTS

// ES5 

var dog = {
    name: "le chien",
    toys: ["bâton", 'balle'],
    //méthode pour lister les jouets
    getToys: function() {
        var self = this;
        this.toys.forEach(function(toy) {
            var sentence = self.name + " joue avec un " + toy;
            console.log(sentence);
        })
    }
}

dog.getToys();

// ES6

let dog3 = {
    name: "Mon chien",
    toys: ["bâton", "balle"],
    getToys: function() {
        this.toys.forEach((toy) => {
            let sentence = this.name + " joue avec un " + toy;
            console.log(sentence);
         })
    }
}

dog3.getToys();