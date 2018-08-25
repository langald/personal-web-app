import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'
import movieList from './modules/movieList'
import movie from './modules/movie'

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
    },
		rootActionY(store, payload){
      setTimeout(() => {
        console.log('\n------- Root Action arguments ----- ')
        console.log(JSON.stringify(store))

        console.log('(rootActionY) localState : ' + store.state.item5)
        console.log('(rootActionY) modulesState : ' + store.rootState.moduleA.item1)

        console.log('(rootActionY) localGetters : ' + store.getters.item5)        
        console.log('(rootActionY) modulesGetters : ' + store.rootGetters['moduleA/item1'])

        console.log('\n')

        store.commit('setItem6', payload + " from commit local mutation")
        console.log('(rootActionY) commit local mutation done')

        store.commit('moduleA/setItem2', payload + " from commit Module mutation")
        console.log('(rootActionY) commit Module mutation done')

        console.log('\n')

        store.dispatch('getItem6', payload + " from dispatch local action")
        console.log('(rootActionY) dispatch local action done')

        store.dispatch('moduleA/getItem2', payload + " from dispatch Modules action" , { root: true })
        console.log('(rootActionY) dispatch Modules action done')
      }, 50)
    }
  },
  modules: {
    moduleA,
    moduleB,
    movieList,
    movie
  },
  strict: process.env.NODE_ENV !== 'production'
})
