//Create a function that will return a computer generated value between 1, 2 and 3
// Each one of those values will be equivalent to one of these: rock (0), paper (1), scissor (2)

var rock = "Rock";
var paper = "Paper";
var scissors = "Scissors";
let score = 0;


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

var playerInput = prompt("Please, select one of these: rock, paper or scissor.");

var lowerCasePlayerInput = playerInput.toLowerCase();

//Create a function that takes both the player input and the computer choice
//Evaluates them and return a result based on rock, paper, scissors rules

function playRound(lowerCasePlayerInput, getComputerChoice){
    
    if (lowerCasePlayerInput === 'rock' && getComputerChoice === 'Rock'){
        return "Draw";        
    }

    else if (lowerCasePlayerInput === 'rock' && getComputerChoice === 'Paper'){
        return "You lose";
    }

    else if (lowerCasePlayerInput === 'rock' && getComputerChoice === 'Scissors'){
        score ++;
        return "You win"; 
    }

    else if (lowerCasePlayerInput === 'paper' && getComputerChoice === 'Rock'){
        score ++;
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
        score ++;
        return 'You win';
    }

    else if (lowerCasePlayerInput === 'scissors' && getComputerChoice === 'Scissors'){
        return 'Draw';
    }

    else {
        return 'Please select a valid choice';
    }
}

console.log(playRound(lowerCasePlayerInput, getComputerChoice()));
console.log('You won ' + score + ' rounds');



//Write a new function called game()
//Loop it 5 times
//Call the playRound inside game()
//Play 5 rounds by repeating playRound function 5 times
//Keeps score and reports a winner or loser at the end 
//Loop the playRound function inside game()

function game(){

    for (let i = 0; i < 4; i++)
    {
        playerInput = prompt("Please, select one of these: rock, paper or scissor.")
        lowerCasePlayerInput;
        console.log(playRound(lowerCasePlayerInput, getComputerChoice()));
        console.log('You won ' + score + ' rounds');
    }
    
}

game();