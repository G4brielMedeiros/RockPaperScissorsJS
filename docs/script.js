
const moves = ["Rock", "Paper", "Scissors"];

const caps = { rock: "Rock", paper: "Paper", scissors: "Scissors" };

const beats = { Rock: "Paper", Paper: "Scissors", Scissors: "Rock" };


const validateInput = (move) => caps[move.toLowerCase().trim()]

const getComputerMove = () => moves[Math.floor(Math.random() * 3)];

const getHumanMove = () => {
    let humanMove = validateInput(prompt("Rock, Paper, or Scissors?"));

    while (!moves.includes(humanMove)) {
        humanMove = validateInput(prompt("I said ROCK, PAPER, or SCISSORS!?"));
    }

    return humanMove;
}


// Compares Human vs. Computer and returns a string declaring the round winner.
function playRound(human, computer) {
    let message = `${human} vs. ${computer}...`;
    console.log({human, computer});
    return  human == computer ? `${message} It's a tie!`
            : human == beats[computer] ? `${message} You win!`
            : computer == beats[human] ? `${message} Computer Wins!`
            : `what?`
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

// DOM EDITION


const buttonMoves = document.querySelectorAll('button.move');

buttonMoves.forEach((move) => {
    move.addEventListener('click', () => {

        documentResult = document.querySelector('#result')
        result = playRound(move.textContent, getComputerMove())
        
        documentResult.textContent = result;
        

        
        console.log('Human chose: ' + move.textContent);
    })
})




// game(5);



