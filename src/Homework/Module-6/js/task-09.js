const bodyColor = document.querySelector("body");

const buttonChangeColor = document.querySelector(".change-color");

const spanBackgroundColor = document.querySelector(".color");

buttonChangeColor.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  bodyColor.style.background = randomColor;
  spanBackgroundColor.textContent = randomColor;
  return randomColor;
}
