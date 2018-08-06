<template>
<div>
  <section class="top-section">
    <div class="container">
      <div class="row align-items-center justify-content-center top-section__wrap">
        <div class="col-12 col-md-3">
          <div class="image-container top-section__avatar">
            <img src="../assets/avatar.jpg" />
          </div>
        </div>
        <div class="col-12 col-md-8 top-section__title">
          Hello!<br />
          I'm Larissa Angald
          <p class="top-section__subtitle">Frontend Developer</p>
        </div>
      </div>   
    </div>   
  </section>

  <section class="about-section">
    <div class="container">
      <div class="row align-items-center"> 
        <div class="d-none d-md-block col-md-3 col-lg-4">
          <div class="image-container">
            <img src="../assets/logos-HTML-CSS-JS.png" />
          </div>
        </div> 

        <div class="col-md-6 col-lg-4">
          <h3 class="about-section__title"> My skills</h3>
          <ul class="about-section__skills">
            <li>HTML, CSS, JavaScript, jQuery</li>     
            <li>AJAX requests</li>
            <li>REST API</li>
            <li>Axios</li>
            <li>ES5/6</li>
            <li>Vue.js + Vuex + Router</li>
            <li>Basic React + Redux</li>
          </ul>
        </div>  

        <div class="d-none d-md-block col-md-3 col-lg-4">
          <div class="image-container">
            <img src="../assets/logos-Vue-React-jQuery.png" />
          </div>
        </div>      

      </div>
    </div>
  </section>  

</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/settings.scss";

.top-section {
  background: url(../assets/workflow.jpg) no-repeat center;  
  background-size: cover;  
  background-attachment: fixed;
}
 /*.container flex for IE11, because with min-height do not work align-items*/
.top-section .container {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
}
.top-section__wrap { 
  min-height: calc(100vh - 84px);
}

.top-section__avatar {
  border: 5px solid $white-color;
  border-radius: 100%;
  max-width: 300px;
  margin: 20px auto 10px;
}
.top-section__title {
  font-size: 6rem;
  line-height: 1;
  color: $white-color;
  text-align: center;
}
.top-section__subtitle {
  font-size: 2rem;
  text-transform: uppercase;
  margin-top: 20px;
}

.about-section {
  margin: 40px 0;
  text-align: center;
}
.about-section__title {
  color: $gray-dark-color;
  margin-bottom: 20px;
}
.about-section__skills {
  max-width: 400px;
  text-align: left;
  margin: 0 auto;
  list-style-type: none;
}
.about-section__skills li {  
  position: relative;
  padding: 12px 8px 12px 40px;
}
.about-section__skills li::before {
    content: '';
    position: absolute;
    border-color: $green-color;
    border-style: solid;
    border-width: 0 2px 2px 0;
    top: 14px;
    left: 16px;
    transform: rotate(45deg);
    height: 15px;
    width: 7px;
}

</style>
