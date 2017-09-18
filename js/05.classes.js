'use strict';

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/class

// ES5 


function Car(brand, color) {
    this.brand;
    this.color;
}

var myCar = new Car("BMW", "Rouge");
Car.prototype.klaxonne = function() {
    console.log('tuuuuuuuuut');
}

myCar.klaxonne();

console.log('____________________________________________________________________________________________');

//ES6

class Vehicule {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    klaxonne() {
        console.log('turlututut');
    }
}

let myVehicule = new Vehicule("Mercedes", "Black");
console.log(myVehicule);
myVehicule.klaxonne();

class Accessoires {
     
}



console.log('____________________________________________________________________________________________');

// héritage avec ES6

class VoitureDeCourse extends Vehicule {
    constructor (brand, color, vitesse) {
        super(brand,color); // appel constructeur parent
        this.vitesse = vitesse;
    }

    turbo() {
        console.log('Mise en route du turbo');
    }

    // surcharge du klaxonne

    klaxonne() {
        console.log('Pouet Pouet');
    }
}

let myFerrrari = new VoitureDeCourse("Ferrari", "rouge", 250);
console.log(myFerrrari);
myFerrrari.klaxonne();


console.log('____________________________________________________________________________________________');

class Supercar extends VoitureDeCourse {
    constructor(nbCylindres) {
        super('Lamborghini', 'orange', 350);
        this.nbCylindres = nbCylindres;
    }
}

let mySupercar = new Supercar(12);
console.log(mySupercar);
mySupercar.klaxonne();
mySupercar.turbo();