<template>
<div>
 
  <div class="quote-wrapper">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8">        
          <p class="quote animated fadeInDown">
            „I believe that thoughtful technology can solve any problem. <br>
            And maybe save the world. <br>
            At least make it more awesome.“
          </p>         
        </div>
      </div>
    </div>
  </div> 
 
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-4 goal" data-aos="zoom-in-right">
        <i class="far fa-star-half fa-rotate-90 hidden"></i>        
        <h3>Creativity</h3>
        <p>The ability to see connections and relationships where others have not</p>
      </div>
      <div class="col-12 col-md-4 goal" data-aos="fade-up">
       <i class="fas fa-chart-line"></i>       
        <h3>Strategy</h3>
        <p>Plan for achieving vision, prioritizing objectives, competing successfully</p>
      </div>
      <div class="col-12 col-md-4 goal" data-aos="zoom-in-left">
        <i class="fas fa-laptop"></i>      
        <h3>Technology</h3>
        <p>The right tech stack is the key to project’s growth and success</p>
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
