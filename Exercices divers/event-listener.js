// Lorsque l'utilisateur clique sur l'image, cela doit changer la source de l'image (src) et le texte de la propriété alt
// Lorsque l'utilisateur survole le titre, la couleur du texte doit changer
// Lorsque la souris quitte le titre, la couleur doit revenir au noir

let image = document.querySelector(".img-dogs");

image.addEventListener("click", (e) => {
    image.src = "https://tse1.mm.bing.net/th?id=OIP.ouqxqFL3FYnEuOfrJk0dhQHaFj&pid=Api&P=0&w=228&h=171";
    image.alt = "Gadget";
});


let title = document.querySelector(".title");
console.log(title);

title.addEventListener("mouseover", (e) => {
    title.style.color = "purple";
});

title.addEventListener("mouseout", (e) => {
    title.style.color = "black";
});