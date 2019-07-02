<template>
  <div class="wrap">
    <svg
      :height="radius * 2"
      :width="radius * 2"
     >
       <circle
         stroke="#1abc9c"
         :stroke-dasharray="circumference + ' ' + circumference"
         :style="{ strokeDashoffset: strokeDashoffset }"
         :stroke-width="stroke"
         fill="transparent"
         :r="normalizedRadius"
         :cx="radius"
         :cy="radius"
      />
    </svg>
    <span class="legend">{{ progress }} %</span>
  </div>
</template>

<script>
export default {
  name: 'ProgressRing',
  props: {
    radius: Number,
    progress: Number,
    stroke: Number
  },
  data() {
    const normalizedRadius = this.radius - this.stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    
    return {
      normalizedRadius,
      circumference,
      progress0: 0
    };
  },
  computed: {
    strokeDashoffset() {
      return this.circumference - this.progress0 / 100 * this.circumference;
    }
  },
  mounted() {
    const $wrap = document.querySelector('.wrap');
    $wrap.style.width = this.radius * 2 + 'px';
    $wrap.style.height = this.radius * 2 + 'px';
    // emulating progress
    const interval = setInterval(() => {
      this.progress0 += 1;
      if (this.progress0 === this.progress)
        clearInterval(interval);
    }, 10);
  },
}
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 150px;
  margin: 15px;
  display: flex;
  align-items: center;
  position: relative;
}
.legend {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
</style>

