const getMovies = () => {
    const getMoviesButtonEl = document.querySelector(".get-movies");
    const hideMoviesButtonEl = document.querySelector(".hide-movies");
    const moviesListEl = document.querySelector(".movies-list");

    getMoviesButtonEl.addEventListener("click", () => {
        moviesListEl.classList.remove("is-hidden");
    });

    hideMoviesButtonEl.addEventListener("click", () => {
        moviesListEl.classList.add("is-hidden");
    });
}

getMovies();