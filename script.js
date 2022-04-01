//Declaration of variable for the length of the sides and its default value
let sideLength = 200;

//Creation of grid DOM item.
const grid = document.querySelector('.grid');
grid.style.display = 'flex';
grid.style.flexWrap = 'wrap';
grid.style.borderStyle = 'solid';
grid.style.borderColor = 'black';
grid.style.backgroundColor = 'transparent';
grid.style.height = '640px';
grid.style.width = '640px';

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

//Creation of grid and grid squares
createSquares(lengthSquare);

//Event listener loop for grid squares
let pixels = document.querySelectorAll('.gridSquare');

pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', function() {
        pixel.style.backgroundColor = 'black'
    })
})