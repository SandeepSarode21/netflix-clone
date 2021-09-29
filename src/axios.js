import axios from "axios"

/** base url to make the request to the movie data base */
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/"
});

export default instance;