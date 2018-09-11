<template>
    <div class="localeSwitcher">
        <a href="" 
            class="localeSwitcher__link"
            @click.stop.prevent="toggleDropdown()" 
            >            
                <img
                    :src="icons[currentLocale]"
                    class="localeSwitcher__country-icon"
                />
                <!--{{ currentLocaleName }}-->
                <span class="localeSwitcher__toggler"></span>
        </a>

        <ul v-show="dropdownShow" class="localeSwitcher__menu">
            <li class="localeSwitcher__item"
                v-for="locale in locales"
                :key="locale.code"
                @click="toggleDropdown()"
                >
                    <router-link                    
                        :to="{name: curentRoutName, params: {locale: locale.code }}"
                        class="localeSwitcher__link"                       
                        >                        
                        <img :src="icons[locale.code]" class="localeSwitcher__country-icon" />
                        <span class="localeSwitcher__locale-name">{{locale.name}}</span>
                    </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

import enIcon from 'svg-country-flags/svg/gb.svg'
import ruIcon from 'svg-country-flags/svg/ru.svg'
import deIcon from 'svg-country-flags/svg/de.svg'

import { locales } from '@/common/config.js'

export default {
  name: 'LocaleSwitcher',
  data() {
    return {      
      icons: {
        en: enIcon,
        ru: ruIcon,
        de: deIcon,
      },      
      locales,     
      dropdownShow: false,
    }
  },
  computed: {   
    currentLocale() {
      return this.$route.params.locale
    },   
    curentRoutName() {     
      return this.$route.name || "home"
    },
    currentLocaleName() {     
      if (this.currentLocale) return this.locales.filter(item => item.code === this.currentLocale)[0].name 
      return ""
    },    
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
        white-space: nowrap;
    }
    .localeSwitcher__item:hover {
        background-color: #62686e;        
    }

    .localeSwitcher__country-icon {
        width: 20px;
        height: auto;
        display: inline-block;
        vertical-align: baseline;
        border: 1px solid #dee2e6;
        box-shadow: 0px 1px 3px rgba(24, 29, 38, 0.1);
    }
    .localeSwitcher__toggler {       
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: .255em;
        vertical-align: .255em;        
        border-top: .3em solid $gray-color;
        border-right: .3em solid transparent;
        border-bottom: 0;
        border-left: .3em solid transparent;   
    }
    .localeSwitcher__locale-name {
        display: inline-block;
        vertical-align: baseline;
        padding-left: 10px;
    }


    @media only screen and (max-width: 720px) {
        .localeSwitcher__menu {
            position: relative;
            top: 10px;
            background-color: transparent;
        }  
    }
</style>
