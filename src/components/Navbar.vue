<template>
    <div lass="row">
        <div  class="col-12 d-md-none navbar-toggler-wrap">
            <button type="button" class="navbar-toggler" @click.prevent="toggleMenu()">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
      
        <ul class="col-12 header-menu" >
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
    </div> 
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'

export default {
  name: 'Navbar',
  props: {   
    items: Array
  },
  components: {
    'locale-switcher': LocaleSwitcher
  },
  data() {
    return {
      headerMenuShown: false
    }
  },
  computed: {
    isWideScreen() {
      console.log(0)
      return window.innerWidth > 720
    }
  },
  watch: {
    isWideScreen: function (newQuestion, oldQuestion) {
      /*
      this.answer = 'Ожидаю, когда вы закончите печатать...'
      this.debouncedGetAnswer()
      */
      console.log(11)
    }

  },
  methods: {
    toggleMenu() {      
      this.headerMenuShown = !this.headerMenuShown
      console.log(this.headerMenuShown)
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
    text-align: left;
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



@media only screen and (max-width: 720px) {
    .header-menu__item {
        display: block;       
    }
}

.navbar-toggler-wrap {
    text-align: right;
}
.navbar-toggler {
    padding: 30px 15px;   
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
}
.navbar-toggler-icon {
    display: inline-block;
    width: 30px;
    height: 30px;
    vertical-align: middle;   
    background: no-repeat 50%;
    background-size: 100% 100%;    

    background-image:url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")
}

</style>
