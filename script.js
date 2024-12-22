let boxes = document.querySelectorAll("th > img");
let submitButton = document.getElementById("SubmitButton"); 
let resetButton = document.getElementById("ResetButton");
let scoreText = document.getElementById("ScoreText");
let inputField = document.getElementById("InputField");
let hearts = document.getElementById("Hearts");

let score = 0;
let lives = 3;

const HEART = "<img src=\"img/heart_tmp.png\" width=\"20\">"
const words = ["ADIEU", "SYNTH", "STOCK", "NYMPH", "BLAST", 
               "UNITY", "PRISM", "CHEST", "CLOUD", "BLINK"];
// just for the sake of it

const myWord = words[5];
const letters = ["B", "L", "A", "S", "T"];
const blocks = document.getElementsByTagName("th")
const lettersIMG = [];

for(var i = 0; i < 5; i++) {
    lettersIMG.push("img/" + letters[i] + ".svg");
}


hearts.textContent = "Lives:";

for(var i = 0; i < lives; i++) {
    hearts.innerHTML += HEART;
}

// for(var i = 0; i < blocks.length; i++) {
//     blocks[i].innerHTML = `<img src=\"${lettersIMG[i]}\" width=\"100\">`;
// }

function openLetter(index) {
    blocks[index].innerHTML = `<img src=\"${lettersIMG[index]}\" width=\"100\">`;
}

submitButton.addEventListener("click", () => {
    const input = String(inputField.value).toUpperCase();

    console.log(input)
    let indx = letters.indexOf(input);
    
    console.log(indx)

    if(indx != -1) {
        openLetter(indx);
    }
})
