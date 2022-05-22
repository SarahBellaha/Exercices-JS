/**  -----Exo---- 1 */
// - créer une variable qui contient le résultat de la question à l'utilisateur "Quel age aviez vous il y a 10 ans ?"
// - affichez un message avec alert : "vous avez donc ..."

// 1. on demande à l'utilisateur
var userAge = prompt("Quel age aviez vous il y a 10 ans ?");
// 2. on rajoute 10 ans
// on a un petit souci : prompt renvoie TOUJOURS une string !
// et quand on additionne une string et un number, JS fait du "downtyping" : considérer tout comme des string ! on fait donc une concaténation !!
// il faut qu'on transforme notre résultat en number, et pour ça on peut utiliser parseInt
userAge = parseInt(userAge) + 10;
alert("Vous avez donc " + userAge + " ans");

/**  ----Exo--- 2 */
// Implémentez l'algorithme suivant :
// Demander Quel est votre livre préféré ?
// SI le livre n'est pas Dune
// ALORS afficher oui bon ... personne n'est parfait
// SINON afficher aaahhh voilà quelqu'un de bien !
const reponse = prompt("Quel est votre livre préféré ?");

if (reponse !== "Dune") {
  console.log("Oui bon ... personne n'est parfait");
} else {
  console.log("aaahhh voilà quelqu'un de bien !");
}

/**  ------Exo 3----- */
// - demander le prénom de l'utilisateur. Stocker le résultat dans une variable
const userFirstName = prompt("Quel est votre prénom ?");

// POUR DEBUG : on affiche la valeur de la variable dans la console
console.log("réponse de l'utiliateur : " + userFirstName);

// - si le prénom est vide ou égal à "juste", afficher "vous n'avez pas de prénom ?!"
if (userFirstName === "" || userFirstName === "juste") {
  alert("Vous n'avez pas de prénom ?!");
} else if (userFirstName.length < 8) {
  // - si le prénom contient moins de 8 lettres, afficher "vous avez un prénom court !"
  alert("Vous avez un prénom court !");
} else {
  // - sinon , afficher "votre prénom est long !"
  alert("Votre prénom est long !");
}
/**  -----Exo 4----- */
// Implémentez l'algorithme suivant :

// Demander Etes vous fan de Star Wars ?
const isFan = confirm("Etes-vous fan de Star Wars ?");
// SI l'utilisateur est un fan de Star Wars
if (isFan) {
  // ALORS Demander Quel est votre perso préféré ?
  var persoPrefere = prompt("Quel est votre perso préféré ?");
  //     SI le perso est Yoda ALORS afficher May the force be with you !
  if (persoPrefere === "Yoda") {
    console.log("May the force be with you !");
    //     SINON SI le perso est Chewie ALORS afficher Arf, vous aimez les poils ...
  } else if (persoPrefere === "Chewie") {
    console.log("Arf ... Vous aimez les poils ...");
  } else if (persoPrefere === "JarJar") {
    console.log("BOOOUUUHHH LA HONTE !");
  } else {
    //     SINON afficher De toute façon on les aime tous !
    console.log("De toute façon, on les aime tous !");
  }
} else {
  // SINON (pas fan de Star Wars) afficher Vous savez pas ce que vous perdez ...
  console.log("Vous savez pas ce que vous perdez !");
}
