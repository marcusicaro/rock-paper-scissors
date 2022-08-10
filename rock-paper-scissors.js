//Create a function that will return a computer generated value between 1, 2 and 3
// Each one of those values will be equivalent to one of these: rock (0), paper (1), scissor (2)

var rock = "Rock";
var paper = "Paper";
var scissors = "Scissors";


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

//Create a function that receives the player input 
//turn it into lower case
//return "rock", "paper" or "scissor" based on what the player selected

var playerInput = prompt("Please, select one of these: rock, paper or scissor.")
var lowerCasePlayerInput = playerInput.toLowerCase();

//Create a function that takes both the player input and the computer choice
//Evaluates them and return a result based on rock, paper, scissors rules

function playerSelection(lowerCasePlayerInput, getComputerChoice){
    
    if (lowerCasePlayerInput === 'rock' && getComputerChoice === 'Rock'){
        return "Draw";
    }

    else if (lowerCasePlayerInput === 'rock' && getComputerChoice === 'Paper'){
        return "You lose";
    }

    else if (lowerCasePlayerInput === 'rock' && getComputerChoice === 'Scissors'){
        return "You win";
    }

    else if (lowerCasePlayerInput === 'paper' && getComputerChoice === 'Rock'){
        return 'You win';
    }

    else if (lowerCasePlayerInput === 'paper' && getComputerChoice === 'Paper'){
        return 'Draw';
    }

    else if (lowerCasePlayerInput === 'paper' && getComputerChoice === 'Scissors'){
        return 'You lose';
    }

    else if (lowerCasePlayerInput === 'scissors' && getComputerChoice === 'Rock'){
        return 'You lose';
    }

    else if (lowerCasePlayerInput === 'scissors' && getComputerChoice === 'Paper'){
        return 'You win';
    }

    else if (lowerCasePlayerInput === 'scissors' && getComputerChoice === 'Scissors'){
        return 'Draw';
    }

    else {
        return 'Please select a valid choice';
    }
}

console.log(playerSelection(lowerCasePlayerInput, getComputerChoice()));
console.log(getComputerChoice());

