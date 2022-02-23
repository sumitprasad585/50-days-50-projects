const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttons = document.querySelector('.buttons-container');

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.textContent = sound;
    btn.classList.add('btn');

    buttons.appendChild(btn);

    btn.addEventListener('click', () => {
        stopOtherSounds();
        document.getElementById(sound).play();
    })
})


function stopOtherSounds() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    })
}

