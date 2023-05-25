const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70")
let bornIn70s = entrepreneurs.filter(entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year < 1980);
console.log(bornIn70s);


//Sors une array qui contient le prénom et le nom des entrepreneurs
console.log("Sors une array qui contient le prénom et le nom des entrepreneurs")
let entrepreneursFullName = entrepreneurs.map(entrepreneur => {
return {
  first: entrepreneur.first,
  last: entrepreneur.last
};
});
console.log(entrepreneursFullName);


//Quel âge a/aurait chaque inventeur aujourd'hui ?
console.log("Quel âge a/aurait chaque inventeur aujourd'hui ?")
const currentYear = new Date().getFullYear();

entrepreneurs.forEach((entrepreneur) => {
  let entrepreneurAge = currentYear - entrepreneur.year;
  console.log(`${entrepreneur.first} ${entrepreneur.last} a/aurait ${entrepreneurAge} ans aujourd'hui.`);
});


//Trie les entrepreneurs par ordre alphabétique du nom de famille.
console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.")
entrepreneurs.sort((a,b) => {
  if (a.last < b.last)
    return -1;
  if (a.last > b.last)
    return 1;
});
console.log(entrepreneurs);