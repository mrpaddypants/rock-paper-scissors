function getComputerChoice() {
    function getNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let number = getNumber(1, 3);
    let computerChoice;
    if (number === 1) {
        computerChoice = "rock";
    } else if (number === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getUserChoice() {
    let userChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    return userChoice;

}



function playGame() {

    let roundsPlayed = 0;
    let userScore = 0;
    let computerScore = 0;

    function playRound() {
        let userSelection = getUserChoice();
        let computerSelection = getComputerChoice();
        if (userSelection === computerSelection) {
            roundsPlayed++;
        } else if ((userSelection == "rock" && computerSelection == "scissors") || (userSelection == "scissors" && computerSelection == "paper") || (userSelection == "paper" && computerSelection == "rock")) {
            userScore++;
            roundsPlayed++;
        } else {
            computerScore++;
            roundsPlayed++;
        }
    }
    

    function determineWinner() {
        while (roundsPlayed < 5) {
            playRound();
        }
        if (roundsPlayed === 5) {
            alert(`Game over! Final score - You ${userScore} : ${computerScore} Computer`)
        }
    }
    determineWinner();
}

playGame();