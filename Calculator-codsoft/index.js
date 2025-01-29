const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

// Function to evaluate the expression and display the result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Function to clear the display
function clearDisplay() {
  display.value = "";
}
