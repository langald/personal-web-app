import Vue from 'vue'
import axios from 'axios'
import { MOVIE_API_URL, MOVIE_API_KEY } from '@/common/config'


const responseBody = res => res.body;
const ApiService = {
    del: url =>
        axios.del(`${MOVIE_API_URL}${url}`).then(responseBody),
    get: url =>
        axios.get(`${MOVIE_API_URL}${url}`).then(responseBody),
    put: (url, body) =>
        axios.put(`${MOVIE_API_URL}${url}`, body).then(responseBody),
    post: (url, body) =>
        axios.post(`${MOVIE_API_URL}${url}`, body).then(responseBody)

}

export default ApiService