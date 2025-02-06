export const updatePartMovieAPI = async (data, movieToUpdatePart) => {
  try {
    const options = {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };

    const response = await fetch(`http://localhost:3000/movies/${movieToUpdatePart}`, options);

    return await response.json();
  } catch(error) {
    console.error(error);
  }
};

