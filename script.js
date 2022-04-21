let pixelSize = document.querySelector('#pixelSize');

//Declaration of side length variable, length square, pixel size,
// and pen color variable.
let sideLength;
let pixelTotal;
let pixelSide;
let grid;
let gridSide;

//function for setting variable number of pixels on a side
function setSideLength(pixelSize) {
sideLength = pixelSize.value;
console.log(pixelSize.value);
console.log(sideLength);
return sideLength;
}

//function for changing the total numbur of pixels
function pixelMaker(sideLength) {
    pixelTotal = sideLength * sideLength;
    console.log(pixelTotal);
    return pixelTotal;
}

//function to set pixel size.
function pixelSizer(sideLength) {
    pixelSide = `${640 / sideLength}px`;
    console.log(pixelSide);
    return pixelSide;
    }

//function to adjust grid size
function gridSize(sideLength, pixelSide) {
   gridSide = sideLength * pixelSide;
   return gridSide;
}    

//function for the creation of grid DOM item.
function drawGrid (gridSide) {
grid = document.querySelector('.grid');
grid.style.display = 'flex';
grid.style.flexWrap = 'wrap';
grid.style.borderStyle = 'solid';
grid.style.borderColor = 'black';
grid.style.backgroundColor = 'transparent';
grid.style.width = gridSide;
grid.style.height = gridSide;
grid.style.maxWidth = '640px'; 
grid.style.maxHeight = '640px';
grid.style.flexGrow= 1;
}

//Function for creating grid squares using sideLength as a parameter
function createPixels(pixelTotal) {
    if (grid.hasChildNodes()) {
        while (grid.hasChildNodes()) {
            grid.removeChild(grid.firstChild);
        }
    }
    for (let i = 0; i < pixelTotal; i++) {
        let pixelSquare = document.createElement('div');
        pixelSquare.display = 'flex';
        pixelSquare.style.width = pixelSide;
        pixelSquare.style.height = pixelSide;
        pixelSquare.style.flexShrink = 1;
        pixelSquare.style.minWidth = '6.4px';
        pixelSquare.classList.add('pixelSquare');
        grid.appendChild(pixelSquare);
    }
    let pixels = document.querySelectorAll('.pixelSquare');

//Event listener loop for grid squares
    pixels.forEach((pixel) => {
            pixel.addEventListener('mouseover', function () {
                pixel.style.backgroundColor = 'black';
            });
        })
    

}

//event listeners for pixel size and drawing and grid drawing
pixelSize.addEventListener('input', function() { drawGrid(gridSide); });
pixelSize.addEventListener('input', function() { setSideLength(pixelSize); });
pixelSize.addEventListener('input', function() { pixelMaker(sideLength); });
pixelSize.addEventListener('input', function() { pixelSizer(sideLength); });
pixelSize.addEventListener('input', function() { createPixels(pixelTotal); });


