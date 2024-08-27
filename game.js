let humanScore = 0;
let computerScore = 0;

/*
const rock = document.querySelector(".urock");
const paper = document.querySelector(".upaper");
const scissors = document.querySelector(".uscissors");
*/

const buttons = document.querySelectorAll(".buttons");

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
            case "rock": console.log("You have drawn!"); break;
            case "paper": {
                console.log("You lose :(");
                computerScore++;
                break;
            }
            case "scissors": {
                console.log("You win!!! :)");
                humanScore++;
                break;
            }
        }
    }
    else if (humanChoice === "paper") {
        switch(computerChoice) {
            case "rock": {
                console.log("You win! Yippie!!!");
                humanScore++;
                break;
            }
            case "paper": console.log("Draw ;/"); break;
            case "scissors": {
                console.log("Loser!!!");
                computerScore++;
                break;
            }
        }
    }
    else if (humanChoice === "scissors") {
        switch(computerChoice) {
            case "rock": {
                console.log("Boohoo, you lose :(");
                computerScore++;
                break;
            }
            case "paper": {
                console.log("Congrats! You win :)");
                humanScore++;
                break;
            }
            case "scissors": console.log("You tied ;/"); break;
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