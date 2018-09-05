import { MovieService } from '@/common/api.service'

export default {
	namespaced: true,
	state: {
		movie: {},
		loadingMovie: true,
		errorMovie: ''        		
	},
	getters: {
		movie (state, getters, rootState) {			
			return {
				...state.movie,
				isFavorited: rootState.movieList.favorited.filter(fm => fm.id === state.movie.id).length > 0
			}
		},			
		loadingMovie (state) {
			return state.loadingMovie
		},
		errorMovie (state) {
			return state.errorMovie
		}   		
	},
	mutations: {		
		setLoadingMovie (state, payload) {			
			state.loadingMovie = payload
			console.log('(movie_module) loading ' + state.loadingMovie)
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
		}				
	},
	actions: {
		getMovie(store, id){
			store.commit('setLoadingMovie', true)
			store.commit('setErrorMovie', '')

			return MovieService.get(id)
			.then(({ data }) => {
				//console.log('One movie ' + JSON.stringify(data))
				store.commit('setMovie', data)				
			})			
			.catch(error => {			   
				store.commit('setErrorMovie', error.message)			   
			})
			.then(() => store.commit('setLoadingMovie', false))
		}		
	}
}