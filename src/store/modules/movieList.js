import { MoviesService, GenresService, MovieService } from '@/common/api.service'

export default {
	namespaced: true,
	state: {
		movies: [],
		genres: [],
		loading: true,
		error: ''
        		
	},
	getters: {
		movies (state) {
			return state.movies
		},
		genres (state) {
			return state.genres
		},
		loading (state) {
			return state.loading
		},
		error (state) {
			return state.error
		}
        		
	},
	mutations: {
		setLoading (state, payload) {
			state.loading = payload
		},
		setError (state, payload) {
			state.error = payload
		},
		setMovies(state, payload) {
			state.movies = payload
		},
		setGenres(state, payload) {
			state.genres = payload
		}
		
	},
	actions: {		
		getGenres(store) {
			store.commit('setLoading', true)
			store.commit('setError', '')

			GenresService.all()
			.then(({ data }) => {
				console.log(JSON.stringify(data))
				store.commit('setGenres', data)
			})			
			.catch(error => {
			   //console.log(error.message)
			   store.commit('setError', error.message)
			})
			.then(() => store.commit('setLoading', false))
		},
		getMovies(){
			MoviesService.all()
			.then(({ data }) => {
				console.log('All ' + JSON.stringify(data))
			})			
			.catch(error => {
               console.log(error.message)
            })
		},
		searchMovies(){
			MoviesService.search()
			.then(({ data }) => {
				console.log('search' + JSON.stringify(data))
			})			
			.catch(error => {
               console.log(error.message)
            })
		},
		getRecommendations(){
			MoviesService.recommendations()
			.then(({ data }) => {
				console.log('Recommendations' + JSON.stringify(data))
			})			
			.catch(error => {
               console.log(error.message)
            })
		},
		getMovie(){
			MovieService.get()
			.then(({ data }) => {
				console.log(JSON.stringify(data))
			})			
			.catch(error => {
               console.log(error.message)
            })
		}
	
	}
}