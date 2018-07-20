<template>
<div class="header">
    <div class="container">
        <div class="row">
            <ul class="col-12 header-menu" >
                <li class="header-menu__item">
                    <router-link :to="{name: 'home'}" >Home</router-link>
                </li>
                <li class="header-menu__item">
                    <router-link :to="{name: 'about'}" >About</router-link>
                </li>
            </ul>           
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'Header' 
  }

</script>


<style lang="scss" scoped>
@import "@/assets/styles/settings.scss";

.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1030;    
    background-color: $black-color;
    color: $gray-color;
}
.header-menu {
    margin: 0;
    padding: 15px;
    text-align: right;
}
.header-menu__item {
    display: inline-block;
    list-style-type: none;  
    padding: 15px;  
}

.header-menu__item a {
    font-weight: bold;
    color: $gray-color;
    text-decoration: none;
    &.router-link-exact-active {
      color: $gray-light-color;
    }
}
/*
.header__menu li:hover,
.header__menu a:hover {
    color: $gray-light-color;
}
*/


</style>
