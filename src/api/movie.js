import axios from "axios";

const API_URL = "http://localhost:3002/items";
export async function getMovies() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("❌ Status:", error.response.status);
      console.error("❌ Error Data:", error.response.data);
    }
    return null;
  }
}

export async function updateRating(id, newRating) {
  console.log("Sending PATCH:", { id, newRating });
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
