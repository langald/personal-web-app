<template>
    <div class="localeSwitcher">
        <a href="" 
            class="localeSwitcher__link"
            @click.stop.prevent="toggleDropdown()" 
            >
            <!--
            <img
                :src="icons[currentLocale]"
                class="country-icon as-toggle"
            />
            -->
            {{ currentLocale }}
            {{ currentLocaleName }}
        </a>

        <ul v-show="dropdownShow" class="localeSwitcher__menu">
            <li class="localeSwitcher__item"
                v-for="locale in locales"
                :key="locale.code"
                @click="toggleDropdown()">
                    <router-link                    
                        :to="{name: curentRoutName, params: {locale: locale.code }}"
                        class="localeSwitcher__link"                       
                        >
                        <!--
                        <img :src="icons[locale.code]" class="country-icon" />
                        -->

                        <span class="locale-name">{{locale.name}}</span>
                    </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
/*
import enIcon from 'svg-country-flags/svg/gb.svg'
import heIcon from 'svg-country-flags/svg/il.svg'
import jaIcon from 'svg-country-flags/svg/jp.svg'
*/

import { locales } from '@/common/config.js'

export default {
  name: 'LocaleSwitcher',
  data() {
    return {
      /*
      icons: {
        en: enIcon,
        he: heIcon,
        ja: jaIcon,
      },
      */
      locales,     
      dropdownShow: false,
    }
  },
  computed: {   
    currentLocale() {
      return this.$route.params.locale
    },
    currentLocaleName() {     
      if (this.currentLocale) return this.locales.filter(item => item.code === this.currentLocale)[0].name 
      return ""
    },    
    curentRoutName() {     
      return this.$route.name || "home"
    }
  },  
  methods: {
    toggleDropdown() {     
      this.dropdownShow = !this.dropdownShow           
    }
  } 
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/settings.scss";
    .country-icon {
        width: 20px;
        height: auto;
        display: inline-block;
        vertical-align: baseline;
        border: 1px solid #dee2e6;
        box-shadow: 0px 1px 3px rgba(24, 29, 38, 0.1);
    }

    .country-icon.as-toggle {
        margin-top: 5px;
    }

    .locale-name {
        display: inline-block;
        vertical-align: baseline;
    }


   

   .localeSwitcher {
       position: relative;
   }
   .localeSwitcher__link {
        display: block;    
        font-weight: bold;
        color: $gray-color;
        text-decoration: none;  
    }
    
    .localeSwitcher__menu {
        position: absolute;
        left: -15px;
        top: 35px;
        margin: 0;
        padding: 0;
        background-color: $black-color;
    }
    .localeSwitcher__item {
        display: block;
        list-style-type: none;
        padding: 5px 15px;
        text-align: left;
    }
   
     

</style>
