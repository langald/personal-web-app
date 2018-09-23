<template>
  <div class="container">    
    <h1>SecretPage2</h1>
    
    <div>
      1. Scroll Drawing SVG, resourse -  
      <a href="https://www.w3schools.com/howto/howto_js_scrolldrawing.asp" target="_blank">
        www.w3schools.com
      </a>
      <ScrollDrawingSvg />
    </div>

    <div>
      2. Parallax.js, resourse -  
      <a href="https://github.com/wagerfield/parallax" target="_blank">
       https://github.com/wagerfield/parallax
      </a>
      <ParallaxSimple />
    </div>

    <div>
      3. Slide up / slide down CSS (max-height prop)
      <SlideDownCSS />
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

   
    
  </div>
</template>

<script>
import ScrollDrawingSvg from '@/components/featureExamples/ScrollDrawingSvg.vue'
import ParallaxSimple from '@/components/featureExamples/ParallaxSimple.vue'
import SlideDownCSS from '@/components/featureExamples/SlideDownCSS.vue'

export default {
  name: 'SecretPage2',
  components: { 
    ScrollDrawingSvg,
    ParallaxSimple,  
    SlideDownCSS  
  },
  mounted() {
      
  },
  data() {
    return {
      
    }
  },
  methods: {
   
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/settings.scss";

</style>
