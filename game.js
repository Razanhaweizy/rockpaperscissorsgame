let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".buttons");
const result = document.querySelector(".result");
const hScore = document.querySelector(".human-score");
const cScore = document.querySelector(".computer-score");

result.style.color = "#ffff0b"

const compRock = document.querySelector("#computerrock");
const compPaper = document.querySelector("#computerpaper");
const compScissors = document.querySelector("#computerscissors");

const restartSound = new Audio("audios/restart.wav");
const drawSound = new Audio("audios/draw.wav");
const roundWon = new Audio("audios/roundwon.wav");
const roundLost = new Audio("audios/roundlost.wav");
const gameWon = new Audio("audios/gamewon.wav");
const gameLost = new Audio("audios/gamelost.wav");

const restart = document.querySelector(".restart");

restart.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    hScore.textContent = "player score: 0";
    cScore.textContent = "computer score: 0"
    restartSound.play();
})

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
            gameLost.play();
            gameLost.onended = () => {
                window.location.href = "lose.html";
            };
        } else if (humanScore >= 5) {
            gameWon.play();
            gameWon.onended = () => {
                window.location.href = "win.html";
            };
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
            case "rock": drawSound.play(); break;
            case "paper": {
                //result.textContent = "You lose :(";
                cScore.textContent = `computer score: ${++computerScore}`;
                roundLost.play();
                break;
            }
            case "scissors": {
                //result.textContent = "You win!!! :)";
                hScore.textContent= `player score: ${++humanScore}`;
                roundWon.play();
                break;
            }
        }
    }
    else if (humanChoice === "paper") {
        switch(computerChoice) {
            case "rock": {
                //result.textContent = "You win! Yippie!!!";
                hScore.textContent = `player score: ${++humanScore}`;
                roundWon.play();
                break;
            }
            case "paper": drawSound.play(); break;
            case "scissors": {
                //result.textContent = "Loser!!!";
                cScore.textContent = `computer score: ${++computerScore}`;
                roundLost.play();
                break;
            }
        }
    }
    else if (humanChoice === "scissors") {
        switch(computerChoice) {
            case "scissors": drawSound.play(); break;
            case "rock": {
                //result.textContent = "Boohoo, you lose :(";
                cScore.textContent = `computer score: ${++computerScore}`;
                roundLost.play();
                break;
            }
            case "paper": {
                //result.textContent = "Congrats! You win :)";
                hScore.textContent = `player score: ${++humanScore}`;
                roundWon.play();
                break;
            }
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
        
        setTimeout(() => {
            buttonClicked.style.backgroundColor ="#efefef";
            compElement.style.backgroundColor = "#efefef";
        }, 1100);
  }