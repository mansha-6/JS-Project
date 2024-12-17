// script.js

// Get references to the elements
const valueDisplay = document.getElementById("value");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

// Initial value
let counter = 0;

// Function to update the displayed value
function updateValue() {
    valueDisplay.textContent = counter;
}

// Event listener for "More" button
increaseButton.addEventListener("click", () => {
    counter++;
    updateValue();
});

// Event listener for "Less" button
decreaseButton.addEventListener("click", () => {
    counter--;
    updateValue();
});

// Event listener for "Reset" button
resetButton.addEventListener("click", () => {
    counter = 0;
    updateValue();
});
