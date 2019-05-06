import {axiosBack}  from '@/common/api.service'

export default {
  namespaced: true,
  state: {
    articles: [],
    pagination: {},
    article: {}
  },
  getters: {
    getArticles(state) {
      return state.articles
    },
    getPagination(state) {
      return state.pagination
    },
    getArticle(state) {
      return state.article
    }
  },
  mutations: {
    setArticles(state, payload) {
      state.articles = payload
    },
    setPagination(state, payload) {
      state.pagination = payload
    },
    setArticle(state, payload) {
      state.article = payload
    }
  },
  actions: {
    fetchArticles(store, payload) {
      let url = 'testapi';
      
      axiosBack.get(url, {params: payload})
        .then(({ data }) => {
          //console.log(data)
    
          store.commit('setArticles', data.data)
          store.commit('setPagination', data.meta)
        })
        .catch(e => console.log(e.message))
    },
    fetchArticle(store, payload) {
      store.commit('setArticle', {})

      let url = 'testapi';
      //let url = 'https://pixy.kz/api/testapi';
      axiosBack.get(url + '/' + payload.id)
        .then(({ data }) => {
          //console.log(data)
    
          store.commit('setArticle', data)
        })
        .catch(e => console.log(e.message))
    }
  }
}