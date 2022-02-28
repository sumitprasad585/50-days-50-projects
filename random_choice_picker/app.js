const textarea = document.getElementById('textarea');
const choices = document.querySelector('.choices');

textarea.focus();

textarea.addEventListener('keyup', addChoice);

function addChoice(event) {
    if (event.code === 'Enter') {
        let input = textarea.value.split(',')
            .filter(current => current.trim() !== '') //discard empty choices
            .map(current => current.trim());          //trim non-empty choices


        input.forEach(current => {
            const choice = document.createElement('span');
            choice.classList.add('choice');
            choice.textContent = current;
            choices.appendChild(choice);
        })

        setTimeout(() => textarea.value = ' ', 500);
        highlightRandomChoice();
    }
}

function highlightRandomChoice() {
    const times = 58;
    const choicesNodeList = document.querySelectorAll('.choice');
    const n = choicesNodeList.length;

    let intervalID = setInterval(() => {
        removeHighlightedChoices();
        choicesNodeList[Math.floor(Math.random() * n)].classList.add('highlight');
    }, 100);

    setTimeout(() => {
        clearInterval(intervalID);
    }, times * 100);
}

function removeHighlightedChoices() {
    document.querySelectorAll('.choice').forEach(current => current.classList.remove('highlight'));
}
