
var rock = "Rock";
var paper = "Paper";
var scissors = "Scissors";
let score = 0;
var computerScore = 0;
var rounds = 0;
var matches = 0;


function getComputerChoice(){
    
    var value = Math.floor(Math.random() * 3);
    
    if (value === 0){
        return 'Rock';
    } 

    else if (value === 1){
        return 'Paper';
    }

    else {
        return 'Scissors';
    }


}



var playerInput = '';

var lowerCasePlayerInput = '';

function scoreRounds(){
    scoreSelector.textContent = 'Current score: ' + score;
    if(score > computerScore && rounds == 5) {
        matches ++;
        winnerSelector.textContent = 'Game Over. You won ' + score + ' rounds and the computer won ' + computerScore + ' rounds. You won.';
        matchesPlayed.textContent = matches + ' matches played.';
        return score = 0, computerScore = 0, rounds = 0;
    }

    else if(score < computerScore && rounds == 5) {
        matches ++;
        winnerSelector.textContent = 'Game Over. You won ' + score + ' rounds and the computer won ' + computerScore + ' rounds. You lost.';
        matchesPlayed.textContent = matches + ' matches played.';
        return score = 0, computerScore = 0, rounds = 0;
    }

    else if(score == computerScore && rounds == 5){
        matches ++;
        winnerSelector.textContent = 'Game Over. You won ' + score + ' rounds and the computer won ' + computerScore + ' rounds. It\'s a tie.';
        matchesPlayed.textContent = matches + ' matches played.';
        return score = 0, computerScore = 0, rounds = 0;
    }
}



function playRound(lowerCasePlayerInput, getComputerChoice){
    
    if (lowerCasePlayerInput === 'rock' && getComputerChoice === 'Rock'){
        //console.log('Draw');
        rounds ++;
        resultsSelector.textContent = 'You chose rock and the computer chose rock. Draw!';
        scoreRounds();
        return "Draw";        
    }

    else if (lowerCasePlayerInput === 'rock' && getComputerChoice === 'Paper'){
        //console.log('You lose');
        rounds ++;
        computerScore ++;
        resultsSelector.textContent = 'You chose rock and the computer chose paper. You lose!';
        scoreRounds();
        return "You lose";
    }

    else if (lowerCasePlayerInput === 'rock' && getComputerChoice === 'Scissors'){
        score ++;
        rounds ++;
        //console.log('You win');
        resultsSelector.textContent = 'You chose rock and the computer chose scissors. You win!';
        scoreRounds();
        return "You win"; 
    }

    else if (lowerCasePlayerInput === 'paper' && getComputerChoice === 'Rock'){
        score ++;
        //console.log('You win');
        resultsSelector.textContent = 'You chose paper and the computer chose rock. You win!';
        scoreRounds();
        return 'You win'; 
    }

    else if (lowerCasePlayerInput === 'paper' && getComputerChoice === 'Paper'){
        //console.log('Draw');
        rounds ++;
        resultsSelector.textContent = 'You chose paper and the computer chose paper. Draw!';
        scoreRounds();
        return 'Draw';
    }

    else if (lowerCasePlayerInput === 'paper' && getComputerChoice === 'Scissors'){
        //console.log('You lose');
        rounds ++;
        computerScore ++;
        resultsSelector.textContent = 'You chose paper and the computer chose scissors. You lose!';
        scoreRounds();
        return 'You lose';
    }

    else if (lowerCasePlayerInput === 'scissors' && getComputerChoice === 'Rock'){
        //console.log('You lose');
        rounds ++;
        computerScore ++;
        resultsSelector.textContent = 'You chose scissors and the computer chose rock. You lose!';
        scoreRounds();
        return 'You lose';
    }

    else if (lowerCasePlayerInput === 'scissors' && getComputerChoice === 'Paper'){
        score ++;
        rounds ++;
        //console.log('You win');
        resultsSelector.textContent = 'You chose scissors and the computer chose paper. You win!';
        scoreRounds();
        return 'You win';
    }

    else if (lowerCasePlayerInput === 'scissors' && getComputerChoice === 'Scissors'){
        //console.log('Draw');
        rounds ++;
        resultsSelector.textContent = 'You chose scissors and the computer chose scissors. Draw!';
        scoreRounds();
        return 'Draw';
    }

    else {
        return 'Please select a valid choice';
    }
}



//console.log(playRound(lowerCasePlayerInput, getComputerChoice()));
//console.log('You won ' + score + ' rounds');





const rockSelector = document.querySelector('#rock');

//console.log(rockSelector);

rockSelector.addEventListener('click', () => playRound('rock', getComputerChoice()));

const paperSelector = document.querySelector('#paper');

//console.log(paperSelector);

paperSelector.addEventListener('click', () => playRound('paper', getComputerChoice()));

const scissorsSelector = document.querySelector('#scissors');

//console.log(scissorsSelector);

scissorsSelector.addEventListener('click', () => playRound('scissors', getComputerChoice()));

const bodySelect = document.querySelector('body');

//console.log(bodySelect);

const resultsSelector = document.querySelector('#results');

//console.log(resultsSelector);

const scoreSelector = document.querySelector('#score');

const winnerSelector = document.querySelector('#winner');

//console.log(winnerSelector);

const matchesPlayed = document.querySelector('#matches');
//matchesPlayed.style.color = 'red';
//console.log(matchesPlayed);