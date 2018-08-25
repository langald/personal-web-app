<template>
  <div class="error">{{message}}</div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  padding: 30px;
  text-align: center;  
}
</style>
