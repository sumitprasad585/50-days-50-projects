document.querySelectorAll('h1.followers-count').forEach(current => {
    current.textContent = 0;

    const updateCounter = () => {
        let target = +current.getAttribute('data-target');
        let c = +current.textContent;

        const intervalID = setInterval(() => {
            if (c < target) {
                c += Math.ceil(target / 500);
                current.textContent = c;
            } else {
                current.textContent = target;
                clearInterval(intervalID);
            }
        }, 1);
    }

    updateCounter();
});