import { createMarkupMovies } from "./layoutMovies";
import { moviesList } from "./services/addMovieAPI";

export const removeDuplicates = () => {
  const uniqueMovies = [];

  for (const movie of moviesList) {
    if (!uniqueMovies.some((uniqueMovie) => Number(uniqueMovie.id) === Number(movie.id))) {
      uniqueMovies.push(movie);
    }
  }

  moviesList.length = 0;
  moviesList.push(...uniqueMovies);
  createMarkupMovies(moviesList);
};
