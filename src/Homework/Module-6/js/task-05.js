const fieldInput = document.querySelector("#name-input");

const textOutput = document.querySelector("#name-output");

fieldInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (!event.currentTarget.value) {
    textOutput.textContent = "Anonymous";
    return textOutput.textContent;
  } else {
    textOutput.textContent = event.currentTarget.value;
    return textOutput.textContent;
  }
}
