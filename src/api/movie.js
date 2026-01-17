import axios from "axios";

const API_URL = import.meta.env.PROD
  ? "/api/items"
  : "http://localhost:3002/items";

//READ
export async function getMovies() {
  try {
    const response = await axios.get(API_URL);
    console.log("Movies fetched:", response.data);
    return response.data || [];
  } catch (error) {
    if (error.response) {
      console.error("❌ Status:", error.response.status);
      console.error("❌ Error Data:", error.response.data);
    }
    return [];
  }
}

export async function getMovieById(id) {
  try {
    const respons = await axios.get(`${API_URL}/${id}`);
    return respons.data;
  } catch (error) {
    if (error.response) {
      console.error("❌ Status:", error.response.status);
      console.error("❌ Error Data:", error.response.data);
    }
    return null;
  }
}

//CREATE
export async function createMovie(newMovie) {
  try {
    const response = await axios.post(API_URL, newMovie);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("❌ Status:", error.response.status);
      console.error("❌ Error Data:", error.response.data);
    }
    return null;
  }
}

//UPDATE
export async function updateMovie({ id, updatedMovie }) {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedMovie);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("❌ Status:", error.response.status);
      console.error("❌ Error Data:", error.response.data);
    }
    return null;
  }
}

//DELETE
export async function deleteMovie(id) {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("❌ Status:", error.response.status);
      console.error("❌ Error Data:", error.response.data);
    }
    return null;
  }
}

//Rating
export async function updateRating(id, newRating) {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, {
      rating: newRating,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("❌ Status:", error.response.status);
      console.error("❌ Error Data:", error.response.data);
    }
    return null;
  }
}
