const fieldInput = document.querySelector("#validation-input");

fieldInput.addEventListener("blur", onInputBlur);

const refs = {
  type: "text",
  id: "validation-input",
  length: "6",
  placeholder: "Please enter 6 symbols",
};

function onInputBlur(event) {
  if (Number(refs.length) === event.currentTarget.value.length) {
    fieldInput.classList = "valid";
  } else {
    fieldInput.classList = "invalid";
  }
}
