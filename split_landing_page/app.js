const splitContainer = document.querySelector('section#split-container');
const splitItems = document.querySelectorAll('.split');

splitContainer.addEventListener('mouseleave', removeActiveSplits);

splitItems.forEach(current => {
    current.addEventListener('mouseenter', () => {
        removeActiveSplits();
        current.classList.add('active');
    });
})

function removeActiveSplits() {
    splitItems.forEach(current => current.classList.remove('active'));
}

