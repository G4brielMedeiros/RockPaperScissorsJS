// List of valid moves.
const moves = ["Rock", "Paper", "Scissors"];
const caps = { rock: "Rock", paper: "Paper", scissors: "Scissors" };
const beats = { Rock: "Paper", Paper: "Scissors", Scissors: "Rock" };

// Validates a user's input.
const validate = (move) => caps[move.toLowerCase().trim()]

// Returns random move from [moves].
const getComputerMove = () => moves[Math.floor(Math.random() * 3)];

// Returns a validated move from the user.
function getHumanMove() {
    let humamMove = validate(prompt("Rock, Paper, or Scissors?"));

    while (!moves.includes(humamMove)) {
        humamMove = validate(prompt("I said ROCK, PAPER, or SCISSORS!?"));
    }

    return humamMove;
}

// Compares player moves,
// returns a string declaring the winner.
function playRound(human, computer) {
    let message = `${human} vs. ${computer}...`;

    return  human == computer ? `${message} It's a tie, reset round!`
            : human == beats[computer] ? `${message} You win!`
            : `${message} Computer Wins!`;
}

// Plays the game [rounds] times.
// Keeps score and reports a winner at the end.
function game(rounds) {
    let humanScore = 0;
    let compScore = 0;

    for (let round = 0; round < rounds; round++) {

        let humamMove = getHumanMove();
        let compMove = getComputerMove();
        let result = playRound(humamMove, compMove);

        result.includes("You") ? humanScore++
        : result.includes("Computer") ? compScore++
        : round--;

        alert(
            `${result}
            
            You: ${humanScore}
            CPU: ${compScore}`
        );
    }

    alert(
        humanScore == compScore ? "The game tied! Nobody wins."
        : humanScore > compScore ? "You win the game!"
        : "Computer wins the game!"
    );
}

game(5);