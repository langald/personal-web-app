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
			if(state.genres.length) {
				let genresObj = {}
				state.genres.forEach(item => {
					genresObj[item.id] = item.name
				})
				return genresObj
			}	
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
			console.log('loading ' + state.loading)
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

			//use return to organize the chain
			return GenresService.all()
			.then(({ data }) => {				
				console.log(JSON.stringify(data))
				store.commit('setGenres', data.genres)
			})			
			.catch(error => {
				//console.log(error.message)
				store.commit('setError', error.message)				  
			})
			.then(() => store.commit('setLoading', false))			
		},
		getMovies(store, payload){
			store.commit('setLoading', true)
			store.commit('setError', '')

			return MoviesService.all()
			.then(({ data }) => {
				console.log('All ' + JSON.stringify(data))
				store.commit('setMovies', data.results)				
			})			
			.catch(error => {			   
			   store.commit('setError', error.message)			   
			})
			.then(() => store.commit('setLoading', false))
		},
		searchMovies(){
			return MoviesService.search()
			.then(({ data }) => {
				console.log('search' + JSON.stringify(data))
			})			
			.catch(error => {
               console.log(error.message)
            })
		},
		getRecommendations(){
			return MoviesService.recommendations()
			.then(({ data }) => {
				console.log('Recommendations' + JSON.stringify(data))
			})			
			.catch(error => {
               console.log(error.message)
            })
		},
		getMovie(){
			return MovieService.get()
			.then(({ data }) => {
				console.log(JSON.stringify(data))
			})			
			.catch(error => {
               console.log(error.message)
            })
		}
	
	}
}