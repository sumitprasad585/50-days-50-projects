const smallCups = document.querySelectorAll('.small-cup');
const remaining = document.getElementById('remaining-quantity');
const drank = document.getElementById('drank-quantity');

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => {
        highlightCup(cup, index);
    })
})

function highlightCup(c, i) {
    if (!c.classList.contains('filled')) {
        for (let index = 0; index <= i; index++)
            smallCups[index].classList.add('filled');
    } else {
        removeActiveHighlight();
        for (let index = 0; index < i; index++)
            smallCups[index].classList.add('filled');
    }
    fillBigCup();
}

function removeActiveHighlight() {
    smallCups.forEach(current => current.classList.remove('filled'));
}

function fillBigCup() {
    const filledCups = document.querySelectorAll('.filled').length;
    const totalCups = smallCups.length;
    let filledPercentage = (filledCups / totalCups) * 100;
    let remainingQuantity = 2 - ((filledPercentage / 100) * 2);

    if (filledPercentage === 100) {
        remaining.style.opacity = '0';
    }
    else if (filledPercentage === 0) {
        drank.style.opacity = '0';
        remaining.style.opacity = '1';
    }
    else {
        remaining.style.opacity = '1';
        drank.style.opacity = '1';
    }

    drank.textContent = `${filledPercentage}%`;
    remaining.innerHTML = `${remainingQuantity}L <small>Remaining</small>`;
    drank.style.height = `${filledPercentage}% `;
    remaining.style.height = `${100 - filledPercentage}% `;

}   
