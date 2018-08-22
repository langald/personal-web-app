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
		
	},
	actions: {
		
	}
}