let chrono = document.getElementById("chrono");
let body = document.querySelector("body");
let start = document.createElement("input");
start.setAttribute("type", "button");
start.value = "Start !";
start.style.height = "35px";
start.style.width = "200px";
start.style.borderRadius = "25px";
start.style.backgroundColor = "darkmagenta";
start.style.color = "antiquewhite";
start.style.fontSize = "2vw";
start.style.position = "absolute";
start.style.left = "41%";
start.style.top = "25%";
body.appendChild(start);

let minutes = 0;
let seconds = 0;
let tenthOfSeconds = 0;

let setup = [
    {name: minutes, value: "minutes", id: "minutes"},
    {name: seconds, value: "secondes", id: "seconds"},
    {name: tenthOfSeconds, value: "Millisecondes", id: "dixieme"}
];

function init(name, value, id) {

    let newDiv = document.createElement("div");
    let title = document.createElement("h1");
    let valeur = document.createElement("p");

    newDiv.classList.add("timer");
    newDiv.style.display = "flex";
    newDiv.style.flexDirection ="column";
    newDiv.style.textAlign = "center";
    newDiv.style.width = "10vw";
    title.id = id;

    title.textContent = name;
    valeur.textContent = value;

    chrono.appendChild(newDiv);
    newDiv.appendChild(valeur);
    newDiv.appendChild(title);

};

function changeTimer(name) {
    
        if(name < 10) {
            name++;
        } else {
            name = 0;
        };
        return name;
}

function changeTimerSec(name) {
        if(name === 60) {
            name = 0;
        } else {
            name++;
        };
        return name;
    };



for(i = 0; i < setup.length; i++) {
    init(setup[i].name, setup[i].value, setup[i].id);
}



start.addEventListener("click", () => {
            setInterval(() => {
                tenthOfSeconds = changeTimer(tenthOfSeconds);
                document.querySelector("#dixieme").textContent = tenthOfSeconds;
            }, 100);

            setInterval(() => {
                seconds = changeTimerSec(seconds);
                document.getElementById("seconds").textContent = seconds;
            }, 1000);

            setInterval(() => {
                minutes = changeTimerSec(minutes);
                document.getElementById("minutes").textContent = minutes;
            }, 60000);
});

