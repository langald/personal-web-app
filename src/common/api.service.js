import axios from 'axios'
import { MOVIE_API_URL, MOVIE_API_KEY } from '@/common/config'
import { i18n } from '@/common/i18n-setup.js'

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
  get: (url) =>
    axios.get(url)           
      .catch(error =>  errorHandler(error, url)),     
  post: (url, body) =>
    axios.post(url, body)
      .catch(error =>  errorHandler(error, url)),
  put: (url, body) =>
    axios.put(url, body)
      .catch(error =>  errorHandler(error, url)), 
  del: (url) =>
    axios.del(url)
      .catch(error =>  errorHandler(error, url)), 
}

export default ApiService

function constructMovieFullUrl(url, search = '') {
  return `${MOVIE_API_URL}${url}?api_key=${MOVIE_API_KEY}&language=${i18n.locale}${search}`
}

export const GenresService = {
  all: () =>
    ApiService.get(constructMovieFullUrl('/genre/movie/list'))
}

export const MoviesService = {
  all: (page) =>
    ApiService.get(constructMovieFullUrl(`/movie/popular`, `&page=${page}`)),
  search: ({query, page}) =>
    ApiService.get(constructMovieFullUrl('/search/movie', `&page=${page}&query=${encodeURIComponent(query)}`)),
  recommendations: (id) => 
    ApiService.get(constructMovieFullUrl(`/movie/${id}/recommendations`, `&page=1`))
   
}
export const MovieService = {
  get: (id) =>
    ApiService.get(constructMovieFullUrl(`/movie/${id}`))    
}


export const i18nAPIService = {
  get: (lang) =>
    ApiService.get(`/locales/${lang}.json`)    
}
