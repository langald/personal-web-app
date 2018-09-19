<template>
  <div class="button-wrap">
    <div class="btn-transparent" @click="onBtnClick">      
      <span class="hover-out">
        <span class="hover-out_i">{{msg}}</span>
      </span>
      <span class="hover">
        <span class="hover_i">{{msg}}</span>
      </span>
    </div>
  </div>  
</template>

<script>
export default {
  name: "ButtonSlider",
  props: {
    msg: {
      type: String,
      required: true,
      default: "",
    }
  },
  methods: {
    onBtnClick() {
      this.$emit("btnClick");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/settings.scss";

.button-wrap {
  margin: 30px auto;
}

.btn-transparent {
  height: 53px;
  line-height: 53px;
  text-align: center;
  font-size: 1.4rem;
  text-transform: uppercase;
  position: relative;    
  color: $black-color;
  border: 1px solid $gray-color;
  overflow: hidden;
  outline: 0;  
  transition-property: color,background; 
  transition-duration: .4s;  
  transition-timing-function: ease;  
}
.btn-transparent .hover-out {
  position: relative;
  z-index: 1;
  display: inline-block;    
  animation: hoverOutInner .3s ease 1 forwards
}
.btn-transparent .hover {
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #0cf;
  color: #fff;
  z-index: 4;  
  transform: translate(0,100%);
  filter: alpha(Opacity=0);
  opacity: 0;  
  animation: hoverOut .3s ease 1 forwards
}
.btn-transparent:hover .hover-out {
    -webkit-animation-name: hoverInInner;
    -moz-animation-name: hoverInInner;
    -o-animation-name: hoverInInner;
    -ms-animation-name: hoverInInner;
    animation-name: hoverInInner
}

.btn-transparent:hover .hover {
    -webkit-animation-name: hoverIn;
    -moz-animation-name: hoverIn;
    -o-animation-name: hoverIn;
    -ms-animation-name: hoverIn;
    animation-name: hoverIn
}

@keyframes hoverOutInner {
  0% {      
      transform: translate(0,30px);
      filter: alpha(Opacity=0);
      opacity: 0
  }

  100% {     
      transform: translate(0,0);
      filter: alpha(enabled=false);
      opacity: 1
  }
}
@keyframes hoverOut {
  0% {      
      transform: translate(0,0);
      filter: alpha(enabled=false);
      opacity: 1
  }

  100% {      
      transform: translate(0,-100%);
      filter: alpha(Opacity=0);
      opacity: 0
  }
}

@keyframes hoverInInner {
  0% {
      -moz-transform: translate(0,0);
      -ms-transform: translate(0,0);
      -webkit-transform: translate(0,0);
      transform: translate(0,0);
      filter: alpha(enabled=false);
      opacity: 1
  }

  100% {
      -moz-transform: translate(0,-30px);
      -ms-transform: translate(0,-30px);
      -webkit-transform: translate(0,-30px);
      transform: translate(0,-30px);
      filter: alpha(Opacity=0);
      opacity: 0
  }
}
@keyframes hoverIn {
  0% {
      -moz-transform: translate(0,100);
      -ms-transform: translate(0,100);
      -webkit-transform: translate(0,100);
      transform: translate(0,100);
      filter: alpha(Opacity=0);
      opacity: 0
  }

  100% {
      -moz-transform: translate(0,0);
      -ms-transform: translate(0,0);
      -webkit-transform: translate(0,0);
      transform: translate(0,0);
      filter: alpha(enabled=false);
      opacity: 1
  }
}
</style>
