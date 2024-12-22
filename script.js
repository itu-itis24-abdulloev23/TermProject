//html elements
const boxes = document.querySelectorAll("th > img");
const submitButton = document.getElementById("SubmitButton"); 
const resetButton = document.getElementById("ResetButton");
const scoreText = document.getElementById("ScoreText");
const inputField = document.getElementById("InputField");
const hearts = document.getElementById("Hearts");
const blocks = document.getElementsByTagName("th");

//game state
let score = 0;
let lives = 3;

const HEART = "<img src=\"img/heart_tmp.png\" width=\"20\">"
const words = ["ADIEU", "SYNTH", "STOCK", "NYMPH", "BLAST", 
               "UNITY", "PRISM", "CHEST", "CLOUD", "BLINK"];
// just for the sake of it

const myWord = words[5];
const lettersIMG = [];
const isLetterOpened = [];

for(var i = 0; i < 5; i++) {
    lettersIMG.push("img/" + myWord[i] + ".svg");
    isLetterOpened.push(false);
}


hearts.textContent = "Lives:";

for(var i = 0; i < lives; i++) {
    hearts.innerHTML += HEART;
}

function openLetter(index) {
    blocks[index].innerHTML = `<img src=\"${lettersIMG[index]}\" width=\"100\">`;
}

submitButton.addEventListener("click", () => {
    const input = String(inputField.value).toUpperCase();

    console.log(input)
    let indx = myWord.indexOf(input, 0);
    console.log(myWord);
    
    console.log(indx)

    if(indx != -1) {
        openLetter(indx);
    }
})
