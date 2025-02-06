export const deleteMovieAPI = async (movieId) => {
  try {
    const response = await fetch(`http://localhost:3000/movies/${movieId}`, {
      method: "DELETE",
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
