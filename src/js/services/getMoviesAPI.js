import { createMarkupMovies } from "../layoutMovies";

export const getMoviesAPI = () => {
    return fetch("http://localhost:3000/movies").then((data) => data.json()).then((data) => createMarkupMovies(data));
};