const cards = document.querySelectorAll('.card');

cards.forEach(current => {
    current.addEventListener('click', () => {
        deactivateAllCards();
        current.classList.add('active');
    })
})

function deactivateAllCards() {
    cards.forEach(current => current.classList.remove('active'));
}
