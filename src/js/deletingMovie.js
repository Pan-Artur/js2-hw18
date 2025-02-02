import { deleteMovieAPI } from "./services/deleteMovieAPI";

export const deleteMovie = () => {
  document.removeEventListener("click", deletingMovie);

  document.addEventListener("click", deletingMovie);
};

const deletingMovie = (e) => {
  if (e.target.classList.contains("delete-button")) {
    const movieItem = e.target.closest(".movies-item");

    deleteMovieAPI(movieItem.id).then(() => {
      movieItem.remove();
    });
  }
}
