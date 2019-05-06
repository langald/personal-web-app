<template>
  <div class="example-page container">
    <br>
    <h3>Articles</h3>
    <br>
    <ul>
      <li v-for="article in getArticles" :key="article.id" @click="fetchArticle({id: article.id})">{{ article.title }}</li>
    </ul>

    <br>
    <articles-pagination :pagination="getPagination" />

    <br>
    <div>
      <h4>Some article</h4>
      <div v-text="getArticle"></div>
    </div>
    <br>
   
  </div>
</template>

<script>
import ArticlesPagination from '@/components/ArticlesPagination'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "secretpage3",
  components: { ArticlesPagination },
  data() {
    return {
      page: this.$route.query.page || 1
    }
  },
  computed: {
    ...mapGetters('testapi', ['getArticles', 'getPagination', 'getArticle']),
  },
  beforeRouteUpdate (to, from, next) {
    this.page = to.query.page
    this.fetchArticles({
      page: this.page
    })
    next()
  },
  mounted() {
    this.fetchArticles({
      page: this.page
    })
  },
  methods: {
    ...mapActions('testapi', ['fetchArticles', 'fetchArticle'])
  }
};
</script>
