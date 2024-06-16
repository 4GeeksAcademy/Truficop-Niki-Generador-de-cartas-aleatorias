/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function symbolGenerator(symbolsList) {
  const symbols = Math.floor(Math.random() * symbolsList.length);
  return symbolsList[symbols];
}
function numberGenerator(numbersList) {
  const numbers = Math.floor(Math.random() * numbersList.length);
  return numbersList[numbers];
}
function generateCard() {
  const SYMBOLS = ["♦", "♥", "♠", "♣"];
  const NUMBERS = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const randomSymbol = symbolGenerator(SYMBOLS);
  const randomNumbers = numberGenerator(NUMBERS);
  const cardHeaderElement = document.getElementById("header-symbol");
  const cardFooterElement = document.getElementById("footer-symbol");
  cardHeaderElement.classList.remove("red");
  cardFooterElement.classList.remove("red");
  if (randomSymbol === "♦" || randomSymbol === "♥") {
    cardHeaderElement.classList.add("red");
    cardFooterElement.classList.add("red");
  }
  document.getElementById("header-symbol").innerHTML = randomSymbol;
  document.getElementById("body-symbol").innerHTML = randomNumbers;
  document.getElementById("footer-symbol").innerHTML = randomSymbol;
}
function personalCardGeneretor(width, height) {
  const SYMBOLS = ["♦", "♥", "♠", "♣"];
  const NUMBERS = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const randomSymbol = symbolGenerator(SYMBOLS);
  const randomNumbers = numberGenerator(NUMBERS);

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cardDiv.style.width = width + "px";
  cardDiv.style.height = height + "px";

  const cardHeaderDiv = document.createElement("div");
  cardHeaderDiv.className = "cardHeader text-start ms-4";
  cardHeaderDiv.id = "personalCardHeader";
  cardHeaderDiv.innerText = randomSymbol;

  const cardBodyDiv = document.createElement("div");
  cardBodyDiv.className = "cardBody text-center mt-5";
  cardBodyDiv.id = "personalCardBody";
  cardBodyDiv.innerText = randomNumbers;

  const cardFooterDiv = document.createElement("div");
  cardFooterDiv.className = "cardFooter text-end flip-vertical me-4";
  cardFooterDiv.id = "personalCardFooter";
  cardFooterDiv.innerText = randomSymbol;

  cardDiv.appendChild(cardHeaderDiv);
  cardDiv.appendChild(cardBodyDiv);
  cardDiv.appendChild(cardFooterDiv);
  cardContainer.appendChild(cardDiv);

  const personalCardHeaderElement = document.getElementById(
    "personalCardHeader"
  );
  const personalCardFooterElement = document.getElementById(
    "personalCardFooter"
  );
  personalCardHeaderElement.classList.remove("red");
  personalCardFooterElement.classList.remove("red");
  if (randomSymbol === "♦" || randomSymbol === "♥") {
    personalCardHeaderElement.classList.add("red");
    personalCardFooterElement.classList.add("red");
  }
}
function validateNumbers() {
  const inputWidth = document.getElementById("inputWidth").value;
  const inputHeight = document.getElementById("inputHeight").value;
  const widthInt = Number(inputWidth);
  const heightInt = Number(inputHeight);
  if (widthInt >= 105 && heightInt >= 550) {
    personalCardGeneretor(widthInt, heightInt);
  } else {
    alert(
      "Por favor ingresa valores válidos. Alto minimo 550px. Ancho minimo 105px"
    );
  }
}

window.onload = function() {
  //write your code here
  generateCard();
  setInterval(generateCard, 5000);
  document
    .getElementById("generateButton")
    .addEventListener("click", generateCard);
  document
    .getElementById("personal-generate-button")
    .addEventListener("click", validateNumbers);
};
