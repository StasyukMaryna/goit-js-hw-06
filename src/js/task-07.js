const fontSizeControl = document.querySelector("#font-size-control");
const changeText = document.querySelector("#text");

fontSizeControl.addEventListener("input", (event) => {
  const fontSize = fontSizeControl.value + "px";
  changeText.style.fontSize = fontSize;
});
