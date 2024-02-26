const container = document.querySelector('.container');
let isDrawing = false;
// var change = document.querySelector('.changegrid');
// var clear = document.querySelector('.clearboard');


function createGrid(size) {
    container.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mousedown', () => {
            isDrawing = true;
            draw(square);
        });
        square.addEventListener('mouseup', () => {
            isDrawing = false;
        });
        square.addEventListener('mouseenter', () => {
            if (isDrawing) {
                draw(square);
            }
        });
        container.appendChild(square);
    }
    container.style.width = `${size * 3.75}%`;
}

function draw(square) {
    const color = document.getElementById('color-picker').value;
    square.style.backgroundColor = color;
}

function changeGrid() {
    let newSize = prompt("Enter the number of squares per side (maximum 100):");
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    createGrid(newSize);
}

function clearBoard() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.style.backgroundColor = 'white');
}

function setRainbowColor() {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    // Set the background color with random RGB values
    square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}
createGrid(16);

// change.addEventListener('.changegrid', changeGrid);
// clear.addEventListener('.clearboard', clearBoard);