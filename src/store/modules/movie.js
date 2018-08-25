import { MoviesService, GenresService, MovieService } from '@/common/api.service'

export default {
	namespaced: true,
	state: {
		movie: {},	
		recommendations: [],
		loadingMovie: true,
		errorMovie: '',        		
		loadingRecomendations: true,
		errorRecomendations: ''        		
	},
	getters: {
		movie (state) {			
			return state.movie
		},		
		recommendations (state) {			
			return state.recommendations.slice(0, 6)
		},		
		loadingMovie (state) {
			return state.loadingMovie
		},
		errorMovie (state) {
			return state.errorMovie
		},       		
		loadingRecomendations (state) {
			return state.loadingRecomendations
		},
		errorRecomendations (state) {
			return state.errorRecomendations
		}        		
	},
	mutations: {		
		setLoadingMovie (state, payload) {			
			state.loadingMovie = payload
			console.log('loading ' + state.loadingMovie)
		},
		setErrorMovie (state, payload) {
			state.errorMovie = payload
		},
		setLoadingRecomendations (state, payload) {			
			state.loadingRecomendations = payload			
		},
		setErrorRecomendations (state, payload) {
			state.errorRecomendations = payload
		},
		setMovie(state, payload) {
			state.movie = payload
		},		
		setRecommendations(state, payload) {
			state.recommendations = payload
		}		
	},
	actions: {
		getMovie(store, id){
			store.commit('setLoadingMovie', true)
			store.commit('setErrorMovie', '')

			return MovieService.get(id)
			.then(({ data }) => {
				console.log('One movie ' + JSON.stringify(data))
				store.commit('setMovie', data)				
			})			
			.catch(error => {			   
				store.commit('setErrorMovie', error.message)			   
			})
			.then(() => store.commit('setLoadingMovie', false))
		},
		getRecommendations(store, id){
			store.commit('setLoadingRecomendations', true)
			store.commit('setErrorRecomendations', '')

			return MovieService.recommendations(id)
			.then(({ data }) => {
				console.log('Recommendations ' + JSON.stringify(data))
				store.commit('setRecommendations', data.results)				
			})			
			.catch(error => {			   
				store.commit('setErrorRecomendations', error.message)			   
			})
			.then(() => store.commit('setLoadingRecomendations', false))
		}			
	}
}