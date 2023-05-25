const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


//Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
let booksRented = books.every(book => book.rented >= 1);
console.log(booksRented);


//Quel est livre le plus emprunté ?
console.log("Quel est livre le plus emprunté ?")
let mostRentedBook = books.reduce((maxRentedBook, currentBook) => {
  if (currentBook.rented > maxRentedBook.rented) {
    return currentBook;
  }
  else {
    return maxRentedBook
  }
});
console.log(mostRentedBook);


//Quel est le livre le moins emprunté ?
console.log("Quel est le livre le moins emprunté ?")
let lessRentedBook = books.reduce((minRentedBook, currentBook) => {
  return (currentBook.rented < minRentedBook.rented) ? currentBook : minRentedBook;
});
//Le symbole ? dans le code fait partie de l'opérateur ternaire, également appelé "opérateur conditionnel". L'opérateur ternaire est une forme abrégée d'une déclaration if...else.
console.log(lessRentedBook);


//Trouve le livre avec l'ID: 873495 ;
console.log("Trouve le livre avec l'ID: 873495")
let findBookId = books.find(book => book.id === 873495);
console.log(findBookId);


//Supprime le livre avec l'ID: 133712 ;
//On créé un nouveau tableau sans l'ID: 133712
console.log("Supprime le livre avec l'ID: 133712")
let newBooks = books.filter(book => book.id !== 133712)
console.log(newBooks)


//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
//on repart du nouveau tableau créé au dessus donc sans l'ID: 133712
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).")
newBooks.sort((a,b) => {
  return a.title.localeCompare(b.title);
});
console.log(newBooks)