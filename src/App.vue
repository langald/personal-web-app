<template>
  <div id="app">
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

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer    
  },  
  mounted () {
    AOS.init()
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
  overflow-x: hidden; /*To avoid blank space to the right outside of viewport after adding AOS on mobile format*/
}
.main-content {
  margin-top: 84px; 
  min-height: calc(100vh - 168px);
}
</style>
