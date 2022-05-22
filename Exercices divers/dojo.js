const quizz = [
    {question: "Quelle mer borde la ville de Sébastopol ?", reponse: "La mè noi", isCorrect: false},
    {question: "Quel est l'âge du Capitaine", reponse: "63", isCorrect: false},
    {question: "Combien de sabres a Zoro ?", reponse: "3", isCorrect: false}
]
let userCount = 0;


function question(i) {
    let userAnswer = prompt(quizz[i].question);
    let userCount = 0;

    if(userAnswer == quizz[i].reponse) {
        alert("Bonne réponse !")
        quizz[i].isCorrect = true;
        userCount++;
    } else {
        alert("Perdu ... :/")
    }
    return userCount;
}




// alert(`Vous avez ${userArray.length} bonnes réponses :)`);