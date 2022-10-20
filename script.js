
function getComputerChoice(){
  const randNum = Math.random()*100;
  // console.log(randNum);
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