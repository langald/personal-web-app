<template>
  <div class="footer">
     <div class="container">
        <div class="row">
            <ul class="col-12 footer-menu" >
                <li class="footer-menu__item">
                    <a href="mailto:larisaangald@gmail.com" target="_blank">
                       <i class="far fa-envelope"></i>
                    </a>
                </li>
                <li class="footer-menu__item">
                    <a href="https://t.me/Larissa_Angald" target="_blank">
                       <i class="fab fa-telegram-plane"></i>
                    </a>
                </li>                
                <li class="footer-menu__item">
                    <a href="https://github.com/langald" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
                <li class="footer-menu__item">
                    <a href="https://www.facebook.com/people/%D0%9B%D0%B0%D1%80%D0%B8%D1%81%D0%B0-%D0%90%D0%BD%D0%B3%D0%B0%D0%BB%D1%8C%D0%B4/100001912967674" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                    </a>
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
}
.footer-menu__item a {
    display: block;
    padding: 15px; 
    font-weight: bold;
    color: $gray-color;
    text-decoration: none;    
}
.footer-menu__item i {
    font-size: 3rem;
}
.footer-menu__item i:hover {
    color: $gray-light-color;
}
</style>
