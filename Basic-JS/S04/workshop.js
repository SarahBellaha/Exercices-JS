// Demander le nom du joueur
let playerName = prompt("What's you name?");

// Stocker un nombre aléatoire entre 1 et 100
const random = Math.floor(Math.random() * 100) + 1;

// Demander un numéro au joueur (entre 1 et 100) et le convertir en number
let valuePlayer = parseInt(
  prompt("Guess the number (between 1 and 100 included)")
);

// stockée le nombre des parties jouées
let round = 1;

// créer une boucle qui s'exécute tant qu'une condition est à true
while (valuePlayer !== random) {
  // on exécute les test si le typeof de valuePlayer est number
  if (isNaN(valuePlayer)) {
    valuePlayer = parseInt(
      prompt("You are stubborn, give me a number please! 😡")
    );
    // Si le numéro du joueur est supérieur à la valeur stockée, enregistrez "C'est moins"
  } else if (valuePlayer > random) {
    valuePlayer = parseInt(prompt("It is less! Try again! 😜"));
    // Si le numéro du joueur est inférieur à la valeur stockée, enregistrez "C'est plus"
  } else if (valuePlayer < random) {
    valuePlayer = parseInt(prompt("It is more! Try again! 😜"));
  }
  round++;
}

// Alerter l'utilisateur de sa victoire
// alert(
//   "Congratulations, " +
//     playerName +
//     " " +
//     "! You win in " +
//     round +
//     " rounds! 😀"
// );
console.log(
  "Congratulations, " +
    playerName +
    " " +
    "! You win in " +
    round +
    " rounds! 😀"
);
