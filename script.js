game();

function game(){
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection;
  let computerSelection;
  let roundResult;

  for(let i = 0; i < 5; i++){
    if(playerScore > 2 || computerScore > 2){
      break;
    }
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    console.log(`Round: ${i+1} => Player: ${playerSelection}, Computer: ${computerSelection}`);
    roundResult = playRound(playerSelection,computerSelection);

    if(roundResult === 'PLAYER'){
      playerScore++;
      alert(`You win! ${playerSelection} beats ${computerSelection}`);
    }
    else if(roundResult === 'COMPUTER'){
      computerScore++;
      alert(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    else{
      alert(`It's a tie! both chose ${playerSelection}`);
    }
  }
  if(playerScore>computerScore){
    alert(`Player wins the game!\n Player score: ${playerScore}, Computer score: ${computerScore}`);
  }
  else if(computerScore>playerScore){
    alert(`Computer wins the game!\n Player score: ${playerScore}, Computer score: ${computerScore}`);
  }
  else{
    alert(`It's a tie\n Player score: ${playerScore}, Computer score: ${computerScore}`);
  }
}

function playRound(playerSelection, computerSelection){
  switch (playerSelection.toUpperCase()){
    case 'ROCK':
      if(computerSelection === 'PAPER'){
        return 'COMPUTER';
      }
      else if(computerSelection === 'SCISSORS'){
        return 'PLAYER';
      }
      break;
    case 'PAPER':
      if(computerSelection === 'ROCK'){
        return 'PLAYER';
      }
      else if(computerSelection === 'SCISSORS'){
        return 'COMPUTER';
      }
      break;
    case 'SCISSORS':
      if(computerSelection === 'ROCK'){
        return 'COMPUTER';
      }
      else if(computerSelection === 'PAPER'){
        return 'PLAYER';
      }
      break;
  }
  return 'TIE';
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

function getPlayerChoice(){
  let playerChoice;
  while(true){
    playerChoice = prompt("Please select rock, paper, or scissors: ").toUpperCase();
    if(playerChoice === 'ROCK' || playerChoice === 'PAPER' || playerChoice === 'SCISSORS'){
      break;
    }
    alert(`'${playerChoice} is invalid, please enter a valid move`);
  }
  return playerChoice;
}
