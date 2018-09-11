<template>
<div class="header" :class="{scrolledHeader }" ref="header">
    <div class="container">
                 
            <navbar                 
                :items="[
                    {to: 'home', title: 'Home'}, 
                    {to: 'about', title: 'About'},
                    {to: 'movielist', title: 'Movies'},
                    {to: 'favorited', title: 'Favorited'}
                ]"
            />                    
        
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Header',
  components: {
    'navbar': Navbar
  },
  data() {
    return {
      scrolledHeader: false
    }        
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },   
  methods: {
    handleScroll(){
      var scrolled = window.pageYOffset || document.documentElement.scrollTop;
      //console.log(scrolled)
      this.scrolledHeader = scrolled > this.$refs.header.getBoundingClientRect().bottom
    } 
  } 
}

</script>

<style lang="scss" scoped>
@import "@/assets/styles/settings.scss";

.header {  
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1030;    
    background-color: $black-color;
    color: $gray-color;
    opacity: 1;
    transition: all 2s;
}
.scrolledHeader {   
    background: rgba(44, 62, 80, 0.7);
}

</style>
