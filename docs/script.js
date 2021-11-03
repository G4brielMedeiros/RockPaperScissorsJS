
const moves = ["Rock", "Paper", "Scissors"];

const caps = { rock: "Rock", paper: "Paper", scissors: "Scissors" };

const beats = { Rock: "Paper", Paper: "Scissors", Scissors: "Rock" };


const validateInput = (move) => caps[move.toLowerCase().trim()]

const getComputerMove = () => moves[Math.floor(Math.random() * 3)];

const getHumanMove = () => {
    let humamMove = validateInput(prompt("Rock, Paper, or Scissors?"));

    while (!moves.includes(humamMove)) {
        humamMove = validateInput(prompt("I said ROCK, PAPER, or SCISSORS!?"));
    }

    return humamMove;
}


// Compares Human vs. Computer and returns a string declaring the round winner.
function playRound(human, computer) {
    let message = `${human} vs. ${computer}...`;

    return  human == computer ? `${message} It's a tie, reset round!`
            : human == beats[computer] ? `${message} You win!`
            : `${message} Computer Wins!`;
}


// Plays rounds, keeps score, and reports a game winner.
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