import { createMarkupMovies } from "../layoutMovies";

export const getMoviesAPI = () => {
    return fetch("https://js2-hw18.onrender.com/movies").then((data) => data.json()).then((data) => createMarkupMovies(data));
}