<template>
	<div>
		<app-loading v-show="loading" />
		<app-error v-if="error" :message="error" />		
		<div v-else class="container movieList-wrap">	
			<div v-if="favorited.length === 0 && !loading" class="margin-top-40 text-center">
				Список пуст!
			</div>
			
			<div v-else class="row">
				<movie-poster v-for="movie in favorited"
					:movie="movie"					
					:key="movie.id"
					@onPosterFavoriteClick="updateFavorited($event)"
				/>
			</div>
			
			
			
			<!--
			<div class="pagination" v-show="!loading && movieList.length !== 0 && pageMode !== 'favorite'">
				<div class="pagination__nav" v-if="currentPage > 6">
					<i class="fas fa-angle-double-left" @click="onPageNumClick(1)"></i>
					<i class="fas fa-angle-left" @click="onPageNumClick(currentPage - 1)"></i>
				</div>
				<div class="pagination__page-num"
						v-for="page in totalPagesArr"
						:class="{'pagination__page-num--active': page === currentPage}"
						:key="page"
						@click="onPageNumClick(page)"
					>
					{{page}}
				</div>
				<div class="pagination__nav" v-if="totalPagesArr[9] < totalPages">
					<i class="fas fa-angle-right" @click="onPageNumClick(currentPage + 1)"></i>
					<i class="fas fa-angle-double-right" @click="onPageNumClick(totalPages)"></i>
				</div>
			</div>
			-->
		</div>
	</div>
</template>

<script>
	import Loading from '@/components/Loading'
	import Error from '@/components/Error'
	import MoviePoster from '@/components/MoviePoster'

	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		name: 'MovieListFavorited',
		components: {			
			'app-loading': Loading,			
			'app-error': Error,			
			'movie-poster': MoviePoster			
		},
		data () {
			return {

			}
		},
		created(){
			this.getGenres()
					

			//this.searchMovies()
			//this.getRecommendations()
			//this.getMovie()	
            		
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
				'searchMovies',				
				'getGenres',
				'updateFavorited'
			])
			
			            
		}
	}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/settings.scss";

.movieList-wrap {
  padding: 15px;
}

.pagination {
  width: 100%;
  text-align: center;
}
.pagination div {
  display: inline-block;
  cursor: pointer;
}
.pagination__nav i {
  padding: 10px;
  font-size: 18px;
  color: $gray-color;
}
.pagination__page-num {
  padding: 10px;
  margin: 5px;
  border: 1px solid $gray-color;
  text-align: center;
  max-width: 50px;
}
.pagination__page-num--active,
.pagination__page-num:hover {
  background-color: $gray-light-color;
}

</style>