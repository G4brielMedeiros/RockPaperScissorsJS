// List of valid moves.
const moves = ['ROCK', 'PAPER', 'SCISSORS'];

// Returns random move from moves.
const getComputerMove = () => { moves[Math.floor(Math.random()*3)] }

// Checks if a move is valid.
const isValid = move =>     { return moves.includes(move.toUpperCase()) }


// Compares player's moves,
// returns a string declaring the winner.
function playRound(playerMove, compMove) {


    let player = playerMove.toUpperCase();
    let computer = compMove.toUpperCase();

    let message = `${player} vs. ${computer}...`

    let versus = (move) => 
        { computer == move ? `${message} Computer Wins!` : `${message} You win!` }
    

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

game(1)

