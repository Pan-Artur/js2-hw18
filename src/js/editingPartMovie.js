import { updatePartMovieAPI } from "./services/editMoviePartAPI";

export const editPartMovie = () => {
  document.addEventListener("click", openingEditPartModal);
};

export const openingEditPartModal = (e) => {
  if (e.target.classList.contains("edit-button")) {
    const modalEditEl = document.querySelector(".backdrop-edit");
    const formEl = document.querySelector(".form-edit");
    const editModalClose = document.querySelector(".modal-edit-close");

    const movieItem = e.target.closest(".movies-item");
    const movieId = movieItem.dataset.id;

    modalEditEl.classList.remove("is-hidden");

    formEl.elements.name.value = movieItem.querySelector(".movies-title").textContent;
    formEl.elements.genre.value = movieItem.querySelector(".movies-genre").textContent;
    formEl.elements.director.value = movieItem.querySelector(".movies-director").textContent;
    formEl.elements.year.value = movieItem.querySelector(".movies-year").textContent;

    const submitHandler = (event) => {
      event.preventDefault();
      modalEditEl.classList.add("is-hidden");

      const updatedMovie = {
        title: formEl.elements.name.value,
        genre: formEl.elements.genre.value,
        director: formEl.elements.director.value,
        year: formEl.elements.year.value,
      };

      updatePartMovieAPI(movieId, updatedMovie).then(() => {
        movieItem.querySelector(".movies-title").textContent = updatedMovie.title;
        movieItem.querySelector(".movies-genre").textContent = updatedMovie.genre;
        movieItem.querySelector(".movies-director").textContent = updatedMovie.director;
        movieItem.querySelector(".movies-year").textContent = updatedMovie.year;
      });

      formEl.removeEventListener("submit", submitHandler);
    };

    formEl.addEventListener("submit", submitHandler);

    editModalClose.addEventListener("click", () => {
      modalEditEl.classList.add("is-hidden");
      formEl.removeEventListener("submit", submitHandler);
    });
  }
};