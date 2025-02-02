const hideMovies = () => {
    const hideMoviesButtonEl = document.querySelector(".hide-movies");
    const moviesListEl = document.querySelector(".movies-list");

    hideMoviesButtonEl.addEventListener("click", () => {
        moviesListEl.classList.add("is-hidden");
    });
}

hideMovies();