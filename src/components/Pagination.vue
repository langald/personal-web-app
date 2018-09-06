<template>
  <div class="pagination">
    <div class="pagination__nav" v-if="currentPage > 6">
      <i class="fas fa-angle-double-left" @click="changePage(1)"></i>
      <i class="fas fa-angle-left" @click="changePage(currentPage - 1)"></i>
    </div>
    <div class="pagination__page-num"
        v-for="page in pages"
        :class="{'pagination__page-num--active': page === currentPage}"
        :key="page"
        @click="changePage(page)"
      >
      {{page}}
    </div>
    <div class="pagination__nav" v-if="pages[9] < totalPages">
      <i class="fas fa-angle-right" @click="changePage(currentPage + 1)"></i>
      <i class="fas fa-angle-double-right" @click="changePage(totalPages)"></i>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage:{
      type: Number,
      required: true
    },
    totalPages:{
      type: Number,
      required: true
    }
  },
  computed: {
    pages() {
      if(this.totalPages <= 1 ) return []
      //active item will be in the 6-th position from 10
      let start = this.currentPage > 6 ? this.currentPage - 6 : 0
      return [...Array(this.totalPages).keys()].map(e => e + 1).slice(start, start + 10)
    }
  },
  methods: {
    changePage (goToPage) {
      if (goToPage === this.currentPage) return
      this.$emit('onChangePage', goToPage)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/settings.scss";

.pagination {
  width: 100%;
  text-align: center;
}
.pagination div {
  display: inline-block;
  cursor: pointer;
}
.pagination__nav i {
  padding: 10px;
  font-size: 18px;
  color: $gray-color;
}
.pagination__page-num {
  padding: 10px;
  margin: 5px;
  border: 1px solid $gray-color;
  text-align: center;
  max-width: 50px;
}
.pagination__page-num--active,
.pagination__page-num:hover {
  background-color: $gray-light-color;
}
</style>
