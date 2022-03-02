class Movie {
    constructor() {
        this.API_KEY = '634cfe434a3b3f747cb0e992c69543f7';
        this.IMG_BASE_URL = 'https://image.tmdb.org/t/p/original'
    }

    async getNowPlayingMovies() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.API_KEY}&language=en-US&page=1`);
        const responseData = await response.json();

        return {
            movies: responseData.results,
            img_base_url: this.IMG_BASE_URL
        }
    }

    async searchMovies() {
        const input = document.querySelector('#search').value;
        if (input !== '') {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${input}`);
            const responseData = await response.json();

            return {
                movies: responseData.results,
                img_base_url: this.IMG_BASE_URL
            }
        }
    }
}