const movie = new Movie;
const ui = new UI;

const nowPlayingMovies = movie.getNowPlayingMovies()
    .then(response => ui.addMovies(response.movies, response.img_base_url))
    .catch(err => console.log(err));

const form = document.querySelector('#movie-form');
form.addEventListener('submit', searchMoviesAdd);

function searchMoviesAdd(event) {
    clearMovies();
    document.querySelector('.result-title').textContent = `Showing results for "${document.querySelector('#search').value}"`;
    movie.searchMovies()
        .then(response => ui.addMovies(response.movies, response.img_base_url))
        .catch(err => console.log(err));

    event.preventDefault();
}

function clearMovies() {
    document.querySelectorAll('.movie').forEach(current => current.remove());
}