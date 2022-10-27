//Move constants
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

//new ui features
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const playerSelectionDisplay = document.getElementById('player-selection');
const computerSelectionDisplay = document.getElementById('computer-selection');
const resultDisplay = document.getElementById('result');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

rockButton.addEventListener("click", playRound.bind(this, ROCK));
paperButton.addEventListener("click", playRound.bind(this, PAPER));
scissorsButton.addEventListener("click", playRound.bind(this, SCISSORS));

let playerScore = 0;
let computerScore = 0;
updateDisplay();

function playRound(playerSelection){
  const computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);

  if(playerSelection === computerSelection){
    updateDisplay("TIE", playerSelection, computerSelection);
    return;
  }

  switch (playerSelection.toUpperCase()){
    case 'ROCK':
      if(computerSelection === 'PAPER'){
        updateDisplay('COMPUTER', playerSelection, computerSelection);
      }
      else if(computerSelection === 'SCISSORS'){
        updateDisplay("PLAYER", playerSelection, computerSelection);
      }
      break;
    case 'PAPER':
      if(computerSelection === 'ROCK'){
        updateDisplay("PLAYER", playerSelection, computerSelection);
      }
      else if(computerSelection === 'SCISSORS'){
        updateDisplay("COMPUTER", playerSelection, computerSelection);
      }
      break;
    case 'SCISSORS':
      if(computerSelection === 'ROCK'){
        updateDisplay("COMPUTER", playerSelection, computerSelection);
      }
      else if(computerSelection === 'PAPER'){
        updateDisplay("PLAYER", playerSelection, computerSelection);
      }
      break;
  }
  if(playerScore === 5 || computerScore === 5){
    console.log("Game Over!");
    gameOver();
  }
}

function getComputerChoice(){
  const randNum = Math.random()*100;
  if(randNum <= 100/3){
    return ROCK;
  }
  else if(randNum <= 200/3){
    return PAPER;
  }
  else{
    return SCISSORS;
  }
}

function updateDisplay(result, playerSelection, computerSelection){
  playerSelectionDisplay.textContent = `Player chooses: ${playerSelection}`;
  computerSelectionDisplay.textContent = `Computer chooses: ${computerSelection}`;

  if(result === 'PLAYER'){
    resultDisplay.textContent = `Result: You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
  }
  else if(result === 'COMPUTER'){
    resultDisplay.textContent = `Result: You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
  }
  else if(result === 'TIE'){
    resultDisplay.textContent = `Result: It's a tie! Both chose ${playerSelection}`;
  }
  else{ 
    playerSelectionDisplay.textContent = `Player chooses: `;
    computerSelectionDisplay.textContent = `Computer chooses: `;
    resultDisplay.textContent = `Result: Make a move!`;
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
  }
}

function gameOver(){
  if(playerScore === 5){
    resultDisplay.textContent = `Result: Player wins the game!`;
    alert(`Player wins the game with a score of ${playerScore}!`);
  }
  else{
    resultDisplay.textContent = `Result: Computer wins the game!`;
    alert(`Computer wins the game with a score of ${computerScore}!`);
  }
    playerScore = computerScore = 0;
    updateDisplay();
}