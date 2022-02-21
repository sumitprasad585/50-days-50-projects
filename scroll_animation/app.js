const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', makeCardsVisible);

makeCardsVisible();

function makeCardsVisible() {
    const triggerWindowPosition = window.innerHeight / 5 * 4;

    cards.forEach(current => {
        let cardTop = current.getBoundingClientRect().top;

        if (cardTop < triggerWindowPosition)
            current.classList.add('active');
        else
            current.classList.remove('active');
    })
}