import { removeDuplicates } from "../removeDuplicates.js";

export let moviesList = [];

export const addMovieAPI = async () => {
  try {
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

    const response = await fetch("http://localhost:3000/movies", options);
    const data = await response.json();

    moviesList.push(data);
    removeDuplicates();

    return data;
  } catch(error) {
    console.error(error);
  }
};
