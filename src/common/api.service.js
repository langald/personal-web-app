import Vue from 'vue'
import axios from 'axios'
import { MOVIE_API_URL, MOVIE_API_KEY } from '@/common/config'


const errorHandler = (error, url) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        //console.log(error.response.data);
        //console.log(error.response.status);
        //console.log(error.response.headers);
        throw new Error(`${url} - ${error.response.status} ${error.response.statusText} ${error.response.data.status_code} ${error.response.data.status_message}`)        
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        //console.log(error.request);
        throw new Error(`${url} - ${error.message}`) 
    } else {
        // Something happened in setting up the request that triggered an Error        
        throw new Error(`${url} - ${error.message}`) 
    }    
}
const ApiService = {    
    get: (url, search = '') =>
        axios.get(`${MOVIE_API_URL}${url}?api_key=${MOVIE_API_KEY}&language=ru${search}`)           
        .catch(error =>  errorHandler(error, url)),     
    post: (url, search = '', body) =>
        axios.post(`${MOVIE_API_URL}${url}?api_key=${MOVIE_API_KEY}&language=ru${search}`, body)
        .catch(error =>  errorHandler(error, url)),
    put: (url, search = '', body) =>
        axios.put(`${MOVIE_API_URL}${url}?api_key=${MOVIE_API_KEY}&language=ru${search}`, body)
        .catch(error =>  errorHandler(error, url)), 
    del: (url, search = '') =>
        axios.del(`${MOVIE_API_URL}${url}?api_key=${MOVIE_API_KEY}&language=ru${search}`)
        .catch(error =>  errorHandler(error, url)), 
}

export default ApiService

export const GenresService = {
    all: () =>
        ApiService.get('/genre/movie/list')
}

export const MoviesService = {
    all: () =>
        ApiService.get('/movie/popular', '&page=1'),
    search: (query) =>
        ApiService.get('/search/movie', `&page=1&query=${query}`),
    recommendations: (id) => 
        ApiService.get(`/movie/${id}/recommendations`, `&page=1`)
   
}
export const MovieService = {
    get: (id) =>
        ApiService.get(`/movie/${id}`)
    
}

