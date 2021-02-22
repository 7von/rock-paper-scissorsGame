var playerCount = 0;
var computerCount = 0;
var tie = 0;  // This will keep track of any ties in the game (not that important)
let playerChoice;
var computerPick;

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerCount}`; //This will show that we start with 0 wins

const computer = document.querySelector("#comp-score");
computer.textContent = `Computer Score: ${computerCount}`; //This will show that we start with 0 wins

    
const myPick = document.querySelectorAll('button'); //select all button elements in our html


function computerPlay(){
    var computerPick = Math.floor(Math.random() * (4-1)+1);

    /*- Switch statement used to determine what is the computers move -*/
    switch(computerPick){
        case 1: 
        return "rock";
        case 2: 
        return "scissors";
        case 3: 
        return "paper";
    }
    return computerPick;
}

/*function comparing myPick vs the computerPick and adds to respective win count*/
function playRound(myPick, computerPick){
    if ((myPick === 'rock' && computerPick === 'scissors') ||
        (myPick === 'paper' && computerPick === 'rock') ||
        (myPick === 'scissors' && computerPick === 'paper')){
        playerCount++;
    } else if (
        (myPick === 'rock' && computerPick === 'paper') ||
        (myPick === 'paper' && computerPick === 'scissors') ||
        (myPick === 'scissors' && computerPick === 'rock')) {
         computerCount++;
    }
    else {
        tie++
    }
}

/* -- This code when we touch any of the rock paper scissors button
      the code will count score and alert who the winner is after 5 wins --*/
myPick.forEach((button) => button.addEventListener('click',()=>{
    playerChoice = button.id;
    playRound(playerChoice, computerPlay());

    player.textContent = `Player Score: ${playerCount}`;
    computer.textContent = `Computer Score: ${computerCount}`;

    if (playerCount >= 5 && computerCount <= 5){
        alert(`You beat the computer ${playerCount}-${computerCount}`)
    }
    else if (playerCount <= 5 && computerCount >= 5){
        alert(`You lost to the computer ${playerCount}-${computerCount}`)
    }
   }
  )
);