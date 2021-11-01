console.log('hey')
const moves = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerMove() {
    // Randomly return Rock/Paper/Scissors
    let random = Math.floor(Math.random()*3)
    return moves[random];
}

function playRound(playerSel, computerSel) {
    // Compares player's moves
    // Returns a string declaring the winner "You Lose! Paper beats Rock"
    // Parameter must be case insensitive. 

    let player = playerSel.toUpperCase();
    let computer = computerSel.toUpperCase();
    let message = `${player} vs. ${computer}...`

    function versus(move) {
        return computer == move ? `${message} Computer Wins!` : `${message} You win!`
    }

    if (player == computer) return `${message} It's a tie!`

    switch(player) {
        
        case 'ROCK':
            return versus('PAPER');
            break;
        case 'PAPER':
            return versus('SCISSORS');
            break;
        case 'SCISSORS':
            return versus('ROCK');
            break;
    }
}

function isValid(move) {
    let m = move.toUpperCase();
    return m == 'ROCK' || m == 'PAPER' || m == 'SCISSORS' 
}

function game(rounds) {
    // Play 5 rounds of the game.
    // Keeps score and reports a winner at the end.
    // Maybe use loops

    for (i = 0; i<rounds; i++) {
        let you = ''; 
        
        you = prompt('Rock, Paper, or Scissors?');

        while(!isValid(you)) {
            you = prompt('I said ROCK, PAPER, or SCISSORS?');

        }

        if (isValid(you)) {
            console.log(you)
            alert(playRound(you, getComputerMove()));
        }

        
    }
}

    // Output with Console.log()
    // Input with prompt()




//TESTS
game(1)

