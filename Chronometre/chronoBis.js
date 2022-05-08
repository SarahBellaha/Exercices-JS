let body = document.querySelector("body");
let start = document.createElement("input");
start.setAttribute("type", "button");
start.value = "Start !";
start.style.height = "35px";
start.style.width = "200px";
start.style.borderRadius = "25px";
start.style.backgroundColor = "darkmagenta";
start.style.color = "antiquewhite";
start.style.fontSize = "1vw";
start.style.position = "absolute";
start.style.left = "41%";
start.style.top = "25%";
body.appendChild(start);


const chrono = {

    heure: 0,
    minutes: 0,
    secondes: 0,
    tenthOfSeconds: 0,

    init: function() {
        const timer = document.querySelector("#chrono");

        timer.style.display = "flex";
        timer.style.justifyContent = "center";

        const bolbol = ["heure", "minutes", "secondes", "millisecondes"];

        bolbol.forEach(element => {
            const createDiv = document.createElement("div");
            const createTitle = document.createElement("h1");
            const createValeur = document.createElement("p");

            createValeur.id = element;
            createDiv.style.display = "flex";
            createDiv.style.flexDirection ="column";
            createDiv.style.textAlign = "center";
            createDiv.style.width = "10vw";

            createTitle.textContent = element;
            createValeur.textContent = 0;

            timer.appendChild(createDiv);
            createDiv.appendChild(createTitle);
            createDiv.appendChild(createValeur);
        });

    },


    changeTimer: function () {
        chrono.tenthOfSeconds++;

        if(chrono.tenthOfSeconds === 10){
            chrono.secondes++;
            chrono.tenthOfSeconds = 0;
        }

        if(chrono.secondes === 60) {
            chrono.minutes++;
            chrono.secondes = 0;
        }

        if(chrono.minutes === 60) {
            chrono.heure++;
            chrono.minutes = 0;
        }
    },
    
    display: function () {
        document.getElementById("millisecondes").textContent = chrono.tenthOfSeconds.toString().padStart(2,"0");
        document.getElementById("secondes").textContent = chrono.secondes.toString().padStart(2,"0");
        document.getElementById("minutes").textContent = chrono.minutes.toString().padStart(2,"0");
        document.getElementById("heures").textContent = chrono.heures.toString().padStart(2,"0");
    }
};


chrono.init();

start.addEventListener("click", () => {
    setInterval(() => {
        chrono.changeTimer();
        chrono.display();
    }, 100);
});