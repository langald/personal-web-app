<template>
  <div id="parallax-wrap" class="parallax-wrap">
    <div id="scene" class="scene">
      <div data-depth="1.00"><img src="@/assets/featureExamples/layer1.png"></div>
      <div data-depth="0.80"><img src="@/assets/featureExamples/layer2.png"></div>
      <div data-depth="0.60"><img src="@/assets/featureExamples/layer3.png"></div>
      <div data-depth="0.40"><img src="@/assets/featureExamples/layer4.png"></div>
      <div data-depth="0.20"><img src="@/assets/featureExamples/layer5.png"></div>
      <div data-depth="0.00"><img src="@/assets/featureExamples/layer6.png"></div>
    </div>
  </div>
</template>

<script>
import Parallax from 'parallax-js'

export default {
  name: 'ParallaxSimple',
  mounted() {
    var scene = document.getElementById('scene');
	  var parallax = new Parallax(scene);
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/settings.scss";

.parallax-wrap {
    margin: 0 auto;
    max-width: 600px;
    padding: 10px;
    position: relative;
}
.parallax-wrap img {
  display: block;
  width: 100%;
}
.scene > *:nth-child(1) {
  opacity: 0.15; 
}
.scene > *:nth-child(2) {
  opacity: 0.3; 
}
.scene > *:nth-child(3) {
  opacity: 0.45; 
}
.scene > *:nth-child(4) {
  opacity: 0.6; 
}
.scene > *:nth-child(5) {
  opacity: 0.75; 
}
.scene > *:nth-child(6) {
  opacity: 0.9; 
}
</style>
