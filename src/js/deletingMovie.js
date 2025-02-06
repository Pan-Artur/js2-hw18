import { deleteMovieAPI } from "./services/deleteMovieAPI";

export const deleteMovie = () => {
  document.removeEventListener("click", deletingMovie);
  document.addEventListener("click", deletingMovie);
};

const deletingMovie = async (e) => {
  if (e.target.classList.contains("delete-button")) {
    const movieItem = e.target.closest(".movies-item");

    try {
      await deleteMovieAPI(movieItem.id);
      movieItem.remove();
    } catch (error) {
      console.error(error);
    }
  }
};
