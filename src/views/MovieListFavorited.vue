<template>
	<div>
		<pointer />
		<app-loading v-show="loading" />
		<app-error v-if="error" :message="error" />		
		<div v-else class="container movieList-wrap">	
			<div v-if="favorited.length === 0 && !loading" class="margin-top-40 text-center">
				Список пуст!
			</div>
			
			<div v-else class="row">
				<div class="col-12 text-right margin-bottom-20">
					<app-input 
						value="" 
						placeholder="Search.." 
						@onUpdateValue="onsearchFieldInput($event)"
						/>
				</div>

				<movie-poster v-for="movie in favorited"
					:movie="movie"					
					:key="movie.id"
					@onPosterFavoriteClick="updateFavorited($event)"
				/>
			</div>			
		</div>
	</div>
</template>

<script>
	import Loading from '@/components/Loading'
	import Error from '@/components/Error'
	import MoviePoster from '@/components/MoviePoster'
	import Input from '@/components/Input'
	import Pointer from '@/components/Pointer.vue'

	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		name: 'MovieListFavorited',
		components: {			
			'app-loading': Loading,			
			'app-error': Error,			
			'movie-poster': MoviePoster,
			'app-input': Input,
			'pointer': Pointer			
		},
		data () {
			return {

			}
		},
		mounted(){			  
			if(!Object.keys(this.genres).length) {
				this.getGenres() 
			}        		
		},
		computed: {
			...mapGetters('movieList', [
				'favorited',
				'genres',
				'loading',
				'error'
			])
		},
		methods: {            
			...mapActions('movieList', [
				'getGenres',
				'updateFavorited'
			]),
			onsearchFieldInput(val) {				
				if (!val.trim()) return
				this.$router.push({ name: 'movielist', params: { search: encodeURIComponent(val)}})
			}           
		}
	}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/settings.scss";

.movieList-wrap {
  padding: 15px;
}
</style>