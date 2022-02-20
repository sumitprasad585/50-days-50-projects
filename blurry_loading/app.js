const img = document.querySelector('img');
const loadingProgress = document.querySelector('span.loading');

document.addEventListener('DOMContentLoaded', loadImage(makeLoadingProgressDisappear));

function loadImage(callback) {
    let i = 0;

    let intervalID = setInterval(() => {
        i++;
        console.log(scale(i, 0, 100, 30, 0));
        img.style.filter = `blur(${scale(i, 0, 100, 30, 0)}px)`;
        loadingProgress.textContent = `${i}%`;
        if (i > 100) {
            clearInterval(intervalID);
            callback();
        }
    }, 50);

    // loadingProgress.style.display = 'none';
}

function makeLoadingProgressDisappear() {
    loadingProgress.remove();
}


//function for mapping a range of numbers to another range of numbers
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}