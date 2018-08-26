import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import MovieList from './views/MovieList.vue'
import MovieListFavorited from './views/MovieListFavorited.vue'
import Movie from './views/Movie.vue'
import SecretPage1 from './views/SecretPage1.vue'
import E404 from './views/E404.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/secretpage1',
      name: 'secretpage1',
      component: SecretPage1
    },
    {
      path: '/movielist/:search?',
      name: 'movielist',
      component: MovieList
    },
    {
      path: '/favorited',
      name: 'favorited',
      component: MovieListFavorited
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: Movie
    },
    {
      path: '*',
      component: E404
    }
  ],
  mode: 'history'
  /*
  //in case your project located not in the root
  base: process.env.NODE_ENV === 'production'
        ? '/personal-web-app/'
        : '/'
  */
})
