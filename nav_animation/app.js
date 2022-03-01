const navToggleButton = document.querySelector('.navbar button');

navToggleButton.addEventListener('click', () => {
    navToggleButton.parentElement.classList.toggle('active');
})