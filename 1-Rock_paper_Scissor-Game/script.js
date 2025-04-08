const result = document.querySelector(".result");
const secondPerson = document.querySelector(".secondPerson");
const firstPerson = document.querySelector(".firstPerson");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const userWins = document.querySelector(".userWins");
const computerWins = document.querySelector(".computerWins");

const rule = ["rock", "paper", "scissor"];

let person1,
  person2,
  person1Count = 0,
  person2Count = 0; //person1="user choice",person2="computer choice"


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
  const matchResult = document.querySelector(".matchResult");
  const tryAgainBtn = document.querySelector(".tryAgainBtn");
  const mainImg = document.querySelector(".mainImg");
  const winImg = document.querySelector(".winImg");
  const loseImg = document.querySelector(".loseImg");
  const historySection=document.querySelector(".historySection") ;

  person2 = rule[Math.floor(Math.random() * 3)];
  firstPerson.innerHTML = `User Choose:${person1}`;
  secondPerson.innerHTML = `Computer Choose :${person2}`;
  let resultText;

  if (person1 == person2) {
    resultText = "Game is drawn";
  } else if (person1 == "rock" && person2 == "scissor") {
    resultText = "You win game";
    person1Count++;
  } else if (person1 == "rock" && person2 == "paper") {
    resultText = "You lose game";
    person2Count++;
  } else if (person1 == "paper" && person2 == "scissor") {
    resultText = "You lose game";
    person2Count++;
  } else if (person1 == "paper" && person2 == "rock") {
    resultText = "You win game";
    person1Count++;
  } else if (person1 == "scissor" && person2 == "rock") {
    resultText = "You lose game";
    person2Count++;
  } else if (person1 == "scissor" && person2 == "paper") {
    resultText = "You win game";
    person1Count++;
  }

  matchResult.innerHTML = "";
  result.innerHTML = resultText;

  //add new element
  const newElement=document.createElement("li");
  newElement.innerHTML=`User:<strong>${person1}</strong> Computer:<strong>${person2}</strong> Output:<strong>${resultText}</strong>`;
  historySection.appendChild(newElement);

  userWins.innerHTML = `User Wins ${person1Count} times`;
  computerWins.innerHTML = `Computer Wins ${person2Count} times`;

  if (person1Count === 5) {
    matchResult.innerHTML = "Congratulation ! You Won Match ";
    result.innerHTML = "Congratulation ! You Won Match ";
    mainImg.classList.add("mainImage");
    winImg.classList.remove("winImage");
    tryAgainBtn.classList.remove("btnDisplay");
  } else if (person2Count === 5) {
    matchResult.innerHTML = " You lose Match .! Try Again";
    result.innerHTML = " You lose Match .! Try Again";
    mainImg.classList.add("mainImage");
    loseImg.classList.remove("loseImage");
    tryAgainBtn.classList.remove("btnDisplay");
  }

  tryAgainBtn.addEventListener("click", () => {
    person1Count = 0;
    person2Count = 0;
    matchResult.innerHTML = "";
    result.innerHTML = "let's play Game";
    mainImg.classList.remove("mainImage");
    loseImg.classList.add("loseImage");
    winImg.classList.add("winImage");
    tryAgainBtn.classList.add("btnDisplay");
    historySection.innerHTML='';
  });
}

rock.addEventListener("click", handleRock);
paper.addEventListener("click", handlePaper);
scissor.addEventListener("click", handleScissor);
