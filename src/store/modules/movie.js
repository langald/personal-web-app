import { MoviesService, GenresService, MovieService } from '@/common/api.service'

export default {
	namespaced: true,
	state: {
		movie: {},	
		loading: true,
		error: ''        		
	},
	getters: {
		movie (state) {			
			return state.movie
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
		setMovie(state, payload) {
			state.movie = payload
		}		
	},
	actions: {
		getMovie(store, id){
			store.commit('setLoading', true)
			store.commit('setError', '')

			return MovieService.get(id)
			.then(({ data }) => {
				console.log('One movie ' + JSON.stringify(data))
				store.commit('setMovie', data)				
			})			
			.catch(error => {			   
			   store.commit('setError', error.message)			   
			})
			.then(() => store.commit('setLoading', false))
		}	
	}
}