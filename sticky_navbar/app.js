const navbar = document.getElementById('navbar');

window.addEventListener('scroll', (event) => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled');
    }
})