<template>
    <ul class="col-12 header-menu" :class="navbarClass" >
         <li class="header-menu__item"
            v-for="(item, index) in items"
            :key="index"
            >
            <router-link :to="{name: item.to, params: {locale: $i18n.locale}}" >{{item.title}}</router-link>
         </li> 
         <li class="header-menu__item">            
            <locale-switcher />            
         </li>               
    </ul>      
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'

export default {
  name: 'Navbar',
  props: {
    navbarClass: String,
    items: Array
  },
  components: {
    'locale-switcher': LocaleSwitcher
  },
  data() {
    return {
     
    }
  } 
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/settings.scss";

.header-menu {
    margin: 0;
    padding: 15px;
    text-align: right;
}
.header-menu__item {
    display: inline-block;
    list-style-type: none;
    padding: 15px 10px;
}
.header-menu__item a {
    position: relative;
    display: block;    
    font-weight: bold;
    color: $gray-color;
    text-decoration: none;    
    &.router-link-exact-active {
      color: $gray-light-color;
    }
}
.header-menu__item a::after {
    content: '';
    position: absolute;
    top: 24px;
    left: 50%;
    width: 1%;
    opacity: 0;
    height: 2px;
    background: $gray-light-color;
    transform: translateX(-50%);
    transition: width 0.3s;
}
.header-menu__item a:hover::after {    
    width: 100%; 
    opacity: 1;   
}

</style>
