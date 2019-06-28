<template>
  <div class="preloader" id="preloader1">
    <div class="preloader__value-wrp">
      <span class="preloader__value">0%</span>
      <i class="preloader__line"></i>
    </div>
    <i class="preloader__divider"></i>
    <i class="preloader__divider-second"></i>
  </div>
</template>

<script>
export default {
  name: 'Preloader1',
  mounted() {
    let counter = { val: 0 };
    let val = document.querySelector(".preloader__value");
    let divider = document.querySelector(".preloader__divider");
    let line = document.querySelector(".preloader__line");
    let dividerSecond = document.querySelector(".preloader__divider-second");
    let valueWrp = document.querySelector('.preloader__value-wrp');
    let preloader = document.querySelector('#preloader1');
    let preloaderTl = new TimelineMax();

    TweenMax.to(counter, 5, {
      val: 100, 
      onUpdate: function () {
        val.innerHTML = Math.ceil(counter.val) + '%';
      },
      ease:Circ.easeOut
    });

    preloaderTl
      .fromTo(line, 0.1, {css: {"height": 0}}, {css: {"height": "1px"}, force3D: true})
      .fromTo(valueWrp, 4, {css: {"width" : 0}}, {css: {"width" : "105%"}, force3D: true, ease:Power1.easeIn})
      .fromTo(divider, 1, {css: {"width" : 0}}, {css: {"width" : "105%"}, force3D: true, ease:Power4.easeIn}, 4)
      .fromTo(dividerSecond, 1, {css: {"width" : 0}}, {css: {"width" : "105%"}, force3D: true, ease:Power4.easeIn}, 4)
      .fromTo(divider, 0.8, {css: {"height" : "1px"}}, {css: {"height" : "50vh"}, force3D: true, ease:Power4.easeIn}, 5)
      .fromTo(dividerSecond, 0.8, {css: {"height" : "1px"}}, {css: {"height" : "50vh"}, force3D: true, ease:Power4.easeIn}, 5)
      .to(preloader, 0.1, {autoAlpha: 0}, 6)
      .to(preloader, 0.1, {css:{"display":"none"}}, 6.1)
  }
}
</script>

<style scoped lang="scss">
  .preloader {
    position: fixed;
    background-color: #1b1b1b;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 20;
    transform: translateZ(0);
    backface-visibility: hidden;
    video {
        position: absolute;
        z-index: 1;
        width: 30vw;
        left: 50%;
        top: 45%;
        transform: translate(-50%, -50%);
    }
    &__value-wrp {
        position: absolute;
        left: 0;
        top: 50%;
        width: 100vw;
        height: 70px;
        transform: translateY(-50%) translateZ(0);
        backface-visibility: hidden;
    }
    &__line {
        margin: 0 auto;
        display: block;
        width: 100%;
        height: 0;
        background-color: rgba(#fff, 0.2);
        position: absolute;
        left: 0;
        transform: translateZ(0);
        top: 50%;
        backface-visibility: hidden;
    }
    &__divider {
        display: block;
        position: absolute;
        z-index: 1;
        top: 50vh;
        left: 0;
        backface-visibility: hidden;
        transform: translateZ(0);
        width: 100%;
        height: 0;
        background-color: #151314;
    }
    &__divider-second {
        display: block;
        position: absolute;
        z-index: 1;
        bottom: 50vh;
        left: 0;
        backface-visibility: hidden;
        transform: translateZ(0);
        width: 100%;
        height: 0;
        background-color: #151314;
    }
    &__value {
        position: absolute;
        top: 50%;
        right: -65px;
        transform: translateY(-50%) translateZ(0);
        backface-visibility: hidden;
        font-size: 36px;
        font-weight: 900;
        color: #fff;
    }
}
</style>


