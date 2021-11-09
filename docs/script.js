const moves = ["Rock", "Paper", "Scissors"];

const caps = { rock: "Rock", paper: "Paper", scissors: "Scissors" };

const beats = { Rock: "Paper", Paper: "Scissors", Scissors: "Rock" };

let human = 0;
let compu = 0;

let moveList    = document.querySelectorAll("button.move");
let ContentDOM  = document.querySelector(".content");
let ResultDOM   = document.querySelector("#result");
let ScoreDOM    = document.querySelector("#score");
let WinnerDOM   = document.createElement("p");
let rematchDOM  = document.createElement("button");

const getComputerMove = () => moves[Math.floor(Math.random() * 3)]; 

function playRound(human, compu) {
  let message = `${human} vs. ${compu}...`;

  if (human == compu) return `${message} It's a tie!`;
  if (human == beats[compu]) return `${message} You win!`;
  if (compu == beats[human]) return `${message} Computer Wins!`;
  return "what?";
}

function announceWinner(winner) {
  WinnerDOM.textContent = `${winner} wins!!!`;
  ContentDOM.replaceChildren(WinnerDOM);
}

moveList.forEach((move) => {
  move.addEventListener("click", () => {
    const result = playRound(move.textContent, getComputerMove());

    if (result.includes("You")) human++;
    if (result.includes("Computer")) compu++;

    ResultDOM.textContent = result;
    ScoreDOM.textContent = `Human ${human} x ${compu} Computer`;

    if (human == 5) announceWinner("Human");
    if (compu == 5) announceWinner("Computer");
  });
}); 
