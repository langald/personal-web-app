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
        itemX (state, getters, rootState, rootGetters) {
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
        getItem({state, rootState, commit, dispatch, getters, rootGetters }, payload) {
            console.log('\n------- Action arguments ----- ')
            console.log('localState from action: ' + state.item3);
            console.log('rootState from action: ' + rootState.item5);
            console.log('rootStateModules from action: ' + rootState.moduleA.item1);
            console.log('\n')
            console.log('localGetters from action: ' + getters.item4);
            console.log('rootGetters from action: ' + rootGetters.item5);
            console.log('rootGettersModules from action: ' + rootGetters['moduleA/item2']);
            console.log('\n')

            setTimeout(() => {
                commit('setItem4', payload + " from commit local mutation")
                console.log('commit local mutation done')

                commit('setItem6', payload + " from commit root mutation" , { root: true })
                console.log('commit root mutation done')

                commit('moduleA/setItem2', payload + " from commit rootModules mutation" , { root: true })
                console.log('commit rootModules mutation done')

                console.log('\n')


                dispatch('moduleBSomeAction', payload + " from dispatch local action")
                console.log('dispatch local action done')

                dispatch('getItem6', payload + " from dispatch root action" , { root: true })
                console.log('dispatch root action done')

                dispatch('moduleA/getItem2', payload + " from dispatch rootModules action" , { root: true })
                console.log('dispatch rootModules action done')

                console.log('\n')
           
            }, 50)
        },
        moduleBSomeAction(store, payload){
            console.log('moduleBSomeAction: ' + payload)
        }
	}
}