import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    item5: 5

  },
  getters: {
    item5(state) {
      return state.item5
    }
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    moduleA,
    moduleB
  },
  strict: process.env.NODE_ENV !== 'production'
})
