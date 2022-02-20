const circle = document.querySelector('.circle');
const mainArticle = document.querySelector('main');
const sidebarNav = document.querySelector('nav#sidebar-nav');

const buttons = document.querySelectorAll('button.nav-toggle-button');

buttons.forEach(current => {
    current.addEventListener('click', toggleNavigation);
});


function toggleNavigation() {
    mainArticle.classList.toggle('navbar-active');
    sidebarNav.classList.toggle('navbar-active');
    circle.classList.toggle('navbar-active');
}

