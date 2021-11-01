// List of valid moves.
const moves = ['ROCK', 'PAPER', 'SCISSORS'];

// Returns random move from [moves].
const getComputerMove = () => moves[Math.floor(Math.random()*3)]

// Checks if a move is in [moves].
const isValid = move => moves.includes(move.toUpperCase())


// Compares player's moves,
// returns a string declaring the winner.
function playRound(playerMove, compMove) {

    let player = playerMove.toUpperCase();
    let computer = compMove.toUpperCase();

    let message = `${player} vs. ${computer}...`

    let versus = (move) => computer == move ? `${message} Computer Wins!` : `${message} You win!`
    
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


// Plays the game [rounds] times.
// Keeps score and reports a winner at the end.
function game(rounds) {
    
    let playScore = 0;
    let compScore = 0;

    for (i = 0; i<rounds; i++) {
        
        let you = ''; 
        you = prompt('Rock, Paper, or Scissors?');

        while(!isValid(you)) { you = prompt('I said ROCK, PAPER, or SCISSORS?'); }

        console.log(you)

        let comp = getComputerMove();

        alert(playRound(you,comp))    
    }
}

game(5)

