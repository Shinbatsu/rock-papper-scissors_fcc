let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result  >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const things = { s: "Scissors", p: "Paper", r: "Rock" };

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = `Your <span style="color:green">${things[userChoice]}</span> beat Computer\`s <span style="color:red">${things[computerChoice]}</span>. You WIN!`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 500);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `Your <span style="color:red">${things[userChoice]}</span> lost Computer\`s <span style="color:green">${things[computerChoice]}</span>. You LOSE!`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 500);
}

function draw(userChoice, computerChoice) {
  result_div.innerHTML = `Your <span style="color:gold">${things[userChoice]}</span> got draw with Computer\`s <span style="color:gold">${things[computerChoice]}</span>. It\`s DRAW!`;
  document.getElementById(userChoice).classList.add("gold-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("gold-glow");
  }, 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice, computerChoice);
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}
main();
