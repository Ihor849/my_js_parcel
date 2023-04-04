const inputFontSizeControl = document.querySelector("#font-size-control");


const textSpan = document.querySelector("#text");

inputFontSizeControl.addEventListener("input", onInputFontSizeControl);

function onInputFontSizeControl(event) {

  text.style.fontSize = event.currentTarget.value + "px";
}
