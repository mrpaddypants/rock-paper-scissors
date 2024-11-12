const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorBtn = document.querySelector(".scissorBtn");
const titleContainer = document.querySelector(".title-container");
const endContainer = document.querySelector(".end-container");
const buttonsContainer = document.querySelector(".buttons-container");

let userSelection = "";
let computerSelection = "";
let userScore = 0;
let computerScore = 0;

const currentRound = document.querySelector(".current-round");
const scoreBoard = document.querySelector(".score-board");

function getComputerChoice() {
    function getNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let number = getNumber(1, 3);

    if (number === 1) {
        computerSelection = "rock";
    } else if (number === 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    return computerSelection;
}


function playGame() {

    getComputerChoice();

    if (userSelection === computerSelection) {

        currentRound.textContent = "Draw! Play Again!";
        scoreBoard.textContent = `Current score - You ${userScore} : ${computerScore} Computer`;

    } else if ((userSelection == "rock" && computerSelection == "scissors") || (userSelection == "scissors" && computerSelection == "paper") || (userSelection == "paper" && computerSelection == "rock")) {
        
        userScore ++;
        currentRound.textContent = "You won the round!";
        scoreBoard.textContent = `Current score - You ${userScore} : ${computerScore} Computer`;
        
    } else {

        computerScore++;
        currentRound.textContent = "You lost the round!";
        scoreBoard.textContent = `Current score - You ${userScore} : ${computerScore} Computer`;
        
    }  

    function endGame() {
        if (userScore === 5 || computerScore === 5) {
            endContainer.remove();
            rockBtn.remove();
            scissorBtn.remove();
            paperBtn.remove();

            const endMessage = document.createElement("div");
            titleContainer.appendChild(endMessage);
            endMessage.textContent = `Congratulations - you won!`;
            endMessage.style.cssText = "font-size: 100px; color: #8BE200; margin-top: 7rem; font-family: Arial, Helvetica, sans-serif;";

            const playAgainBtn = document.createElement("button");

            playAgainBtn.addEventListener("mouseover", () => {
                playAgainBtn.style.cssText = "background-color: #8BE200;";
                playAgainBtn.addEventListener("mouseout", () => {
                    playAgainBtn.style.cssText = "background-color: #818589;"
                });
            });
            titleContainer.appendChild(playAgainBtn);
            playAgainBtn.className = "playAgainBtn";
            playAgainBtn.textContent = "Play Again";

            playAgainBtn.addEventListener("click", () => {
                location.reload()
            });


        }
    }

    endGame();
}

rockBtn.addEventListener("click", () => {
    userSelection = "rock";
    playGame();    
});

paperBtn.addEventListener("click", () => {
    userSelection = "paper";
    playGame();   
});

scissorBtn.addEventListener("click", () => {
    userSelection = "scissors";
    playGame(); 
});



const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
        btn.style.cssText = "background-color: #8BE200;"
        btn.addEventListener("mouseout", () => {
        btn.style.cssText = "background-color: #848484;"
        });
    });
});