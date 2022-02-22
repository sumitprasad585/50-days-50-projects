const labels = document.querySelectorAll('label');


labels.forEach(label => {
    const splitArray = label.innerText.split('');
    let labelHtml = '';
    splitArray.forEach((current, index) => {
        labelHtml += `<span style="transition-delay: ${index * 50}ms">${current}</span>`;
    })

    label.innerHTML = labelHtml;
})


const inputFields = document.querySelectorAll('input');

inputFields.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.type === 'text' || input.type === 'password' || input.type === 'textarea') {
            let spanArray = Array.from(input.nextElementSibling.children);
            spanArray.forEach(current => current.style.transform = 'translateY(-2em)');
        }
    })
})