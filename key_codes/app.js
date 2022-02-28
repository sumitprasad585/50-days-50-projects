document.addEventListener('keydown', displayKeyCode);

function displayKeyCode(event) {
    const keyBoxes = document.querySelectorAll('.key-box');

    keyBoxes[0].textContent = (event.key !== ' ') ? event.key : 'SpaceBar';
    keyBoxes[1].textContent = event.keyCode;
    keyBoxes[2].textContent = event.code;
}