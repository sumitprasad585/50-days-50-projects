const buttons = document.querySelectorAll('.faq button');

buttons.forEach(current => {
    current.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-chevron-circle-down')) {
            removeOtherActiveFaqs();
            current.parentElement.classList.add('active');
        }

        else if (e.target.classList.contains('fa-times')) {
            current.parentElement.classList.remove('active');
        }
    })
})


function removeOtherActiveFaqs() {
    buttons.forEach(current => current.parentElement.classList.remove('active'));
}