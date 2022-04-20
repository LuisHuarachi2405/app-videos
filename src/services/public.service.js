import axios from "axios";

const apiKey = process.env.API_KEY
const apiUrl = process.env.API_URL

export const getMovies = async (movieId) => {
  return await axios.get(`https://api.themoviedb.org/3/movie/2/lists?api_key=317ac6324e75d960349be28e8daf8463&language=us-Us&page=1`)
}