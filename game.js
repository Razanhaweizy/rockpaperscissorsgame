let humanScore = 0;
let computerScore = 0;

/*
const rock = document.querySelector(".urock");
const paper = document.querySelector(".upaper");
const scissors = document.querySelector(".uscissors");
*/

const buttons = document.querySelectorAll(".buttons");
const result = document.querySelector(".result");
const hScore = document.querySelector(".human-score");
const cScore = document.querySelector(".computer-score");

function getComputerChoice() {
    let randomNum = Math.floor((Math.random() * 100));
    if (randomNum === 0) {
        return "rock";
    }
    else if (randomNum % 2 === 0) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const humanChoice = btn.id;
        const computerChoice = getComputerChoice();
        playRound(computerChoice, humanChoice)
    });
})

function playRound(computerChoice, humanChoice) {
    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "rock": result.textContent = "You have drawn!"; break;
            case "paper": {
                result.textContent = "You lose :(";
                cScore.textContent = `computer score: ${computerScore++}`;
                break;
            }
            case "scissors": {
                result.textContent = "You win!!! :)";
                hScore.textContent= `player score: ${humanScore++}`;
                break;
            }
        }
    }
    else if (humanChoice === "paper") {
        switch(computerChoice) {
            case "rock": {
                result.textContent = "You win! Yippie!!!";
                hScore.textContent = `player score: ${humanScore++}`;
                break;
            }
            case "paper": result.textContent = "Draw ;/"; break;
            case "scissors": {
                result.textContent = "Loser!!!";
                cScore.textContent = `computer score: ${computerScore++}`;
                break;
            }
        }
    }
    else if (humanChoice === "scissors") {
        switch(computerChoice) {
            case "rock": {
                result.textContent = "Boohoo, you lose :(";
                cScore.textContent = `computer score: ${computerScore++}`;
                break;
            }
            case "paper": {
                result.textContent = "Congrats! You win :)";
                hScore.textContent = `player score: ${humanScore++}`;
                break;
            }
            case "scissors": result.textContent = "You tied ;/"; break;
        }
    }
}

/*
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
    if (computerScore > humanScore) {
        console.log("You have lost the game :(");
    }
    else {
        console.log("WINNERRRR!!! :)");
    }
}

playGame()
*/