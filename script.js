console.log("Hi");

function getComputerChoice(){
    let options = ["rock","paper","scissor"];
    let randomNumber = Math.floor(Math.random()*3);
    let computerChoice = options[randomNumber];
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Enter you choice, Rock, Paper or Scissor");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore =0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice=="rock" && computerChoice=="paper"){
        humanScore+=1;
        return("You lose! Paper beats Rock");
    }
    else if(humanChoice=="paper" && computerChoice=="rock"){
        computerScore+=1;
        return("You Win! Paper beats Rock");
    }

    else if(humanChoice=="rock" && computerChoice=="scissor"){
        humanChoice+=1;
        return("You win! rock beats scissor");
    }

    else if(humanChoice=="scissor" && computerChoice=="rock"){
        computerChoice+=1;
        return("You loose! rock beats scissor");
    }

    else if(humanChoice=="paper" && computerChoice=="scissor"){
        computerChoice+=1;
        return("You loose! scissor beats paper");
    }

    else if(humanChoice=="scissor" && computerChoice=="paper"){
        humanChoice+=1;
        return("You win! scissor beats paper");
    }

    else if(humanChoice=="scissor" && computerChoice=="scissor"){
        return("Its, a Tie");
    }

    else if(humanChoice=="paper" && computerChoice=="paper"){
        return("Its, a Tie");
    }

    else if(humanChoice=="rock" && computerChoice=="rock"){
        return("Its, a Tie");
    }


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);
alert(playRound(humanSelection, computerSelection));
