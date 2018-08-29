<template>
  <div id="app">
    <app-header />  
    <div class="main-content">
      <router-view/>
    </div>    
    <app-footer />
    <pointer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Pointer from '@/components/Pointer.vue'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'pointer': Pointer
  }
  /*
  methods: {
    handleScroll(e) {
      console.log(e)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
  */
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
}
.main-content {
  margin-top: 84px; 
  min-height: calc(100vh - 168px);
}
</style>
