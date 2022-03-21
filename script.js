// Variables for grid size and input.
let gridSize = 255;
let input;

// function that takes input from gridSize button and squares it then
// sets it to the gridBox variable.
function gridConversion (input) {
     gridSize = input * input;
     return gridSize;
}

// function using for loop and gridBox variable to create divs