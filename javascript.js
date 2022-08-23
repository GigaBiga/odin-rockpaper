const moves = ["Rock","Paper","Scissors"];

function ComputerChoice(choices){
    return choices[Math.floor(Math.random() * 3)];
}
console.log(ComputerChoice(moves));