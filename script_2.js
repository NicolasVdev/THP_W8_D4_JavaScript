function fact(number) {
if (number === 0) {
  return 1;
}
return number * fact(number-1);
}

let userNumber = prompt("De quel nombre veux-tu calculer la factorielle?");

if (isNaN(userNumber)) {
  alert("Merci de saisir un chiffre")
}
else {
userNumber = parseInt(userNumber);
console.log("Le résultat est de :")
console.log(fact(userNumber));
}