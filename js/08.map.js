'use strict';

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Map

let books = new Map();

// la méthode set() permet d'ajouter en ensemble clé/valeur
books.set('Umberto Eco', 'Le nom de la rose');
console.log(books);
books.set('Michel Tournier', 'Le roi des Aulnes');
console.log(books);


// la propriété size permet de retourner la size d'une Map
console.log(books.size);

// la méthode get() pour lire la valeur d'une Map() en lui passant une clé
console.log(books.get('Umberto Eco')); // affiche la valeur correspondante


console.log('**** Méthode forEach*****')
// la méthode forEach() pour lister une Map
books.forEach(function(val,clef,map){ // prend toujours les paramètres dans cet ordre : valeur, clé, Map)
    console.log(clef);
    console.log(val);
    console.log(map);
});

console.log('**** Méthode keys*****');
console.log('Permet de récupérer les clés pour chaque entrée'); 
console.log(books.keys()); // renvoie un objet MapIterator qui renvoie les clés de chaque entrée dans leur ordre d'insertion
console.log('**** Méthode values*****');
console.log('Permet de récupérer les valeurs pour chaque entrée'); 
console.log(books.values()); // renvoie un objet MapIterator qui renvoie les valeurs de chaque entrée dans leur ordre d'insertion
console.log('**** Méthode entries*****');
console.log('Permet de récupérer les clés / valeurs pour chaque entrée'); 
console.log(books.entries()); // renvoie un objet MapIterator qui renvoie le couple clé / valeur de chaque entrée dans leur ordre d'insertion