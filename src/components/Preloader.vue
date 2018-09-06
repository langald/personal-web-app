<template>
    <div class="preloader">
        <div class="preloader__wrap">
            <div class="preloader_cir circ1"></div>
            <div class="preloader_cir circ2"></div>
            <div class="preloader_cir circ3"></div>
            <div class="preloader_cir circ4"></div>
        </div>
    </div>    
</template>

<script>
export default {
  name: 'Preloader',   
  data() {
    return {
         
    }        
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/settings.scss";

.preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $gray-dark-color;
    z-index: 1050;
}

.preloader__wrap {   
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90px;
    height: 30px;
    text-align: center;  
}

.preloader_cir {
    background-color: $gray-color;
    height: 15px;
    width: 15px;
    margin-left:3px;
    border-radius: 50%;
    display: inline-block;
    
    -webkit-animation: stretchdelay 0.7s infinite ease-in-out;
    animation: stretchdelay 0.7s infinite ease-in-out;
}

.preloader_cir.circ2 {
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
}

.preloader_cir.circ3 {
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
}

.preloader_cir.circ4 {
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
}

.preloader_cir.circ5 {
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
}

@-webkit-keyframes stretchdelay {
    0%, 40%, 100% { -webkit-transform: translateY(0) }  
    20% { -webkit-transform: translateY(-10px) }
}

@keyframes stretchdelay {
    0%, 40%, 100% { 
    transform: translateY(0);
    -webkit-transform: translateY(0);
    } 20% {
    transform: translateY(-10px);
    -webkit-transform: translateY(-10px);
    }
}

</style>
