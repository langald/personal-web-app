<template>
  <div class="example-page container">
    <br>
    <h3>Articles</h3>
    <br>
    <ul>
      <li v-for="article in getArticles" :key="article.id" @click="fetchArticle({id: article.id})">{{ article.title }}</li>
    </ul>

    <br>
    <div>
      <h4>Some article</h4>
      <div v-text="getArticle"></div>
    </div>
    <br>
   
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "secretpage3",
  components: {},
  computed: {
    ...mapGetters('testapi', ['getArticles', 'getArticle'])
  },
  mounted() {
    this.fetchArticles()
  },
  methods: {
    ...mapActions('testapi', ['fetchArticles', 'fetchArticle'])
  }
};
</script>
