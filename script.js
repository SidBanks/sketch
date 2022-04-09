let pixelSize = document.querySelector('#pixelSize');

//Declaration of side length variable, and length square variable
let sideLength;
let pixelTotal;
let setSide;

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
    setSide = `${640 / sideLength}px`;
    console.log(setSide);
    return setSide;
    }

//Creation of grid DOM item.
const grid = document.querySelector('.grid');
grid.style.display = 'flex';
grid.style.flexWrap = 'wrap';
grid.style.borderStyle = 'solid';
grid.style.borderColor = 'black';
grid.style.backgroundColor = 'transparent';
grid.style.height = '640px';
grid.style.width = '640px';

//Function for creating grid squares using sideLength as a parameter
function createPixels(pixelTotal) {
    for (let i = 0; i < pixelTotal; i++) {
        let pixelSquare = document.createElement('div');
        pixelSquare.style.width = setSide;
        pixelSquare.style.height = setSide;
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

//event listeners for pixel size and drawing
pixelSize.addEventListener('click', function() { setSideLength(pixelSize); });
pixelSize.addEventListener('click', function() { pixelMaker(sideLength); });
pixelSize.addEventListener('click', function() { pixelSizer(sideLength); });
pixelSize.addEventListener('click', function() { createPixels(pixelTotal); });


