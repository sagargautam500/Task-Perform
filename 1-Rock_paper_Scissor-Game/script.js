let result = document.querySelector(".result");
let secondPerson = document.querySelector(".secondPerson");
let firstPerson = document.querySelector(".firstPerson");
 let rock = document.querySelector(".rock");
 let paper = document.querySelector(".paper");
 let scissor = document.querySelector(".scissor");

let rule = ["rock", "paper", "scissor"];

let person1, person2;
function handleRock() {
  person1 = rule[0];
  console.log(person1)
  return person1;
}
function handlePaper() {
  person1 = rule[1];
  console.log(person1)
  return person1;
}
function handleScissor() {
  person1 = rule[2];
  console.log(person1)
  return person1;
}


person1="rock"
person2 = rule[Math.floor(Math.random() * 3)];


rock.addEventListener("click", handleRock);
paper.addEventListener("click", handlePaper);
scissor.addEventListener("click", handleScissor);

firstPerson.innerHTML=`User Choose:${person1}`;
secondPerson.innerHTML= `Computer Choose :${person2}`;


if (person1 == person2) {
  result.innerHTML = "game is drawn";
} else if (person1 == "rock" && person2 == "scissor") {
  result.innerHTML = "You wins game";
} else if (person1 == "rock" && person2 == "paper") {
  result.innerHTML = "You lose game";
} else if (person1 == "paper" && person2 == "scissor") {
  result.innerHTML = "you lose game";
} else if (person1 == "paper" && person2 == "rock") {
  result.innerHTML = "you wins game";
} else if (person1 == "scissor" && person2 == "rock") {
  result.innerHTML = "you wins game";
} else if (person1 == "scissor" && person2 == "paper") {
  result.innerHTML = "you wins game";
}

// let num=Math.floor(Math.random() * 3);
// console.log(num)
