// Variables for grid size and input.
let gridSize = 255;
let input;

// function that takes input from gridSize button and squares it then
// sets it to the gridBox variable.
function gridConversion(input) {
     gridSize = input * input;
     return gridSize;
}

// function using for loop and gridBox variable to create divs
function gridLayout(gridSize) {
     
}

// function for using button ts resize grid.
input = prompt("Please enter a number between 0 -100 to resize the sketch pad.");
if (isNaN(input)) {
     alert('Please Enter a number');
} else if (input > 0 && input < 100) {
     gridConversion(input);
}