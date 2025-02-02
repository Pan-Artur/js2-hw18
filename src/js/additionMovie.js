import { addMovieAPI } from "./services/addMovieAPI";

const addMovie = () => {
    const addMovieButtonEl = document.querySelector(".add-movie");

    addMovieButtonEl.addEventListener("click", () => {
        addMovieAPI();
    });
};

addMovie();