import { updateMovieAPI } from "./services/editMovieAPI";

export const editMovie = () => {
  document.addEventListener("click", openingEditModal);
};

export const openingEditModal = (e) => {
  if (e.target.classList.contains("edit-everything-button")) {
    const modalEditEl = document.querySelector(".backdrop-edit");
    const formEl = document.querySelector(".form-edit");
    const editModalClose = document.querySelector(".modal-edit-close");

    const movieItem = e.target.closest(".movies-item");
    const movieId = movieItem.dataset.id;

    modalEditEl.classList.remove("is-hidden");
    document.body.classList.add("no-scroll");

    formEl.elements.name.value = movieItem.querySelector(".movies-title").textContent;
    formEl.elements.genre.value = movieItem.querySelector(".movies-genre").textContent;
    formEl.elements.director.value = movieItem.querySelector(".movies-director").textContent;
    formEl.elements.year.value = movieItem.querySelector(".movies-year").textContent;

    const submitHandler = async (e) => {
      e.preventDefault();

      modalEditEl.classList.add("is-hidden");
      document.body.classList.remove("no-scroll");

      const updatedMovie = {
        title: formEl.elements.name.value,
        genre: formEl.elements.genre.value,
        director: formEl.elements.director.value,
        year: formEl.elements.year.value,
      };

      try {
        await updateMovieAPI(movieId, updatedMovie);

        movieItem.querySelector(".movies-title").textContent = updatedMovie.title;
        movieItem.querySelector(".movies-genre").textContent = updatedMovie.genre;
        movieItem.querySelector(".movies-director").textContent = updatedMovie.director;
        movieItem.querySelector(".movies-year").textContent = updatedMovie.year;
      } catch(error) {
        console.error(error);
      }

      modalEditEl.classList.add("is-hidden");
      document.body.classList.remove("no-scroll");
      formEl.removeEventListener("submit", submitHandler);
    };

    formEl.addEventListener("submit", submitHandler);

    editModalClose.addEventListener("click", () => {
      modalEditEl.classList.add("is-hidden");
      document.body.classList.remove("no-scroll");
      formEl.removeEventListener("submit", submitHandler);
    });
  }
};

