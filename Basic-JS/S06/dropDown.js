const tacoGifs = [
  "https://media.giphy.com/media/10wtUWPq0MgKfC/giphy.gif",
  "https://media.giphy.com/media/hrlfMpZwcEdiM/giphy.gif",
  "https://media.giphy.com/media/PrRVvcwgty7K0/giphy.gif",
];

const catsGifs = [
  "https://media.giphy.com/media/SJk9xTbxcg0DFDs89d/giphy.gif",
  "https://media.giphy.com/media/C9x8gX02SnMIoAClXa/giphy.gif",
  "https://media.giphy.com/media/5ztEKjZUDQ0XC/giphy.gif",
];

const friendsGifs = [
  "https://media.giphy.com/media/KiaU2EUyxjQB2/giphy.gif",
  "https://media.giphy.com/media/31lPv5L3aIvTi/giphy.gif",
  "https://media.giphy.com/media/BlVnrxJgTGsUw/giphy.gif",
];
// au démarrage de l'appli la liste des chats doit être affiché,
// on commence par créer les élements dans le DOM,
// cibler l'élement parent
// créer une liste
const gif = document.querySelector("#gif-list");
const list = document.createElement("div");
list.classList.add("list");
gif.appendChild(list);

// on crée une boucle pour parcourir le tableau de catsGif et afficher les images
for (let i = 0; i < catsGifs.length; i++) {
  const cats = document.createElement("img");
  cats.src = catsGifs[i];
  cats.style.width = "400px";
  cats.style.height = "400px";
  list.appendChild(cats);
}
//console.log(list);

// on cible le parent et on lui ajoute un écouteur d'évenement
const select = document.querySelector("#gif-selector");
select.addEventListener("change", (e) => {
  //console.log(e.target.value);
  //Créer une condition pour checker
  if (e.target.value === "friends") {
    for (let i = 0; i < friendsGifs.length; i++) {
      const friends = document.querySelectorAll("img");
      friends[i].src = friendsGifs[i];
      console.log("friends", friends);
    }
  } else if (e.target.value === "tacos") {
    for (let i = 0; i < tacoGifs.length; i++) {
      document.querySelectorAll("img")[i].src = tacoGifs[i];
    }
  }
});
