class UI {
    constructor() {
        this.moviesContainer = document.querySelector('.movies-container');
    }

    addMovies(movies, img_base_url) {
        movies.forEach(current => {

            const movie = document.createElement('div');
            movie.classList.add('movie');
            movie.innerHTML = `
                 <img src="${img_base_url + current.poster_path}"
                        alt="">
                    <div class="movie-brief">
                        <div class="container">
                            <h1 class="movie-title">${current.title}</h1>
                            <h2 class="movie-rating">${current.vote_average}</h2>
                        </div>
                    </div>
                    <div class="movie-overview">
                        ${current.overview}
                    </div>
            `
            this.moviesContainer.appendChild(movie);
        })
    }
}