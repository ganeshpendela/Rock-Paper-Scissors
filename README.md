# Rock-Paper-Scissors

This is a simple JavaScript implementation of the classic Rock Paper Scissors game.

## Live Preview
You can view the live preview of the Rock-Paper-Scissors game [here](https://ganeshpendela.github.io/Rock-Paper-Scissors/).


## How to Play

1. The game consists of 5 rounds.
2. In each round, the player will be prompted to enter their choice: Rock, Paper, or Scissor.
3. The computer will randomly select its choice.
4. The winner of each round will be determined based on the classic rules:
   - Rock beats Scissor
   - Scissor beats Paper
   - Paper beats Rock
5. After 5 rounds, the final scores will be compared, and the winner will be announced.

## Code Overview

- `getComputerChoice()`: Function to generate a random choice for the computer.
- `playRound()`: Function to determine the winner of each round based on the choices made by the human player and the computer.
- `getHumanChoice()`: Function to prompt the user for their choice and convert it to lowercase.
- `playGame()`: Function to orchestrate the gameplay, including prompting the user for their choice in each round, determining the winner, and keeping track of scores.
- The game is played by calling the `playGame()` function.

## How to Run

To play the game, simply execute the JavaScript code in any environment that supports it, such as a browser console or a Node.js environment.

## Example Output

The game will output the result of each round and the final winner of the game.

## Enjoy Playing!
