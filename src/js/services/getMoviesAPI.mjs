import { createMarkupMovies } from "../layoutMovies.mjs";

export const getMoviesAPI = () => {
    return fetch("../../../movies.json").then((data) => data.json()).then((data) => createMarkupMovies(data));
}