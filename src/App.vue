<template>
  <div id="app">
    <preloader v-show="preloader" />
    <app-header />
    <div class="main-content">
      <router-view/>
    </div>
    <app-footer />
  </div>
</template>

<script>
import "@/assets/styles/libs/css/bootstrap-reboot.min.css";
import "@/assets/styles/libs/css/bootstrap-grid.min.css";
import "@/assets/styles/libs/css/fontawesome-all.min.css";
import "@/assets/styles/libs/css/animate.min.css";

import 'aos/dist/aos.css'
import AOS from 'aos'

import Preloader from '@/components/Preloader.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Cookie from 'js-cookie'
import {axiosBack} from '@/common/api.service'

export default {
  name: 'App',
  components: {
    'preloader': Preloader,
    'app-header': Header,
    'app-footer': Footer
  },
  metaInfo() { 
    return {
      title: 'Larissa Angald Main page',
      titleTemplate: '%s | My Awesome Webapp',
      meta: [
        {
          'name': 'keywords',
          'content': 'Larissa Angald, Лариса Ангальд, Лариса Ангальд main page',
          'vmid': 'keywords'
        },
        {
          'property': 'og:title',
          'content': 'Larissa Angald main page',
          'vmid': 'og:title'
        }
      ]
    }
  },
  data() {
    return {
      preloader: true
    }
  },
  mounted () {
    AOS.init()
    setTimeout(() => {
      this.preloader = false
    }, 500);

    this.checkCookie()
  },
  methods: {
    checkCookie() {
     
      const token = Cookie.get('token')
      const tokenType = Cookie.get('tokenType')
      if (token && tokenType) {
        axiosBack.defaults.headers.common['Authorization'] = tokenType  + ' ' + token;
      }
    
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/settings.scss";
@import "@/assets/styles/main.scss";

#app {
  font-family: $font-stack;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black-color;
  font-size: $main-font-size;
  overflow: hidden; /*To avoid blank space to the right outside of viewport after adding AOS on mobile format*/
}
.main-content {
  margin-top: 84px;
  min-height: calc(100vh - 168px);
}
</style>
