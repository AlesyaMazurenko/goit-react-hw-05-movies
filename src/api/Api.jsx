import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '7650e92ad54b6a6b7b048469a6b245ea';

export const fetchPopularMovie = async() => {
    const {data} = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    return data;
}

export const getMovieById = async (id) => {
  const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);

  return response.data;
};

export const getCastOfMovie = async (id) => {
  const response= await axios.get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`);

  return response.data;;
};
export const getReviewsOfMovie = async (id) => {
  const response = await axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`);

  return response.data;;
};
export const getSearchingOfMovie = async (query) => {
  const response = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`);

  return response.data;;
};