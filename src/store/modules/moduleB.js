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
        setItem(state, payload) {
            state.item4 += ' ' + payload
            console.log('localState from mutation: ' +  state.item4)
        }		
	},
	actions: {
        getItem({state, rootState, commit, dispatch, getters, rootGetters }, payload) {
            console.log('------- \n\n')
            console.log('localState from action: ' + state.item3);
            console.log('rootState from action: ' + rootState.item5);
            console.log('rootStateModules from action: ' + rootState.moduleA.item1);
            console.log('\n')
            console.log('localGetters from action: ' + getters.item4);
            console.log('rootGetters from action: ' + rootGetters.item5);
            console.log('rootGettersModules from action: ' + rootGetters['moduleA/item2']);
            console.log('\n')
            
            commit('setItem', payload)

        }		
	}
}