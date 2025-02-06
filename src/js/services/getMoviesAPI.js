import { moviesList } from "./addMovieAPI.js";
import { removeDuplicates } from "../removeDuplicates.js";

import { deleteMovie } from "../deletingMovie.js";
import { editMovie } from "../editingMovie.js";
import { editPartMovie } from "../editingPartMovie.js";
import { createMarkupMovies } from "../layoutMovies.js";

export const getMoviesAPI = async () => {
  try {
    const response = await fetch("http://localhost:3000/movies");
    const data = await response.json();

    moviesList.push(...data);

    createMarkupMovies(data);
    editPartMovie();
    editMovie();
    deleteMovie();
    removeDuplicates();
  } catch (error) {
    console.error(error);
  }
};
