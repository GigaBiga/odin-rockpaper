const moves = ["ROCK","PAPER","SCISSORS"];
var scoreHuman = 0;
var scoreMachine = 0;

function ComputerChoice(choices){
    return choices[Math.floor(Math.random() * 3)];
}

function PlayerGame(ComputerChoice){
    var userinput = prompt("Rock, Paper, or Scisors").toUpperCase();
    if (userinput == 'ROCK'){
        if ('ROCK' == ComputerChoice){
            alert('Computer chose Rock, It\'s a draw');
        }
        else if (ComputerChoice == 'SCISSORS'){
            alert('Computer chose Scissors, You win');
            return scoreHuman++;
        }
        else{
            alert('Computer chose Paper, You lose');
            return scoreMachine++;
        }
    }
    else if (userinput == 'PAPER'){
        if ('PAPER' == ComputerChoice){
            alert('Computer chose Paper, It\'s a draw');
        }
        else if (ComputerChoice == 'ROCK'){
            alert('Computer chose Rock, You win');
            return scoreHuman++;
        }
        else{
            alert('Computer chose Scissors, You lose');
            return scoreMachine++;
        }
    }
    else if (userinput == 'SCISSORS'){
        if ('Scissors' == ComputerChoice){
            alert('Computer chose Scissors, It\'s a draw');
        }
        else if (ComputerChoice == 'PAPER'){
            alert('Computer chose Paper, You win');
            return scoreHuman++;
        }
        else{
            alert('Computer chose Rock, You lose');
            return scoreMachine++;
        }
    }
    else {
        alert('Incorect input, Try again')
    }
}   
do{
    PlayerGame(ComputerChoice(moves));
    alert('Your score is ' + scoreHuman +' Computers score '+scoreMachine);
}while (scoreHuman < 5 && scoreMachine < 5);
if (scoreHuman == 5){
    alert("Player has won, congratulations")
}
else {alert("Computer has won, refresh to try again")}