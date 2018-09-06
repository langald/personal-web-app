<template>
	<div>
		<pointer />
		<app-loading v-show="loading" />
		<app-error v-if="error" :message="error" />		
		<div v-else class="container movieList-wrap">	
			<div class="row">
				<div class="col-12 text-right margin-bottom-20">
					<app-input 
						:value="querySearchValue" 
						placeholder="Search.." 
						ref="searchField"
						@onUpdateValue="onsearchFieldInput($event)"
						/>
				</div>
			</div>

			<div v-if="movies.length === 0 && !loading" class="margin-top-40 text-center">
				Список пуст!
			</div>
			
			<div v-else class="row">				
				<movie-poster v-for="movie in movies"
					:movie="movie"					
					:key="movie.id"
					@onPosterFavoriteClick="updateFavorited($event)"
				/>
			</div>

			<app-pagination 
				:currentPage="currentPage"
				:totalPages="totalPages"				
				@onChangePage="updatePage($event)"
				/>			
		</div>
	</div>
</template>

<script>
import Loading from '@/components/Loading'
import Error from '@/components/Error'
import MoviePoster from '@/components/MoviePoster'
import Input from '@/components/Input'
import Pagination from '@/components/Pagination'
import Pointer from '@/components/Pointer.vue'

import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default {
  name: 'MovieList',
  components: {			
    'app-loading': Loading,			
    'app-error': Error,			
    'movie-poster': MoviePoster,			
    'app-input': Input,			
    'app-pagination': Pagination,
    'pointer': Pointer			
  },
  data () {
    return {
      inputSearchValue: ''
    }
  },		
  mounted(){
    if(this.$route.params.search) {					
      this.$refs.searchField.$el.children[0].focus()				
      this.searchMovies({
        query: decodeURIComponent(this.$route.params.search),
        page: 1
      })				
    } else {
      //если не пустой объект жанров, то грузим фильмы
      //иначе сначала грузим жанры
      if(Object.keys(this.genres).length) {
        this.getMovies({page: this.currentPage})
      } else {
        this.getGenres()
          .then(() => this.getMovies({page: this.currentPage}))
      }				
    }
  },
  computed: {
    ...mapGetters('movieList', [
      'movies',
      'genres',
      'currentPage',
      'totalPages',				
      'loading',
      'error'
    ]),
    querySearchValue() {
      return this.$route.params.search ? decodeURIComponent(this.$route.params.search) : ''
    }			
  },
  methods: {            
    ...mapActions('movieList', [
      'getMovies',
      'searchMovies',				
      'getGenres',
      'updateFavorited'
    ]),
    onsearchFieldInput(val) {
      if (!val.trim()) {
        this.getMovies({page: 1})
      } else {
        this.searchMovies({
          query: val,
          page: 1
        })
      }
      this.inputSearchValue = val.trim()				
    },
    updatePage(page) {
      if(this.inputSearchValue){					
        this.searchMovies({
          query: this.inputSearchValue,
          page
        })
      } else {
        this.getMovies({page})
      }
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