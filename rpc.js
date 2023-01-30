let choiceOptions = ["Rock", "Paper", "Scissors"];


function rockPaperScissors() {
  let compChoice = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
  console.log(compChoice);
    let playerChoice = prompt("Rock, Paper or Scissors?");
    if (playerChoice === compChoice) {
    console.log("It's a draw!");
  } else if (playerChoice == "Rock" && compChoice == "Paper") {
    console.log("Paper beats Rock! You lose!");
  } else if (playerChoice == "Rock" && compChoice == "Scissors") {
    console.log("Rock beats Scissors!, you win!");
  } else if (playerChoice == "Scissors" && compChoice == "Rock") {
    console.log("Rock beats Scissors! You lose!");
  } else if (playerChoice == "Scissors" && compChoice == "Paper") {
    console.log("Scissors beats Paper! You win!");
  } else if (playerChoice == "Paper" && compChoice == "Scissors") {
    console.log("Scissors beats Paper! You lose!");
  } else if (playerChoice == "Paper" && compChoice == "Rock") {
    console.log("Paper beats Rock! You win!");
  } else {
    console.log("please enter a valid choice")
  }

}
rockPaperScissors();
