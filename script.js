console.log('hey')

function getComputerMove() {
    //DONE: Randomly return Rock/Paper/Scissors

    let moves = ['ROCK', 'PAPER', 'SCISSORS'];
    let random = Math.floor(Math.random()*3)
    return moves[random];
}

function playRound(playerSel, computerSel) {
    // compares player's moves
    // returns a string declaring the winner "You Lose! Paper beats Rock"
    // parameter must be case insensitive.

    let player = playerSel.toUpperCase();
    let computer = computerSel.toUpperCase();
    let message = `${player} vs. ${computer}...`

    if (player == computer) return `${message} It's a tie!`

    switch(player) {
        
        case 'ROCK':
            return (computer == 'PAPER' ? `${message} Computer Wins!` : `${message} You win!`);
            break;
        case 'PAPER':
            return (computer == 'SCISSORS' ? `${message} Computer Wins!` : `${message} You win!`);
            break;
        case 'SCISSORS':
            return (computer == 'ROCK' ? `${message} Computer Wins!` : `${message} You win!`);
            break;
    }
}

function game(rounds) {
    // Play 5 rounds of the game.
    // Keeps score and reports a winner at the end.
    // Maybe use loops


    for (i = 0; i<rounds; i++) {
        let you = prompt('Rock, Paper, or Scissors?');
        let cpu = getComputerMove();
        console.log(playRound(you, cpu));
    }
}

    // Output with Console.log()
    // Input with prompt()




//TESTS


game(2)

