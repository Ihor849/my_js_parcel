const counterButton = document.querySelector("#counter");

const counterValueButton = document.querySelector("#value");

const buttonDecrement = counterButton.firstElementChild;

const buttonIncrement = counterButton.lastElementChild;


buttonDecrement.addEventListener("click", (event) => {
  counterPluginDecrement();
});

buttonIncrement.addEventListener("click", (event) => {
  counterPluginIncrement();
});

let counterValue = 0;
const counterPluginDecrement = function () {
  counterValue -= 1;
  updatesValueСounter();
};

const counterPluginIncrement = function () {
  counterValue += 1;
  updatesValueСounter();
};

const updatesValueСounter = function () {
  counterValueButton.textContent = counterValue;
};
