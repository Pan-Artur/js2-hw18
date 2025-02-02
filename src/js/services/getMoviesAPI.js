import { moviesList } from "./addMovieAPI.js";
import { removeDuplicates } from "../removeDuplicates.js";

import { deleteMovie } from "../deletingMovie.js";
import { editMovie } from "../editingMovie.js";
import { editPartMovie } from "../editingPartMovie.js";
import { createMarkupMovies } from "../layoutMovies.js";

export const getMoviesAPI = () => {
 return fetch("http://localhost:3000/movies")
   .then((data) => data.json())
   .then((data) => {
     moviesList.length = 0;
     moviesList.push(...data);
     createMarkupMovies(data);
     editPartMovie();
     editMovie();
     deleteMovie();
     removeDuplicates();
   });
};

// export const getMoviesAPI = async () => {
//   try {
//     return await fetch("http://localhost:3000/movies")
//       .then((data) => data.json())
//       .then((data) => {
//         moviesList.length = 0;
//         moviesList.push(...data);
//         removeDuplicates();
//       });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
