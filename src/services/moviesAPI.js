import axios from 'axios';

const API_KEY = '6bac6837435b7c3fc2ff3a65520e6013';
const API_URL = 'https://api.themoviedb.org/3/';

async function fetch(url = '', config = {}) {
  try {
    const response = await axios.get(url, config);
    return response;
  } catch (error) {
    return error;
  }
}

export function getTrending() {
  return fetch(`${API_URL}trending/movie/day?api_key=${API_KEY}`);
}

export function searhMovie(searchQuery) {
  return fetch(
    `${API_URL}search/movie?query=${searchQuery}&api_key=${API_KEY}&language=en-US`
  );
}

export function movieDetails(movieId) {
  return fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}`);
}

export function movieCast(movieId) {
  return fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`);
}

export function movieReviews(movieId) {
  return fetch(`${API_URL}movie/${movieId}/reviews?api_key=${API_KEY}`);
}
