export default {
  namespaced: true,
  state: {
    item3: 3,
    item4: 4		
  },
  getters: {
    item3(state) {
      return state.item3
    },
    item4(state) {
      return state.item4
    },
    moduleBGetter(state, getters, rootState, rootGetters) {
      return {
        localStateItem: state.item3, 
        localGettersItem: getters.item4, 
        rootStateItem: rootState.item5, 
        rootStateModulesItem: rootState.moduleA.item1, 
        rootGettersItem: rootGetters.item5,
        rootGettersModulesItem: rootGetters['moduleA/item1']
      }
    }	
  },
  mutations: {
    setItem4(state, payload) {
      state.item4 += ' ' + payload
      console.log('only localState from mutation: ' +  state.item4)
    }		
  },
  actions: {       
    moduleBAction({state, rootState, commit, dispatch, getters, rootGetters }, payload) {
      console.log('\n------- Module Action arguments ----- ')
      console.log('(moduleBAction) localState : ' + state.item3);
      console.log('(moduleBAction) rootState : ' + rootState.item5);
      console.log('(moduleBAction) rootStateModules : ' + rootState.moduleA.item1);
      console.log('\n')
      console.log('(moduleBAction) localGetters : ' + getters.item4);
      console.log('(moduleBAction) rootGetters : ' + rootGetters.item5);
      console.log('(moduleBAction) rootGettersModules : ' + rootGetters['moduleA/item2']);
      console.log(JSON.stringify(rootGetters))
      console.log('\n')

      setTimeout(() => {
        commit('setItem4', payload + " from commit local mutation")
        console.log('(moduleBAction) commit local mutation done')

        commit('setItem6', payload + " from commit root mutation" , { root: true })
        console.log('(moduleBAction) commit root mutation done')

        commit('moduleA/setItem2', payload + " from commit Modules mutation" , { root: true })
        console.log('(moduleBAction) commit Modules mutation done')

        console.log('\n')


        dispatch('moduleBSomeAction', payload + " from dispatch local action")
        console.log('(moduleBAction) dispatch local action done')

        dispatch('getItem6', payload + " from dispatch root action" , { root: true })
        console.log('(moduleBAction) dispatch root action done')

        dispatch('moduleA/getItem2', payload + " from dispatch Modules action" , { root: true })
        console.log('(moduleBAction) dispatch Modules action done')

        console.log('\n')
           
      }, 50)
    },
    moduleBSomeAction(store, payload){
      console.log('moduleBSomeAction: ' + payload)
    }
  }
}