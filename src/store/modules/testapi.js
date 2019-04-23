import ApiService  from '@/common/api.service'

export default {
  namespaced: true,
  state: {
    articles: []
  },
  getters: {
    getArticles(state) {
      return state.articles
    }
  },
  mutations: {
    setArticles(state, payload) {
      state.articles = payload
    }
  },
  actions: {
    fetchArticles(store, payload) {
      //let url = 'http://test-laravel-app.test/api/testapi';
      let url = 'http://pixy.kz/api/testapi';
      ApiService.get(url)
        .then(({ data }) => {
          //console.log(data)
    
          store.commit('setArticles', data.data)
        })
    }
  }
}