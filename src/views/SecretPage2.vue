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
    <div>
      4. GreenSock Animations Platform (GSAP)
      <GSAPExample />
    </div>

    <br>
    <div>
      5. ScrollMagic
      <ScrollMagicExample />
    </div>

    <div id="jqueryTest" ref="jqueryTestRef" @click="addSomeText">
      6. jquery test
      <br>
      Click to add some text
      
    </div>

    <br>
    <div>
      6. Download file test
      <br>
      <button @click="downloadFile('certificate-4231.pdf')" >Download file 1</button> <br>
      <button @click="downloadFile('certificate-4232.pdf')" >Download file 2</button>
      
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
import GSAPExample from '@/components/featureExamples/GSAPExample.vue'
import ScrollMagicExample from '@/components/featureExamples/ScrollMagicExample.vue'

import $ from 'jquery'
import axios from 'axios'

export default {
  name: 'SecretPage2',
  components: { 
    ScrollDrawingSvg,
    ParallaxSimple,  
    SlideDownCSS,  
    GSAPExample,  
    ScrollMagicExample  
  },
  mounted() {
      
  },
  data() {
    return {
      
    }
  },
  methods: {
    addSomeText() {
      $('#jqueryTest').append('<br> some new text')
      // можно и так
      //$(this.$refs.jqueryTestRef).append('<br> some new text')
    },
    downloadFile(filename) {
      axios({
        url: `/files/${filename}`,
        method: "GET",
        responseType: "blob", // important
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        setTimeout(function() {
          link.remove();
          window.URL.revokeObjectURL(url);
        }, 1000);
      });
    },
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/settings.scss";

</style>
