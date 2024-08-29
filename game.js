let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".buttons");
const result = document.querySelector(".result");
const hScore = document.querySelector(".human-score");
const cScore = document.querySelector(".computer-score");

result.style.color = "#ffff0b"

const playzone = document.querySelector("#gamearea");
playzone.appendChild(result)

const compRock = document.querySelector("#computerrock");
const compPaper = document.querySelector("#computerpaper");
const compScissors = document.querySelector("#computerscissors");

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
        if (computerScore < 5 && humanScore < 5) {
        playRound(computerChoice, humanChoice, btn);
        }
        if (computerScore >= 5) {
            return result.textContent = "you lost the game";
        }
        else if (humanScore >= 5) {
            return result.textContent = "you won the game";
        }
    });
})

function playRound(computerChoice, humanChoice, btnClicked) {
    let originalHumanScore = humanScore;
    let originalComputerScore = computerScore;
    let cChoice = computerChoice;
    let btn = btnClicked;

    if (humanChoice === "rock") {
        switch (computerChoice) {
            //case "rock": result.textContent = "You have drawn!"; break;
            case "paper": {
                //result.textContent = "You lose :(";
                cScore.textContent = `computer score: ${++computerScore}`;
                break;
            }
            case "scissors": {
                //result.textContent = "You win!!! :)";
                hScore.textContent= `player score: ${++humanScore}`;
                break;
            }
        }
    }
    else if (humanChoice === "paper") {
        switch(computerChoice) {
            case "rock": {
                //result.textContent = "You win! Yippie!!!";
                hScore.textContent = `player score: ${++humanScore}`;
                break;
            }
            //case "paper": result.textContent = "Draw ;/"; break;
            case "scissors": {
                //result.textContent = "Loser!!!";
                cScore.textContent = `computer score: ${++computerScore}`;
                break;
            }
        }
    }
    else if (humanChoice === "scissors") {
        switch(computerChoice) {
            case "rock": {
                //result.textContent = "Boohoo, you lose :(";
                cScore.textContent = `computer score: ${++computerScore}`;
                break;
            }
            case "paper": {
                //result.textContent = "Congrats! You win :)";
                hScore.textContent = `player score: ${++humanScore}`;
                break;
            }
            //case "scissors": result.textContent = "You tied ;/"; break;
        }
    }
    colorButton(btn, originalHumanScore, originalComputerScore, cChoice);
}

function colorButton(buttonClicked, originalHScore, originalCScore, compChoice) {
    let compElement;

    if (compChoice === "rock") {
        compElement = compRock;
    }
    else if (compChoice === "paper") {
        compElement = compPaper;
    }
    else if (compChoice === "scissors") {
        compElement = compScissors;
    }

    if (buttonClicked.classList.contains("buttons")) {
        if (humanScore > originalHScore) {
            buttonClicked.style.backgroundColor = "#52a447";
            compElement.style.backgroundColor = "#FF0000";
        }
        else if ((humanScore === originalHScore) && (computerScore > originalCScore)) {
            buttonClicked.style.backgroundColor = "#FF0000";
            compElement.style.backgroundColor = "#52a447";
        }
        else if ((humanScore === originalHScore) && (computerScore === originalCScore)) {
            buttonClicked.style.backgroundColor = "#FBE106";
            compElement.style.backgroundColor = "#FBE106";

        }
    }
  }

