function decreaseCount() {
  count--;
  countDisplay.innerHTML = count;

  if (count < 0) {
    countDisplay.classList.add("red");
  }
  if (count === 0) {
    countDisplay.classList.remove("red");
    countDisplay.classList.remove("green");
  }
}

function resetCount() {
  count = 0;
  countDisplay.innerHTML = count;
  countDisplay.classList.remove("red");
  countDisplay.classList.remove("green");
}

function increaseCount() {
  count++;
  countDisplay.innerHTML = count;

  if (count > 0) {
    countDisplay.classList.add("green");
  }
  if (count === 0) {
    countDisplay.classList.remove("green");
    countDisplay.classList.remove("red");
  }
}

const decreaseButton = document.getElementById("decrease-button");
const resetButton = document.getElementById("reset-button");
const increaseButton = document.getElementById("increase-button");
const countDisplay = document.getElementById("count-display");
let count = 0;
countDisplay.innerHTML = count;

decreaseButton.addEventListener("click", decreaseCount);
resetButton.addEventListener("click", resetCount);
increaseButton.addEventListener("click", increaseCount);
