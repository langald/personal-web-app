import { MoviesService, GenresService } from '@/common/api.service'

export default {
	namespaced: true,
	state: {
		movies: [],
		favorited: JSON.parse(window.localStorage.getItem('favoritedMovies')) || [],
		genres: [],
		currentPage: 1,
		totalPages: 1,
		loading: true,
		error: ''		        		
	},
	getters: {
		movies (state, getters) {			
			if(state.movies.length) {
				return state.movies.map( item => {
					let genres = item.genre_ids.map(itemGenre => {
						return {
							id: itemGenre,
							name: getters.genres[itemGenre]
						}
					})
					return  {
						...item,
						genres,
						isFavorited: state.favorited.filter(fm => fm.id === item.id).length > 0 
					}
				})
			}	
				
			return state.movies
		},
		genres (state) {	
			let genresObj = {}
			if(state.genres.length) {				
				state.genres.forEach(item => {
					genresObj[item.id] = item.name
				})				
			}	
			return genresObj			
		},
		favorited (state) {
			return state.favorited
		},
		currentPage(state) {
			return state.currentPage
		},
		totalPages(state) {
			return state.totalPages
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
			console.log('(movieList_module) loading ' + state.loading)
		},
		setError (state, payload) {
			state.error = payload
		},
		setMovies(state, payload) {
			state.movies = payload
		},
		setGenres(state, payload) {
			state.genres = payload
		},
		setFavorited(state, payload) {
			state.favorited = payload
		},
		setCurrentPage(state, payload) {
			state.currentPage = payload
		},		
		setTotalPages(state, payload) {
			state.totalPages = payload
		}		
	},
	actions: {		
		getGenres(store) {
			store.commit('setLoading', true)
			store.commit('setError', '')

			//use return to organize the chain
			return GenresService.all()
			.then(({ data }) => {				
				//console.log(JSON.stringify(data))
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

			return MoviesService.all(payload.page)
			.then(({ data }) => {
				//console.log('All ' + JSON.stringify(data))
				store.commit('setMovies', data.results)				
				store.commit('setCurrentPage', payload.page)				
				store.commit('setTotalPages', data.total_pages)				
			})			
			.catch(error => {			   
				store.commit('setError', error.message)			   
			})
			.then(() => {
				store.commit('setLoading', false)
				window.scrollTo(0, 0);
			})
		},
		getRecommendations(store, id){
			store.commit('setLoading', true)
			store.commit('setError', '')

			return MoviesService.recommendations(id)
			.then(({ data }) => {
				//console.log('Recommendations ' + JSON.stringify(data))
				store.commit('setMovies', data.results)				
			})			
			.catch(error => {			   
				store.commit('setError', error.message)			   
			})
			.then(() => store.commit('setLoading', false))
		},
		searchMovies(store, payload){			
			store.commit('setLoading', true)
			store.commit('setError', '')

			return MoviesService.search(payload)
			.then(({ data }) => {
				//console.log('search ' + JSON.stringify(data))
				store.commit('setMovies', data.results)	
				store.commit('setCurrentPage', payload.page)				
				store.commit('setTotalPages', data.total_pages)				
			})			
			.catch(error => {			   
				store.commit('setError', error.message)			   
			})
			.then(() => {
				store.commit('setLoading', false)
				window.scrollTo(0, 0);
			})
		},
		updateFavorited(store, movie){
			let favoritedArr = [...store.state.favorited]
			if (favoritedArr.filter( item => item.id === movie.id).length > 0) {
				favoritedArr = favoritedArr.filter( item => item.id !== movie.id)
			} else {
				movie.isFavorited = true
				favoritedArr.push(movie)
			}
			//console.log(favoritedArr)			
			window.localStorage.setItem('favoritedMovies', JSON.stringify(favoritedArr))
			store.commit('setFavorited', favoritedArr)
		}	
	}
}