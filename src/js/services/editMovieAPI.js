export const updateMovieAPI = (data, movieToUpdate) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  return fetch(`http://localhost:3000/movies/${movieToUpdate}`, options)
    .then((data) => data.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

// export const updateMovieAPI = async () => {
//   try {
//     const movieToUpdate = {
//       id: 7,
//       title: "Back to the Future",
//       genre: "Fantasy",
//       director: "Robert Zemeckis",
//       year: 1985,
//     };
  
//     const options = {
//       method: "PUT",
//       body: JSON.stringify(movieToUpdate),
//       headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//       },
//     };
  
//     return await fetch("http://localhost:3000/movies/1", options)
//       .then((data) => data.json())
//       .then((updatedMovie) => {
//         const index = moviesList.findIndex((movie) => movie.id === updatedMovie.id);
  
//         if (index !== -1) {
//           moviesList[index] = { ...moviesList[index], ...updatedMovie }
//         } else {
//           moviesList.push(updatedMovie);
//         }
  
//         removeDuplicates();
//         createMarkupMovies(moviesList);
//       });
//   } catch(error) {
//     console.log(error.message)
//   }
// };
