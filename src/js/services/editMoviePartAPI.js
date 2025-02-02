export const updatePartMovieAPI = (data, movieToUpdatePart) => {
  const options = {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  return fetch(`http://localhost:3000/movies/${movieToUpdatePart}`, options)
    .then((data) => data.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

// export const changeMovieAPI = async () => {
//   try {
//     const movieToChange = {
//       title: "The Knight and Day",
//       director: "James Mangold",
//     };
  
//     const options = {
//       method: "PATCH",
//       body: JSON.stringify(movieToChange),
//       headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//       },
//     };
  
//     return await fetch(`http://localhost:3000/movies/5`, options)
//       .then((data) => data.json())
//       .then((data) => {
//         console.log(data);
//         removeDuplicates();
//         createMarkupMovies(moviesList);
//       });
//   } catch(error) {
//     console.log(error.message);
//   }
// };
