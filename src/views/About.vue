<template>
<div>
 
  <div class="quote-wrapper">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8">        
          <p class="quote animated fadeInDown" v-html="$t('about_page.quote')">           
          </p>         
        </div>
      </div>
    </div>
  </div> 
 
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-4 goal" data-aos="zoom-in-right">
        <i class="far fa-star-half fa-rotate-90 hidden"></i>        
        <h3>{{ $t('about_page.item_1.title') }}</h3>
        <p>{{ $t('about_page.item_1.text') }}</p>
      </div>
      <div class="col-12 col-md-4 goal" data-aos="fade-up">
       <i class="fas fa-chart-line"></i>       
        <h3>{{ $t('about_page.item_2.title') }}</h3>
        <p>{{ $t('about_page.item_2.text') }}</p>
      </div>
      <div class="col-12 col-md-4 goal" data-aos="zoom-in-left">
        <i class="fas fa-laptop"></i>      
        <h3>{{ $t('about_page.item_3.title') }}</h3>
        <p>{{ $t('about_page.item_3.text') }}</p>
      </div>
    </div>
  </div>

</div>
</template>

<script>

export default {
  name: 'About',
  components: {			
				
  },
  data () {
    return {
			
    }
  },		
  mounted(){
    
  }
}
</script>


<style scoped lang="scss">
@import "@/assets/styles/settings.scss";

.quote-wrapper {
  background: url(../assets/world-map.jpg) no-repeat center;
  background-color: #e4e4e4;
  background-size: cover;
  margin-bottom: 50px;
}
.quote {
  font-size: 2.6rem;
  font-weight: bold;
  color: $gray-dark-color;
  margin-top: 60px;
  margin-bottom: 60px;
  text-align: center;  
}
.goal {
  text-align: center;
  margin: 30px 0;
  color: $gray-color;
}
.goal h3 {
  text-transform: uppercase;
  margin: 20px 0;
}
.goal i {
  font-size: 6rem;
}
.fa-star-half {
  color: $gold-color;
}
.fa-chart-line {
  color: $blue-color;
}
.fa-laptop {
  color: $green-color;
}

</style>
