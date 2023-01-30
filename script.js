function getComputerChoice () {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return "rock"
    } 
    else if (randomChoice === 1) {
        return "paper"
    } 
    else if (randomChoice === 2) {
        return "scissors"
    } 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        return "You won!"
    }
    else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose!"
    }
}

function game () {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Make a choice", '').toLowerCase();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        if (result === "You won!") {
            playerScore++;
        } else if (result === "You lose!") {
            computerScore++;
        }

        console.log(`Round ${i + 1}: ${result}`)
    }

    if (playerScore > computerScore) {
        console.log("Congratulations, you won the game!");
    } else if (playerScore < computerScore) {
        console.log("Maybe this game is not for you, you looser!");
    } else {
        console.log("It's a tie, try again!");
    }
}

game();





