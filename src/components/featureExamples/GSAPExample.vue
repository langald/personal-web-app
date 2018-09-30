<template>
  <div>
    <h3 id="grreting1">Hello, Jimmy!</h3>
    <h3 id="grreting2">Hello, Jack!</h3>
    <h3 id="grreting3">How are you?</h3>
    <h3 id="grreting4" style="width: 100px;opacity:0;">I`m fine!</h3>
    <div class="some-box" @click="startAnimation">Click me</div>
    <div class="some-box"></div>
    <div class="some-box"></div>
    <div class="scroll-box" @click="onScrollTop">Click to scroll top</div>
  </div>
</template>

<script>
import { TweenMax,TimelineMax  } from "gsap/TweenMax"
import 'gsap/src/uncompressed/plugins/ScrollToPlugin'

export default {
  name: 'GSAPExample',
  mounted() {
    var tl = new TimelineMax({repeat:3, repeatDelay:1});
    tl.to("#grreting1", 1, {x:200})
      //start 1 second after previous tween ends (gap)
      .fromTo("#grreting2", 1, {x:1200, scale:0.2}, {x:200, scale:1}, "+=1")
      //add a label at the end
      .addLabel("apperanceX")
      //start both of these animations at the same time, at the "greyAndPink" label.
      .from("#grreting3", 1, {x:200, y:-200, opacity:0}, "apperanceX") 
      .to("#grreting4", 1, {x:200, opacity:1, scale:2}, "apperanceX"); 
      
  },
  data() {
    return {
      
    }
  },
  methods: {
    startAnimation() {
      console.log('you clicked!')
      var tl2 = new TimelineMax();
      tl2.staggerTo(".some-box", 1, {rotation:360, x:600}, 0.5);
    },
    onScrollTop() {
      TweenMax.to(window, 2, {scrollTo:{y:0, x:0}});
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/settings.scss";

.some-box {
  width:100px;
  height: 100px;
  background-color: #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

</style>
