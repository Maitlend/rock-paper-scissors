// console.log(playRound('rock','PAPER'));
// console.log(playRound('rock','SCISSORS'));
// console.log(playRound('rock','ROCK'));

// console.log(playRound('paper','ROCK'));
// console.log(playRound('paper','SCISSORS'));
// console.log(playRound('paper','PAPER'));

// console.log(playRound('scissors','ROCK'));
// console.log(playRound('scissors','PAPER'));
// console.log(playRound('scissors','SCISSORS'));

function playRound(playerSelection, computerSelection){
  let playerWon;
  switch (playerSelection.toUpperCase()){
    case 'ROCK':
      if(computerSelection === 'PAPER'){
        playerWon = false;
      }
      else if(computerSelection === 'SCISSORS'){
        playerWon = true;
      }
      break;
    case 'PAPER':
      if(computerSelection === 'ROCK'){
        playerWon = true;
      }
      else if(computerSelection === 'SCISSORS'){
        playerWon = false;
      }
      break;
    case 'SCISSORS':
      if(computerSelection === 'ROCK'){
        playerWon = false;
      }
      else if(computerSelection === 'PAPER'){
        playerWon = true;
      }
      break;
  }
  if(playerWon === undefined){
    return `It's a tie! both chose ${playerSelection}`;
  }
  else if(playerWon){
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
  else{
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function getComputerChoice(){
  const randNum = Math.random()*100;
  if(randNum <= 100/3){
    return "ROCK";
  }
  else if(randNum <= 200/3){
    return "PAPER";
  }
  else{
    return "SCISSORS";
  }
}