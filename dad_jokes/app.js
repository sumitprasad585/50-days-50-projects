const newJokeBtn = document.querySelector('#new-joke-btn');
const joke = document.querySelector('#joke');

document.addEventListener('DOMContentLoaded', addNewJoke);
newJokeBtn.addEventListener('click', addNewJoke);


async function addNewJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    /*     fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(resData => {
                joke.textContent = resData.joke;
            })
            .catch(err => console.log(err)); */


    const response = await fetch('https://icanhazdadjoke.com/', config);
    const responseData = await response.json();

    joke.textContent = responseData.joke;
}