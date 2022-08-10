//Create a function that will return a computer generated value between 1, 2 and 3
// Each one of those values will be equivalent to one of these: rock (0), paper (1), scissor (2)
function getComputerChoice(){
    var value = Math.floor(Math.random() * 3);
    if (value === 0){
        return "Rock";
    } 

    else if (value === 1){
        return "Paper";
    }

    else {
        return "Scissor";
    }
}


console.log(getComputerChoice());