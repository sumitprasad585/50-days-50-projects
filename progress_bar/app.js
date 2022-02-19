const cards = document.querySelectorAll('.card');
const progress = document.querySelector('.progress');
const prev = document.querySelector('button#prev');
const next = document.querySelector('button#next');


let currentStep = 1;
let totalStepsAllowed = 4;
next.addEventListener('click', nextStep);
prev.addEventListener('click', prevStep);

function nextStep() {
    prev.disabled = false;
    currentStep++;
    if (currentStep == totalStepsAllowed) {
        currentStep = totalStepsAllowed;
        next.disabled = true;
    }
    cards[currentStep - 1].style.borderColor = '#0096c7';
    progress.style.width = ((currentStep - 1) / (totalStepsAllowed - 1)) * 100 + '%';
}

function prevStep() {
    next.disabled = false;
    currentStep--;
    if (currentStep == 1) {
        currentStep = 1;
        prev.disabled = true;
    }

    cards[currentStep].style.borderColor = '#d3d3d3';
    progress.style.width = ((currentStep - 1) / (totalStepsAllowed - 1)) * 100 + '%';
}
