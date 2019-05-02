import ApiService  from '@/common/api.service'

export default {
  namespaced: true,
  state: {
    articles: [],
    article: {}
  },
  getters: {
    getArticles(state) {
      return state.articles
    },
    getArticle(state) {
      return state.article
    }
  },
  mutations: {
    setArticles(state, payload) {
      state.articles = payload
    },
    setArticle(state, payload) {
      state.article = payload
    }
  },
  actions: {
    fetchArticles(store, payload) {
      let url = 'http://test-laravel-app.test/api/testapi';
      //let url = 'https://pixy.kz/api/testapi';
      ApiService.get(url)
        .then(({ data }) => {
          //console.log(data)
    
          store.commit('setArticles', data.data)
        })
    },
    fetchArticle(store, payload) {
      store.commit('setArticle', {})

      let url = 'http://test-laravel-app.test/api/testapi';
      //let url = 'https://pixy.kz/api/testapi';
      ApiService.get(url + '/' + payload.id)
        .then(({ data }) => {
          //console.log(data)
    
          store.commit('setArticle', data)
        })
    }
  }
}