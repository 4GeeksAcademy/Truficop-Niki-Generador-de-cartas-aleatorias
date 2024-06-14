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
window.onload = function() {
  //write your code here
  generateCard();
  setInterval(generateCard, 5000);
  document
    .getElementById("generateButton")
    .addEventListener("click", generateCard);
};
