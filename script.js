//html elements
const boxes = document.querySelectorAll("th > img");
const submitButton = document.getElementById("SubmitButton"); 
const resetButton = document.getElementById("ResetButton");
const scoreText = document.getElementById("ScoreText");
const inputField = document.getElementById("InputField");
const hearts = document.getElementById("Hearts");
const blocks = document.getElementsByTagName("th");
const gameOver = document.getElementById("GameOver");

//game state
let score = 0;
let lives = 3;
let isGameOver = false;
let isLetterOpened = [false, false, false, false, false];

// just for the sake of it
const words = ["ADIEU", "SYNTH", "STOCK", "NYMPH", "BLAST", 
               "UNITY", "PRISM", "CHEST", "CLOUD", "BLINK"];
    
const myWord = words[5];
const lettersIMG = [];
const HEART = "<img src=\"img/heart_tmp.png\" width=\"20\">"
const closedLetter = "<img src=\"img/question.svg\" width=\"100\">"

for(var i = 0; i < 5; i++) {
    lettersIMG.push("img/" + myWord[i] + ".svg");
}

function updatHearts() {
    hearts.textContent = "Lives:";
    
    for(var i = 0; i < lives; i++) {
        hearts.innerHTML += HEART;
    }
}

function updateScore() {
    scoreText.textContent = `Score: ${score}`;
}

function updateText() {
    for(let i = 0; i < myWord.length; i++)
        if(isLetterOpened[i])
            blocks[i].innerHTML = `<img src=\"${lettersIMG[i]}\" width=\"100\">`;
        else
            blocks[i].innerHTML = closedLetter;
}

function fullUpdate() {
    isGameOver = lives <= 0 || isLetterOpened.indexOf(false) == -1;
    if(isGameOver)
        gameOver.innerText = lives <= 0 ? "GAME OVER" : "YOU WON!!";

    updateScore();
    updatHearts();
    updateText();
}


function guess(input) {
    input = String(input).trim().toUpperCase();
    // console.log(input)
    if(input.length == 0) 
        return;

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
    
    score += 20;
    isLetterOpened[index] = true;
}

function reset() {
    lives = 3;
    score = 0;
    isGameOver = false;
    isLetterOpened.fill(false);
    inputField.value = "";
    resetButton.hidden = true;
    submitButton.disabled = true;
    gameOver.innerText = "";
}

inputField.addEventListener("input", () => {
    submitButton.disabled = inputField.value.trim().length == 0;
})

submitButton.addEventListener("click", () => {
    if(!isGameOver) {
        guess(inputField.value);
        resetButton.hidden = false;
        inputField.value = "";
        submitButton.disabled = true;
    }
    fullUpdate();
});

resetButton.addEventListener("click", () => {
    reset()
    fullUpdate();
});

reset();
fullUpdate();