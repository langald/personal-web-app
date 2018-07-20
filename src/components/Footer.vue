<template>
  <div class="footer">
     <div class="container">
        <div class="row">
            <ul class="col-12 footer-menu" >
                <li class="footer-menu__item">
                    <router-link :to="{name: 'home'}" >Home</router-link>
                </li>
                <li class="footer-menu__item">
                    <router-link :to="{name: 'about'}" >About</router-link>
                </li>
                <li class="footer-menu__item">
                    <router-link :to="{name: 'about'}" >About1</router-link>
                </li>
                <li class="footer-menu__item">
                    <router-link :to="{name: 'about'}" >About2</router-link>
                </li>
            </ul>           
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/settings.scss";

.footer {
  background-color: $black-color;
  color: $gray-color;
  position: relative;
  z-index: 2;
}
.footer-menu {
    margin: 0;
    padding: 15px;
    text-align: center;
}
.footer-menu__item {
    display: inline-block;
    list-style-type: none;  
    padding: 15px;  
}
.footer-menu__item a {
    font-weight: bold;
    color: $gray-color;
    text-decoration: none;    
}
</style>
