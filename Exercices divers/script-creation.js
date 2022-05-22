let divDown = document.querySelector(".second-card");
let secondPicture = document.createElement("img");
secondPicture.src = "https://tse1.mm.bing.net/th?id=OIP.KWNeRdoYy1hG-w_JYukkOgHaK7&pid=Api&P=0&w=114&h=168";

let divUp = document.querySelector("#first-card");


divDown.appendChild(secondPicture);

let body = document.body.addEventListener("click", (e) => {
    divUp.appendChild(secondPicture);
});
