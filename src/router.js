import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import About from "./views/About.vue";
import MovieList from "./views/MovieList.vue";
import MovieListFavorited from "./views/MovieListFavorited.vue";
import Movie from "./views/Movie.vue";
import SecretPage1 from "./views/SecretPage1.vue";
import SecretPage2 from "./views/SecretPage2.vue";
import SecretPage3 from "./views/SecretPage3.vue";
import E404 from "./views/E404.vue";
import LocaleTemplate from "./views/LocaleTemplate.vue";

import { defaultLocale } from "./common/config";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "defaultUrl",
      redirect: `/${defaultLocale}`,
      //redirect: `/de`
    },
    {
      path: "/:locale",
      //name: 'localeUrl',
      /** Named Route 'localeUrl' has a default child route.
       * When navigating to this named route (:to="{name: 'localeUrl'"),
       * the default child route will not be rendered.
       * Remove the name from this route and use the name of the default child route for named links instead.
       */

      component: LocaleTemplate,
      children: [
        {
          path: "",
          name: "home",
          component: Home,
        },
        {
          path: "about",
          name: "about",
          component: About,
        },
        {
          path: "login",
          name: "login",
          component: Login,
        },
        {
          path: "movielist/:search?",
          name: "movielist",
          component: MovieList,
        },
        {
          path: "favorited",
          name: "favorited",
          component: MovieListFavorited,
        },
        {
          path: "movie/:id",
          name: "movie",
          component: Movie,
        },
        {
          path: "secretpage1",
          name: "secretpage1",
          component: SecretPage1,
        },
        {
          path: "secretpage2",
          name: "secretpage2",
          component: SecretPage2,
        },
        {
          path: "secretpage3",
          name: "secretpage3",
          component: SecretPage3,
        },
        {
          path: "*",
          component: E404,
        },
      ],
    },
  ],
  mode: "history",
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        // , offset: { x: 0, y: 10 }
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
  /*
  //in case your project located not in the root
  base: process.env.NODE_ENV === 'production'
        ? '/personal-web-app/'
        : '/'
  */
});
