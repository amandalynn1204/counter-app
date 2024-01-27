function decreaseCount() {
  count--;
  countDisplay.innerHTML = count;
}

function resetCount() {
  count = 0;
  countDisplay.innerHTML = count;
}

function increaseCount() {
  count++;
  countDisplay.innerHTML = count;
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
