import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
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
      path: '*',
      component: E404
    }
  ],
  mode: 'history',
  base: process.env.NODE_ENV === 'production'
        ? '/personal-web-app/'
        : '/'
})
