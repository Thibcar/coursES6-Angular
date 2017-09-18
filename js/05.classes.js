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