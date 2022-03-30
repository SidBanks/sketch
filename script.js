//Declaration of variable for the length of the sides and its default value
let sideLength = 16;

//Creation of grid DOM item.
const grid = document.querySelector('.grid');

//Declaration of lengthSquare variable
let lengthSquare = sideLength * sideLength;

//Declaration of variable for grid square size
let setSide = `${640 / sideLength}px`;

//Function for creating grid squares using sideLength as a parameter
function createSquares() {
    for (let i = 0; i < lengthSquare; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.style.width = setSide;
        gridSquare.style.height = setSide;
        gridSquare.classList.add('gridSquare');
        grid.appendChild(gridSquare);
    }
}

createSquares(lengthSquare);