const buttonsContainer = document.querySelector(".buttons-container");
const currentDisplay = document.querySelector(".current-display");
currentDisplay.innerText = "0";
buttonsContainer.addEventListener("click", (e) => {
  if (currentDisplay.innerText == 0) {
    currentDisplay.innerText = "";
  }
  if (
    e.target.classList.contains("num") ||
    e.target.classList.contains("operator")
  ) {
    currentDisplay.innerText += e.target.innerText;
  } else if (e.target.classList.contains("equal")) {
    currentDisplay.innerText = eval(currentDisplay.innerText);
  } else if (e.target.classList.contains("ac")) {
    currentDisplay.innerText = "0";
  }
});
