const yourScoreEl = document.querySelector("#your-score span");
const botScoreEl = document.querySelector("#bot-score span");
const yourChoice = document.getElementById("your-choice");
const botChoice =document.getElementById("bot-choice");

const choices = ["rock", "paper", "scissors"];

let you;
let yourScore = 0;
let bot;
let botScore = 0;


for (let i = 0; i < 3; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
}


function selectChoice() {
    you = this.id;
    yourChoice.src = you + ".png";
    bot = choices[Math.floor(Math.random() * 3)];
    botChoice.src = bot + ".png";
    if (you == bot) {
        yourScore += 0;
        botScore += 0;
    }
    else {
        if (you == "rock") {
            if (bot == "scissors") {
                yourScore += 1;
            }
            else if (bot == "paper") {
                botScore += 1;
            }
        }
        else if (you == "scissors") {
            if (bot == "paper") {
                yourScore += 1;
            }
            else if (opponent == "rock") {
                opponentScore += 1;
            }
        }
        else if (you == "paper") {
            if (bot == "rock") {
                yourScore += 1;
            }
            else if (bot == "scissors") {
                botScore += 1;
            }
        }
    }
    yourScoreEl.innerText = yourScore;
    botScoreEl.innerText = botScore;
};

