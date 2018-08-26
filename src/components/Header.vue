<template>
<div class="header">
    <div class="container">
        <div class="row">
            <navbar 
                navbarClass="col-12" 
                :items="[
                    {to: 'home', title: 'Home'}, 
                    {to: 'about', title: 'About'},
                    {to: 'movielist', title: 'Movies'},
                    {to: 'favorited', title: 'Favorited'}
                ]"
            />                    
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
    name: 'Header',
    components: {
        'navbar': Navbar
    } 
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

</style>
