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
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/settings.scss";
#app {
  font-family: $font-stack;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black-color;
  font-size: $main-font-size;
}
.main-content {
  margin-top: 80px;
  min-height: calc(100vh - 160px);
}
</style>
