const APIKEY = "5093886aa3e0b82715f209700fe0eba3";

const requests = {
  fetchTreanding: `trending/all/day?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginal: `movie/trending/all/day?api_key=${APIKEY}&language=en-US`,
  fetchTopRated: `movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchAction: `discover/movie?api_key=${APIKEY}&language=en-US&include_adult=false&with_genres=28`,
  fetchHorror: `discover/movie?api_key=${APIKEY}&language=en-US&include_adult=false&with_genres=27`,
  fetchRomance: `discover/movie?api_key=${APIKEY}&language=en-US&include_adult=false&with_genres=10749`,
  fetchDoumentaries: `discover/movie?api_key=${APIKEY}&language=en-US&include_adult=false&with_genres=99`,
};

export default requests;
