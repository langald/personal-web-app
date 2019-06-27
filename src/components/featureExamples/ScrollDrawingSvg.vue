<template>
  <div>    
    <!--
    <p>
      1. Scroll Drawing SVG, resourse 
      <a href="https://www.w3schools.com/howto/howto_js_scrolldrawing.asp" target="_blank">
        www.w3schools.com
      </a>
    </p>
    -->
    <svg id="mySVG" >
      <path fill="none" stroke="red" stroke-width="3" id="triangle" d="M150 0 L75 200 L225 200 Z" />
      Sorry, your browser does not support inline SVG.
    </svg>
  </div>
</template>

<script>

export default {
  name: 'ScrollDrawingSvg',
  mounted() {
    // Get the id of the <path> element and the length of <path>
    var triangle = document.getElementById("triangle");
    var length = triangle.getTotalLength();

    // The start position of the drawing
    triangle.style.strokeDasharray = length;

    // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
    triangle.style.strokeDashoffset = length;

    // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
    window.addEventListener("scroll", myFunction);

    function myFunction() {
      var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

      var draw = length * scrollpercent;
      
      // Reverse the drawing (when scrolling upwards)
      triangle.style.strokeDashoffset = length - draw;
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/settings.scss";

#mySVG {
  position: fixed;
  top: 100px;
  right: 20px;
  width: 400px;
  height: 210px;
  margin-left:-50px;
  opacity: 0.3;
}
</style>
