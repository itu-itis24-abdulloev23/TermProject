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

function updatHearts() {
    hearts.textContent = "Lives:";
    
    for(var i = 0; i < lives; i++) {
        hearts.innerHTML += HEART;
    }
}

function guess(input) {
    input = String(input).toUpperCase();
    // console.log(input)

    if(input.length == 1)
        letterGuess(input)
    else 
        wordGuess(input);
}

function letterGuess(char) {
    let indx = myWord.indexOf(char, 0);
    
    // console.log(indx)

    if(indx != -1) {
        openLetter(indx);
    } else {
        lives--;
    }
}

function wordGuess(word) {
    if(word != myWord) {
        lives--;
        return;
    }

    for(let i = 0; i < word.length; i++) 
        openLetter(i);
}

function openLetter(index) {
    if(isLetterOpened[index])
        return;
    
    blocks[index].innerHTML = `<img src=\"${lettersIMG[index]}\" width=\"100\">`;
    score += 20;
    isLetterOpened[index] = true;
}

function updateScore() {
    scoreText.textContent = `Score: ${score}`;
}

submitButton.addEventListener("click", () => {
    guess(inputField.value);
    updateScore();
    updatHearts();
});

updateScore();
updatHearts();