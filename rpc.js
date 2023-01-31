let choiceOptions = ["Rock", "Paper", "Scissors"];
let compChoice;
let playerChoice;
let playerTally = 0;
let compTally = 0;

function getCompChoice() {
  compChoice = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
  console.log(compChoice);
  return compChoice;
}

function getPlayerChoice() {
  playerChoice = prompt("Rock, Paper, Scissors?");
  console.log(playerChoice);
  return playerChoice;
}

function gameRound() {
  getPlayerChoice();
  getCompChoice();
  if (playerChoice.toLowerCase() == compChoice.toLowerCase()) {
    console.log("It's a draw!");
  } else if (
    playerChoice.toLowerCase() == "rock" &&
    compChoice.toLowerCase() == "paper"
  ) {
    console.log("Paper beats Rock! You Lose!");
    compTally++;
  } else if (
    playerChoice.toLowerCase() == "rock" &&
    compChoice.toLowerCase() == "scissors"
  ) {
    console.log("Rock beats Scissors! You win!");
    playerTally++;
  } else if (
    playerChoice.toLowerCase() == "paper" &&
    compChoice.toLowerCase() == "rock"
  ) {
    console.log("Paper beats rock! You win!");
    playerTally++;
  } else if (
    playerChoice.toLowerCase() == "paper" &&
    compChoice.toLowerCase() == "scissors"
  ) {
    console.log("Scissors beats Paper! You lose!");
    compTally++;
  } else if (
    playerChoice.toLowerCase() == "scissors" &&
    compChoice.toLowerCase() == "rock"
  ) {
    console.log("Rock beats Scissors! You lose!");
    compTally++;
  } else if (
    playerChoice.toLowerCase() == "scissors" &&
    compChoice.toLowerCase() == "paper"
  ) {
    console.log("Scissors beats paper! You win!");
    playerTally++;
  }
}

function tallyCount() {
  if (playerTally > compTally) {
    console.log(
      "Your score was " +
        playerTally +
        " and the computers score was " +
        compTally +
        ". You win!"
    );
  } else if (playerTally < compTally) {
    console.log(
      "Your score was " +
        playerTally +
        " and the computers score was " +
        compTally +
        ". You lose!"
    );
  } else {
    console.log(
      "Your score was " +
        playerTally +
        " and the computers score was " +
        compTally +
        ". It's a draw!"
    );
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    gameRound();
    console.log(playerTally, compTally);
  }
  tallyCount();
}

game();
