export const deleteMovieAPI = (movieId) => {
  return fetch(`http://localhost:3000/movies/${movieId}`, {
    method: "DELETE",
  })
    .then((data) => data)
    .catch((error) => console.log(error));
};

// export const deleteMovieAPI = async (movieId) => {
//   try {
//     return await fetch(`http://localhost:3000/movies/${movieId}`, {
//       method: "DELETE",
//     }).then((data) => data);
//   } catch(error) {
//     console.log(error.message);
//   }
// };
