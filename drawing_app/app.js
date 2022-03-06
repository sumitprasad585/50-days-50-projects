const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const sizeUI = document.querySelector('#size');
const clearBtn = document.querySelector('#clear');
const colorBox = document.querySelector('#color');

let x, y;
let color = 'black';
let isPressed = false;
let size = 10;

function drawCircle(x, y) {
    canvasContext.beginPath();
    canvasContext.arc(x, y, size, 0, Math.PI * 2, true);
    canvasContext.fillStyle = color;
    canvasContext.fill();
}

function drawLine(x1, y1, x2, y2) {
    canvasContext.beginPath();
    canvasContext.moveTo(x1, y1);
    canvasContext.lineTo(x2, y2);
    canvasContext.strokeStyle = color;
    canvasContext.lineWidth = size * 2; // if radius = size and lineWidth is like diameter
    canvasContext.stroke();
}

canvas.addEventListener('mousedown', (event) => {
    isPressed = true;
    x = event.offsetX;
    y = event.offsetY;
});

canvas.addEventListener('mouseup', (event) => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (event) => {
    if (isPressed) {
        let x2 = event.offsetX;
        let y2 = event.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        //draw the line from new cursor position
        x = x2;
        y = y2;
    }
});

increaseBtn.addEventListener('click', () => {
    size += 5;
    if (size > 50) size = 50;

    changeUIStrokeSize(size);
});

decreaseBtn.addEventListener('click', () => {
    size -= 5;
    if (size < 5) size = 5;

    changeUIStrokeSize(size);
})

function changeUIStrokeSize(newSize) {
    sizeUI.textContent = newSize;
}

colorBox.addEventListener('change', (event) => {
    colorBox.style.backgroundColor = event.target.value;
    color = event.target.value;
})

clearBtn.addEventListener('click', () => canvasContext.clearRect(0, 0, canvas.width, canvas.height));