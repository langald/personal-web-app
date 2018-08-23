export default {
	namespaced: true,
	state: {
        item1: 1,
        item2: 2		
	},
	getters: {
        item1(state) {
            return state.item1
        },
        item2(state) {
            return state.item2
        }			
	},
	mutations: {
		setItem2(state, payload){
			state.item2 += ' ' + payload
			console.log(state.item2)
		}		
	},
	actions: {
		getItem2(store, payload){
			store.commit('setItem2', payload)
		}		
	}
}