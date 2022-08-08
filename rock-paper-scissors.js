//Create a function that will return a computer generated value between 1, 2 and 3
// Each one of those values will be equivalent to one of these: rock (1), paper (2), scissor (3)
function getComputerChoice(){
    var value = Math.floor(Math.random() * 3);
    return value;
}

console.log(getComputerChoice());