<template>
  <div>
    <pointer />
    <app-loading v-show="loading" />
    <app-error v-if="error" :message="error" />
    <div v-else class="container movie-wrap" >
      <div class="row">
        <div class="col-12 text-right margin-bottom-20">
          <app-input
            value=""
            placeholder="Search.."
            @onUpdateValue="onsearchFieldInput($event)"
            />
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-center">
        <h1>{{movie.title}}</h1>
        </div>
      </div>

      <div class="row margin-top-40">
        <div class="col-12 col-sm-6 movie-image">
          <div class="image-container">
            <img :src="'https://image.tmdb.org/t/p/w780' + movie.backdrop_path"  onerror="this.onerror=null;this.src='https://placeholdit.co//i/780x439?bg=000000'" />
          </div>
        </div>
        <div class="col-12 col-sm-6 movie-info">
          <div class="row">
            <div class="col-5 movie-info__item-name">{{ $t('movie_page.title') }}:</div>
            <div class="col-7">{{movie.title}}</div>
          </div>

          <div class="row">
            <div class="col-5 movie-info__item-name">{{ $t('movie_page.genre') }}:</div>
            <div class="col-7">
            <span v-for="(genre, index) in movie.genres" :key="genre.id">
              <span v-if="index">, </span>
              {{genre.name}}
            </span>
            </div>
          </div>

          <div class="row">
            <div class="col-5 movie-info__item-name">{{ $t('movie_page.country') }}:</div>
            <div class="col-7">
            <span v-for="(country, index) in movie.production_countries" :key="index">
              <span v-if="index">, </span>
              {{country.name}}
            </span>
            </div>
          </div>

          <div class="row">
            <div class="col-5 movie-info__item-name">{{ $t('movie_page.release_date') }}:</div>
            <div class="col-7">{{movie.release_date}}</div>
          </div>

          <div class="row">
            <div class="col-5 movie-info__item-name">{{ $t('movie_page.rating') }}:</div>
            <div class="col-7">{{movie.vote_average}}</div>
          </div>

          <div class="row">
            <div class="col-5 movie-info__item-name">{{ $t('movie_page.favorited') }}:</div>
            <div class="col-7">
            <div class="movie-info__favorite" @click="updateFavorited(movie)">
              <i class="far fa-bookmark" v-if="!movie.isFavorited"></i>
              <i class="fas fa-bookmark" v-else></i>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row margin-top-20">
        <div class="col-12 movie-overview">
          {{movie.overview}}
        </div>
      </div>

      <div class="row margin-top-20 movie-recommendations" v-if="recommendations.length">
        <div class="col-12">
          <h3>{{ $t('movie_page.see_also') }}</h3>
        </div>

        <movie-poster v-for="recomendedMovie in recommendationsList"
          :movie="recomendedMovie"
          :key="recomendedMovie.id"
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
  name: 'Movie',
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
  beforeRouteUpdate (to, from, next) {
    this.getMovie(to.params.id)
    this.getRecommendations(to.params.id)
    return next()
  },
  mounted(){
    if(Object.keys(this.genres).length) {
      this.getMovie(this.$route.params.id)
      this.getRecommendations(this.$route.params.id)
    } else {
      this.getGenres()
        .then(() => {
          this.getMovie(this.$route.params.id)
          this.getRecommendations(this.$route.params.id)
        })
    }
  },
  computed: {
    ...mapGetters('movie', [
      'movie',
      'recommendations',
      'loadingMovie',
      'errorMovie',

    ]),
    ...mapGetters('movieList', {
      genres: 'genres',
      recommendations: 'movies',
      loadingRecomendations: 'loading',
      errorRecomendations: 'error'
    }),
    recommendationsList() {
      return this.recommendations.slice(0,6)
    },
    loading() {
      return this.loadingMovie || this.loadingRecomendations
    },
    error() {
      if(this.errorMovie || this.errorRecomendations) {
        return this.errorMovie + ' ' + this.errorRecomendations
      }
      return ''
    }
  },
  methods: {
    ...mapActions('movieList', [
      'getGenres',
      'updateFavorited',
      'getRecommendations',
      'searchMovies',
    ]),
    ...mapActions('movie', [
      'getMovie'
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

.movie-wrap {
  padding-top: 30px;
  padding-bottom: 30px;
}

.movie-info {
  color: $gray-color;
  font-size: 16px;
  line-height: 2.2;
  padding-top: 30px;
}
.movie-info__item-name {
  font-weight: bold;
}
.movie-overview {
   color: $gray-dark-color;
   text-indent: 20px;
   font-size: 16px;
}

.movie-info__favorite{
  font-size: 18px;
}
.movie-info__favorite .far:hover {
  color: $gold-color;
}
.movie-info__favorite .fas {
  color: $gold-color;
}
</style>