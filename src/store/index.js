import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    item5: 5,
    item6: 6
  },
  getters: {
    item5(state) {
      return state.item5
    }
  },
  mutations: {
    setItem6(state, payload) {
      state.item6 += ' ' + payload
      console.log(state.item6)
    }
  },
  actions: {
    getItem6(store, payload){
      store.commit('setItem6', payload)
    }
  },
  modules: {
    moduleA,
    moduleB
  },
  strict: process.env.NODE_ENV !== 'production'
})
