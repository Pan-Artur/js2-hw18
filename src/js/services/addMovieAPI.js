import { removeDuplicates } from "../removeDuplicates.js";

export let moviesList = [];

export const addMovieAPI = () => {
  const movieToAdd = {
    title: document.querySelector(".title").value,
    genre: document.querySelector(".genre").value,
    director: document.querySelector(".director").value,
    year: document.querySelector(".year").value,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(movieToAdd),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  return fetch("http://localhost:3000/movies", options)
    .then((data) => data.json())
    .then((data) => {
      moviesList.push(data);
      removeDuplicates();
    });
};

// export const addMovieAPI = async () => {
//   try {
//     const movieToAdd = {
//       title: document.querySelector(".title").value,
//       genre: document.querySelector(".genre").value,
//       director: document.querySelector(".director").value,
//       year: document.querySelector(".year").value,
//     };

//     const options = {
//       method: "POST",
//       body: JSON.stringify(movieToAdd),
//       headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//       },
//     };

//     return await fetch(`http://localhost:3000/movies/${movieToAdd.id}`).then((data) => {
//       if (!data.ok) {
//         return fetch("http://localhost:3000/movies", options)
//           .then((data) => data.json())
//           .then((data) => {
//             moviesList.push(data);
//             removeDuplicates();
//           });
//       }
//     });
//   } catch(error) {
//     console.log(error.message)
//   }
// };
