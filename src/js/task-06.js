const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
  const expectedLength = document
    .querySelector("#validation-input")
    .getAttribute("data-length");
  if (event.currentTarget.value.length === parseInt(expectedLength)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
