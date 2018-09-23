<template>
  <div class="some-menu-wrap">
    <div class="menu-switcher">Show menu on hover</div>
    <ul class="some-menu">
      <li class="some-menu-item">Item 1</li>
      <li class="some-menu-item">Item 2</li>
      <li class="some-menu-item">Item 3</li>
      <li class="some-menu-item">Item 4</li>
    </ul>
  </div>    
</template>

<script>
export default {
  name: 'SlideDownCSS',
}
</script>

<style scoped lang="scss">
.some-menu-wrap {
  background-color: rgb(212, 57, 218);
  width: 200px;
  position: relative;
}
.some-menu {
  list-style-type: none;  
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition:  0.5s;
  background-color: aqua;
}
.some-menu-item {
 padding: 10px;
 border-bottom: 1px solid gray; 
}
.menu-switcher {
  padding: 10px;
}

.menu-switcher:hover + .some-menu {  
  max-height: 500px;
  transition:  0.5s;
}
.some-menu:hover {
  max-height: 500px;
  transition:  0.5s;
}
.some-menu-item:hover {
  background-color: rgb(8, 219, 219)
}
</style>
