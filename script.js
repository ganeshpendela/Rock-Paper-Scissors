console.log("Hi");

function getComputerChoice(){
    let options = ["rock","paper","scissor"];
    let randomNumber = Math.floor(Math.random()*3);
    let computerChoice = options[randomNumber];
    console.log(computerChoice);
}

getComputerChoice();

function getHumanChoice(){
    let humanChoice = prompt("Enter you choice, Rock, Paper or Scissor");
    console.log(humanChoice);
}

getHumanChoice();