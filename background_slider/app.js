const slides = document.querySelectorAll('.slide');
const leftButtons = document.querySelectorAll('.left');
const rightButtons = document.querySelectorAll('.right');

let activeSlide = 0;

leftButtons.forEach(current => current.addEventListener('click', decreaseSlider));
rightButtons.forEach(current => current.addEventListener('click', increaseSlider));

function increaseSlider(event) {
    activeSlide++;
    if (activeSlide === slides.length) activeSlide = 0;

    removeActiveSlides();
    slides[activeSlide].classList.add('active');
    document.body.style.backgroundImage = getComputedStyle(slides[activeSlide]).backgroundImage;

    event.preventDefault();
}

function decreaseSlider(event) {
    activeSlide--;
    if (activeSlide < 0) activeSlide = slides.length - 1;

    removeActiveSlides();
    slides[activeSlide].classList.add('active');
    document.body.style.backgroundImage = getComputedStyle(slides[activeSlide]).backgroundImage;

    event.preventDefault;
}

function removeActiveSlides() {
    slides.forEach(current => current.classList.remove('active'));
}