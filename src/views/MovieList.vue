<template>
  <div class="container">    
    <h1>This is MovieList Page</h1>  
   
  </div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		created(){
           
            
            		
		},
		computed: {
			...mapGetters('moduleA', {
				moduleA_item1: 'item1',
				moduleA_item2: 'item2'
			}),
			...mapGetters('moduleB', {
				moduleB_item3: 'item3',
				moduleB_item4: 'item4',
				moduleB_moduleBGetter: 'moduleBGetter'
			})
		},
		methods: {            
			...mapActions('moduleB', {
				moduleBAction: 'moduleBAction'
			}),
			...mapActions({
				rootAction: 'rootActionY'
            })             
		}
	}
</script>