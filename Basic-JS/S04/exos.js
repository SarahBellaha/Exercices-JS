// exo1 : déclarer une fonction qui va retourner la somme de deux variables.

// const sum = () => {
//   const a = 1;
//   const b = 2;
//   return a + b;
// };
// console.log(sum());

//console.log(sum(1, 2));

// EXO 2 :
// écrivez une fonction "printMultiply" qui attend 2 paramètres "nb1" et "nb2", et qui affiche en console le résultat de leur multiplication.
// SI nb1 ou nb2 n'est pas un nombre, affichez un message d'erreur !
// astuce : on peut utiliser isNaN pour savoir si une valeur est un nombre

// function printMultiply(nb1, nb2) {
//   if (isNaN(nb1) || isNaN(nb2)) {
//     console.log("error");
//   } else {
//     return nb1 * nb2;
//   }
// }

// console.log(printMultiply(8, 9));
// console.log(printMultiply("test", 9));

// function produit() {
//   let nb1 = 3;
//   let nb2 = 4;
//   return nb1 * nb2;
// }

// console.log(produit());

// function produitSecond() {
//   let nb1 = 9;
//   let nb2 = 7;
//   return nb1 * nb2;
// }
// console.log(produitSecond());

function produit(nb1, nb2) {
  return nb1 * nb2;
}

console.log(produit(8, 9));
console.log(produit(10, 100));
