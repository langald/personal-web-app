<template>
  <div id="triggerContainer">
    <div id="targetBlock">
      Hi there !
    </div>
  </div>
</template>

<script>
//import { TweenMax,TimelineMax  } from "gsap/TweenMax"
//no need jquery
//import $ from 'jquery'
import ScrollMagic from 'scrollmagic'
//you should:  npm install imports-loader
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

export default {
  name: 'ScrollMagicExample',
  components: { 
  
  },
  mounted() {

    var controller = new ScrollMagic.Controller();
    var blockTween = new TweenMax.to('#targetBlock', 1.5, {
      backgroundColor: 'red',
      scale: 0.8,
    });
    var containerScene = new ScrollMagic.Scene({
      triggerElement: '#triggerContainer'
    })
      .setTween(blockTween)
      .addIndicators()
      .addTo(controller);
      
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

#triggerContainer {
  margin: 55vh 0;
  padding: 50px;
  outline: 1px dashed orange;
}

#targetBlock {
  padding: 10px;
  border: 1px solid black;
  font-family: Helvetica;
}

</style>
