export const createMarkupMovies = (moviesData) => {
    const listEl = document.querySelector(".movies-list");

    const markup = moviesData.map(({ title, genre, director, year }) => `<li class="movies-item"><h3 class="movies-title">${title}</h3><p class="movies-genre">${genre}</p><p class="movies-director">${director}</p><p class="movies-year">${year}</p></li>`).join("");

    listEl.insertAdjacentHTML("beforeend", markup);
}