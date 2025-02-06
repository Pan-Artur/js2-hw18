export const updateMovieAPI = async (data, movieToUpdate) => {
  try {
    const options = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
  
    const response = await fetch(`http://localhost:3000/movies/${movieToUpdate}`, options);

    return await response.json();
  } catch(error) {
    console.error(error);
  }
};

