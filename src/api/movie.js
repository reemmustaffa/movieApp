import axios from "axios";

const KEY = "f84fc31d";

export async function getMovies() {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${KEY}&s=batman`
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("❌ Status:", error.response.status);
      console.error("❌ Error Data:", error.response.data);
    }
    return null;
  }
}
