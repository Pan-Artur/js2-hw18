import { addMovieAPI } from "./services/addMovieAPI";

const addMovie = async () => {
    const addMovieButtonEl = document.querySelector(".add-movie");

    addMovieButtonEl.addEventListener("click", async () => {
        try {
            await addMovieAPI();
        } catch (error) {
            console.error(error);
        }
    });
};

addMovie();