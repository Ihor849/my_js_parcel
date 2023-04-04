const controlsCollection = document.querySelector("#controls");
const onInputUser = controlsCollection.firstElementChild;
const onButtonCreate = controlsCollection.querySelector("button");
const onButtonDestroy = controlsCollection.lastElementChild;
const onBoxesCollection = document.querySelector("#boxes");

// ==========================================================
const refs = {
  controlsCollection: document.querySelector("#controls"),
  onInputUser: controlsCollection.firstElementChild,
  onButtonCreate: controlsCollection.querySelector("button"),
  onButtonDestroy: controlsCollection.lastElementChild,
  onBoxesCollection: document.querySelector("#boxes"),
};

// +++++++++++++++++++ С О З Д А Н И Е    Ц В А Т А  ++++++++++++++++++++++
function getRandomHexColor() {
  const boxesColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return boxesColor;
}

// +++++++++++++++++++ С О З Д А Н И Е    Б Л О К О В  ++++++++++++++++++++++
refs.onInputUser.addEventListener("input", createBoxes);

function createBoxes(amount) {
  const arrayObjects = [];

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    arrayObjects.push(divEl);
  }
  return arrayObjects;
}
// ++++++++++++++++++  В Ы В О Д  ++++++++++++++++
onButtonCreate.addEventListener("click", () => {
  let arrayDivObjects = createBoxes(onInputUser.value);
  onBoxesCollection.append(...arrayDivObjects);
});

// ++++++++++++++++++  О Ч И С Т К А ++++++++++++++++
onButtonDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  onBoxesCollection.innerHTML = "";
  onInputUser.value = "";
}
