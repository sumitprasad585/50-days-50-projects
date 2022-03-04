const btn = document.querySelector('button');

btn.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    circle.classList.add('circle');

    const x = e.clientX;
    const y = e.clientY;
    const left = x - btn.offsetLeft;
    const top = y - btn.offsetTop;

    circle.style.top = top + 'px';
    circle.style.left = left + 'px'

    btn.appendChild(circle);

    setTimeout(() => btn.removeChild(circle), 400);
    e.preventDefault();
})