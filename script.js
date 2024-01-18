let roundsPlayed = 0;
let playerWins = 0;
let computerWins = 0;
let userSelection = "";


const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const header = document.querySelector("h1");
const gameContainer = document.querySelector("#container-game");
const ruleBox = document.querySelector(".rulebox");
const resultsPanel = document.querySelector("#container-results");

resultsPanel.style.cssText = ("text-shadow: 3px 2px #000000; font-weight: bold;")

rockBtn.addEventListener("click", () => {
    userSelection = "Rock";
    playRound();
});

paperBtn.addEventListener("click", () => {
    userSelection = "Paper";
    playRound();
});

scissorsBtn.addEventListener("click", () => {
    userSelection = "Scissors";
    playRound();
});

function getComputerChoice() {
    //computer gets an array of choices and chooses a random one
    let choices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;    
}

function playRound() {
    let computerSelection = getComputerChoice();
    
    if (userSelection === computerSelection) {
        resultsPanel.textContent = ("You drew. The Round doesn't count. Play again");

    } else if (userSelection === 'Rock' && computerSelection === 'Scissors' || userSelection === 'Scissors' && computerSelection === 'Paper' || userSelection === 'Paper' && computerSelection === 'Rock') {
        playerWins++;
        roundsPlayed++;
        resultsPanel.textContent = (`After ${roundsPlayed} rounds played, the current score is: You ${playerWins} : ${computerWins} Computer`);
    } else if (userSelection === 'Rock' && computerSelection === 'Paper' || userSelection === 'Paper' && computerSelection === 'Scissors' || userSelection === 'Scissors' && computerSelection === 'Rock') {
        computerWins++;
        roundsPlayed++;
        resultsPanel.textContent = (`After ${roundsPlayed} rounds played, the current score is: You ${playerWins} : ${computerWins} Computer`);
    } 

    endOfGame()
}

function endOfGame () {
    if (playerWins === 3) {
        resultsPanel.textContent = (`Congratulations! You won the game! The final score was: You ${playerWins} : ${computerWins} Computer.`);
    } else if (computerWins === 3) {
        resultsPanel.textContent = (`Oh no! You lost the game! The final score was: You ${playerWins} : ${computerWins} Computer.`);
    }

    if (playerWins === 3 || computerWins === 3) {
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        ruleBox.remove();
        header.remove();

        const playAgainBtn = document.createElement("button");
        playAgainBtn.textContent = "Play Again!";
        gameContainer.appendChild(playAgainBtn);
        playAgainBtn.style.cssText = "height: 200px; width: 360px; font-size: 50px; padding: 15px; background-color: whitesmoke; border: whitesmoke solid; border-radius: 13px;box-shadow: 0 25px 30px rgba(0, 0, 0, 0.35); cursor: pointer; font-weight: bold;"
        playAgainBtn.addEventListener("click", () => {
            location.reload();
        });
    }

    
}

