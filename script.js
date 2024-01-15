let rounds = 0;
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    //computer gets an array of choices and chooses a random one
    let choices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
    
}

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

function playRound() {
    //gets user's choice and converts it into a title
    let computerSelection = getComputerChoice();
    let userSelection = prompt('What is your choice - rock, paper or scissors? ');
    userSelection = toTitleCase(userSelection);
    console.log(userSelection)

    if (userSelection === computerSelection) {
        alert('You drew. Play again.')
        playRound();
    } else if (userSelection === 'Rock' && computerSelection === 'Scissors' || userSelection === 'Scissors' && computerSelection === 'Paper' || userSelection === 'Paper' && computerSelection === 'Rock') {
        playerWins++;
        rounds++;
    } else if (userSelection === 'Rock' && computerSelection === 'Paper' || userSelection === 'Paper' && computerSelection === 'Scissors' || userSelection === 'Scissors' && computerSelection === 'Rock') {
        computerWins++;
        rounds++;
    }

    }





function game() {
//creates a loop so that 5 rounds can be played
    while (rounds < 5) {
    playRound()
    }
    //when 5 rounds are played the game ends and score is displayed
    if (rounds === 5) {
        console.log("The game is finished.")
        if (playerWins > computerWins) {
            console.log(`You won!! The score was ${playerWins} : ${computerWins}`)
        } else if (computerWins > playerWins) {
            console.log(`You lost :( The score was ${playerWins} : ${computerWins}`)
        }
    }
}


game()