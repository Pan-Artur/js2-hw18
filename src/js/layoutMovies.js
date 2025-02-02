export const createMarkupMovies = (moviesData) => {
    const listEl = document.querySelector(".movies-list");

    listEl.innerHTML = "";

    const markup = moviesData.map(({ id, title, genre, director, year }) => `<li id="${id}" class="movies-item"><h3 class="movies-title">${title}</h3><p class="movies-genre">${genre}</p><p class="movies-director">${director}</p><p class="movies-year">${year}</p><div class="movie-managment"><button type="button" class="button movie-button edit-button">Edit</button><button type="button" class="button movie-button edit-everything-button">Edit all</button><button type="button" class="button movie-button delete-button">Delete</button></div></li>`).join("");

    listEl.innerHTML = markup;
}
