<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="Search..." v-model="search">
    <ul class="search-list" :class="{'search-list--hidden': isEmpty}">
      <li class="search-list__item">
        <a class="search-list__link" href="#">dczxc</a>
      </li>
      <li class="search-list__item">
        <a class="search-list__link" href="#">sdfdf</a>
      </li>
      <li class="search-list__item">
        <a class="search-list__link" href="#">hjgjhgj</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  data() {
    return {
      search: ""
    };
  },
  computed: {
    isEmpty() {
      return !this.search
    }
  }
};
</script>

<style scoped lang="sass">
  .search
    position: relative
    &-input
      display: block
      width: 100%
      padding: 10px
      height: 40px
    &-list
      position: absolute
      top: 100%
      left: 0
      width: 100%
      background: #008eff
      padding: 0
      max-height: 1000px
      overflow: hidden
      transition: 0.5s
      &--hidden
        max-height: 0
      &__item
        list-style-type: none
        &:first-child
          padding-top: 10px
      &__link
        display: block
        padding: 5px 15px
        color: #fff
        
</style>

