const result = document.querySelector(".result");
const secondPerson = document.querySelector(".secondPerson");
const firstPerson = document.querySelector(".firstPerson");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

const rule = ["rock", "paper", "scissor"];

let person1, person2;
function handleRock() {
  person1 = rule[0];
  handleEvent(person1);
}
function handlePaper() {
  person1 = rule[1];
  handleEvent(person1);
}
function handleScissor() {
  person1 = rule[2];
  handleEvent(person1);
}

function handleEvent(person1) {
  person2 = rule[Math.floor(Math.random() * 3)];
  firstPerson.innerHTML = `User Choose:${person1}`;
  secondPerson.innerHTML = `Computer Choose :${person2}`;

  if (person1 == person2) {
    result.innerHTML = "game is drawn";
  } else if (person1 == "rock" && person2 == "scissor") {
    result.innerHTML = "You win game";
  } else if (person1 == "rock" && person2 == "paper") {
    result.innerHTML = "You lose game";
  } else if (person1 == "paper" && person2 == "scissor") {
    result.innerHTML = "you lose game";
  } else if (person1 == "paper" && person2 == "rock") {
    result.innerHTML = "you win game";
  } else if (person1 == "scissor" && person2 == "rock") {
    result.innerHTML = "you lose game";
  } else if (person1 == "scissor" && person2 == "paper") {
    result.innerHTML = "you win game";
  }
}

rock.addEventListener("click", handleRock);
paper.addEventListener("click", handlePaper);
scissor.addEventListener("click", handleScissor);
