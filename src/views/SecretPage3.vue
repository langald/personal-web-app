<template>
  <div class="example-page container">
    <br>
    <h3>Articles</h3>
    <br>
    <ul>
      <li v-for="article in getArticles" :key="article.id">{{ article.title }}</li>
    </ul>
   
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "secretpage3",
  components: {},
  computed: {
    ...mapGetters('testapi', ['getArticles'])
  },
  mounted() {
    this.fetchArticles()
  },
  methods: {
    ...mapActions('testapi', ['fetchArticles'])
  }
};
</script>
