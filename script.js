

function getComputerChoice() {
    //computer gets an array of choices and chooses a random one
    let choices = ['R', 'P', 'S']
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log(computerChoice)
    return computerChoice;
}



function playRound() {
    //prompts the user for an input and plays the game (respecting its rules) by comparing both the computer's and user's choices.
    let computerChoice = getComputerChoice();
    let userChoice = prompt('What is your choice, Rock (r), Paper (p) or Scissors (s)?: ')
    userChoice = userChoice.toUpperCase()
    if (userChoice === 'R' && computerChoice === 'R' || userChoice === 'S' && computerChoice === 'S' || userChoice === 'P' && computerChoice === 'P') {
        console.log('Draw! Play again.');
    } else if (userChoice === 'S' && computerChoice === 'P' || userChoice === 'R' && computerChoice === 'S' || userChoice === 'P' && computerChoice === 'R') {
        console.log('You won! Play again.');
    } else if (userChoice === 'P' && computerChoice === 'S' || userChoice === 'S' && computerChoice === 'R' || userChoice === 'R' && computerChoice === 'P') {
        console.log('You lost! Play again');
    } else {
        console.log('Invalid input. Play again.')
    }
}

function keepScore() {
    //keeps track of rounds played and displays the score. once bo5 is finished, displays the winner.
    let roundsPlayed = 
}



playRound()